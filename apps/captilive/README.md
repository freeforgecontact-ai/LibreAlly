# CaptiLive

> Sous-titres en direct par reconnaissance vocale sur l'appareil — voir en temps réel ce qui se dit autour de vous.
> *Live on-device speech-to-text captions — see in real time what is being said around you.*

**Statut :** 📋 Spécification complète ✓ · 💻 Code à venir

---

## Spécification

📄 [Spécification détaillée](../../docs/apps/05-captilive-soustitres.md)

---

## Thème visuel

🎨 Thème : couleurs PGRG — voir [charte visuelle](../../docs/10-charte-visuelle.md) et [tokens CSS](../../assets/tokens.css)

---

## Pile envisagée

| Cible | Technologie |
|-------|-------------|
| Web / PWA (principal) | Svelte + Vite + Service Worker — fonctionne hors-ligne, installable |
| Bibliothèque commune | [a11y-core](../a11y-core/) — affichage haute lisibilité, préférences visuelles |
| Reconnaissance vocale sur appareil | Web Speech API (PWA) ; Whisper.cpp via Tauri/Capacitor si hors-ligne complet requis |

---

## Contribuer

Voir [CONTRIBUTING.md](../../CONTRIBUTING.md) pour les prérequis, les conventions de commit (DCO) et la politique d'accessibilité du projet.
