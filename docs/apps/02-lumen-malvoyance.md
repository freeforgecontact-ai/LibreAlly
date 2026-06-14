# Lumen — loupe d'écran, contrastes & thèmes pour la basse vision

> **Voir l'écran et le monde en plus grand, plus contrasté, plus lisible.**

## Le besoin

La basse vision (dégénérescence maculaire, glaucome, rétinopathie, etc.) touche des centaines de millions de personnes, surtout âgées. Les loupes logicielles correctes sont souvent payantes (plusieurs centaines d'euros) ou limitées. Beaucoup de gens renoncent à lire, à utiliser un ordinateur, à rester autonomes.

## Utilisateurs cibles

- Personnes **malvoyantes** (vision réduite mais présente), souvent **âgées**.
- Personnes avec **vision centrale** ou **périphérique** atteinte (besoins différents).
- Contexte scolaire/pro pour élèves et travailleurs malvoyants.

## Fonctionnalités — MVP

- **Agrandissement d'écran** fluide (zoom continu), suivi du focus/curseur/texte saisi.
- **Modes** : plein écran, loupe-fenêtre, loupe-ligne.
- **Filtres de contraste** et inversion des couleurs ; thèmes sombres/clairs ; teintes anti-éblouissement.
- **Pointeur et curseur agrandis**, réticule de localisation.
- **Loupe caméra** : utiliser la caméra arrière comme loupe électronique pour le papier (courrier, étiquettes, médicaments).

## Fonctionnalités — avancées (poussé à fond)

- **Lissage de police** et reflow (réagencement du texte agrandi sans défilement horizontal).
- **Rehaussement de contours** et binarisation pour les documents difficiles.
- **Synchronisation loupe + lecture vocale** : agrandir *et* faire lire (passerelle vers **VoxRead**).
- **Profils** par pathologie (scotome central → décalage de la zone lue ; champ réduit → modes adaptés).
- **Raccourcis** simples et gestes (tactile) pour zoomer sans menus.
- **Mode présentation** : agrandir une source externe (tableau, conférence) via caméra.

## Exigences d'accessibilité

- Utilisable par quelqu'un qui **voit très mal au départ** : très gros contrôles, vocalisation des actions, pas de menu minuscule.
- Compatible lecteur d'écran (pour usage combiné).
- Respect du mouvement réduit ; pas de scintillement.

## Approche technique

- **Bureau** : **Tauri** (accès aux API d'agrandissement/superposition système) — Windows/macOS/Linux.
- **Mobile** : services d'accessibilité Android / loupe caméra (Capacitor).
- Traitement d'image temps réel (contraste, contours) ; GPU si dispo, repli CPU pour appareils modestes.

## Réutiliser l'existant (ne pas réinventer)

S'inspirer de **Virtual Magnifying Glass** (libre, multiplateforme), des loupes intégrées GNOME/Windows, et des fonctions d'accessibilité OS. Valeur ajoutée : **cohérence multiplateforme, loupe caméra, lien avec la lecture vocale, profils par pathologie**, le tout libre et hors-ligne.

## Licence & confidentialité

- **GPL-3.0**. Aucun traitement distant ; la caméra ne stocke/n'envoie rien.

## Plateformes

Windows, macOS, Linux (priorité bureau) ; Android (loupe caméra). iOS selon contraintes système.

## Critères de succès

- Une personne malvoyante lit son courrier et utilise son ordinateur **sans aide**.
- Agrandissement fluide jusqu'à fort grossissement sans perte de repère.
- Loupe caméra fiable sur médicaments/étiquettes.
