# Principes d'accessibilité & standards

Ce document fixe les règles de conception **communes à toutes les applications**. Elles ne sont pas optionnelles : une fonctionnalité qui les enfreint n'est pas considérée comme terminée.

## 1. Les 7 principes du *Universal Design*

1. **Usage équitable** — utile à tous, sans stigmatiser.
2. **Flexibilité** — s'adapte à des capacités et préférences variées.
3. **Simple et intuitif** — indépendant de l'expérience, de la langue, de la concentration.
4. **Information perceptible** — par plusieurs canaux (visuel, sonore, tactile).
5. **Tolérance à l'erreur** — minimise les conséquences d'une mauvaise manipulation.
6. **Effort physique minimal**.
7. **Taille et espace** suffisants pour l'approche et l'usage.

## 2. Conception multi-modale (la règle d'or)

Toute information et toute action doivent être disponibles par **au moins deux canaux** parmi : vue, audition, toucher/haptique. Concrètement : tout ce qui est visuel a une alternative sonore *et* peut être annoncé par lecteur d'écran ; toute alerte sonore a une alternative visuelle/vibrante ; toute action à la souris est faisable au clavier, au contacteur et (si pertinent) à la voix ou au regard.

## 3. Méthodes d'accès supportées (transversal `a11y-core`)

Chaque app doit être pilotable par, au minimum :

- **clavier** complet (ordre logique, focus visible) ;
- **balayage par contacteur** (*switch scanning*, 1 ou 2 contacteurs, balayage automatique ou par étapes) ;
- **lecteur d'écran** (NVDA, Orca, VoiceOver, TalkBack) via rôles/labels corrects ;
- **pointeur** agrandi, **clic par fixation** (*dwell*), **tactile** à grandes cibles.

Selon l'app : **regard** (*eye-gaze*), **tête** (*head-tracking*), **voix**.

## 4. Seuils concrets (critères de revue)

| Critère | Seuil minimum |
|---|---|
| Contraste texte | WCAG 2.2 **AA** (4.5:1 ; 3:1 grandes tailles) ; viser AAA quand possible |
| Cibles tactiles/clic | **≥ 44 × 44 px** (idéalement 48) |
| Clignotement | **Aucun** éclair > 3 Hz (risque épilepsie photosensible) |
| Mouvement/animation | Respecte `prefers-reduced-motion` ; jamais essentiel |
| Taille de texte | Redimensionnable jusqu'à **200 %** sans casse |
| Temps de réaction | Réglable ; aucun délai imposé non désactivable |
| Langue | Tout texte traduisible ; pas de texte « en dur » dans le code/les images |
| Audio | Jamais de son automatique non coupable ; transcriptions/sous-titres fournis |

## 5. Conformité aux standards

On vise la conformité avec les référentiels reconnus, non par formalisme mais parce qu'ils encodent des décennies d'expérience :

- **WCAG 2.2** (W3C) niveau AA visé, AAA quand réaliste — base de l'accessibilité numérique.
- **WAI-ARIA** — sémantique pour les technologies d'assistance.
- **EN 301 549** — norme européenne harmonisée des TIC accessibles (référence de la directive et de l'*European Accessibility Act*).
- **RGAA 4** (France) — déclinaison française, utile pour le public francophone.
- **Section 508** / **ADA** (États-Unis) — pour la portée internationale.
- **CDPH / UN CRPD** — cadre des droits (le « pourquoi »).
- **European Accessibility Act (EAA)** — applicable depuis **juin 2025** ; renforce l'exigence de produits/services numériques accessibles dans l'UE.

> On ne se contente pas de cocher des cases : **la conformité est un plancher, le test avec des utilisateurs réels est le plafond.**

## 6. Sécurité spécifique aux publics fragiles

- **Épilepsie photosensible** : pas de flash, pas de motifs à fort contraste clignotants ; respect des seuils WCAG 2.3.
- **Enfants** : aucune collecte de données, aucun lien sortant non signalé, aucun achat, contenu approprié.
- **Personnes dépendantes / sous tutelle** : pas de fonction pouvant être détournée pour nuire ; verrous parentaux/aidants transparents.
- **Charge cognitive** : langage simple (FALC — Facile À Lire et à Comprendre), une action à la fois, possibilité de tout annuler.

## 7. Tester comme on l'exige

- **Tests automatisés** (axe-core, Lighthouse, pa11y) en intégration continue — détectent ~30–40 % des problèmes.
- **Tests manuels** au clavier, au lecteur d'écran, au contacteur, pour chaque sortie.
- **Tests avec des personnes concernées** : la seule preuve qui compte vraiment. Budget et délais le prévoient explicitement.

## 8. FALC — Facile À Lire et à Comprendre

Pour les publics avec déficience intellectuelle ou troubles cognitifs : phrases courtes, un sujet par phrase, vocabulaire courant, pictogrammes accompagnant le texte, pas de métaphore ni de second degré. Le FALC bénéficie en réalité à **tout le monde**.
