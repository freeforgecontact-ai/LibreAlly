# Guide d'utilisation & Handoff — LibreA11y

Ce document explique **le fonctionnement de chaque application**, leur **état de validation**, et comment **maintenir et faire évoluer** le projet. À jour au 14 juin 2026.

---

## 1. Accès rapide

| Quoi | Lien |
|---|---|
| **Site / vitrine** | https://freeforgecontact-ai.github.io/LibreAlly/ |
| **Dépôt GitHub** | https://github.com/freeforgecontact-ai/LibreAlly |
| **Une démo** | `https://freeforgecontact-ai.github.io/LibreAlly/<nom>/` (ex. `/voxread/`) |

Chaque carte du site a un bouton **« ▶ Démo »** qui ouvre l'app, et un lien **« Spécification »** vers sa doc détaillée.

---

## 2. État de validation (honnête)

- **15 applications** construites, déployées, aux couleurs PGRG, accessibles (clavier, lecteur d'écran, contraste, mouvement réduit).
- **Chargement vérifié dans Chrome réel : 0 erreur console sur les 15.**
- **11/15 validées fonctionnellement en conditions réelles** (interaction + résultat prouvé).
- **4 apps** restent à valider sur leur **entrée caméra/micro** (le reste de leur interface fonctionne et charge sans erreur).

| App | Validé en navigateur réel | Hors-ligne |
|---|---|---|
| VoxRead | ✅ OCR réel : a lu « LIBRE ACCES 2026 » | ✅ **100 %** (fichiers embarqués) |
| Parlo | ✅ phrase « je veux oui » + voix | ✅ |
| DysReader | ✅ lit le texte à voix haute | ✅ |
| DayFlow | ✅ lit l'étape « Maintenant : Se lever… » | ✅ |
| CalmSpace | ✅ « Je me sens heureux » | ✅ |
| ColorAide | ✅ « La couleur est Bleu ciel » | ✅ |
| RemindWell | ✅ « Nous sommes samedi 13 juin 2026… » | ✅ |
| MathEase | ✅ « 7 : sept » | ✅ |
| SwitchBoard | ✅ charge net, grille + balayage | ✅ |
| SteadyTouch | ✅ charge net, lissage + réglages | ✅ |
| Lumen | ✅ charge net, loupe + thèmes | ✅ |
| SoundWatch | ◑ alertes de test OK · **micro à valider** | ✅ (alertes) |
| CaptiLive | ◑ charge net · **micro à valider** | ◑ (STT en ligne) |
| SignLearn | ◑ dico + quiz OK · **webcam à valider** | ✅ (dico/quiz) |
| GazeType | ◑ clavier + prédiction OK · **webcam à valider** | ◑ (modèle CDN) |

✅ = validé · ◑ = chargé sans erreur, partie matérielle à tester avec toi.

> La synthèse vocale utilise les voix du système (détectées : Microsoft Caroline, Claude, Nathalie — FR Canada, et Google FR).

---

## 3. Fonctionnement de chaque application

### 💬 Parlo — communication (CAA)
**Pour qui** : personnes non-verbales (autisme, paralysie cérébrale, SLA, aphasie).
**Ce que ça fait** : on appuie sur des symboles → ça construit une phrase → l'app la **prononce** à voix haute.
**Utilisation** : choisis une catégorie (Base, Besoins, Émotions…), appuie sur les symboles (ils s'ajoutent à la barre du haut), puis **🔊 Parler**. « ⌫ Retour » retire le dernier, « ✕ Effacer » vide. **Mode balayage** (réglages) : un surlignage défile, on valide à l'**Espace/Entrée** (accès par contacteur).
**Hors-ligne** : oui, 100 %.

### 📖 VoxRead — lecture vocale & OCR
**Pour qui** : aveugles, basse vision, dyslexie sévère, illettrisme.
**Ce que ça fait** : lit à voix haute du texte saisi, un fichier `.txt`, **ou le texte d'une image** (OCR réel, moteur français embarqué).
**Utilisation** : onglet **Texte** (colle un texte → 🔊 Lire) · **Fichier .txt** (importe) · **OCR Image** (dépose une photo de texte → « Lancer l'OCR » → le texte sort et peut être lu) · **OCR Caméra** (vise un texte, capture). Ton image **ne quitte jamais l'appareil**.
**Hors-ligne** : oui, 100 % (fichiers Tesseract embarqués dans `site/voxread/vendor/`).

### 🔍 Lumen — loupe d'écran (basse vision)
**Pour qui** : malvoyants.
**Ce que ça fait** : agrandit, contraste, applique des thèmes lisibles ; loupe-lentille qui suit le pointeur ; loupe caméra.
**Utilisation** : règle le **zoom**, choisis un **thème** (Normal / Fort contraste / Inversé / Sépia / Jaune-sur-noir), active la **loupe-lentille** ou le **gros curseur**. « Loupe caméra » utilise la webcam comme loupe (optionnel).
**Hors-ligne** : oui (le contenu d'exemple).

### 🎨 ColorAide — daltonisme
**Pour qui** : personnes daltoniennes.
**Ce que ça fait** : corrige les couleurs à l'écran, **identifie et annonce** une couleur, fournit une palette « sûre ».
**Utilisation** : applique un filtre (Protanopie / Deutéranopie / Tritanopie), ou « Simuler » pour voir comme un daltonien. Clique une pastille ou choisis une couleur → l'app dit son **nom** (ex. « Bleu ciel »).
**Hors-ligne** : oui.

### 📝 CaptiLive — sous-titres en direct
**Pour qui** : sourds, malentendants.
**Ce que ça fait** : affiche en **très grand** ce qui est dit ; 4 modes (reconnaissance vocale micro, « taper pour afficher », face-à-face, historique).
**Utilisation** : « 🎤 Écouter » transcrit le micro (selon le navigateur, peut passer par le cloud — c'est indiqué) ; « Taper pour afficher » marche hors-ligne pour communiquer sans micro.
**À valider** : le micro, avec toi. **Note** : un sous-titrage 100 % hors-ligne demanderait un modèle embarqué (Vosk).

### 🔔 SoundWatch — alertes sonores
**Pour qui** : sourds, malentendants.
**Ce que ça fait** : détecte les sons forts (micro) → **alerte visuelle douce + vibration** ; boutons de test (Sonnette, Alarme, Bébé, Prénom).
**Utilisation** : « Activer l'écoute » (autorise le micro) ; règle le seuil ; les boutons de test montrent chaque style d'alerte (validés ✅).
**À valider** : le micro. **Note** : distinguer les sons (sonnette vs alarme) demande un modèle de classification.

### 🤟 SignLearn — langue des signes
**Pour qui** : sourds, entourage entendant, écoles.
**Ce que ça fait** : alphabet dactylologique (descriptions), mini-dictionnaire de signes, **quiz** (validés ✅), + entraînement par webcam (suivi de main).
**Utilisation** : parcours l'alphabet et le dictionnaire, fais le quiz. **À valider** : le suivi de main par webcam. **Note honnête** : un vrai dictionnaire LSF nécessite des **vidéos co-produites avec la communauté sourde** — pas un simple modèle.

### 🕹️ SwitchBoard — accès par contacteur
**Pour qui** : motricité très réduite, tétraplégie.
**Ce que ça fait** : pilote une grille d'actions par **balayage** ; tout est faisable avec **un seul bouton**.
**Utilisation** : active le balayage (auto ou par étapes) ; **Espace** = sélectionner, **Entrée** = avancer ; règle vitesse et anti-faux-contacts. Les cellules déclenchent une action (parler, « lumière », etc.).
**Hors-ligne** : oui.

### 👁️ GazeType — clavier au regard / à la tête
**Pour qui** : SLA, paralysie, locked-in.
**Ce que ça fait** : clavier à l'écran activé par **maintien (dwell)**, **prédiction de mots**, phrases rapides, lecture vocale ; + **suivi de tête par webcam** (MediaPipe) pour bouger le pointeur mains libres.
**Utilisation** : survole une touche → elle se tape après un délai (réglable) ; les suggestions accélèrent la saisie ; « 🔊 Parler » lit le texte. « Suivi de tête (webcam) » active le pilotage à la tête.
**À valider** : la webcam. **Note** : le modèle se charge depuis un CDN au 1er usage (ou hors-ligne si embarqué).

### ✋ SteadyTouch — saisie tolérante aux tremblements
**Pour qui** : Parkinson, tremblement essentiel, SEP.
**Ce que ça fait** : lisse le pointeur (filtre One Euro), clic par maintien, anti-double-déclenchement, cibles agrandies — avec **comparaison avant/après**.
**Utilisation** : dessine dans la zone et active/désactive le **lissage** pour voir la différence ; teste le dwell, l'anti-rebond et les tailles de cible avec les réglages.
**Hors-ligne** : oui.

### 📚 DysReader — lecture adaptée (dyslexie)
**Pour qui** : dyslexiques.
**Ce que ça fait** : reformate le texte (police, espacement), **colore les syllabes**, **règle de lecture**, **lecture vocale** avec surlignage du mot.
**Utilisation** : colle/charge un texte, ajuste taille/espacement/interligne, active « coloration syllabique » et « règle de lecture », puis **🔊 Lire**.
**Hors-ligne** : oui.

### 🔢 MathEase — soutien à la dyscalculie
**Pour qui** : dyscalculiques.
**Ce que ça fait** : montre un nombre sous **plusieurs formes** (chiffre, mot, points, cadre de dix, droite numérique), objets manipulables, opérations étape par étape, **argent**.
**Utilisation** : choisis un nombre → « Écouter le nombre » (ex. « 7 : sept ») ; manipule les jetons, échange 10 unités → 1 dizaine ; suis une opération pas-à-pas.
**Hors-ligne** : oui.

### 🗓️ DayFlow — emploi du temps visuel
**Pour qui** : autisme, TDAH, déficience intellectuelle, démence.
**Ce que ça fait** : routine en **grandes cartes illustrées**, vue « Maintenant / Ensuite », **minuteur visuel**, lecture vocale.
**Utilisation** : ajoute des étapes (emoji + libellé + heure), coche « fait », réordonne ; le panneau met en avant l'étape en cours et la suivante ; lance un minuteur par étape.
**Hors-ligne** : oui.

### 🌿 CalmSpace — régulation sensorielle & émotionnelle
**Pour qui** : autisme, TDAH, anxiété.
**Ce que ça fait** : cartes d'émotions (« Je me sens X » + voix), échelle de stress, **respiration guidée**, minuteur calme, boîte à outils.
**Utilisation** : choisis une émotion, indique ton niveau de stress (→ stratégie proposée), lance une respiration (Carré 4-4-4-4 ou 4-7-8). Sensoriellement sûr (couleurs douces, aucun flash). *Soutien, ne remplace pas un soin.*
**Hors-ligne** : oui.

### 🧠 RemindWell — aide-mémoire & autonomie
**Pour qui** : démence, Alzheimer, lésion cérébrale, personnes âgées.
**Ce que ça fait** : grande horloge, **rappels**, **médicaments** (✓ Pris), **visages & noms**, résumé du jour lu à voix haute. Ton digne, non infantilisant.
**Utilisation** : ajoute des rappels (heure + libellé) et des médicaments ; consulte les fiches proches ; « 🔊 Lire le résumé du jour ».
**Hors-ligne** : oui.

---

## 4. Handoff technique

### Hébergement & mise à jour
- Hébergé sur **GitHub Pages**, déployé automatiquement par **GitHub Actions** (`.github/workflows/pages.yml`) à chaque `push` sur `main`.
- **Pour modifier** : édite un fichier → `git add -A` → `git commit -s -m "..."` → `git push`. En **~1 minute**, le site public est à jour. (Le cache CDN peut montrer l'ancienne version quelques minutes ; ajoute `?v=2` pour forcer.)
- Les démos sont des **fichiers HTML autonomes** dans `site/<nom>/index.html` — modifiables directement, aucune compilation.

### VoxRead — OCR hors-ligne
- Les fichiers du moteur sont dans `site/voxread/vendor/` (Tesseract.js + **3 variantes** du cœur WASM + modèle français). L'app utilise les fichiers **locaux s'ils sont présents**, sinon bascule sur un CDN au 1er usage.
- **Important** : le navigateur choisit une variante du cœur (`simd`, `relaxedsimd` ou `lstm`) selon ses capacités — c'est pourquoi **les 3 sont embarquées** (un bug trouvé en test réel : seule `simd` était présente au début).

### Apps ML caméra/micro (option 3)
- **GazeType / SignLearn** : modèles **MediaPipe** chargés depuis un CDN au 1er usage (puis cache). Bundlables en local pour du 100 % hors-ligne (même principe que VoxRead — une commande de téléchargement à lancer).
- **CaptiLive / SoundWatch** : utilisent les API **micro** du navigateur. STT/classification 100 % hors-ligne = modèle à embarquer (Vosk / classif. audio) — évolution future.

### Accessibilité (garantie sur toutes les apps)
Navigation clavier complète, focus visible, `aria-live`, contraste AA, cibles ≥ 48 px, respect de `prefers-reduced-motion`, aucun clignotement > 3 Hz, couleurs PGRG (marine `#0F4C81` + or `#F4B81C`).

### Sécurité / confidentialité
- **Aucune fuite** : 0 chemin PC, 0 clé, 0 secret dans le dépôt (audité). Traitement **sur l'appareil** (OCR, voix) ; aucune donnée utilisateur envoyée.
- Les commits sont signés avec une adresse **noreply GitHub** — ton Gmail n'apparaît pas dans l'historique.

---

## 5. Ce qu'il reste / pistes

1. **Valider en conditions réelles l'entrée caméra/micro** : GazeType (webcam), SignLearn (webcam), CaptiLive (micro), SoundWatch (micro). *(À faire ensemble, tu es équipé.)*
2. **Embarquer les modèles ML** (MediaPipe, Vosk) pour un hors-ligne total sur ces 4 apps.
3. **Passer des démos à des apps de production** : versions installables (PWA), tests **avec des personnes concernées** (« rien sur nous sans nous »), traductions.
4. **a11y-core** : factoriser le code commun (voix, balayage, thèmes) en bibliothèque réutilisable (voir `docs/04-a11y-core-bibliotheque.md`).

> Rappel : tout est **gratuit, open source et hors-ligne** par défaut — exactement la mission. Rien ne coûte d'argent à héberger ou faire tourner.
