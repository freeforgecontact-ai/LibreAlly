# DayFlow — emploi du temps visuel & découpage des tâches

> **Voir sa journée, étape par étape.** La prévisibilité comme source de calme et d'autonomie.

## Le besoin

Pour beaucoup de personnes — autistes, TDAH, déficience intellectuelle, lésion cérébrale, démence débutante — l'imprévu et les tâches « en bloc » sont source d'angoisse et de blocage. Un **emploi du temps visuel** et le **découpage des tâches** en petites étapes illustrées transforment l'autonomie au quotidien. Les solutions de qualité (type séquenceurs visuels) sont souvent payantes et fermées.

## Utilisateurs cibles

- **Enfants et adultes autistes** (besoin de prévisibilité).
- **TDAH** (initiation et suivi des tâches).
- **Déficience intellectuelle**, **lésion cérébrale**.
- **Personnes âgées / démence débutante** (structurer la journée).
- **Familles, écoles, foyers** qui accompagnent.

## Fonctionnalités — MVP

- **Emploi du temps visuel** : suite d'activités en **pictogrammes/photos** (`a11y-core` symboles), avec horaires optionnels.
- **Séquences de tâches** : découper « se laver les dents », « préparer le sac » en étapes illustrées, cochables une à une.
- **« Maintenant / Ensuite »** (now/next) pour réduire la surcharge.
- **Minuteurs visuels** (temps qui s'écoule représenté graphiquement).
- **Lecture vocale** des étapes ; **hors-ligne**.

## Fonctionnalités — avancées (poussé à fond)

- **Photos personnelles** (la vraie brosse à dents de l'enfant, sa vraie salle de bain) — bien plus efficace que des pictos génériques.
- **Routines récurrentes** (matin, soir, école) et déclenchement par heure/lieu.
- **Récompenses / renforcement positif** paramétrables (sans gamification manipulatrice).
- **Transitions douces** : prévenir avant un changement d'activité (anti-crise autisme).
- **Mode aidant à distance** : un parent prépare la journée **sans cloud** (fichier partagé/local).
- **Vue adulte sobre** (ne pas infantiliser un adulte TDAH ou une personne âgée).
- **Découpage assisté** : proposer un modèle d'étapes pour une tâche courante, à ajuster.

## Exigences d'accessibilité

- **FALC**, très visuel, peu de texte ; une étape à la fois.
- Compatible **balayage/contacteur** (polyhandicap) et tactile grandes cibles.
- Personnalisable selon l'âge (enfant ↔ adulte) — anti-stigmatisation.
- Hors-ligne, simple à configurer pour un aidant.

## Approche technique

- **PWA + Capacitor** (notifications, photos, fonctionne installée).
- Symboles & TTS via `a11y-core` ; stockage **local** ; partage par fichier chiffré.
- Pas d'IA requise (logique explicite, fiable).

## Réutiliser l'existant (ne pas réinventer)

S'inspirer des séquenceurs/agendas visuels existants (souvent propriétaires) et des pratiques TEACCH (structuration visuelle, autisme). Réutiliser les **symboles** `a11y-core`. Valeur ajoutée : **libre, hors-ligne, multi-âges, intégré à la suite** (lien avec Parlo et CalmSpace).

## Licence & confidentialité

- **MIT**. Photos et routines **locales** (données d'enfant/de personne vulnérable : zéro envoi).

## Plateformes

Android/iOS (tablette/téléphone prioritaires), Web, bureau.

## Critères de succès

- Une personne suit sa routine **de façon plus autonome**, avec moins d'anxiété et de conflits.
- Aidants capables de créer une routine en quelques minutes.
- Fonctionne hors-ligne, du jeune enfant à la personne âgée.
