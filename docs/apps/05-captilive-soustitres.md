# CaptiLive — sous-titres en direct (reconnaissance vocale sur l'appareil)

> **Voir, en temps réel, ce qui se dit autour de vous.**

## Le besoin

Les personnes sourdes et malentendantes sont exclues d'innombrables échanges oraux : réunions, cours, guichets, conversations de groupe, télé sans sous-titres. Les solutions de transcription live de qualité sont souvent dans le cloud (problème de vie privée) ou payantes. Une transcription **hors-ligne, gratuite, privée** change le quotidien.

## Utilisateurs cibles

- Personnes **sourdes** et **malentendantes** (de naissance ou acquise, tout âge).
- Personnes **âgées** avec presbyacousie.
- Personnes en **milieu bruyant** ou apprenant une langue.

## Fonctionnalités — MVP

- **Sous-titrage en direct** du micro → texte à l'écran, **sur l'appareil** (Vosk via `a11y-core`).
- **Gros texte défilant**, contraste réglable, plein écran.
- **Historique** de la session (consultable, effaçable).
- **Multilingue**, **hors-ligne**.

## Fonctionnalités — avancées (poussé à fond)

- **Précision supérieure** via whisper.cpp quand l'appareil suit ; ponctuation automatique.
- **Distinction des locuteurs** (qui parle) si faisable hors-ligne.
- **Vocabulaire personnalisé** (prénoms, jargon métier) pour fiabiliser.
- **Mode conversation face-à-face** : deux zones de texte (chacun lit l'autre), avec saisie pour répondre + synthèse vocale optionnelle.
- **Sous-titrage d'un média** joué sur l'appareil (vidéo sans sous-titres).
- **Alertes mots-clés** (son prénom, « attention »…).
- **Export** de la transcription (compte rendu de réunion).

## Exigences d'accessibilité

- Latence faible (utilisable en conversation réelle).
- Lisibilité maximale (taille, contraste, espacement).
- Fonctionne **sans réseau** (confidentialité des conversations).
- Combinable avec **SoundWatch** (alertes) et **SignLearn**.

## Approche technique

- **PWA + Capacitor** (accès micro natif, perf).
- **STT** Vosk (léger) / whisper.cpp (qualité) via `a11y-core`, modèles par langue téléchargeables.
- Optimisations pour appareils modestes (modèles quantifiés, dégradation gracieuse).

## Réutiliser l'existant (ne pas réinventer)

S'inspirer de **Live Captions** (appli GNOME libre, GPL, utilise des modèles locaux), de **Vosk** et **whisper.cpp**. Beaucoup de solutions grand public (Live Transcribe) sont **cloud/non libres** → notre différenciation : **hors-ligne + privé + open source + multiplateforme**.

## Licence & confidentialité

- **GPL-3.0**. **Aucune** captation audio envoyée ailleurs (les conversations restent privées, enjeu majeur).

## Plateformes

Android (priorité), iOS, Windows, macOS, Linux.

## Critères de succès

- Une personne sourde suit une réunion en lisant CaptiLive, hors-ligne.
- Latence et précision suffisantes pour une conversation réelle.
- Fonctionne sur smartphone d'entrée de gamme.
