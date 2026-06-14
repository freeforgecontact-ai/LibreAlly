# Impact & éthique

Construire pour des publics vulnérables impose une **responsabilité renforcée**. Ce document fixe comment on mesure le bien qu'on fait — et comment on évite de nuire.

## 1. Mesurer l'impact (sans trahir la vie privée)

Paradoxe assumé : on refuse la télémétrie, donc on **ne piste pas** les usages. On mesure autrement, par des moyens éthiques :

- **Téléchargements et installations** (chiffres agrégés des dépôts/magasins, anonymes).
- **Retours qualitatifs** : témoignages, études de cas avec écoles, orthophonistes, familles (avec consentement).
- **Adoption institutionnelle** : nombre d'écoles, MDPH, associations, hôpitaux déployant la suite.
- **Réutilisation de `a11y-core`** par des projets tiers (effet d'entraînement).
- **Couverture linguistique** : langues traduites, surtout les langues mal desservies.
- **Enquêtes opt-in** : auprès d'utilisateurs volontaires, jamais imposées.

> Principe : **mieux vaut une mesure imparfaite et respectueuse qu'une donnée précise extorquée.**

## 2. Indicateurs de réussite

| Dimension | Indicateur |
|---|---|
| Portée | Installations, pays, langues |
| Profondeur | Déploiements institutionnels, usage durable |
| Écosystème | Projets tiers réutilisant `a11y-core`, contributeurs actifs |
| Équité | Part d'usage hors pays riches / hors-ligne |
| Qualité | Conformité WCAG, résultats des tests avec usagers |

## 3. Éthique de conception

- **« Rien sur nous, sans nous »** : aucune décision d'accessibilité sans la voix des personnes concernées (inscrit dans la [gouvernance](06-gouvernance.md)).
- **Dignité** : pas d'infantilisation, pas d'esthétique « médicale » par défaut ; l'utilisateur choisit.
- **Autonomie** : les outils augmentent l'indépendance, ne créent pas de dépendance ni de surveillance déguisée.
- **Pas de *dark patterns*** : aucune manipulation, aucune culpabilisation, aucun verrouillage.

## 4. Sécurité des publics fragiles

- **Enfants** : zéro collecte de données, zéro pub, zéro lien sortant non signalé, contenu approprié, conformité aux cadres de protection des mineurs.
- **Personnes sous tutelle / dépendantes** : fonctions d'aidant **transparentes** (la personne sait ce qui est partagé), jamais d'espionnage caché.
- **Épilepsie photosensible** : respect strict des seuils anti-clignotement (WCAG 2.3).
- **Données de santé** : traitées comme sensibles ; restent locales par défaut.

## 5. Risques et atténuations

| Risque | Atténuation |
|---|---|
| Détournement d'un outil d'aidant en outil de surveillance | Transparence obligatoire côté personne aidée ; pas de mode caché |
| Mauvaise traduction nuisant à la compréhension | Relecture par locuteurs natifs + personnes concernées avant publication |
| Dépendance à un modèle d'IA biaisé (voix, signes, OCR) | Modèles ouverts, audités ; jeux de données documentés ; alternatives |
| Promesse non tenue à un public fragile | Ne pas annoncer une app avant qu'elle soit testée avec des usagers |
| « Refermeture » commerciale | Licences copyleft + gouvernance (voir docs dédiées) |
| Abandon du projet | Multi-mainteneurs, formats ouverts, code et données exportables |

## 6. Limites assumées

On ne **remplace pas** un suivi médical, orthophonique ou éducatif : nos outils **soutiennent** des professionnels et des proches, ils ne s'y substituent pas. La documentation le dit clairement à l'utilisateur. Pour les fonctions à portée clinique (rééducation, communication), on travaille **avec** des cliniciens, sans prétendre à une validation médicale qu'on n'a pas.

## 7. Engagement

Un **rapport annuel d'impact et d'éthique** public rend compte : ce qui a marché, ce qui a échoué, les incidents, les corrections. La transparence sur nos erreurs fait partie de l'éthique.
