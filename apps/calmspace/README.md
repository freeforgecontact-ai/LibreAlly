# CalmSpace

> Régulation sensorielle et émotionnelle — un espace pour se calmer, comprendre ce qu'on ressent et éviter la surcharge.
> *Sensory and emotional regulation — a space to calm down, understand what you feel, and avoid overwhelm.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/calmspace/ · **Démo locale** : [../../site/calmspace/](../../site/calmspace/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/14-calmspace-sensoriel.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — respect de `prefers-reduced-motion`, préférences sensorielles, navigation clavier |
| Audio apaisants | Web Audio API — sons générés localement ou fichiers audio embarqués |
| Vibrations (mobile) | Vibration API (PWA) ; Capacitor Haptics pour retour haptique avancé |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
