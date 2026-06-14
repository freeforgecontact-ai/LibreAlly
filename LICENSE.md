# Licences / Licensing

LibreA11y utilise une **double stratégie de licence** pour rester libre *et* maximiser l'adoption.

## Le choix

| Composant | Licence | Pourquoi |
|---|---|---|
| **Applications** (Parlo, Lumen, etc.) | **GPL-3.0-or-later** | *Copyleft* fort : toute version dérivée distribuée doit rester open source. L'outil ne peut pas être « refermé » par un acteur commercial. |
| **Bibliothèques** (`a11y-core`, parseurs de formats, composants UI) | **MIT** ou **Apache-2.0** | Adoption maximale : n'importe qui, y compris une entreprise, peut intégrer notre moteur de balayage ou de synthèse vocale dans son propre produit. Plus la techno d'accessibilité se répand, mieux c'est. |
| **Contenus** (symboles, illustrations, voix, docs) | **CC BY-SA 4.0** | Réutilisables et partageables, attribution + partage à l'identique. |
| **Jeux de données** (modèles, corpus de signes) | **CC BY 4.0** ou **CC0** | Pour réduire les frictions de recherche et d'entraînement. |

> Apache-2.0 est préféré à MIT pour les composants à risque de brevet (entrée, IA), car il inclut une clause de licence de brevet explicite.

## Pourquoi pas une licence « non commerciale » (NC) ?

Tentant pour « rester gratuit », mais les licences NC (ex. CC BY-NC) **excluent** des usages légitimes : une école qui facture la cantine, une association qui vend un appareil à prix coûtant, une distribution Linux commerciale. Elles fragmentent aussi l'écosystème open source. On garantit la gratuité par le **copyleft** et la **gouvernance**, pas par une interdiction commerciale.

⚠️ **Attention aux symboles ARASAAC** : ils sont en CC BY-NC-SA (non commercial). Pour rester 100 % réutilisables, on privilégie **Mulberry Symbols** (CC BY-SA, usage commercial permis) comme jeu par défaut, et on propose ARASAAC en option en avertissant de la restriction. Voir [`docs/04-a11y-core-bibliotheque.md`](docs/04-a11y-core-bibliotheque.md).

## Contributor License Agreement (CLA)

Pas de CLA qui transfère les droits à une entité unique (cela créerait un risque de « refermeture » future). On utilise un **Developer Certificate of Origin (DCO)** : chaque commit est signé (`git commit -s`), le contributeur garde ses droits, et le code reste sous la licence du projet.

## Fichiers de licence

Chaque dépôt contient le texte intégral de sa licence dans un fichier `LICENSE` à la racine. Ce document-ci n'explique que la *stratégie*.

---

# Licensing (English summary)

LibreA11y uses a **dual-licensing strategy**: **GPL-3.0** for applications (strong copyleft keeps them free forever) and **MIT/Apache-2.0** for libraries like `a11y-core` (maximum adoption, including by third parties). Content is **CC BY-SA 4.0**, datasets **CC BY 4.0 / CC0**. We avoid non-commercial (NC) licenses because they exclude legitimate uses and fragment the ecosystem; freedom is guaranteed by copyleft and governance instead. Contributions use a **DCO** (signed commits), never a copyright-assignment CLA. Note: default symbol set is **Mulberry** (CC BY-SA, commercial OK) rather than ARASAAC (CC BY-NC-SA).
