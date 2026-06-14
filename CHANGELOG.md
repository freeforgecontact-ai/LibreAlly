# Journal des modifications — Changelog

Toutes les modifications notables de ce projet sont documentées ici.
Ce fichier respecte le format [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/).
Le projet adhère au [Versionnage sémantique](https://semver.org/lang/fr/).

*All notable changes to this project are documented here.
This file follows the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format.
The project adheres to [Semantic Versioning](https://semver.org/).*

---

## [Non publié] — Unreleased

### Ajouté — Added

#### Vision et planification / Vision & Planning

- **Vision et mission** (`docs/00-vision-mission.md` + `.en.md`) — raison d'être du projet, valeurs fondatrices, engagement éthique envers les utilisateurs en situation de handicap
- **Principes d'accessibilité** (`docs/01-principes-accessibilite.md`) — WCAG 2.2 AA comme plancher, conception inclusive, « rien sur nous sans nous »
- **Personas et besoins** (`docs/02-personas-besoins.md`) — portraits de 8 utilisateurs représentatifs couvrant les différents publics cibles
- **Architecture technique** (`docs/03-architecture-technique.md`) — monorepo, PWA-first, pile Svelte + Vite + a11y-core, stratégies Tauri/Capacitor
- **Vue d'ensemble de la suite** (`docs/05-suite-vue-ensemble.md`) — carte des 15 applications et de leurs interactions
- **Gouvernance** (`docs/06-gouvernance.md`) — modèle BDFL → comité, prises de décisions, rôles, processus RFC
- **Financement et pérennité** (`docs/07-financement-perennite.md`) — modèle open-core, financement public (NGI, fondations), plan de soutenabilité
- **Impact et éthique** (`docs/08-impact-ethique.md`) — indicateurs d'impact, protection des données, éthique de conception
- **Feuille de route** (`docs/09-feuille-de-route.md`) — jalons Q3 2024 → 2026, priorités par phase

#### Spécifications des applications / Application Specifications

- `docs/apps/01-parlo-aac.md` — Parlo : CAA/AAC, tableau de symboles et synthèse vocale (application phare ⭐)
- `docs/apps/02-lumen-malvoyance.md` — Lumen : loupe d'écran et gestion des contrastes pour la basse vision
- `docs/apps/03-voxread-lecture.md` — VoxRead : lecture vocale de documents et OCR vers voix
- `docs/apps/04-coloraide-daltonisme.md` — ColorAide : correction des couleurs et assistance au daltonisme
- `docs/apps/05-captilive-soustitres.md` — CaptiLive : sous-titres en direct par reconnaissance vocale sur l'appareil
- `docs/apps/06-soundwatch-alertes.md` — SoundWatch : reconnaissance de sons et alertes visuelles/vibrantes
- `docs/apps/07-signlearn-langue-signes.md` — SignLearn : apprentissage et dictionnaire de langue des signes
- `docs/apps/08-switchboard-contacteur.md` — SwitchBoard : accès par contacteur et balayage (*switch scanning*)
- `docs/apps/09-gazetype-occulaire.md` — GazeType : clavier et navigation au regard/à la tête via webcam
- `docs/apps/10-steadytouch-tremblements.md` — SteadyTouch : saisie tolérante aux tremblements
- `docs/apps/11-dysreader-dyslexie.md` — DysReader : lecture adaptée à la dyslexie
- `docs/apps/12-mathease-dyscalculie.md` — MathEase : soutien à la dyscalculie, représentation concrète des nombres
- `docs/apps/13-dayflow-routines.md` — DayFlow : emploi du temps visuel et découpage des tâches
- `docs/apps/14-calmspace-sensoriel.md` — CalmSpace : régulation sensorielle et émotionnelle
- `docs/apps/15-remindwell-memoire.md` — RemindWell : aide-mémoire et soutien à l'autonomie
- `docs/04-a11y-core-bibliotheque.md` — `a11y-core` : bibliothèque commune réutilisable (licence MIT/Apache-2.0)

#### Identité visuelle / Visual Identity

- **Charte visuelle PGRG** (`docs/10-charte-visuelle.md`) — palette Prune / Vert / Rouge / Gris, typographie, iconographie, règles de mise en page
- **Tokens CSS** (`assets/tokens.css`) — variables CSS pour toutes les couleurs, espacements, tailles de cible, rayons et transitions

#### Site vitrine / Showcase Site

- Site vitrine statique (`site/`) — page d'accueil du projet, présentation de la suite LibreA11y
- **Démo fonctionnelle Parlo** (`site/parlo/`) — prototype interactif de l'application de CAA, utilisable sans installation

#### Scaffolding du dépôt / Repository Scaffolding

- `README.md` + `README.en.md` — présentation du projet en français et en anglais
- `CONTRIBUTING.md` — guide de contribution : prérequis, flux Git, conventions de commit, DCO, checklist d'accessibilité
- `CODE_OF_CONDUCT.md` — code de conduite (Contributor Covenant 2.1)
- `LICENSE.md` — licence du projet
- `ROADMAP.md` — feuille de route publique simplifiée
- `SECURITY.md` — politique de divulgation responsable des vulnérabilités, délai de réponse 72 h
- `CHANGELOG.md` — ce fichier
- `.gitignore` — exclusions standard (node_modules, dist, build, .env, .DS_Store, coverage, .vscode…)
- **READMEs des 16 dossiers d'applications** (`apps/*/README.md`) — statut, lien vers spec, pile envisagée, lien vers CONTRIBUTING
- **Workflow GitHub Actions** (`.github/workflows/pages.yml`) — déploiement automatique du dossier `site/` sur GitHub Pages
- **Modèles d'issues** (`.github/ISSUE_TEMPLATE/`) — bug, accessibilité, fonctionnalité, config avec lien vers les Discussions
- **Modèle de Pull Request** (`.github/PULL_REQUEST_TEMPLATE.md`) — checklist d'accessibilité obligatoire à 11 points + DCO

---

<!-- Les versions futures seront ajoutées ici au-dessus de cette ligne. -->
<!-- Future versions will be added here above this line. -->
