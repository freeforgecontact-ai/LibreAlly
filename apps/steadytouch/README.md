# SteadyTouch

> Saisie tolérante aux tremblements — votre appareil cesse de se tromper de bouton, pour les mains qui tremblent.
> *Tremor-tolerant input — your device stops hitting the wrong target, for hands that shake.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/steadytouch/ · **Démo locale** : [../../site/steadytouch/](../../site/steadytouch/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/10-steadytouch-tremblements.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — filtrage des événements de pointeur, cibles élargies, délais de confirmation |
| Accès événements système | Capacitor (Android/iOS) pour filtrage au niveau de l'OS ; Tauri (bureau) |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
