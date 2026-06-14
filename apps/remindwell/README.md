# RemindWell

> Aide-mémoire et soutien à l'autonomie pour les personnes vivant avec une démence, une lésion cérébrale ou des pertes liées à l'âge — se souvenir de l'essentiel et rester autonome plus longtemps, avec dignité.
> *Memory aid and autonomy support for people living with dementia, brain injury or age-related decline — remember what matters and stay independent longer, with dignity.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/15-remindwell-memoire.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — navigation simplifiée, gros texte, lecteur d'écran |
| Notifications | Service Worker (Push API) + Capacitor Notifications sur mobile |
| Stockage local | IndexedDB via `idb` — aucune donnée envoyée sans consentement explicite |
| Accès système (alarmes fiables) | Tauri (bureau) ou Capacitor (mobile) si alarmes système requises |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
