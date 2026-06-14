# VoxRead — lecture vocale de documents & du monde (OCR → voix)

> **Pointez, capturez, écoutez.** Transforme tout texte — fichier ou capté à la caméra — en parole.

## Le besoin

Les personnes aveugles ou très malvoyantes, et aussi celles en situation d'illettrisme ou avec certains troubles dys, n'ont pas accès à l'écrit du quotidien : courrier, notices, étiquettes, panneaux, livres. Les lecteurs OCR « point and read » de qualité (type OrCam) coûtent des **milliers d'euros**. Une alternative libre, hors-ligne et gratuite manque cruellement.

## Utilisateurs cibles

- Personnes **aveugles** et **très malvoyantes**.
- Personnes en **illettrisme** ou apprenant une langue.
- Personnes avec **dyslexie sévère** (complément de DysReader).
- Personnes âgées qui ne peuvent plus lire les petits caractères.

## Fonctionnalités — MVP

- **OCR caméra** : capture une page/un objet → reconnaissance du texte → **lecture vocale** (Tesseract + Piper, via `a11y-core`).
- **Lecture de fichiers** : PDF, images, texte, EPUB → voix, avec navigation (titre, paragraphe, page).
- **Guidage de cadrage** non visuel : retours sonores/haptiques pour aider à viser le document sans le voir.
- **Contrôles simples** : lire/pause, vitesse, revenir en arrière, épeler un mot.
- **Multilingue**, **hors-ligne**.

## Fonctionnalités — avancées (poussé à fond)

- **Détection de structure** : colonnes, titres, tableaux, listes → lecture dans le bon ordre.
- **Reconnaissance de scène/objets** (modèles ouverts, local) : décrire brièvement ce que voit la caméra (« billet de 10 € », « porte à droite ») — au-delà du seul texte.
- **Lecture en continu temps réel** (mode « lire le monde » en déplaçant la caméra).
- **Reconnaissance de l'écriture manuscrite** (selon faisabilité des modèles libres).
- **Codes-barres / QR** → infos produit lues à voix haute.
- **Marque-pages, surlignage vocal, export en audio** (écouter un document plus tard).
- **Synchronisation mot-à-mot** (karaoké) pour usage dyslexie.

## Exigences d'accessibilité

- **Pilotable sans voir l'écran** : tout par voix, gestes simples, retours sonores/haptiques.
- Compatible lecteurs d'écran (TalkBack/VoiceOver/Orca).
- Latence faible ; fonctionne sur smartphone d'entrée de gamme.

## Approche technique

- **Mobile-first** (la caméra est centrale) : PWA + **Capacitor** pour la caméra/haptique.
- **OCR** Tesseract avec pré-traitement (redressement, binarisation) ; **TTS** Piper/eSpeak via `a11y-core`.
- **Reconnaissance de scène** : petits modèles de vision quantifiés, **en local**.

## Réutiliser l'existant (ne pas réinventer)

S'appuyer sur **Tesseract** (OCR), les TTS de `a11y-core`, et s'inspirer d'initiatives libres de description d'images. Comparer à des apps gratuites mais non libres/cloud (Seeing AI, Envision) pour les fonctions, en garantissant **hors-ligne + vie privée + open source**, ce qu'elles n'offrent pas.

## Licence & confidentialité

- **MIT**. Les images capturées **ne quittent jamais l'appareil** (enjeu fort : on photographie des documents privés, médicaux, financiers).

## Plateformes

Android (priorité), iOS ; bureau pour la lecture de fichiers.

## Critères de succès

- Une personne aveugle lit seule son courrier et identifie ses médicaments.
- OCR fiable hors-ligne sur smartphone modeste.
- Guidage de cadrage utilisable sans vision.
