# Politique de sécurité — Security Policy

## Contexte / Context

LibreA11y est utilisé par des personnes en situation de handicap, dont certaines sont particulièrement vulnérables (enfants, personnes âgées, personnes dépendantes de l'outil pour communiquer). Une vulnérabilité non corrigée peut avoir des conséquences bien au-delà du risque numérique habituel.

*LibreA11y is used by people with disabilities, some of whom are especially vulnerable (children, elderly people, individuals who depend on the tool to communicate). An unpatched vulnerability can have consequences far beyond the usual digital risk.*

---

## Divulgation responsable / Responsible Disclosure

Nous pratiquons la **divulgation coordonnée** : vous nous signalez le problème en privé, nous le corrigeons avant toute publication publique, et nous vous créditons si vous le souhaitez.

*We practice **coordinated disclosure**: you report the issue to us privately, we fix it before any public announcement, and we credit you if you wish.*

---

## Comment signaler une vulnérabilité / How to Report

**Ne pas ouvrir d'issue publique GitHub pour un problème de sécurité.**
*Do not open a public GitHub issue for a security problem.*

Utilisez de préférence le **signalement privé de vulnérabilité de GitHub** : onglet **Security → Report a vulnerability** du dépôt (à activer dans *Settings → Security → Private vulnerability reporting*). C'est privé, traçable, et aucune adresse personnelle n'est exposée.

> Une adresse dédiée **security@librea11y.org** *(à configurer)* sera ajoutée une fois le domaine du projet en place.

*Prefer GitHub's **private vulnerability reporting** (Security → Report a vulnerability). A dedicated **security@librea11y.org** address will be added once the project domain is set up.*

Incluez autant d'informations que possible :

- Description du problème et impact potentiel
- Étapes de reproduction
- Version(s) concernée(s), application(s) concernée(s)
- Capture d'écran ou code de preuve de concept (PoC), si disponible
- Vos coordonnées pour le suivi (facultatif)

---

## Délais de réponse visés / Target Response Times

| Étape | Délai visé |
|-------|-----------|
| Accusé de réception | **72 heures** |
| Évaluation initiale (sévérité, périmètre) | 7 jours |
| Correction ou plan de mitigation | 30 jours (critique : 7 jours) |
| Publication du correctif + avis de sécurité | Dès la correction validée |

Ces délais sont des objectifs, pas des garanties contractuelles — le projet est maintenu par des bénévoles.

*These timelines are targets, not contractual guarantees — the project is maintained by volunteers.*

---

## Ce qui est dans le périmètre / In Scope

- Toutes les applications de la suite LibreA11y (`apps/*/`)
- La bibliothèque `a11y-core`
- Le site vitrine (`site/`)
- Les workflows CI/CD (`.github/workflows/`)

## Ce qui est hors périmètre / Out of Scope

- Les dépendances tierces (signalez-les directement à leurs mainteneurs)
- Les problèmes d'accessibilité (utilisez le modèle d'issue [accessibilite](.github/ISSUE_TEMPLATE/accessibilite.md))
- Les attaques nécessitant un accès physique à l'appareil de l'utilisateur

---

## Remerciements / Acknowledgements

Les chercheurs et chercheuses qui signalent des problèmes de manière responsable seront mentionnés dans le fichier `SECURITY-HALL-OF-FAME.md` (à venir), sauf s'ils préfèrent rester anonymes.

*Researchers who report issues responsibly will be listed in `SECURITY-HALL-OF-FAME.md` (upcoming), unless they prefer to remain anonymous.*

---

## Versions supportées / Supported Versions

Le projet est actuellement en phase de scaffolding. Dès la première version publiée, ce tableau sera mis à jour.

| Version | Supportée |
|---------|-----------|
| `main` (développement) | ✅ Oui |
| Versions antérieures | ❌ Non (aucune release publiée à ce jour) |
