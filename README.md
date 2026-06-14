# LibreA11y

**Une suite d'applications 100 % gratuites et 100 % open source pour rendre le numérique — et le quotidien — accessible à toute personne en situation de handicap, à tout âge.**

> « Rien sur nous, sans nous. » Chaque application est pensée *avec* et *pour* les personnes concernées.

*(English version: [README.en.md](README.en.md))*

---

## Pourquoi LibreA11y existe

Les technologies d'assistance qui changent une vie sont aujourd'hui :

- **chères** — une appli de communication (CAA) sérieuse coûte 200 à 400 €, un logiciel de pilotage au regard plusieurs milliers ;
- **propriétaires et fermées** — impossible à adapter, à réparer, à traduire ;
- **gourmandes en données** — beaucoup envoient tout dans le cloud, créent des comptes, pistent des enfants ;
- **mal traduites** — la plupart n'existent que dans 2 ou 3 langues.

Résultat : des centaines de millions de personnes restent exclues, surtout les enfants, les personnes âgées, et toutes celles qui vivent là où l'argent et la connexion manquent.

**LibreA11y répond par l'inverse : gratuit pour toujours, ouvert, hors-ligne, privé, multilingue, et co-conçu avec les personnes concernées.**

---

## Nos principes (non négociables)

1. **100 % gratuit, 100 % open source, pour toujours.** Pas de SaaS, pas de version « pro » payante, pas de pub, pas de revente de données.
2. **Hors-ligne d'abord (*offline-first*).** Tout fonctionne sans internet, sur des appareils modestes (vieux Android, Raspberry Pi).
3. **Vie privée par conception.** Aucune donnée ne quitte l'appareil par défaut. Aucun compte obligatoire. Rien à pister.
4. **Multilingue dès le premier jour.** L'architecture rend la traduction communautaire facile.
5. **Conçu avec les personnes concernées.** Co-design, pas charité descendante.
6. **Interopérable.** Formats ouverts (ex. Open Board Format pour la CAA), import/export, pas de prison de données.
7. **Sûr.** Conception « anti-crise » pour l'épilepsie photosensible, sécurité des enfants, aucune manipulation.

---

## La suite en un coup d'œil

Une **brique commune réutilisable** (`a11y-core`) alimente toutes les applications : synthèse vocale, reconnaissance vocale, balayage par contacteur, thèmes accessibles, clic par fixation, prédiction de mots. On la code une fois, tout le monde en profite — y compris les projets tiers.

| Domaine | Application | Pour qui | En une phrase |
|---|---|---|---|
| **Communication** | **Parlo** ⭐ | Non-verbaux : autisme, paralysie cérébrale, SLA, aphasie/AVC, laryngectomie | Tableau de symboles + texte qui parle à votre place |
| **Vision** | **Lumen** | Basse vision, malvoyance | Loupe d'écran, contrastes et thèmes adaptés |
| **Vision** | **VoxRead** | Aveugles, basse vision, illettrisme | Lit à voix haute documents et texte capté à la caméra (OCR) |
| **Vision** | **ColorAide** | Daltonisme | Corrige les couleurs et identifie une teinte à la demande |
| **Audition** | **CaptiLive** | Sourds, malentendants | Sous-titres en direct, calculés sur l'appareil |
| **Audition** | **SoundWatch** | Sourds, malentendants | Reconnaît les sons importants → alerte visuelle/vibrante |
| **Audition** | **SignLearn** | Sourds, entourage, écoles | Apprentissage et dictionnaire de langue des signes |
| **Motricité** | **SwitchBoard** | Motricité très réduite, tétraplégie | Pilotage par contacteur et balayage (*scanning*) |
| **Motricité** | **GazeType** | SLA, paralysie, *locked-in* | Clavier piloté au regard ou à la tête, par webcam |
| **Motricité** | **SteadyTouch** | Parkinson, tremblement essentiel | Lisse les tremblements, agrandit les cibles |
| **Cognitif / Dys** | **DysReader** | Dyslexie | Lecture adaptée : police, espacement, syllabes, lecture vocale |
| **Cognitif / Dys** | **MathEase** | Dyscalculie | Maths visuelles, étape par étape, objets manipulables |
| **Cognitif / Neuro** | **DayFlow** | Autisme, TDAH, déf. intellectuelle, démence | Emploi du temps visuel et découpage des tâches |
| **Cognitif / Neuro** | **CalmSpace** | Autisme, TDAH, anxiété | Régulation sensorielle et émotionnelle |
| **Mémoire** | **RemindWell** | Démence, Alzheimer, lésion cérébrale, âgés | Rappels, médicaments, aide-mémoire visages et noms |

⭐ = application phare (premier MVP).

→ Détail de chaque application : [`docs/apps/`](docs/apps/). Vue d'ensemble et priorités : [`docs/05-suite-vue-ensemble.md`](docs/05-suite-vue-ensemble.md).

---

## Comment c'est construit

- **Cœur partagé** : [`a11y-core`](docs/04-a11y-core-bibliotheque.md) — la bibliothèque d'accessibilité réutilisable.
- **Portée maximale** : web/PWA installable (fonctionne partout, hors-ligne via *service workers*) + **Tauri** (léger, Rust) pour le bureau quand il faut des accès système profonds.
- **IA sur l'appareil** : [Piper](https://github.com/rhasspy/piper) (synthèse vocale), [Vosk](https://alphacephei.com/vosk/) / [whisper.cpp](https://github.com/ggerganov/whisper.cpp) (reconnaissance vocale), [Tesseract](https://github.com/tesseract-ocr/tesseract) (OCR) — tout en local.
- **Symboles ouverts** : [ARASAAC](https://arasaac.org/), [Mulberry Symbols](https://mulberrysymbols.org/), via [Global Symbols](https://globalsymbols.com/).

Détails : [`docs/03-architecture-technique.md`](docs/03-architecture-technique.md).

---

## Contribuer

On a besoin de **développeurs**, de **designers**, d'**orthophonistes / ergothérapeutes**, de **traducteurs**, et surtout de **testeurs en situation de handicap**. Toutes les contributions comptent.

→ [`CONTRIBUTING.md`](CONTRIBUTING.md) · Charte de respect : [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)

---

## Financement (sans jamais devenir payant)

Subventions (NLnet/NGI Zero, Sovereign Tech Fund…), dons (OpenCollective, Liberapay, GitHub Sponsors), partenariats avec écoles, hôpitaux et associations. **Jamais de paywall, jamais de pub, jamais de revente de données.**

→ [`docs/07-financement-perennite.md`](docs/07-financement-perennite.md).

---

## Licence

- **Applications** : GPL-3.0 (copyleft fort — l'outil reste libre pour toujours).
- **Bibliothèques (`a11y-core`, formats, symboles)** : MIT / Apache-2.0 (adoption maximale, y compris par des tiers).

Détails et justification : [`LICENSE.md`](LICENSE.md).

---

## Documentation

| Fichier | Contenu |
|---|---|
| [`docs/00-vision-mission.md`](docs/00-vision-mission.md) | Vision, mission, valeurs |
| [`docs/01-principes-accessibilite.md`](docs/01-principes-accessibilite.md) | Principes de design, standards (WCAG, EN 301 549, RGAA, EAA) |
| [`docs/02-personas-besoins.md`](docs/02-personas-besoins.md) | Personas et parcours utilisateurs |
| [`docs/03-architecture-technique.md`](docs/03-architecture-technique.md) | Architecture, stack, hors-ligne, vie privée |
| [`docs/04-a11y-core-bibliotheque.md`](docs/04-a11y-core-bibliotheque.md) | La bibliothèque commune réutilisable |
| [`docs/05-suite-vue-ensemble.md`](docs/05-suite-vue-ensemble.md) | La suite, mapping handicaps → apps, priorités |
| [`docs/06-gouvernance.md`](docs/06-gouvernance.md) | Gouvernance, décisions, conseil d'usagers |
| [`docs/07-financement-perennite.md`](docs/07-financement-perennite.md) | Modèle économique sans SaaS |
| [`docs/08-impact-ethique.md`](docs/08-impact-ethique.md) | Mesure d'impact, éthique, sécurité |
| [`docs/09-feuille-de-route.md`](docs/09-feuille-de-route.md) | Feuille de route par phases |
| [`docs/apps/`](docs/apps/) | Spec détaillée de chaque application |

---

*LibreA11y — parce que l'accessibilité n'est pas une fonctionnalité premium.*
