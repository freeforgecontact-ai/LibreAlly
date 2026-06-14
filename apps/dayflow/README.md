# DayFlow

> Emploi du temps visuel et découpage des tâches — voir sa journée étape par étape ; la prévisibilité comme source de calme et d'autonomie.
> *Visual schedule and task breakdown — see your day step by step; predictability as a source of calm and independence.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/dayflow/ · **Démo locale** : [../../site/dayflow/](../../site/dayflow/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/13-dayflow-routines.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — navigation clavier, lecteur d'écran, gestion des préférences de mouvement |
| Notifications programmées | Service Worker (Push API) + Capacitor Notifications sur mobile |
| Stockage local | IndexedDB via `idb` — aucune donnée envoyée à un serveur tiers par défaut |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
