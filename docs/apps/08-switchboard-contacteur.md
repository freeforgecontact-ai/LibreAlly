# SwitchBoard — accès par contacteur & balayage (*switch scanning*)

> **Tout piloter avec un seul bouton.** Pour les personnes dont la motricité ne permet ni souris ni écran tactile précis.

## Le besoin

Pour une personne tétraplégique, avec paralysie cérébrale sévère, myopathie ou SLA avancée, un **contacteur** (un bouton actionné d'un doigt, de la tête, du pied, du souffle) peut être le **seul** accès à un ordinateur. Le **balayage** (les éléments défilent, on valide au bon moment) rend alors tout possible. Les solutions complètes sont rares, chères, ou liées à un matériel propriétaire.

## Utilisateurs cibles

- Personnes avec **motricité très réduite** : tétraplégie, paralysie cérébrale sévère, SLA, AMC, locked-in partiel.
- **Enfants** polyhandicapés (accès au jeu, à l'apprentissage, à la CAA).

## Fonctionnalités — MVP

- **Moteur de balayage** (réutilise/étend celui de `a11y-core`) : automatique ou par étapes, 1 ou 2 contacteurs.
- **Sources de contacteur** variées : touche, clic, écran, **GPIO Raspberry Pi**, manette, contacteur **Bluetooth**.
- **Grille d'actions** personnalisable pour lancer/contrôler les autres apps LibreA11y (Parlo, DayFlow…).
- **Réglages fins** : vitesse, temps d'acceptation (anti-faux-contacts), nombre de cycles, ordre (ligne/colonne, groupes).
- **Retour** visuel + sonore à chaque pas.

## Fonctionnalités — avancées (poussé à fond)

- **Contrôle de l'appareil entier** (pas seulement nos apps) : clavier/souris virtuels par balayage, lancement d'applications du système — via Tauri + API d'accessibilité de l'OS.
- **Balayage adaptatif** : ajuste la vitesse selon les performances de l'utilisateur ; **prédiction** pour réduire le nombre de sélections.
- **Profils multiples** (fatigue, moments de la journée) et bascule rapide.
- **Modes de jeu** et activités cause-à-effet pour l'apprentissage précoce du contacteur (enfants polyhandicapés).
- **Souris au balayage** (balayage directionnel/cartésien) pour pointer n'importe où.
- **Intégration domotique** (allumer une lumière, appeler à l'aide) via protocoles ouverts.

## Exigences d'accessibilité

- Tolérance à l'erreur **maximale** (faux-contacts, contacts involontaires, relâchements).
- Aucune action destructrice sans confirmation.
- Entièrement paramétrable par un aidant ; réglages mémorisés.
- Latence et fiabilité du retour irréprochables.

## Approche technique

- **Tauri** (bureau) pour l'injection d'événements système et le contrôle global ; **Capacitor** (Android) via services d'accessibilité.
- **Couche d'entrée** de `a11y-core` (contacteurs, GPIO, BT, manette).
- **Raspberry Pi** comme cible de premier plan (postes peu coûteux pour écoles/foyers spécialisés).

## Réutiliser l'existant (ne pas réinventer)

S'inspirer du **AsTeRICS Framework** (UE, libre, construction de solutions d'accès complexes) et des fonctions de **Switch Access** des OS. Valeur ajoutée : **balayage moderne, multiplateforme, intégré à toute la suite et au monde extérieur**, hors-ligne et libre.

## Licence & confidentialité

- **MIT**. Aucun envoi de données. Le moteur de balayage est dans `a11y-core` (MIT/Apache) pour profiter à tout l'écosystème.

## Plateformes

Windows, macOS, Linux, **Raspberry Pi** (priorité), Android.

## Critères de succès

- Une personne tétraplégique écrit, communique (Parlo) et contrôle son appareil avec **un seul contacteur**.
- Configuration matérielle large (GPIO, Bluetooth, manette) fonctionnelle.
- Faux-contacts maîtrisés grâce aux réglages.
