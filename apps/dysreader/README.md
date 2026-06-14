# DysReader

> Lecture adaptée à la dyslexie — rendre la lecture possible et moins épuisante, sans faire le travail à la place du lecteur.
> *Dyslexia-adapted reading — make reading possible and less exhausting, without doing the work for the reader.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/dysreader/ · **Démo locale** : [../../site/dysreader/](../../site/dysreader/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/11-dysreader-dyslexie.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — typographie adaptée, espacement, sur-lignage, lecture syllabe par syllabe |
| Polices | OpenDyslexic (OFL) et autres polices lisibilité-adaptées incluses dans `assets/` |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
