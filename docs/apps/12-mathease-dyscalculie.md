# MathEase — soutien à la dyscalculie

> **Rendre les nombres concrets.** Voir, manipuler, comprendre — au lieu de subir.

## Le besoin

La dyscalculie touche environ **3 à 6 %** de la population, mais reste bien moins connue et outillée que la dyslexie. Les nombres restent abstraits, le « sens du nombre » ne s'installe pas, l'enfant bloque et perd confiance. Il manque cruellement d'outils libres et bien conçus pour rendre les maths **visuelles et manipulables**.

## Utilisateurs cibles

- **Enfants dyscalculiques** (primaire, collège).
- Élèves en **difficulté avec le sens du nombre**.
- Adultes ayant besoin d'aide pour les maths du quotidien (argent, mesures, temps).

## Fonctionnalités — MVP

- **Représentations multiples** d'un nombre : quantité (points/objets), barre, droite numérique, doigts, chiffre, mot — reliées entre elles.
- **Objets manipulables** (glisser, grouper, échanger 10 unités contre 1 dizaine) pour comprendre la numération.
- **Opérations visuelles** étape par étape (addition/soustraction puis ×/÷) avec décomposition.
- **Lecture vocale** des énoncés et des nombres (`a11y-core`).

## Fonctionnalités — avancées (poussé à fond)

- **Maths du quotidien** : **argent** (rendre la monnaie), **horloge/temps**, mesures, proportions — avec mises en situation.
- **Ligne numérique interactive**, fractions visuelles, tables avec motifs (pour s'appuyer sur la mémoire visuelle).
- **Progression adaptative** : ajuste la difficulté, revient en arrière sans pénaliser.
- **Réduction de l'anxiété mathématique** : pas de chrono imposé, droit à l'erreur, encouragement (lien d'esprit avec CalmSpace).
- **Mode enseignant/parent** : créer des exercices, suivre les acquis **localement**.
- **Symboles/pictogrammes** (`a11y-core`) pour les énoncés (accessibilité cognitive).

## Exigences d'accessibilité

- **FALC** pour les consignes ; une étape à la fois.
- Pas de pression temporelle ; erreurs traitées comme des étapes d'apprentissage.
- Multimodal (visuel + vocal + manipulation).
- Hors-ligne, matériel scolaire modeste.

## Approche technique

- **PWA** (tablette = idéale pour la manipulation tactile).
- Moteur d'exercices paramétrable ; rendu visuel interactif (Canvas/SVG).
- **TTS** via `a11y-core` ; pas d'IA nécessaire au cœur (logique pédagogique explicite, donc transparente et fiable).

## Réutiliser l'existant (ne pas réinventer)

S'inspirer de la recherche sur la dyscalculie (sens du nombre, représentations multiples) et d'outils éducatifs libres (ex. activités de **GCompris** pour les bases). Valeur ajoutée : un outil **dédié dyscalculie**, fondé sur les manipulables et la réduction d'anxiété, libre et hors-ligne.

## Licence & confidentialité

- **Code GPL-3.0**, **contenus pédagogiques CC BY-SA**. Suivi **local** ; aucune donnée d'enfant envoyée.

## Plateformes

Web/PWA, Android/iOS (tablette prioritaire), bureau.

## Critères de succès

- Un enfant dyscalculique **comprend** une opération qu'il subissait, et gagne en confiance.
- Les représentations multiples aident réellement (validé avec enseignants spécialisés).
- Utilisable en classe et à la maison, hors-ligne.
