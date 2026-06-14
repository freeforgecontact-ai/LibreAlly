# MathEase

> Soutien à la dyscalculie — rendre les nombres concrets : voir, manipuler, comprendre, au lieu de subir.
> *Dyscalculia support — make numbers concrete: see, manipulate, understand, instead of struggling.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/mathease/ · **Démo locale** : [../../site/mathease/](../../site/mathease/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/12-mathease-dyscalculie.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — navigation clavier, lecteur d'écran, préférences d'affichage |
| Rendu mathématique accessible | MathJax ou KaTeX avec aria-label généré automatiquement |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
