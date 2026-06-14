# GazeType

> Clavier et pilotage au regard ou à la tête via webcam — écrire et naviguer avec les yeux, sans matériel spécialisé.
> *Gaze and head-tracking keyboard via webcam — write and navigate with your eyes, no specialist hardware required.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/09-gazetype-occulaire.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — focus management, clavier virtuel, synthèse vocale |
| Suivi du regard / de la tête | MediaPipe Face Mesh + WebGazer.js (WASM) — inférence locale |
| Contrôle système (souris virtuelle) | Tauri (bureau) pour injection d'événements pointeur |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
