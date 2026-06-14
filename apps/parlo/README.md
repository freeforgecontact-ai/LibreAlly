# Parlo

> Communication alternative et améliorée (CAA / AAC) — un tableau de symboles et de texte qui parle à votre place.
> *Alternative and augmentative communication — a symbol board and text-to-speech that speaks for you.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/01-parlo-aac.md)

---

## Démo

▶️ Démo fonctionnelle : [../../site/parlo/](../../site/parlo/)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — gestion des événements clavier, contacteur, lecteur d'écran |
| Accès synthèse vocale système | Web Speech API (PWA) ; Tauri si accès TTS natif requis |
| Icônes CAA | ARASAAC (licence libre) inclus dans les assets |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
