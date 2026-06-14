# BUILD.md — Packaging natif LibreA11y

## Vue d'ensemble

Ce dépôt produit deux types de builds natifs via GitHub Actions :

| Cible | Outil | Fichier produit |
|---|---|---|
| Android | Capacitor 6 + Gradle | `app-debug.apk` (NON signé) |
| Windows | Tauri v2 + Rust | `.msi` + `.exe` (NSIS) |
| macOS | Tauri v2 + Rust | `.dmg` + `.pkg` |
| Linux | Tauri v2 + Rust | `.deb` + `.rpm` + `.AppImage` |

Tout le contenu de `site/` (les 15 apps + le hub `index.html`) est embarqué hors-ligne dans chaque build.

---

## Déclencher un build

### Méthode 1 — Tag Git (recommandée, produit une release GitHub)

```bash
git add .
git commit -m "chore: release v0.1.0"
git tag v0.1.0
git push origin main --tags
```

GitHub Actions se déclenche automatiquement sur le tag `v*`.  
Deux jobs s'exécutent en parallèle :
- **android** — Ubuntu → APK debug
- **desktop** — matrice Ubuntu / macOS / Windows → bundles bureau

Les artefacts sont attachés à la release GitHub créée automatiquement.

### Méthode 2 — workflow_dispatch (test sans release)

Actions → Build Native (APK + Desktop) → Run workflow → Run workflow.  
Les artefacts sont disponibles 30 jours dans l'onglet Artifacts du run.

---

## Télécharger les artefacts

1. Aller sur l'onglet **Actions** du dépôt GitHub.
2. Cliquer sur le run souhaité.
3. Scroll jusqu'à **Artifacts** en bas de page.
4. Télécharger `librea11y-android-debug`, `librea11y-desktop-ubuntu-latest`, etc.

Si le build a été déclenché par un tag, les fichiers se trouvent aussi dans **Releases**.

---

## Installer l'APK Android (NON signé — sideload)

L'APK produit est un build **debug non signé**. Il ne peut pas être distribué via le Play Store.  
Pour l'installer manuellement :

1. **Activer les sources inconnues** :
   - Android 8+ : Paramètres → Applications → (l'app de fichiers ou votre navigateur) → Installer des applications inconnues → Autoriser.
   - Versions plus anciennes : Paramètres → Sécurité → Sources inconnues.
2. Transférer `app-debug.apk` sur l'appareil (USB, email, lien direct).
3. Ouvrir le fichier depuis le gestionnaire de fichiers et taper **Installer**.
4. Ignorer l'avertissement « application non reconnue » (normal pour un APK non signé).

---

## Points fragiles à surveiller au premier run

### Job android

| Point | Risque | Action |
|---|---|---|
| `npx cap add android` | Peut échouer si le dossier `android/` est déjà en cache | Le `continue-on-error: true` absorbe l'erreur — surveiller quand même le log |
| Version Capacitor | `6.2.0` — vérifier la compatibilité avec la version du SDK Android sur le runner | Augmenter `minSdkVersion` si Gradle se plaint (valeur par défaut = 22) |
| Patch `AndroidManifest.xml` | La structure XML générée par Capacitor peut varier — si le `sed` échoue, les permissions CAMERA/RECORD_AUDIO seront absentes | Vérifier le log « AndroidManifest.xml (extrait) » |
| `./gradlew assembleDebug` | Premier run lent (télécharge Gradle + deps Android, ~5-10 min) | Normal, le cache Gradle n'est pas configuré dans ce workflow |

### Job desktop

| Point | Risque | Action |
|---|---|---|
| `libwebkit2gtk-4.1-dev` | Disponible sur Ubuntu 22.04+ ; peut ne pas exister sur Ubuntu 20.04 | Forcer `ubuntu-22.04` ou `ubuntu-latest` (actuellement 22.04) |
| `npx @tauri-apps/cli icon src-tauri/icons/icon.svg` | Nécessite `sharp` (natif Node) — peut échouer sur certains runners | Le `continue-on-error: true` permet de continuer ; fournir un vrai `icon.png` 1024×1024 résout le problème définitivement |
| Icônes manquantes | Si `tauri icon` échoue ET qu'aucune icône PNG n'est présente, `tauri build` échoue | Voir section **Icônes** ci-dessous |
| Signature macOS | Sans certificat Apple, le `.dmg` sera produit mais l'utilisateur verra « développeur non vérifié » | Normal — faire Ctrl+clic → Ouvrir la première fois |
| Signature Windows | Pas de certificat EV → SmartScreen peut bloquer le `.msi` | Cliquer « Informations complémentaires » → Exécuter quand même |
| `tauri-plugin-shell` | Déclaré dans `Cargo.toml` ; si non utilisé activement, peut générer un warning | Sans impact sur le build |

---

## Icônes

Le fichier source est `src-tauri/icons/icon.svg` (fond marine `#0F4C81`, lettre A or `#F4B81C`).

Le workflow tente de générer les PNG via `npx @tauri-apps/cli icon`.  
Si cela échoue (manque de `sharp`), fournir manuellement :

```
src-tauri/icons/
  icon.png          # 1024×1024 (source principale)
  icon.ico          # Windows multi-résolution
  icon.icns         # macOS
  32x32.png
  128x128.png
  128x128@2x.png
```

Outils recommandés en local : `tauri icon src-tauri/icons/icon.svg` après `npm install`.

---

## Structure des fichiers de packaging

```
LibreA11y/
├── package.json              # Capacitor CLI + dépendances
├── capacitor.config.json     # Config APK (webDir: "site")
├── src-tauri/
│   ├── tauri.conf.json       # Config bureau (frontendDist: "../site")
│   ├── Cargo.toml            # Dépendances Rust / Tauri v2
│   ├── build.rs              # Build script Tauri
│   ├── src/
│   │   ├── main.rs           # Point d'entrée (Windows subsystem)
│   │   └── lib.rs            # Logique principale Tauri
│   └── icons/
│       └── icon.svg          # Source SVG de l'icône
├── .github/workflows/
│   └── build-native.yml      # CI/CD GitHub Actions
├── site/                     # Hub + 15 apps (embarqués intégralement)
│   ├── index.html
│   ├── assets/
│   ├── parlo/
│   └── ...
└── BUILD.md                  # Ce fichier
```

---

## Itération rapide

Pour tester localement avant de pusher :

```bash
# Android (requiert Android Studio + SDK)
npm install
npx cap add android
npx cap copy android
cd android && ./gradlew assembleDebug

# Bureau (requiert Rust stable + dépendances système)
npm install
npx @tauri-apps/cli icon src-tauri/icons/icon.svg
npx @tauri-apps/cli build
```

Les builds bureau en mode debug (non packagé) :

```bash
npx @tauri-apps/cli dev   # ouvre une fenêtre avec hot-reload
```
