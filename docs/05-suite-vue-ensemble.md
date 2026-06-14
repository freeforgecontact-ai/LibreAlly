# La suite — vue d'ensemble

Comment les applications couvrent **tous les grands domaines de handicap**, comment elles se complètent, et comment elles partagent le cœur `a11y-core`.

## 1. Couverture par domaine de handicap

| Domaine (CIF / OMS) | Besoin principal | Application(s) |
|---|---|---|
| **Langage / parole** | S'exprimer sans la voix | **Parlo** |
| **Vision — basse vision** | Agrandir, contraster | **Lumen** |
| **Vision — cécité** | Convertir l'écrit en voix | **VoxRead** |
| **Vision — daltonisme** | Distinguer/identifier les couleurs | **ColorAide** |
| **Audition — surdité/malentendance** | Voir ce qui est dit | **CaptiLive** |
| **Audition — alertes** | Percevoir les sons importants | **SoundWatch** |
| **Audition — langue des signes** | Apprendre/partager la LS | **SignLearn** |
| **Moteur — sévère** | Piloter sans usage des mains | **SwitchBoard**, **GazeType** |
| **Moteur — tremblement** | Saisir malgré le tremblement | **SteadyTouch** |
| **Apprentissage — lecture** | Lire malgré la dyslexie | **DysReader** |
| **Apprentissage — calcul** | Comprendre les nombres | **MathEase** |
| **Cognitif / neuro — organisation** | Structurer le temps et les tâches | **DayFlow** |
| **Cognitif / neuro — régulation** | Gérer émotions et surcharge | **CalmSpace** |
| **Mémoire / vieillissement** | Se souvenir, rester autonome | **RemindWell** |

Domaines transverses couverts par les **principes** (voir [`01-principes-accessibilite.md`](01-principes-accessibilite.md)) plutôt que par une app dédiée : **épilepsie photosensible** (design anti-crise), **déficience intellectuelle** (FALC + DayFlow/CalmSpace), **santé mentale** (CalmSpace soutient, sans prétention clinique).

## 2. Le cœur partagé, app par app

Chaque app réutilise des modules de [`a11y-core`](04-a11y-core-bibliotheque.md). Cela évite la duplication et garantit la cohérence.

| App | TTS | STT | OCR | Balayage | Regard/Tête | Prédiction | Symboles | Thèmes |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| Parlo | ● | | | ● | ○ | ● | ● | ● |
| Lumen | ○ | | | | | | | ● |
| VoxRead | ● | | ● | | | | | ● |
| ColorAide | | | | | | | | ● |
| CaptiLive | | ● | | | | | | ● |
| SoundWatch | | ○ | | | | | ● | ● |
| SignLearn | ○ | | | | | | ● | ● |
| SwitchBoard | ● | | | ● | ○ | ● | ● | ● |
| GazeType | ● | | | ○ | ● | ● | | ● |
| SteadyTouch | | | | | | | | ● |
| DysReader | ● | | ○ | | | | | ● |
| MathEase | ● | | | | | | ● | ● |
| DayFlow | ● | | | ○ | | | ● | ● |
| CalmSpace | ● | | | | | | ● | ● |
| RemindWell | ● | ○ | | | | | ● | ● |

● = central · ○ = optionnel/secondaire

## 3. Synergies (les apps se renforcent)

- **Parlo + DayFlow + CalmSpace** = une trousse cohérente pour un enfant autiste (communiquer, s'organiser, se réguler).
- **GazeType + Parlo + SwitchBoard** = parcours continu pour une SLA évolutive (la personne garde le même univers à mesure que ses capacités changent).
- **Lumen + VoxRead + ColorAide** = chaîne complète pour la déficience visuelle.
- **CaptiLive + SoundWatch + SignLearn** = autonomie et inclusion pour la surdité (comprendre, être alerté, faire signer son entourage).

## 4. Cohérence d'expérience

- **Mêmes réglages d'accès** partout (un profil de balayage/voix réutilisé d'une app à l'autre).
- **Même langage visuel** et mêmes thèmes accessibles.
- **Mêmes formats ouverts** (symboles, export de données).
- Résultat : apprendre une app, c'est en partie savoir utiliser les autres.

## 5. Ordre de construction

Priorités et phases détaillées : [`09-feuille-de-route.md`](09-feuille-de-route.md). En bref : **a11y-core → Parlo → DysReader/DayFlow/CaptiLive → SwitchBoard/GazeType/VoxRead/SoundWatch → le reste.**

## 6. Et au-delà

Si la suite réussit, des manques resteront à combler (ex. **rééducation post-AVC**, **TDAH adulte au travail**, **surdicécité**, **troubles vestibulaires**). La modularité de `a11y-core` est faite pour que la communauté ajoute ces apps sans tout refaire.
