# Charte visuelle (identité PGRG appliquée à LibreA11y)

Toutes les applications de la suite partagent **une seule identité visuelle**, dérivée du site **PGRG IA** (ia.pgrg.ca). Source unique : [`../assets/tokens.css`](../assets/tokens.css). Une app = importe les jetons, point. Cela garantit cohérence **et** accessibilité.

## 1. Palette

| Rôle | Variable | Hex | Usage |
|---|---|---|---|
| **Primaire (marine PGRG)** | `--c-primary` | `#0F4C81` | Barres, boutons principaux, titres, liens. *(Exact : c'est le `theme-color` du site.)* |
| Primaire foncé | `--c-primary-dark` | `#0A3A63` | Survol, profondeur |
| Primaire clair | `--c-primary-light` | `#2E6BA8` | Accents secondaires, info |
| **Accent (or PGRG 💛)** | `--c-accent` | `#F4B81C` | Mises en avant, badges, fonds d'accent. **Ajustable** si tu as la valeur exacte. |
| Or foncé | `--c-accent-dark` | `#C9930A` | Or en *texte* sur fond clair |
| Encre | `--c-ink` | `#16202E` | Texte courant |
| Fond | `--c-bg` | `#F7F9FC` | Arrière-plan |
| Surface | `--c-surface` | `#FFFFFF` | Cartes, panneaux |

Sémantique : succès `#1E7F4F`, alerte `#B25E00`, erreur `#C0392B`.

## 2. Règle de contraste (importante)

L'or est **clair** : il offre un excellent contraste avec du **texte foncé** (marine/encre) mais **échoue** en texte sur blanc.

- ✅ Or en **fond** avec texte marine/encre (badges, surlignages, boutons d'accent).
- ✅ Marine ou blanc en texte sur fond clair/sombre.
- ❌ **Jamais** d'or en texte sur fond blanc (contraste ~1.8:1, illisible).

Contrastes vérifiés : marine `#0F4C81` sur blanc ≈ **8.6:1** (AAA) ; blanc sur marine ≈ **8.6:1** ; marine sur or ≈ **5:1** (AA). Cibles ≥ **44 px**, focus visible partout.

## 3. Thèmes intégrés (dans `tokens.css`)

- **Clair** (défaut) et **sombre** (`prefers-color-scheme` ou `data-theme="dark"`).
- **Fort contraste** (`data-theme="contrast"`) — pour basse vision.
- **Réduction de mouvement** (`prefers-reduced-motion`) — anti-vertige / anti-crise.
- Police **OpenDyslexic** activable (`--font-dys`) pour DysReader.

## 4. Typographie

- **Sans-serif système** (`system-ui`) : rapide, sans téléchargement, lisible partout.
- Base **18 px**, interligne **1.6** (lisibilité généreuse).
- Réglable jusqu'à 200 % sans casse.

## 5. Composants de base fournis

`tokens.css` inclut déjà : reset léger, `:focus-visible` accessible, lien d'évitement (`.skip-link`), boutons (`.btn-primary`, `.btn-accent`, `.btn-ghost`), tailles tactiles minimales. Les apps construisent par-dessus.

## 6. Application par app

Chaque app importe la charte et **doit** :

```html
<link rel="stylesheet" href="/assets/tokens.css">
```

Le **marine** porte l'identité (en-têtes, actions primaires) ; l'**or** ponctue (accent, encouragement, badges « gratuit / libre ») ; le reste reste sobre et accessible. Aucune app ne redéfinit une couleur en dur : elle ajuste via les variables si besoin.

## 7. Esprit de marque

Repris de PGRG IA : **chaleureux, clair, sans jargon, rassurant**. Ton « accessible à tout le monde » — ce qui tombe juste pour un projet d'accessibilité. L'or apporte la touche d'optimisme ; le marine, le sérieux et la confiance.

> Tu veux l'or exact (ou d'autres nuances du site) ? Donne-moi la valeur : **une ligne** dans `tokens.css` et toute la suite se met à jour.
