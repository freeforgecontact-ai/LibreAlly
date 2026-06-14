# RemindWell — aide-mémoire & autonomie (démence, lésion cérébrale, âge)

> **Se souvenir de l'essentiel, et rester autonome plus longtemps — avec dignité.**

## Le besoin

La maladie d'Alzheimer et les autres démences progressent fortement avec le vieillissement de la population ; s'y ajoutent les lésions cérébrales (AVC, traumatismes) qui altèrent la mémoire. Oublier ses médicaments, ses rendez-vous, le nom de ses proches, l'étape en cours d'une tâche, met en danger l'autonomie et la sécurité. Les solutions dédiées sont souvent chères, intrusives ou infantilisantes.

## Utilisateurs cibles

- Personnes avec **démence débutante à modérée**, **maladie d'Alzheimer**.
- Personnes avec **lésion cérébrale** / troubles mnésiques (post-AVC, TC).
- **Personnes âgées** souhaitant rester autonomes.
- **Aidants familiaux** (souvent en première ligne, épuisés).

## Fonctionnalités — MVP

- **Rappels simples et fiables** : médicaments (avec photo du comprimé/horaire), rendez-vous, tâches — alertes claires et **insistantes mais dignes**.
- **Aide visages-et-noms** : fiches de proches (photo, nom, lien : « votre fille Marie ») consultables facilement.
- **Aujourd'hui** : écran unique « quel jour on est, que se passe-t-il aujourd'hui ».
- **Très gros texte, lecture vocale** (`a11y-core`), interface ultra-simple.
- **Hors-ligne, sans compte.**

## Fonctionnalités — avancées (poussé à fond)

- **Confirmation de prise** (« avez-vous pris vos médicaments ? ») avec relance, et **alerte aidant** optionnelle et **transparente** (la personne sait que c'est partagé).
- **Repères d'orientation** : jour/heure/lieu, « où suis-je / que dois-je faire maintenant ».
- **Guidage de tâche pas-à-pas** (lien DayFlow) pour les gestes du quotidien.
- **Messages enregistrés par les proches** (voix/vidéo) — rassurant et personnel.
- **Album mémoire** (photos légendées, histoire de vie) — soutien cognitif et émotionnel.
- **Configuration et suivi par un aidant à distance** via **fichier/serveur contrôlé par la famille** (jamais un cloud LibreA11y imposé).
- **Détection d'oublis** douce (ex. médicament non confirmé → rappel gradué).

## Exigences d'accessibilité

- **Simplicité radicale** : une information à la fois, pas de menus complexes, pas de jargon.
- **Dignité** : ton respectueux, pas infantilisant ; l'adulte reste un adulte.
- Gros caractères, fort contraste, vocal ; compatible lecteur d'écran et grandes cibles.
- **Aidant transparent** : aucune surveillance cachée (cadre éthique strict).
- Hors-ligne, fiable (un rappel manqué peut être grave).

## Approche technique

- **PWA + Capacitor** (notifications fiables, fonctionne installée, photos, audio).
- **TTS** via `a11y-core` ; stockage **local** chiffré ; partage aidant par moyen contrôlé par la famille (fichier chiffré, dossier auto-hébergé).
- Robustesse des rappels (fiabilité = sécurité).

## Réutiliser l'existant (ne pas réinventer)

S'inspirer des bonnes pratiques en aide cognitive et des apps de rappel, en se distinguant par : **libre, hors-ligne, privé, non infantilisant, et intégré** (DayFlow, voix `a11y-core`). Co-construction avec gériatres, orthophonistes et aidants.

## Licence & confidentialité

- **MIT**. Données de santé/personnelles **locales** par défaut ; tout partage aidant est **explicite et transparent** pour la personne.

## Plateformes

Android/iOS (tablette à domicile + téléphone), Web, bureau ; pensé aussi pour un usage par l'aidant.

## Critères de succès

- Une personne prend ses médicaments à l'heure et reste autonome **plus longtemps**, sans se sentir surveillée.
- Les aidants sont **soulagés** (fiabilité, transparence).
- Rappels fiables hors-ligne ; interface tenable malgré les troubles cognitifs.
