# VoxRead

> Lecture vocale de documents et du monde — OCR vers voix : pointez, capturez, écoutez.
> *Document and real-world audio reader — OCR to speech: point, capture, listen.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/03-voxread-lecture.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — lecteur d'écran, navigation clavier, préférences vocales |
| OCR sur appareil | Tesseract.js (WASM) — aucun envoi de données à un serveur tiers |
| Accès caméra système | Capacitor (Android/iOS) pour accès caméra natif si PWA insuffisant |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
