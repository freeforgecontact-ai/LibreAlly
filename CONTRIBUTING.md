# Contribuer à LibreA11y

Merci de vouloir aider. Ce projet n'existe que grâce aux contributions — et **toutes** les formes de contribution comptent, pas seulement le code.

## On a besoin de vous, quel que soit votre profil

| Vous êtes… | Vous pouvez… |
|---|---|
| **Développeur·se** | Coder une app ou `a11y-core`, corriger des bugs, optimiser pour appareils modestes |
| **Designer / UX** | Concevoir des interfaces réellement accessibles, créer des pictogrammes |
| **Orthophoniste, ergothérapeute, enseignant·e spécialisé·e** | Valider la pertinence clinique et pédagogique, proposer des cas d'usage |
| **Personne concernée (ou proche)** | **Tester, dire ce qui marche ou pas** — la contribution la plus précieuse |
| **Traducteur·rice** | Localiser les apps et la doc dans votre langue |
| **Rédacteur·rice** | Améliorer la doc, écrire des guides, de la pédagogie |
| **Tout le monde** | Signaler un bug, proposer une idée, partager le projet |

## Principe directeur : « Rien sur nous, sans nous »

Aucune décision de conception concernant un handicap n'est prise sans la voix de personnes qui le vivent. Si vous concevez pour un public que vous ne connaissez pas de l'intérieur, **trouvez et écoutez** des personnes concernées avant de coder.

## Démarrer (développement)

1. Lisez [`docs/03-architecture-technique.md`](docs/03-architecture-technique.md) et la spec de l'app visée dans [`docs/apps/`](docs/apps/).
2. Cherchez une *issue* étiquetée `good first issue` ou `aide bienvenue`.
3. *Fork*, branche, code. Respectez les critères d'accessibilité de la spec (ce ne sont pas des options).
4. **Signez vos commits** : `git commit -s` (Developer Certificate of Origin — voir [`LICENSE.md`](LICENSE.md)).
5. Ouvrez une *pull request* décrivant *quoi*, *pourquoi*, et *comment vous l'avez testée avec l'accessibilité*.

## Règles d'accessibilité (obligatoires pour tout code)

Une PR qui casse l'accessibilité ne sera pas fusionnée. Minimum :

- navigable **entièrement au clavier** et **au balayage par contacteur** ;
- compatible **lecteur d'écran** (rôles/labels ARIA corrects) ;
- **contraste** ≥ WCAG 2.2 AA, cibles tactiles ≥ 44×44 px ;
- respecte `prefers-reduced-motion` ; **aucun clignotement** > 3 Hz (épilepsie) ;
- fonctionne **hors-ligne** et sans compte.

Détail : [`docs/01-principes-accessibilite.md`](docs/01-principes-accessibilite.md).

## Traduire

La traduction passe par des fichiers standard (ex. `gettext`/`.po` ou Fluent) et une plateforme communautaire (ex. Weblate auto-hébergé). Aucune compétence technique requise. Voir le guide de localisation (à venir).

---

# Contributing (English)

All contributions count — not just code. We need **developers**, **designers**, **clinicians/educators**, **disabled testers** (the most valuable), **translators**, and **writers**. Guiding rule: **"Nothing about us, without us"** — never make a disability-related design decision without input from people who live it. To contribute code: read the architecture doc and the target app spec, pick a `good first issue`, sign your commits (`git commit -s`, DCO), and open a PR describing what, why, and **how you tested it for accessibility**. Any PR that breaks keyboard/switch navigation, screen-reader support, WCAG 2.2 AA contrast, reduced-motion, or offline use will not be merged.
