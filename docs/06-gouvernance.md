# Gouvernance

Comment LibreA11y prend ses décisions et garantit qu'il reste **libre, gratuit et fidèle aux personnes concernées** — même quand le projet grandit.

## 1. Objectifs de la gouvernance

1. **Protéger la mission** : empêcher toute « refermeture » commerciale ou dérive (pub, pistage, paywall).
2. **Donner le pouvoir aux personnes concernées** : « Rien sur nous, sans nous » inscrit dans les structures, pas seulement dans les intentions.
3. **Rester ouvert et méritocratique** : on contribue, on gagne en responsabilité.
4. **Assurer la continuité** : aucun individu indispensable ; le projet survit au départ de n'importe qui.

## 2. Structure proposée

### Conseil consultatif d'usagers (le cœur moral)
Composé majoritairement de **personnes en situation de handicap** et d'aidants/cliniciens. Il a un **droit de regard contraignant** sur les décisions de conception touchant l'accessibilité et la dignité. Une fonctionnalité qu'il juge stigmatisante ou dangereuse ne sort pas.

### Mainteneur·ses (par dépôt)
Responsables techniques d'une app ou de `a11y-core`. Reçoivent et fusionnent les contributions, garantissent les critères d'accessibilité. Le statut se gagne par des contributions de qualité dans la durée.

### Comité de pilotage (*steering*)
Petit groupe (mainteneur·ses élus + représentant·es du conseil d'usagers) qui tranche les arbitrages transverses, la roadmap, les licences, le budget. Décisions publiques et motivées.

### Entité juridique (à terme)
Une **association/fondation à but non lucratif** (loi 1901 en France, ou structure équivalente / *fiscal host* type Open Collective Foundation au début) détient les marques et les noms de domaine, **pas le copyright du code** (qui reste réparti entre contributeurs via le DCO). Cela empêche un rachat de « fermer » le projet.

## 3. Prise de décision

- **Par défaut : consensus recherché** sur les *issues* et *pull requests*, en public.
- **Désaccord persistant** : escalade au comité de pilotage, qui décide à la majorité, en motivant.
- **Décisions touchant l'accessibilité/la dignité** : le conseil d'usagers dispose d'un **veto**.
- **Transparence** : ordres du jour, comptes rendus et budgets publiés.

## 4. Garde-fous anti-dérive (« promesse de gratuité »)

- **Licence** MIT (voir [`../LICENSE.md`](../LICENSE.md)) : code libre et réutilisable.
- **Pas de CLA de cession** : personne ne peut relicencier unilatéralement le projet.
- **Statuts** de l'entité inscrivant la gratuité et l'interdiction de pub/revente de données dans l'objet social.
- **Engagement public** : charte « 100 % gratuit pour toujours » signée par les mainteneur·ses.

## 5. Marque & qualité

Le nom « LibreA11y » et les logos sont protégés pour éviter les usages trompeurs (ex. un faux « LibreA11y Pro » payant). Toute personne peut *forker* le code (c'est le but), mais l'usage de la **marque** suppose le respect de la charte.

## 6. Sécurité & signalement

- Politique de **divulgation responsable** des vulnérabilités (`SECURITY.md`), avec contact dédié.
- Vigilance chaîne d'approvisionnement (dépendances signées, *builds* reproductibles visés).
- Canal de signalement pour tout usage détourné mettant en danger un public fragile.

## 7. Continuité

- Au moins **deux mainteneur·ses** par composant critique (pas de point unique de défaillance).
- Accès partagé (et en *backup*) aux infrastructures, documenté.
- Données et déploiements reproductibles depuis le dépôt.
