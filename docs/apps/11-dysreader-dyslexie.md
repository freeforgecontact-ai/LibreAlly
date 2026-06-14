# DysReader — lecture adaptée à la dyslexie

> **Rendre la lecture possible, et moins épuisante.** Sans faire le travail à la place de l'enfant.

## Le besoin

La dyslexie concerne environ **5 à 10 %** de la population. Lire demande à ces personnes un effort énorme : elles se fatiguent, décrochent, et beaucoup d'enfants en concluent qu'ils sont « nuls » alors qu'ils ne le sont pas. Des aménagements simples (police, espacement, coloration, lecture vocale) changent radicalement l'expérience — mais sont souvent dispersés ou payants.

## Utilisateurs cibles

- **Enfants et ados dyslexiques** (et dysorthographiques).
- **Adultes** dyslexiques (travail, démarches).
- Plus largement : lecteurs fatigués, apprenants d'une langue, troubles visuo-attentionnels.

## Fonctionnalités — MVP

- **Reformatage du texte** : police lisible (dont **OpenDyslexic**, au choix), taille, **espacement** (interlettre, interligne, intermot) réglables.
- **Coloration syllabique** et **alternance de couleurs** des syllabes/mots ; coloration des sons complexes.
- **Règle de lecture / surlignage** de la ligne ou du mot courant (réduit l'encombrement visuel).
- **Lecture vocale** (TTS `a11y-core`) avec **surlignage synchronisé mot-à-mot** (karaoké).
- **Ouvre** : texte collé, fichiers (txt, EPUB, PDF), pages web (extension).

## Fonctionnalités — avancées (poussé à fond)

- **OCR** (via `a11y-core`/VoxRead) : photographier une page de manuel papier → la reformater et la lire.
- **Découpage en syllabes** automatique multilingue ; **mise en évidence phonétique**.
- **Dictionnaire/définition** au clic, **prédiction** et aide à l'écriture (volet dysorthographie).
- **Profils** sauvegardés (chaque dyslexie est différente — on teste et on garde ce qui marche).
- **Mode « focus »** : afficher une portion réduite (un mot/une ligne) pour les troubles attentionnels.
- **Statistiques privées** (locales) de progrès/lecture, pour encourager sans surveiller.
- **Discrétion** en classe (apparence neutre, pas « appli pour handicapé »).

## Exigences d'accessibilité

- Tout réglable, **rien d'imposé** (les préférences varient fortement).
- **Non stigmatisant** (essentiel pour l'adhésion des enfants).
- Fonctionne **hors-ligne**, sur le matériel scolaire modeste.

## Approche technique

- **PWA** (multiplateforme, extension navigateur) + Capacitor pour l'OCR caméra.
- **TTS** Piper/eSpeak via `a11y-core` ; syllabation et phonétique par règles + ressources libres par langue.
- Reformatage côté rendu (typographie, espacement, couleurs).

## Réutiliser l'existant (ne pas réinventer)

S'appuyer sur la police libre **OpenDyslexic**, sur les recherches en lisibilité, et s'inspirer d'outils existants (souvent partiels ou payants). Valeur ajoutée : **tout-en-un libre** (reformatage + coloration + voix + OCR), multilingue et hors-ligne.

## Licence & confidentialité

- **GPL-3.0**. Données et statistiques **locales** ; rien n'est envoyé (on protège des enfants).

## Plateformes

Web/PWA + extension navigateur (priorité), Android/iOS, bureau.

## Critères de succès

- Un enfant dyslexique lit **plus longtemps et avec moins de fatigue**, et regagne confiance.
- Réglages efficaces trouvés rapidement avec un·e enseignant·e/orthophoniste.
- Utilisable discrètement en classe, hors-ligne.
