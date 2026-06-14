# Parlo ⭐ — communication alternative et améliorée (CAA / AAC)

> **Un tableau de symboles et de texte qui parle à votre place.** Pour toute personne qui ne peut pas parler, ou pas de façon fiable.

Application **phare** de LibreA11y. C'est l'idée d'origine du projet : les apps de CAA sérieuses coûtent 200–400 € et sont fermées, alors que des millions de personnes en ont un besoin vital.

## Le besoin

Des millions de personnes sont non-verbales ou ont une parole peu intelligible : enfants et adultes autistes, paralysie cérébrale, SLA, AVC/aphasie, traumatisme crânien, laryngectomie, syndromes génétiques. Sans CAA, elles ne peuvent pas demander, refuser, raconter, alerter — ce qui provoque détresse, isolement, crises, et fait passer leur intelligence inaperçue. Le coût et la fermeture des solutions existantes sont un scandale d'accès.

## Utilisateurs cibles

- **Enfants non-verbaux** (autisme, paralysie cérébrale, troubles développementaux) et leurs familles/écoles/orthophonistes.
- **Adultes** avec parole acquise puis perdue (SLA, AVC, Parkinson avancé, laryngectomie).
- **Personnes en situation temporaire** (intubation, post-chirurgie).
- **Aidants et professionnels** qui paramètrent et accompagnent.

## Fonctionnalités — MVP

- **Tableaux de symboles** (grilles) personnalisables : taille de grille, catégories, navigation par dossiers.
- **Symbole → parole** : appui sur une case → synthèse vocale (via `a11y-core`/Piper), avec construction de phrases dans une « barre de message ».
- **Texte → parole** : clavier pour les personnes alphabétisées, avec prédiction de mots.
- **Voix adaptées** : voix d'enfant/adulte, vitesse/hauteur réglables, multilingue.
- **Méthodes d'accès** dès le MVP : **tactile** (grandes cibles), **balayage par contacteur**, **clavier**.
- **Jeu de symboles Mulberry** par défaut + recherche multilingue ; ajout de **photos personnelles**.
- **Import/export OBF/OBZ** (Open Board Format) → interopérabilité avec d'autres outils de CAA.
- **100 % hors-ligne, sans compte.**

## Fonctionnalités — avancées (poussé à fond)

- **Clic par fixation (regard/tête)** et **pilotage oculaire** en lien avec **GazeType** : écrire/parler les yeux seuls (SLA, locked-in).
- **Banque de voix personnelle** : enregistrer sa propre voix tant qu'on l'a (*voice banking*) ; à terme, **synthèse de voix personnalisée** à partir d'échantillons (modèles ouverts, en local).
- **Grammaire et conjugaison assistées** : transformer une suite de symboles en phrase correcte (« moi vouloir manger » → « je veux manger »), avec modèle linguistique **local**.
- **Vocabulaire de base + frange** : noyau de mots à haute fréquence (*core vocabulary*) toujours accessible + vocabulaire spécifique par contexte.
- **Prédiction sémantique** : propose les cases probables selon le début de phrase et l'historique (local).
- **Profils multiples** et **modes** (apprenant / autonome), réglages aidant verrouillables.
- **Pages contextuelles** (école, repas, médical, urgences) et **modèles** prêts à l'emploi.
- **Prononciation phonétique** corrigeable case par case (prénoms, mots étrangers).
- **Mode bilingue** (deux langues sur le même tableau).
- **Sortie multimodale** : voix + affichage grand format (pour montrer l'écran à l'interlocuteur).
- **Synchronisation par fichier** (export chiffré) entre les appareils de l'utilisateur, **sans serveur**.

## Exigences d'accessibilité

- Entièrement utilisable au **tactile, contacteur, clavier, regard** ; profils d'accès réutilisés depuis `a11y-core`.
- Cibles **≥ 44–48 px**, espacement anti-erreur, **temps d'acceptation** réglable (anti-faux-contacts pour la paralysie cérébrale).
- Contraste AA+, thèmes fort contraste, mouvement réduit.
- **FALC** pour l'interface de l'utilisateur ; réglages avancés séparés (côté aidant).
- Aucune dépendance réseau ; latence vocale faible.

## Approche technique

- **PWA** (portée maximale) + **Tauri/Capacitor** si accès natif requis (regard, haptique).
- **TTS** : Piper (principal), eSpeak-NG (repli/langues rares) — via `a11y-core`.
- **Prédiction/grammaire** : modèle linguistique **local** léger, par langue.
- **Stockage local** des tableaux (format OBF/OBZ) ; export chiffré.

## Réutiliser l'existant (ne pas réinventer)

S'inspirer de / contribuer à : **[Cboard](https://www.cboard.io/)** (CAA web open source, MIT), **[AsTeRICS Grid](https://grid.asterics.eu/)** (CAA libre, hors-ligne), **[CoughDrop](https://www.mycoughdrop.com/)** (open source), **Open Voice Factory / OpenBoard**. Standard **OBF** créé par OpenAAC. Symboles : **Mulberry** (défaut), ARASAAC (option). **Décision** : plutôt que repartir de zéro, évaluer une convergence/contribution avec Cboard ou AsTeRICS Grid, et concentrer notre valeur ajoutée sur l'intégration `a11y-core` (regard, voix personnelle, grammaire locale) et la qualité hors-ligne.

## Interopérabilité & formats

- **Open Board Format (OBF/OBZ)** en import **et** export.
- Symboles via **Global Symbols**.
- Données utilisateur exportables (format ouvert documenté).

## Licence & confidentialité

- **GPL-3.0**. Aucune donnée ne quitte l'appareil. Pas de compte. Convient aux enfants (zéro collecte).

## Plateformes

Android, iOS, Windows, macOS, Linux, ChromeOS (PWA) ; tablette = cible prioritaire.

## Critères de succès

- Un·e utilisateur·rice non-verbal·e **communique réellement au quotidien** avec Parlo, validé par un·e orthophoniste.
- Import/export OBF fonctionnel avec au moins un autre outil de CAA.
- Accès tactile **et** contacteur **et** regard opérationnels.
- 10 langues sur l'interface et les symboles.
