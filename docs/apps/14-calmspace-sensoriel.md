# CalmSpace — régulation sensorielle & émotionnelle

> **Un espace pour se calmer, comprendre ce qu'on ressent, et éviter la surcharge.**

## Le besoin

Les personnes autistes, TDAH, ou anxieuses vivent des **surcharges sensorielles** et des **tempêtes émotionnelles** difficiles à réguler. Identifier l'émotion, anticiper la montée, disposer d'outils d'apaisement à portée de main, prévient bien des crises et de la détresse. Les outils existants sont éparpillés, parfois payants, et rarement pensés *avec* les personnes concernées.

## Utilisateurs cibles

- **Enfants et adultes autistes** (régulation sensorielle, communication des besoins).
- **TDAH** (gestion de l'impulsivité, du stress).
- **Anxiété**, stress ; usage plus large de bien-être.
- **Aidants/enseignants** qui accompagnent la régulation.

> **Cadre éthique** : CalmSpace **soutient** la régulation, il **ne se substitue pas** à un soin de santé mentale (voir [`../08-impact-ethique.md`](../08-impact-ethique.md)). Aucune prétention thérapeutique non validée.

## Fonctionnalités — MVP

- **Cartes d'émotions** visuelles (identifier/exprimer ce que je ressens) — symboles `a11y-core`, FALC.
- **Échelle de stress/énergie** visuelle (ex. type « 5 niveaux ») pour repérer la montée tôt.
- **Outils d'apaisement** : **respiration guidée** visuelle, minuteur calme, sons/visuels sensoriels doux **non clignotants**.
- **« Boîte à outils » personnalisable** : les stratégies qui marchent pour *cette* personne.
- **Hors-ligne, sans compte.**

## Fonctionnalités — avancées (poussé à fond)

- **Plan de régulation personnel** (co-construit avec l'aidant/le pro) : signes d'alerte → stratégies → message à montrer aux autres (« j'ai besoin d'une pause »).
- **Cartes de communication d'urgence** (passerelle Parlo) : exprimer un besoin pendant la surcharge, quand parler devient impossible.
- **Profil sensoriel** : préférences et déclencheurs (bruit, lumière, foule) pour anticiper.
- **Journal d'humeur privé** (local) sobre, pour repérer des schémas — sans surveillance.
- **Minuteries de transition** et rappels d'auto-régulation (lien DayFlow).
- **Strict respect anti-crise** : aucun stimulus pouvant déclencher (épilepsie), réglages sensoriels fins.

## Exigences d'accessibilité

- **Sensoriellement sûr** par défaut : pas de son fort surprise, pas de flash, couleurs douces réglables.
- **FALC**, très visuel ; utilisable **pendant** une surcharge (donc ultra-simple, gros boutons, peu d'étapes).
- Accessible au tactile et au contacteur.
- Hors-ligne ; contenus personnalisables.

## Approche technique

- **PWA + Capacitor** (notifications, haptique douce, installable).
- Symboles & TTS via `a11y-core` ; stockage **local** chiffré pour le journal.
- Contenus audio/visuels apaisants sous licence ouverte.

## Réutiliser l'existant (ne pas réinventer)

S'inspirer des approches reconnues (échelles de régulation type *Zones of Regulation* — concept, à recréer en libre —, profils sensoriels, cohérence cardiaque) **en co-construction avec des personnes autistes** et des professionnels, sans copier d'outils propriétaires. Réutiliser symboles et voix de `a11y-core`.

## Licence & confidentialité

- **Code MIT**, **contenus CC BY-SA**. Journal et profil **strictement locaux** (données émotionnelles sensibles : aucun envoi).

## Plateformes

Android/iOS (priorité, toujours sur soi), Web, bureau.

## Critères de succès

- Une personne **repère et désamorce** une montée de stress plus souvent, avec moins de crises.
- Utilisable **pendant** une surcharge (assez simple pour ça).
- Co-validé par des personnes concernées et des professionnels ; sensoriellement sûr.
