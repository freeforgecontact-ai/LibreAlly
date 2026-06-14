# GazeType — clavier & pilotage au regard / à la tête (webcam)

> **Écrire et parler avec les yeux.** Sans matériel spécialisé : une simple webcam.

## Le besoin

Pour une personne atteinte de SLA avancée, de locked-in syndrome, ou de paralysie quasi totale, le **regard** est parfois le dernier canal d'action. Les systèmes de pilotage oculaire commerciaux (Tobii et autres) coûtent **plusieurs milliers d'euros**. Or une webcam standard + des modèles de vision libres peuvent offrir une grande partie de la fonction, **gratuitement**.

## Utilisateurs cibles

- Personnes avec **SLA**, **locked-in**, **paralysie sévère**, certaines myopathies.
- Personnes pouvant bouger la **tête** mais pas les mains (alternative : *head-tracking*).

## Fonctionnalités — MVP

- **Suivi de tête par webcam** (plus robuste à démarrer que le regard) → déplacement du pointeur.
- **Clic par fixation (*dwell*)** : maintenir le pointeur sur une cible un temps réglable = clic.
- **Clavier visuel à l'écran** optimisé dwell, avec **prédiction de mots** (`a11y-core`) et **synthèse vocale** (parler ce qu'on écrit).
- **Calibration simple** et réglages de sensibilité.
- **Hors-ligne.**

## Fonctionnalités — avancées (poussé à fond)

- **Suivi du regard (*eye-gaze*) par webcam** : estimation du point de regard par modèles de vision **locaux** (alternative libre aux caméras IR dédiées).
- **Disposition optimisée pour le regard** : grandes zones, organisation en arcs, gestes oculaires (regarder un coin = action).
- **Prédiction très agressive** + abréviations + phrases pré-écrites (chaque sélection coûte cher au regard, donc on minimise).
- **Contrôle du pointeur système** et lancement d'apps (intégration OS), pas seulement le clavier.
- **Passerelle vers Parlo** : parler par symboles au regard.
- **Profils** (fatigue oculaire, luminosité) ; pauses ; mode repos anti-fatigue.
- **Combinaison avec un contacteur** (regard pour viser, contacteur pour valider) si la personne en a un.

## Exigences d'accessibilité

- Fonctionne avec une **webcam ordinaire** et un éclairage variable.
- **Anti-fatigue** : dwell réglable, pauses, cibles assez grandes.
- Tolérance à l'erreur ; rien de destructeur sans confirmation.
- Aucune dépendance à un matériel propriétaire.

## Approche technique

- **Tauri** (bureau, contrôle du pointeur système) + modules natifs (Rust/C++) pour la vision temps réel.
- **Vision** : suivi de pose/visage et estimation du regard via modèles **libres et locaux** (ex. familles MediaPipe/OpenCV) ; pas de cloud.
- Calibration et lissage du pointeur (réutilise le lissage de `a11y-core`).

## Réutiliser l'existant (ne pas réinventer)

S'inspirer de **OptiKey** (clavier oculaire open source, référence) et **Enable Viacam / eViacam** (head-tracking libre par webcam, GPL). Cibler la **portée** (webcam standard, multiplateforme) et l'intégration à la suite. Reconnaître honnêtement les **limites** d'un eye-tracking webcam vs IR, et offrir le head-tracking comme socle fiable.

## Licence & confidentialité

- **GPL-3.0**. Le flux caméra est traité **en local**, **jamais enregistré ni envoyé** (on filme en continu le visage d'une personne très vulnérable : garantie absolue).

## Plateformes

Windows, macOS, Linux (priorité bureau, contrôle système). Tablette selon capacités.

## Critères de succès

- Une personne avec SLA écrit et **parle** uniquement avec la tête/les yeux, hors-ligne, sans matériel dédié.
- Vitesse de saisie utilisable au quotidien grâce à la prédiction.
- Calibration tenable pour un usage prolongé sans fatigue excessive.

> **Note** : brique la plus exigeante techniquement (vision temps réel) ⇒ on commence par le **head-tracking** (fiable) puis on pousse l'**eye-gaze**. Planifié en Phase 3.
