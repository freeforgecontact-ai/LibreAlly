# ColorAide

> Assistance au daltonisme — corrige les couleurs à l'écran et nomme n'importe quelle teinte à la demande.
> *Colour-blindness assistance — corrects on-screen colours and names any hue on demand.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/coloraide/ · **Démo locale** : [../../site/coloraide/](../../site/coloraide/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/04-coloraide-daltonisme.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — filtres de couleur, matrices de correction, préférences utilisateur |
| Accès caméra (pipette monde réel) | Capacitor (Android/iOS) ou Tauri (bureau) |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
