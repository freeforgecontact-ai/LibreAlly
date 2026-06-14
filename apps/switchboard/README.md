# SwitchBoard

> Accès par contacteur et balayage (*switch scanning*) — tout piloter avec un seul bouton, pour les personnes dont la motricité ne permet ni souris ni écran tactile précis.
> *Switch scanning access — control everything with a single button, for people whose motor abilities preclude mouse or precise touch.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir


▶ **Démo en ligne** : https://freeforgecontact-ai.github.io/LibreAlly/switchboard/ · **Démo locale** : [../../site/switchboard/](../../site/switchboard/)

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/08-switchboard-contacteur.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — moteur de balayage, gestion des contacteurs BLE/USB, focus management |
| Accès Bluetooth (contacteur sans fil) | Tauri (bureau) ou Capacitor (mobile) — Web Bluetooth en complément |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
