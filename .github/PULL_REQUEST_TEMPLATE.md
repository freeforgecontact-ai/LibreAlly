# Description

<!-- Décrivez les changements apportés par cette PR et leur raison d'être. -->
<!-- Liez l'issue associée si applicable : "Ferme #123" / "Closes #123" -->

---

## Type de changement

- [ ] Correction de bug (*bug fix*)
- [ ] Nouvelle fonctionnalité (*feature*)
- [ ] Amélioration de l'accessibilité (*a11y improvement*)
- [ ] Refactoring sans changement de comportement (*refactor*)
- [ ] Documentation
- [ ] Configuration / CI
- [ ] Autre : <!-- précisez -->

---

## ✅ Checklist d'accessibilité obligatoire

Toute PR touchant l'interface utilisateur doit satisfaire ces critères. Cochez chaque case après vérification — ne cochez pas « par défaut ».

### Navigation et contrôle

- [ ] **Navigable au clavier** — toutes les fonctionnalités sont accessibles sans souris (Tab, Entrée, Espace, Échap, flèches)
- [ ] **Navigable au contacteur / balayage** — compatible avec le moteur de scan de SwitchBoard / a11y-core (si applicable)
- [ ] **Focus visible** — l'indicateur de focus est toujours visible et contrasté

### Compatibilité lecteur d'écran

- [ ] **Compatible lecteur d'écran** — testé avec au moins un lecteur d'écran (précisez lequel ci-dessous)
- [ ] **Rôles et labels ARIA corrects** — pas de `aria-*` manquants ou incorrects ; pas de `role="presentation"` abusif
- [ ] **Annonces dynamiques** — les mises à jour de contenu sont annoncées via `aria-live` ou focus management

### Perception visuelle

- [ ] **Contraste AA minimum** — ratio ≥ 4,5:1 pour le texte normal, ≥ 3:1 pour le texte grand et les composants UI (WCAG 1.4.3 / 1.4.11)
- [ ] **Cibles de pointage ≥ 44 × 44 px** — tous les éléments interactifs respectent la taille minimale (WCAG 2.5.8)
- [ ] **Information non véhiculée par la couleur seule** — une alternative (icône, texte, motif) est toujours présente

### Mouvement et effets

- [ ] **Respect de `prefers-reduced-motion`** — les animations et transitions sont désactivées ou réduites si la préférence est active
- [ ] **Aucun clignotement > 3 Hz** — pas de contenu pouvant déclencher une crise photosensible (WCAG 2.3.1)

### Résilience

- [ ] **Fonctionne hors-ligne** — le Service Worker gère correctement l'état hors-ligne ; aucune fonctionnalité critique n'échoue silencieusement

### Technologie d'assistance testée

<!-- Précisez la ou les technologies utilisées pour tester cette PR : -->
<!-- Ex. : NVDA 2024.1 + Firefox 127, VoiceOver iOS 17.5, contacteur BLE, Zoom texte 200%… -->

- Testée avec : <!-- à compléter -->

---

## DCO — Developer Certificate of Origin

- [ ] **Signé DCO** — tous mes commits incluent `Signed-off-by: Prénom Nom <email>` (via `git commit -s`)

> En soumettant cette PR, je certifie que ma contribution est conforme au [Developer Certificate of Origin v1.1](https://developercertificate.org/) et aux termes de la licence du projet.

---

## Contexte supplémentaire

<!-- Captures d'écran, enregistrements de session lecteur d'écran, liens vers des tests, remarques pour les relecteurs… -->
