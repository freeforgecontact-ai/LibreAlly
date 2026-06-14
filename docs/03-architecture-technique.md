# Architecture technique

Principes d'ingénierie communs à toute la suite. Objectif : **portée maximale, hors-ligne, privé, frugal, maintenable par une communauté.**

## 1. Contraintes directrices

- **Hors-ligne d'abord.** Aucune fonction de base ne dépend d'internet ou d'un serveur.
- **Frugal.** Doit tourner sur un Android d'entrée de gamme de 2018 et un Raspberry Pi.
- **Privé.** Par défaut, **aucune** donnée ne quitte l'appareil. Aucun compte requis.
- **Multiplateforme** sans dupliquer le travail.
- **Accessible nativement** — l'accessibilité passe avant la nouveauté technique.

## 2. Choix de plateforme

| Cible | Techno | Pourquoi |
|---|---|---|
| **Cœur multiplateforme** | **Web / PWA** (installable, *service workers*) | Portée maximale : un seul code tourne sur Android, iOS, Windows, macOS, Linux, ChromeOS, sans magasin d'applications. Hors-ligne via cache. |
| **Bureau avec accès système profond** | **Tauri** (Rust + WebView) | Léger (binaire de quelques Mo, contre ~150 Mo pour Electron), accès aux API d'accessibilité de l'OS (lecteur d'écran, injection d'événements pour le contacteur/regard). |
| **Mobile avec accès natif** | PWA d'abord ; **Capacitor** si besoin d'API natives (caméra, haptique, services d'accessibilité Android) | Réutilise le même code web. |
| **Composants bas niveau** (regard, balayage matériel) | **Rust** ou **C++** via modules natifs | Performance, accès aux périphériques. |

> Règle : **PWA par défaut**, on descend vers Tauri/Capacitor/Rust **uniquement** quand une fonction l'exige (injection d'événements système, capteurs). Cela maximise le code partagé.

## 3. Le cœur partagé : `a11y-core`

Une bibliothèque unique (TypeScript + bindings natifs) que **toutes** les apps consomment, et que des tiers peuvent intégrer (licence MIT/Apache). Voir la spec complète : [`04-a11y-core-bibliotheque.md`](04-a11y-core-bibliotheque.md). Elle fournit notamment :

- **Synthèse vocale (TTS)** : [Piper](https://github.com/rhasspy/piper) (neuronal, hors-ligne, multilingue) ; repli [eSpeak-NG](https://github.com/espeak-ng/espeak-ng) (minuscule, ~100 langues).
- **Reconnaissance vocale (STT)** : [Vosk](https://alphacephei.com/vosk/) (léger, hors-ligne) et [whisper.cpp](https://github.com/ggerganov/whisper.cpp) (qualité supérieure si l'appareil le permet).
- **OCR** : [Tesseract](https://github.com/tesseract-ocr/tesseract).
- **Moteur de balayage** (contacteur), **clic par fixation** (dwell), **prédiction de mots**, **thèmes accessibles**, **jeux de symboles**.

## 4. IA sur l'appareil (jamais dans le cloud)

Tous les modèles tournent **localement**. Cela protège la vie privée (la voix d'un enfant, les médicaments d'un patient ne partent nulle part) et garantit le fonctionnement hors-ligne.

- Modèles **quantifiés** (int8) pour tenir sur appareils modestes.
- **Téléchargement de modèle à la demande** par langue, pour ne pas alourdir l'installation de base.
- Dégradation gracieuse : si l'appareil est trop faible pour Whisper, on bascule sur Vosk ; si Piper est trop lourd, on bascule sur eSpeak-NG.

## 5. Vie privée par conception

- **Zéro télémétrie** par défaut. Si une métrique anonyme est un jour proposée, elle est **opt-in**, transparente, et documentée.
- **Pas de compte** pour les fonctions de base.
- **Stockage local** chiffré pour les données sensibles ; synchronisation optionnelle uniquement via des moyens contrôlés par l'utilisateur (fichier exporté, dossier auto-hébergé), jamais un serveur LibreA11y obligatoire.
- **Conforme RGPD/CDPH par construction** : on ne peut pas fuiter ce qu'on ne collecte pas.

## 6. Interopérabilité (pas de prison de données)

- **CAA** : import/export au format ouvert **Open Board Format (OBF/OBZ)** → les tableaux de Parlo sont réutilisables ailleurs et inversement.
- **Symboles** : compatibilité avec [Global Symbols](https://globalsymbols.com/) (ARASAAC, Mulberry, Sclera…).
- **Données utilisateur** : toujours exportables dans un format ouvert et documenté.
- **Pas de format propriétaire** caché.

## 7. Internationalisation (i18n) dès le départ

- Aucun texte « en dur » : tout passe par des catalogues (`gettext`/`.po` ou [Fluent](https://projectfluent.org/) de Mozilla, qui gère mieux le genre et les pluriels).
- Plateforme de traduction communautaire (**Weblate** auto-hébergé) — contribuer ne demande aucune compétence technique.
- Prise en charge **RTL** (arabe, hébreu) et des systèmes d'écriture complexes prévue d'emblée.

## 8. Organisation du code

- **Monorepo** (ex. géré avec pnpm + Turborepo, ou Nx) : `a11y-core` + chaque app, pour partager facilement le cœur et tester l'ensemble.
- **CI** : tests unitaires + audits d'accessibilité automatiques (axe-core, pa11y, Lighthouse) **bloquants**.
- **Versionnage sémantique**, journaux de modifications publics.
- **Documentation** versionnée avec le code.

## 9. Distribution

- **Web** : hébergement statique (la PWA s'installe depuis le navigateur).
- **Magasins** : F-Droid (priorité, valeurs libres), Play Store, App Store, Microsoft Store.
- **Hors-ligne / faible connectivité** : paquets installables sans réseau, **images Raspberry Pi** pré-configurées pour les écoles, intégration possible à des serveurs hors-ligne type Kolibri/RACHEL.

## 10. Dette technique & maintenabilité

- Stack volontairement **mainstream** (web, TypeScript, Rust) pour maximiser le vivier de contributeurs.
- **Accessibilité testée en CI** pour éviter les régressions.
- Dépendances minimales et auditées (chaîne d'approvisionnement logicielle = enjeu de sécurité pour un public fragile).
