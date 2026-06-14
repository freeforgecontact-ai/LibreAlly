# SteadyTouch — saisie tolérante aux tremblements

> **Votre appareil cesse de se tromper de bouton.** Pour les mains qui tremblent.

## Le besoin

Maladie de Parkinson, tremblement essentiel, sclérose en plaques, dystonie, séquelles d'AVC, ou simplement le grand âge : les tremblements et mouvements imprécis transforment un smartphone ou un ordinateur en source de frustration permanente (mauvais boutons, double-déclenchements, glissements involontaires). Peu d'outils logiciels libres traitent spécifiquement ce problème.

## Utilisateurs cibles

- Personnes avec **Parkinson**, **tremblement essentiel**, **SEP**, **dystonie**, **post-AVC**.
- Personnes **âgées** à la motricité fine réduite.

## Fonctionnalités — MVP

- **Lissage/filtrage des entrées** : ignore les micro-mouvements, stabilise le pointeur (filtre type « 1€ filter »).
- **Anti-double-clic / anti-rebond** : ignore les déclenchements répétés involontaires (réglable).
- **Cibles agrandies** et **zones tampons** autour des boutons.
- **Délai d'intention** : valider seulement après un contact stable (anti-frôlement).

## Fonctionnalités — avancées (poussé à fond)

- **Stabilisation du pointeur système** (bureau, via Tauri) : utile souris/trackpad qui tremblent.
- **Clavier adaptatif** : agrandissement dynamique de la touche visée, correction renforcée.
- **Gestes simplifiés** : remplace les gestes fins (pincer, glisser précis) par des actions tolérantes.
- **Profils** selon l'état (les tremblements varient dans la journée / avec la médication).
- **Mode tactile « appui franc »** : exige un appui net, ignore les effleurements.
- **Compatibilité** : agit comme **couche par-dessus** les autres apps (système), pas seulement les nôtres.

## Exigences d'accessibilité

- S'intègre **sans réapprentissage** (l'utilisateur garde ses habitudes).
- Réglages de sensibilité simples et réversibles.
- N'introduit pas de latence perceptible gênante.

## Approche technique

- **Bureau** : Tauri + couche d'entrée système (filtrage souris/trackpad).
- **Mobile** : service d'accessibilité Android (filtrage tactile) via Capacitor ; iOS selon API disponibles.
- Algorithmes de **filtrage du signal** (One Euro Filter, hystérésis) dans `a11y-core`.

## Réutiliser l'existant (ne pas réinventer)

S'appuyer sur des algorithmes publiés de filtrage de tremblement et sur les fonctions d'accessibilité OS (temps de maintien, ignorer les contacts répétés). Valeur ajoutée : **une solution dédiée, réglable, multiplateforme et libre**, là où l'OS n'offre que des bribes.

## Licence & confidentialité

- **MIT** (app), filtres dans `a11y-core` (MIT/Apache). Aucun envoi de données.

## Plateformes

Windows, macOS, Linux (souris/trackpad), Android (tactile). iOS selon contraintes.

## Critères de succès

- Une personne avec Parkinson utilise son smartphone avec **nettement moins d'erreurs**.
- Réglages trouvables et efficaces sans aide technique.
- Fonctionne par-dessus les apps du quotidien.
