# a11y-core

> La bibliothèque commune réutilisable de LibreA11y — toutes les apps s'appuient dessus ; des projets tiers peuvent l'intégrer (MIT/Apache-2.0).
> *LibreA11y's shared reusable library — all apps build on it; third-party projects can integrate it (MIT/Apache-2.0).*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir

---

## Spécification

📄 [Spécification détaillée](../../docs/04-a11y-core-bibliotheque.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Périmètre

`a11y-core` est le principal effet de levier du projet : une fonction d'accessibilité codée une fois, disponible dans tout l'écosystème.

Modules prévus (non exhaustif) :

| Module | Rôle |
|--------|------|
| `keyboard` | Navigation clavier uniforme, gestion du focus, piège de focus |
| `scanner` | Moteur de balayage par contacteur (utilisé par SwitchBoard) |
| `speech` | Abstraction Web Speech API / synthèse vocale native |
| `contrast` | Filtres CSS, matrices de correction couleur (utilisés par Lumen, ColorAide) |
| `motion` | Respect de `prefers-reduced-motion` et `prefers-color-scheme` |
| `storage` | Persistance locale chiffrée (IndexedDB via `idb`) |
| `i18n` | Internationalisation légère, FR/EN en priorité |

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Bibliothèque universelle | TypeScript strict, zéro dépendance runtime obligatoire |
| Formats de distribution | ESM + CJS + types `.d.ts` |
| Tests | Vitest + Testing Library + axe-core |
| Publication | npm (`@librea11y/core`) — licence double MIT/Apache-2.0 |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
