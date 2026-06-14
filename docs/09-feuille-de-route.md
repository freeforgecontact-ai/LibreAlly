# Feuille de route détaillée

Version détaillée du résumé [`../ROADMAP.md`](../ROADMAP.md). Les durées sont **indicatives** (dépendantes des contributeurs et du financement). La logique de séquencement, elle, est solide : **on construit le cœur, puis les apps à fort impact / faible complexité, puis les apps techniquement lourdes.**

## Logique de priorisation

Chaque app est notée sur deux axes : **impact** (nombre de personnes × gain de vie) et **effort** (complexité technique, dépendances, matériel). On commence par fort impact / effort maîtrisé, et l'app phare **Parlo** est choisie aussi parce qu'elle **exerce tout le cœur** (TTS, symboles, balayage, prédiction) — ce qui accélère tout le reste.

| App | Impact | Effort | Phase |
|---|---|---|---|
| a11y-core | Fondation | Élevé | 0–1 |
| Parlo (CAA) | Très fort | Moyen-élevé | 1 |
| DysReader | Fort | Faible-moyen | 2 |
| DayFlow | Fort | Faible-moyen | 2 |
| CaptiLive | Fort | Moyen | 2 |
| SwitchBoard | Très fort (handicaps lourds) | Élevé | 3 |
| GazeType | Très fort (handicaps lourds) | Très élevé | 3 |
| VoxRead | Fort | Moyen-élevé | 3 |
| SoundWatch | Moyen-fort | Moyen-élevé | 3 |
| Lumen | Fort | Faible-moyen | 4 |
| ColorAide | Moyen | Faible | 4 |
| MathEase | Fort | Moyen | 4 |
| CalmSpace | Moyen-fort | Faible-moyen | 4 |
| RemindWell | Fort | Moyen | 4 |
| SteadyTouch | Moyen | Moyen-élevé | 4 |
| SignLearn | Moyen-fort | Élevé (données) | 4 |

---

## Phase 0 — Fondations (≈ mois 0–3)

**But.** Poser les bases techniques, juridiques et humaines.

- Mettre en place dépôts, CI (avec audits d'accessibilité bloquants), plateforme de traduction (Weblate).
- Adopter licences, charte, gouvernance ; constituer le **conseil consultatif d'usagers**.
- Prototyper `a11y-core` : intégration **Piper** (TTS), thèmes accessibles, **moteur de balayage** minimal.
- **Critère de sortie** : une démo où l'on pilote une grille de boutons au contacteur, avec retour vocal, hors-ligne.

## Phase 1 — App phare (≈ mois 3–7)

**But.** Livrer **Parlo** (CAA) en MVP et roder la boucle de co-design.

- Tableaux de symboles + texte → voix ; import/export **OBF/OBZ** ; jeu de symboles **Mulberry** par défaut.
- Accès tactile + balayage + clavier dès le MVP.
- Co-design avec orthophonistes et utilisateurs non-verbaux ; tests réels.
- Lancer la traduction communautaire (viser 3–5 langues).
- **Pérennité** : déposer une demande **NLnet/NGI Zero**.
- **Critère de sortie** : un enfant ou adulte non-verbal communique réellement avec Parlo au quotidien, validé par un·e orthophoniste.

## Phase 2 — Grands publics, complexité maîtrisée (≈ mois 7–14)

**But.** Toucher beaucoup de monde vite, en réutilisant le cœur.

- **DysReader** (dyslexie) : police OpenDyslexic, espacement, coloration syllabique, règle de lecture, lecture vocale (réutilise le TTS du cœur).
- **DayFlow** (routines visuelles) : emplois du temps et découpage de tâches en images.
- **CaptiLive** (sous-titres live) : ajoute la **STT (Vosk)** à `a11y-core`.
- Atteindre **10 langues** sur Parlo et DysReader.
- **Critère de sortie** : trois apps en production, premiers déploiements scolaires/associatifs.

## Phase 3 — Handicaps lourds & techno avancée (≈ mois 14–24)

**But.** Servir les besoins les plus critiques, là où le libre manque le plus.

- **SwitchBoard** : balayage avancé, profils, accès à d'autres apps de la suite.
- **GazeType** : pilotage au **regard** (webcam) et à la **tête** ; prédiction de mots ; clic par fixation. Brique la plus exigeante (vision par ordinateur en temps réel).
- **VoxRead** : OCR caméra (**Tesseract**) → voix, pour aveugles/basse vision.
- **SoundWatch** : reconnaissance de sons → alertes visuelles/vibrantes.
- **Critère de sortie** : une personne avec SLA écrit et parle uniquement au regard, hors-ligne.

## Phase 4 — Compléter la couverture (≈ mois 24+)

**But.** Couvrir les domaines restants et industrialiser la distribution.

- **Lumen**, **ColorAide** (vision) ; **MathEase** (dyscalculie) ; **CalmSpace** (régulation) ; **RemindWell** (mémoire) ; **SteadyTouch** (tremblements) ; **SignLearn** (langue des signes).
- **Distribution frugale** : paquets hors-ligne, **images Raspberry Pi** pour écoles, intégration Kolibri/RACHEL pour zones à faible connectivité.
- Maturité de la traduction (langues mal desservies en priorité).
- **Critère de sortie** : couverture de tous les grands domaines de handicap ; suite déployée hors des pays riches.

---

## Jalons transverses (toutes phases)

- **Audit d'accessibilité par des usagers concernés** à chaque sortie majeure — bloquant.
- **Sécurité** : politique de divulgation, dépendances auditées, *builds* reproductibles visés.
- **Financement** : viser un portefeuille diversifié dès que possible (voir [`07-financement-perennite.md`](07-financement-perennite.md)).
- **Documentation** toujours à jour avec le code (FR + EN pour les docs clés).

> Garde-fou permanent : **la priorité n'est jamais sacrifiée à la vitesse.** Mieux vaut une app excellente, vraiment accessible et testée, que cinq médiocres.
