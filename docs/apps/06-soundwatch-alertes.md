# SoundWatch — reconnaissance de sons & alertes visuelles/vibrantes

> **Votre maison vous prévient autrement : par la lumière et la vibration.**

## Le besoin

Une personne sourde ou très malentendante n'entend pas la sonnette, l'alarme incendie, le micro-ondes, les pleurs d'un bébé, son prénom, l'eau qui déborde, un klaxon. Les systèmes domotiques d'alerte dédiés sont coûteux et fermés. Un détecteur **logiciel, gratuit, hors-ligne** apporte sécurité et autonomie.

## Utilisateurs cibles

- Personnes **sourdes** et **malentendantes**, à domicile et à l'extérieur.
- **Parents sourds** (pleurs de bébé).
- Personnes **âgées** avec perte auditive importante.

## Fonctionnalités — MVP

- **Reconnaissance de sons clés** sur l'appareil (sonnette, alarme/détecteur de fumée, sonnerie, nom appelé, bébé) → **alerte visuelle (flash écran) + vibration**.
- **Bibliothèque de sons** activables, sensibilité réglable.
- **Apprentissage d'un son personnel** : enregistrer sa propre sonnette/minuteur pour le faire reconnaître.
- **Hors-ligne, privé.**

## Fonctionnalités — avancées (poussé à fond)

- **Alertes différenciées** (vibration/couleur/pictogramme selon le son) — voir aussi symboles `a11y-core`.
- **Mode nuit** : déclenche un **bracelet/montre** (Bluetooth) ou une **prise connectée** (lampe) — via standards ouverts (pas de cloud propriétaire).
- **Localisation du son** (de quelle direction) si plusieurs micros.
- **Journal des événements** (qu'est-ce qui a sonné pendant mon absence).
- **Mode extérieur** : klaxon, véhicule qui approche, annonces.
- **Intégration domotique ouverte** (Home Assistant, MQTT) pour piloter des alertes lumineuses.

## Exigences d'accessibilité

- Alerte **multimodale** (visuelle **et** haptique) — jamais sonore seule, évidemment.
- Réglage fin des seuils pour éviter fausses alertes.
- Fonctionne en arrière-plan, faible consommation.

## Approche technique

- **Mobile-first** (toujours avec soi) : Capacitor pour micro + vibration + arrière-plan.
- **Classification audio** par petits modèles **locaux** (réseaux légers type YAMNet/CNN audio quantifiés).
- **Domotique** : protocoles ouverts (MQTT, Home Assistant), Bluetooth pour wearables.

## Réutiliser l'existant (ne pas réinventer)

S'inspirer des recherches **SoundWatch** (Université de Washington, open source) sur la reconnaissance de sons pour personnes sourdes, et des modèles de classification audio libres. Intégration domotique via **Home Assistant** (libre).

## Licence & confidentialité

- **MIT**. L'audio est analysé **en local** et **non enregistré** par défaut (un micro toujours actif impose une garantie de vie privée forte et transparente).

## Plateformes

Android (priorité), iOS ; passerelles domotiques (Raspberry Pi/Home Assistant).

## Critères de succès

- Une personne sourde est fiablement alertée de sa sonnette et de l'alarme incendie.
- Faible taux de fausses alertes après calibrage.
- Fonctionne hors-ligne, sans capter la vie privée du foyer.
