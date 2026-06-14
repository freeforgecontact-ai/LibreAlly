# Financement & pérennité (sans jamais devenir payant)

Le défi : faire vivre un projet **100 % gratuit** dans la durée, sans SaaS, sans pub, sans revente de données. C'est possible — beaucoup de communs numériques majeurs (Blender, VLC, Signal, Krita, NVDA) le démontrent. Voici la stratégie.

## 1. Règle d'or

On finance le **travail** (développement, design, traduction, tests), jamais en restreignant l'**accès**. Aucune fonctionnalité n'est réservée à ceux qui paient. Le produit est, et reste, intégralement gratuit.

## 2. Sources de financement (diversifiées par principe)

Diversifier évite la dépendance à un seul bailleur.

### a. Subventions (cœur du modèle)
Le financement le plus aligné pour un commun d'intérêt public.
- **NLnet Foundation / NGI Zero** (UE) — finance spécifiquement l'open source d'intérêt général, y compris accessibilité et vie privée. Cible prioritaire dès la Phase 1.
- **Sovereign Tech Fund / Agency** (Allemagne) — soutient les infrastructures open source critiques.
- **Programmes UE** (Horizon Europe, Digital Europe, Erasmus+ pour le volet éducatif).
- **Fondations** liées au handicap, à la santé, à l'éducation (nationales et internationales).
- **Fonds publics handicap** (en France : CNSA, dispositifs des MDPH, appels à projets régionaux ; équivalents ailleurs).
- **Google.org**, **Mozilla**, **Patrick J. McGovern Foundation**, programmes « tech for good ».

### b. Dons (récurrents et ponctuels)
- **Open Collective** (transparence totale des dépenses — un atout de confiance), **GitHub Sponsors**, **Liberapay**.
- Campagnes ponctuelles pour un objectif concret (« financer la voix française de Parlo »).

### c. Partenariats institutionnels (prestation, pas paywall)
- **Écoles, MDPH, hôpitaux, EHPAD, associations** financent du **déploiement, de la formation, de l'adaptation** — pas l'accès au logiciel.
- **Contrats de soutien/maintenance** pour des organisations qui veulent une garantie de support (le code reste libre).
- **Mécénat de compétences** d'entreprises (dev, design, hébergement).

### d. Contribution en nature
- Hébergement offert (CDN, CI) via programmes open source.
- Temps de bénévoles : développeurs, orthophonistes, traducteurs, testeurs.
- Crédits cloud pour l'entraînement éventuel de modèles (voix, signes).

## 3. Ce qu'on ne fait pas

- ❌ Version « Pro » payante, fonctions premium, quotas.
- ❌ Publicité, sponsoring intrusif, placement.
- ❌ Revente ou exploitation de données (le modèle « gratuit mais c'est vous le produit »).
- ❌ Dépendance à un unique bailleur qui pourrait dicter la direction.

## 4. Maîtrise des coûts

L'architecture **hors-ligne et sans serveur obligatoire** est aussi une stratégie financière : **pas de coûts de serveurs qui explosent avec le nombre d'utilisateurs.** Un utilisateur de plus ne coûte presque rien. Les seuls coûts récurrents sont l'hébergement statique (faible), la CI, et la coordination humaine.

## 5. Transparence financière

- Budget et dépenses **publics** (Open Collective).
- Rapport annuel d'activité et d'impact.
- Priorités de financement décidées en gouvernance ouverte (voir [`06-gouvernance.md`](06-gouvernance.md)).

## 6. Trajectoire de pérennité

1. **Amorçage** : bénévolat + petites subventions + dons → livrer Parlo et prouver l'impact.
2. **Consolidation** : 1–2 subventions structurantes (NLnet, fondation) financent un noyau de mainteneur·ses à temps partiel.
3. **Maturité** : portefeuille diversifié (subventions + dons récurrents + partenariats de déploiement) couvrant une petite équipe permanente + un large réseau de contributeurs.

> L'objectif n'est pas de « faire du chiffre », mais d'atteindre un **seuil de soutenabilité** : assez pour que le commun vive et grandisse, indéfiniment, sans jamais trahir la gratuité.
