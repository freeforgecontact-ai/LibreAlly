# Feuille de route — vue d'ensemble

Résumé exécutif. La feuille de route détaillée (jalons, dépendances, critères de sortie par app) est dans [`docs/09-feuille-de-route.md`](docs/09-feuille-de-route.md).

## Principe : la brique d'abord, puis les apps

`a11y-core` est construit en premier parce que **tout** en dépend (synthèse vocale, balayage, thèmes…). Chaque app suivante réutilise le cœur, donc les sorties s'accélèrent avec le temps.

## Les phases

### Phase 0 — Fondations (≈ mois 0–3)
- Gouvernance, licences, charte, infrastructure (dépôts, CI, plateforme de traduction).
- Conseil consultatif d'usagers (« Rien sur nous, sans nous »).
- Prototype de `a11y-core` : synthèse vocale (Piper), thèmes accessibles, moteur de balayage.

### Phase 1 — Première app phare (≈ mois 3–7)
- **Parlo** (CAA) en MVP : la plus fort impact, et elle exerce tout le cœur.
- Boucle de co-design avec orthophonistes et utilisateurs non-verbaux.
- Mise en place de la traduction communautaire.

### Phase 2 — Élargir aux gros besoins (≈ mois 7–14)
- **DysReader** (dyslexie), **DayFlow** (routines), **CaptiLive** (sous-titres). Grands publics, complexité technique raisonnable.
- `a11y-core` gagne la reconnaissance vocale (Vosk) et l'OCR (Tesseract).

### Phase 3 — Handicaps lourds / techno avancée (≈ mois 14–24)
- **SwitchBoard**, **GazeType** (pilotage au regard), **VoxRead**, **SoundWatch**.
- Demande de l'IA sur appareil et un travail matériel/capteurs plus poussé.

### Phase 4 — Compléter la couverture (≈ mois 24+)
- **Lumen**, **ColorAide**, **MathEase**, **CalmSpace**, **RemindWell**, **SteadyTouch**, **SignLearn**.
- Maturité : paquets hors-ligne pour écoles, images Raspberry Pi, distribution dans les pays à faible connectivité.

## Jalons transverses
- **Audit d'accessibilité** par des utilisateurs concernés à chaque sortie majeure.
- **Traductions** : viser 10 langues sur les apps phares avant d'en multiplier d'autres.
- **Pérennité** : sécuriser une première subvention (NLnet/NGI) dès la Phase 1.

> Les dates sont indicatives et dépendent des contributeurs et du financement. La priorité n'est jamais sacrifiée à la vitesse : **mieux vaut une app excellente et vraiment accessible que cinq médiocres.**
