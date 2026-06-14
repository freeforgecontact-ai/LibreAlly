# SignLearn

> Apprentissage et dictionnaire de langue des signes — apprendre à signer, et donner à l'entourage les moyens de communiquer.
> *Sign language learning and dictionary — learn to sign and give those around you the means to communicate.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/signlearn/ · **Démo locale** : [../../site/signlearn/](../../site/signlearn/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/07-signlearn-langue-signes.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — navigation clavier, lecteur d'écran, préférences vidéo |
| Reconnaissance de signes (webcam) | MediaPipe Hands (WASM) — inférence locale |
| Contenu vidéo | Vidéos libres de droits hébergées dans `assets/` ou CDN auto-hébergé |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
