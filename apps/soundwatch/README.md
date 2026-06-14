# SoundWatch

> Reconnaissance de sons et alertes visuelles/vibrantes — votre environnement vous prévient autrement : par la lumière et la vibration.
> *Sound recognition and visual/vibration alerts — your environment notifies you differently: through light and vibration.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/soundwatch/ · **Démo locale** : [../../site/soundwatch/](../../site/soundwatch/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/06-soundwatch-alertes.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — notifications visuelles, gestion des vibrations |
| Accès microphone continu | Capacitor (Android/iOS) pour Service de premier plan ; Tauri (bureau) |
| Classification audio | TensorFlow.js / YAMNet — inférence locale, aucune donnée envoyée |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
