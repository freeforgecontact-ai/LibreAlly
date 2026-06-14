# `a11y-core` — la bibliothèque commune réutilisable

Le cœur du projet. **Toutes** les apps de LibreA11y s'appuient dessus, et **des projets tiers peuvent l'intégrer** (licence MIT/Apache-2.0). C'est notre principal effet de levier : on code une fonction d'accessibilité **une fois**, et tout l'écosystème en profite.

## 1. Pourquoi un cœur partagé

- **Ne pas réinventer** la synthèse vocale, le balayage ou la prédiction dans chaque app.
- **Cohérence** : même comportement d'accessibilité partout (un utilisateur retrouve ses repères).
- **Qualité** : on concentre l'effort de test et d'audit sur un composant central.
- **Bien commun** : un tiers qui fait une app éducative peut rendre la sienne accessible gratuitement.

## 2. Modules

### 2.1 Synthèse vocale (TTS)
- **Moteur principal** : [Piper](https://github.com/rhasspy/piper) — neuronal, hors-ligne, voix naturelles, nombreuses langues, léger.
- **Repli** : [eSpeak-NG](https://github.com/espeak-ng/espeak-ng) — minuscule, ~100 langues, pour appareils très faibles ou langues rares.
- **Fonctions** : choix de voix (dont voix d'enfant pour la CAA), vitesse, hauteur, mise en évidence du mot lu, **banque de voix personnelle** (important pour la SLA : enregistrer sa voix tant qu'on l'a).

### 2.2 Reconnaissance vocale (STT)
- **Léger** : [Vosk](https://alphacephei.com/vosk/) — hors-ligne, faible empreinte, bonne latence.
- **Qualité** : [whisper.cpp](https://github.com/ggerganov/whisper.cpp) — meilleure précision si l'appareil suit.
- **Fonctions** : transcription en continu, ponctuation, vocabulaire personnalisable.

### 2.3 OCR (reconnaissance de texte)
- [Tesseract](https://github.com/tesseract-ocr/tesseract) — hors-ligne, multilingue ; pré-traitement d'image pour fiabiliser la capture caméra.

### 2.4 Moteur de balayage par contacteur (*switch scanning*)
Le module le plus stratégique pour les handicaps moteurs lourds.
- Balayage **automatique** (défilement temporisé) ou **par étapes** (un contacteur avance, l'autre sélectionne).
- **1 ou 2 contacteurs** ; sources : touche clavier, clic, écran, GPIO (Raspberry Pi), manette, contacteur Bluetooth.
- Réglages : vitesse, temps d'acceptation (anti-faux-contacts), nombre de balayages, ordre (ligne/colonne, groupes).
- **Retour** visuel + sonore à chaque pas.

### 2.5 Clic par fixation (*dwell*) & pointage alternatif
- Sélection en maintenant le pointeur (souris, tête, regard) sur une cible un temps réglable.
- Lissage du pointeur (utile tremblements / contrôle imprécis).

### 2.6 Prédiction de mots & abréviations
- Prédiction et complétion (accélère la saisie au regard/contacteur, où chaque sélection coûte cher).
- **Expansion d'abréviations**, phrases pré-enregistrées.
- Apprentissage **local** du vocabulaire de l'utilisateur (jamais envoyé ailleurs).

### 2.7 Thèmes & rendu accessible
- Thèmes **fort contraste**, sombre, **sépia/dyslexie**, **mouvement réduit**, **anti-crise** (épilepsie).
- Polices au choix dont [OpenDyslexic](https://opendyslexic.org/) ; espacement réglable (interlettre, interligne, intermot).
- Tailles tactiles ≥ 44 px garanties par les composants.

### 2.8 Jeux de symboles (CAA & pictogrammes)
- **Par défaut : [Mulberry Symbols](https://mulberrysymbols.org/)** (CC BY-SA, usage commercial permis → 100 % réutilisable).
- En option : **ARASAAC** (CC BY-NC-**SA** — restriction non commerciale signalée), **Sclera**.
- Accès unifié via [Global Symbols](https://globalsymbols.com/) ; recherche multilingue ; symboles personnalisables (photo perso).

### 2.9 Entrées matérielles & capteurs
- Abstraction pour contacteurs, **GPIO Raspberry Pi**, manettes, suivi **tête/regard** par webcam (vision par ordinateur), haptique.

### 2.10 Internationalisation
- Couche i18n commune (catalogues Fluent/`.po`), prise en charge **RTL** et systèmes d'écriture complexes.

## 3. Principes d'API

- **Modulaire** : on n'embarque que les modules nécessaires (une app de lecture n'a pas besoin du balayage matériel).
- **Multiplateforme** : API TypeScript unifiée ; bindings natifs (Rust/C++) là où la performance/les périphériques l'exigent.
- **Sans état caché** : aucune donnée envoyée nulle part ; tout est local et inspectable.
- **Stable et documentée** : versionnage sémantique, car des tiers en dépendent.

## 4. Pourquoi c'est aussi un cadeau à l'écosystème

Un développeur de jeu éducatif, de liseuse, de domotique… peut importer `a11y-core` et obtenir **gratuitement** : synthèse vocale hors-ligne, balayage au contacteur, thèmes accessibles, prédiction. **Rendre les autres logiciels accessibles fait partie de la mission**, pas seulement nos propres apps.

## 5. Réutiliser l'existant (ne pas réinventer)

`a11y-core` est surtout une **intégration soignée** de briques libres éprouvées (Piper, Vosk, whisper.cpp, Tesseract, OpenDyslexic, Mulberry) + ce qui manque vraiment : un **moteur de balayage** moderne et multiplateforme, une **couche d'accès unifiée**, et une **cohérence** d'ensemble. On contribue en amont à ces projets plutôt que de les copier.
