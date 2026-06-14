# SignLearn — apprentissage & dictionnaire de langue des signes

> **Apprendre à signer, et donner à l'entourage les moyens de communiquer.**

## Le besoin

La langue des signes (LSF, ASL, et des centaines d'autres) est la langue première de nombreuses personnes sourdes. Mais leur **entourage** (parents entendants d'enfants sourds — 90 % des cas, fratries, enseignants, soignants) ne la connaît souvent pas, créant un isolement linguistique dès l'enfance. Les ressources de qualité sont dispersées, souvent payantes (Spread the Sign, etc.), et rarement libres.

## Utilisateurs cibles

- **Parents entendants** d'enfants sourds (besoin urgent et précoce).
- **Enfants sourds** apprenant leur langue.
- **Enseignants, soignants, collègues, amis**.
- Toute personne souhaitant apprendre la langue des signes.

## Fonctionnalités — MVP

- **Dictionnaire vidéo** : chercher un mot → vidéo du signe (et inversement, parcourir par thème).
- **Leçons progressives** (alphabet dactylologique, vocabulaire de base, phrases courantes).
- **Multi-langues des signes** (architecture prévue pour LSF, ASL, etc. — pas une seule).
- **Hors-ligne** (paquets de langue téléchargeables).

## Fonctionnalités — avancées (poussé à fond)

- **Entraînement avec retour par webcam** : reconnaissance de signes (modèles de vision **locaux**) pour dire à l'apprenant s'il signe correctement — la fonction qui manque le plus dans le libre.
- **Mémorisation espacée** (répétition à intervalles) pour ancrer le vocabulaire.
- **Mode famille/enfant** ludique (apprendre en jouant avec son enfant sourd).
- **Contribution communautaire** : permettre à des locuteurs natifs d'**ajouter des signes** (essentiel vu la diversité régionale) — sous licence ouverte.
- **Glossaires spécialisés** (médical, école, urgences).
- À explorer (R&D) : **traduction signes ↔ texte** assistée — ambitieux, dépendant de jeux de données ouverts.

## Exigences d'accessibilité

- Vidéos de **haute lisibilité** (cadrage, vitesse réglable, ralenti, boucle).
- Interface utilisable par enfants et par personnes sourdes (peu de texte, visuelle).
- Sous-titres et options pour publics variés.

## Approche technique

- **PWA + Capacitor** (webcam pour l'entraînement).
- **Reconnaissance de signes** : modèles de vision/pose **locaux** (suivi de mains/corps).
- **Contenu** : vidéos sous licence ouverte, paquets hors-ligne.

## Réutiliser l'existant (ne pas réinventer)

S'appuyer sur des corpus et projets ouverts (**SignBank**, datasets de pose de mains type MediaPipe Hands en local), et nouer des partenariats avec des associations de sourds pour produire/valider le contenu. **Attention** : la qualité et la légitimité culturelle exigent une **co-construction avec la communauté sourde** (qui est aussi une communauté linguistique).

## Licence & confidentialité

- **Code GPL-3.0** ; **contenus vidéo en CC BY-SA** (réutilisables). Reconnaissance par webcam **en local** (l'image n'est pas envoyée).

## Plateformes

Android, iOS, Web (bureau pour le dictionnaire/leçons).

## Critères de succès

- Des parents entendants tiennent une conversation simple avec leur enfant sourd.
- Dictionnaire utilisable hors-ligne dans au moins 2 langues des signes.
- Contenu co-validé par des locuteurs natifs.

> **Note de priorisation** : forte valeur, mais **dépendance aux données** (vidéos, corpus de signes) et exigence de co-construction ⇒ planifié en Phase 4, avec amorçage partenarial dès que possible.
