# ColorAide — assistance au daltonisme

> **Corrige les couleurs à l'écran et nomme n'importe quelle teinte à la demande.**

## Le besoin

Le daltonisme touche environ **1 homme sur 12 et 1 femme sur 200** (surtout deutéranopie/protanopie, confusion rouge-vert). Ce n'est pas « grave » mais ça pose mille petits obstacles : graphiques rouge/vert, codes couleur, feux, vêtements, supports scolaires, cartes, statuts colorés dans des logiciels. Les solutions existent en ordre dispersé et rarement libres/intégrées.

## Utilisateurs cibles

- Personnes **daltoniennes** (toutes formes : deut/prot/tritanopie, achromatopsie).
- **Élèves** face à des supports basés sur la couleur.
- **Professionnels** (design, électronique, cartographie, data) gênés par les codes couleur.

## Fonctionnalités — MVP

- **Filtres de correction (daltonisation)** à l'écran, par type de daltonisme, intensité réglable.
- **Identificateur de couleur** : viser une zone (caméra) ou un pixel (écran) → **nom de la couleur** affiché et **lu à voix haute**.
- **Simulateur** : montrer à un non-daltonien ce que « voit » un daltonien (utile pour designers/enseignants).

## Fonctionnalités — avancées (poussé à fond)

- **Rehaussement intelligent** : au lieu de juste filtrer, **augmenter les différences** entre couleurs confondues (motifs, contours, étiquettes textuelles surimposées).
- **Mode caméra temps réel** (« lunettes » logicielles) : monde augmenté avec étiquettes de couleur.
- **Vérificateur d'accessibilité des couleurs** pour créateurs : analyser une image/palette/site et signaler les combinaisons problématiques + suggérer des alternatives sûres.
- **Palettes *colorblind-safe*** prêtes à l'emploi (export pour graphiques/design).
- **Assistance vestimentaire/cuisine** : « ces deux chaussettes sont-elles assorties ? », « cette viande est-elle encore rosée ? ».

## Exigences d'accessibilité

- L'app elle-même **n'utilise pas la couleur seule** pour communiquer (texte + forme).
- Lecture vocale des noms de couleur ; compatible lecteurs d'écran.
- Réglages simples ; fonctionne hors-ligne.

## Approche technique

- **Filtres écran** : superposition système (Tauri sur bureau) ou filtres au niveau app/navigateur.
- **Caméra** : PWA + Capacitor (mobile) ; traitement d'image local temps réel.
- **Nommage des couleurs** : conversion espace colorimétrique + base de noms localisée (multilingue).

## Réutiliser l'existant (ne pas réinventer)

S'inspirer de **Color Oracle** (simulateur libre), des algorithmes de daltonisation publiés (Machado et al.), des filtres OS existants. Valeur ajoutée : **tout-en-un libre** (correction + identification + vérificateur + caméra), multiplateforme et hors-ligne.

## Licence & confidentialité

- **MIT** (app) ; les **palettes sûres** et la base de noms en **CC BY**. Aucun envoi d'image.

## Plateformes

Windows, macOS, Linux (filtres écran), Android/iOS (caméra), extension navigateur possible.

## Critères de succès

- Un élève daltonien lit un graphique rouge/vert sans aide.
- L'identificateur nomme correctement les couleurs courantes en temps réel.
- Le vérificateur aide des créateurs à produire des supports *colorblind-safe*.
