# Licences / Licensing

LibreA11y est **entièrement sous licence MIT** : une seule licence libre et permissive pour tout le projet — applications *et* bibliothèques — afin de rester libre *et* de maximiser l'adoption.

## Le choix

| Composant | Licence | Pourquoi |
|---|---|---|
| **Applications** (Parlo, Lumen, etc.) | **MIT** | Licence libre permissive : tout le monde peut utiliser, modifier et redistribuer les applications, y compris dans un produit commercial. La techno d'accessibilité se répand sans friction. |
| **Bibliothèques** (`a11y-core`, parseurs de formats, composants UI) | **MIT** | Adoption maximale : n'importe qui, y compris une entreprise, peut intégrer notre moteur de balayage ou de synthèse vocale dans son propre produit. Plus la techno d'accessibilité se répand, mieux c'est. |
| **Contenus** (symboles, illustrations, voix, docs) | **CC BY-SA 4.0** | Réutilisables et partageables, attribution + partage à l'identique. |
| **Jeux de données** (modèles, corpus de signes) | **CC BY 4.0** ou **CC0** | Pour réduire les frictions de recherche et d'entraînement. |

> Le texte intégral de la licence MIT du projet se trouve dans le fichier [`LICENSE`](LICENSE) à la racine.

## Bibliothèques et dépendances tierces

Les composants tiers que nous intégrons (bibliothèques, modèles, outils d'inspiration) **restent sous leurs propres licences** — typiquement **MIT** ou **Apache-2.0** — que nous respectons et créditons. Apache-2.0 est notamment apprécié pour les composants à risque de brevet (entrée, IA), car il inclut une clause de licence de brevet explicite. Quand nous réutilisons un tel composant, sa licence d'origine s'applique à sa portion de code.

## Pourquoi pas une licence « non commerciale » (NC) ?

Tentant pour « rester gratuit », mais les licences NC (ex. CC BY-NC) **excluent** des usages légitimes : une école qui facture la cantine, une association qui vend un appareil à prix coûtant, une distribution Linux commerciale. Elles fragmentent aussi l'écosystème open source. On garantit la gratuité par la **gouvernance** et l'engagement public, pas par une interdiction commerciale.

⚠️ **Attention aux symboles ARASAAC** : ils sont en CC BY-NC-SA (non commercial). Pour rester 100 % réutilisables, on privilégie **Mulberry Symbols** (CC BY-SA, usage commercial permis) comme jeu par défaut, et on propose ARASAAC en option en avertissant de la restriction. Voir [`docs/04-a11y-core-bibliotheque.md`](docs/04-a11y-core-bibliotheque.md).

## Contributor License Agreement (CLA)

Pas de CLA qui transfère les droits à une entité unique (cela créerait un risque de « refermeture » future). On utilise un **Developer Certificate of Origin (DCO)** : chaque commit est signé (`git commit -s`), le contributeur garde ses droits, et le code reste sous la licence du projet.

## Fichiers de licence

Chaque dépôt contient le texte intégral de sa licence dans un fichier `LICENSE` à la racine. Ce document-ci n'explique que la *stratégie*.

---

# Licensing (English summary)

LibreA11y is **fully MIT-licensed**: a single permissive license for the whole project — applications *and* libraries like `a11y-core` — for maximum freedom and adoption. Content is **CC BY-SA 4.0**, datasets **CC BY 4.0 / CC0**. Third-party components we integrate keep their own licenses (typically **MIT / Apache-2.0**), which we respect and credit. We avoid non-commercial (NC) licenses because they exclude legitimate uses and fragment the ecosystem; freedom is guaranteed by governance and a public commitment instead. Contributions use a **DCO** (signed commits), never a copyright-assignment CLA. Note: default symbol set is **Mulberry** (CC BY-SA, commercial OK) rather than ARASAAC (CC BY-NC-SA). The full MIT license text lives in [`LICENSE`](LICENSE).
