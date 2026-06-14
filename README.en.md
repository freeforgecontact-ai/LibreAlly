# LibreA11y

**A suite of 100% free, 100% open-source applications to make computing — and everyday life — accessible to every person with a disability, at any age.**

> "Nothing about us, without us." Every app is designed *with* and *for* the people who need it.

*(Version française : [README.md](README.md))*

---

## Why LibreA11y exists

The assistive technology that changes lives is today:

- **expensive** — a serious AAC communication app costs €200–400; eye-gaze software runs into thousands;
- **proprietary and closed** — impossible to adapt, repair, or translate;
- **data-hungry** — many send everything to the cloud, force accounts, and track children;
- **poorly localized** — most exist in only two or three languages.

Hundreds of millions of people are left out — especially children, older adults, and everyone living where money and connectivity are scarce.

**LibreA11y is the opposite: free forever, open, offline, private, multilingual, and co-designed with the people who use it.**

---

## Our principles (non-negotiable)

1. **100% free, 100% open source, forever.** No SaaS, no paid "pro" tier, no ads, no data sales.
2. **Offline-first.** Everything works without internet, on modest devices (old Android, Raspberry Pi).
3. **Privacy by design.** No data leaves the device by default. No mandatory account. Nothing to track.
4. **Multilingual from day one.** The architecture makes community translation easy.
5. **Co-designed with disabled people.** Co-design, not top-down charity.
6. **Interoperable.** Open formats (e.g. Open Board Format for AAC), import/export, no data prison.
7. **Safe.** Seizure-aware design for photosensitive epilepsy, child safety, no dark patterns.

---

## The suite at a glance

A **reusable shared core** (`a11y-core`) powers every app: text-to-speech, speech-to-text, switch scanning, accessible themes, dwell-click, word prediction. Built once, everyone benefits — including third-party projects.

| Domain | App | For whom | In one line |
|---|---|---|---|
| **Communication** | **Parlo** ⭐ | Non-speaking: autism, cerebral palsy, ALS, aphasia/stroke, laryngectomy | Symbol + text board that speaks for you |
| **Vision** | **Lumen** | Low vision | Screen magnifier, contrast and adapted themes |
| **Vision** | **VoxRead** | Blind, low vision, low literacy | Reads documents and camera-captured text aloud (OCR) |
| **Vision** | **ColorAide** | Color blindness | Corrects colors and names a hue on demand |
| **Hearing** | **CaptiLive** | Deaf, hard of hearing | Live captions, computed on-device |
| **Hearing** | **SoundWatch** | Deaf, hard of hearing | Recognizes key sounds → visual/haptic alert |
| **Hearing** | **SignLearn** | Deaf, families, schools | Sign-language learning and dictionary |
| **Motor** | **SwitchBoard** | Severe motor impairment, quadriplegia | Switch access and scanning |
| **Motor** | **GazeType** | ALS, paralysis, locked-in | Keyboard driven by eye-gaze or head, via webcam |
| **Motor** | **SteadyTouch** | Parkinson's, essential tremor | Smooths tremor, enlarges targets |
| **Cognitive / SLD** | **DysReader** | Dyslexia | Adapted reading: font, spacing, syllables, read-aloud |
| **Cognitive / SLD** | **MathEase** | Dyscalculia | Visual, step-by-step math with manipulatives |
| **Cognitive / Neuro** | **DayFlow** | Autism, ADHD, intellectual disability, dementia | Visual schedule and task breakdown |
| **Cognitive / Neuro** | **CalmSpace** | Autism, ADHD, anxiety | Sensory and emotional regulation |
| **Memory** | **RemindWell** | Dementia, Alzheimer's, brain injury, elderly | Reminders, medication, faces-and-names aid |

⭐ = flagship (first MVP).

→ Per-app details: [`docs/apps/`](docs/apps/). Overview and priorities: [`docs/05-suite-vue-ensemble.md`](docs/05-suite-vue-ensemble.md).

---

## How it's built

- **Shared core**: [`a11y-core`](docs/04-a11y-core-bibliotheque.md) — the reusable accessibility library.
- **Maximum reach**: installable web/PWA (works everywhere, offline via service workers) + **Tauri** (lightweight, Rust) for desktop where deep system hooks are needed.
- **On-device AI**: [Piper](https://github.com/rhasspy/piper) (TTS), [Vosk](https://alphacephei.com/vosk/) / [whisper.cpp](https://github.com/ggerganov/whisper.cpp) (STT), [Tesseract](https://github.com/tesseract-ocr/tesseract) (OCR) — all local.
- **Open symbols**: [ARASAAC](https://arasaac.org/), [Mulberry Symbols](https://mulberrysymbols.org/), via [Global Symbols](https://globalsymbols.com/).

---

## Contributing

We need **developers**, **designers**, **speech & occupational therapists**, **translators**, and above all **disabled testers**. Every contribution counts. → [`CONTRIBUTING.md`](CONTRIBUTING.md)

## Funding (without ever going paid)

Grants (NLnet/NGI Zero, Sovereign Tech Fund…), donations (OpenCollective, Liberapay, GitHub Sponsors), partnerships with schools, hospitals and nonprofits. **Never a paywall, never ads, never data sales.** → [`docs/07-financement-perennite.md`](docs/07-financement-perennite.md)

## License

Apps: GPL-3.0 (strong copyleft). Libraries (`a11y-core`, formats, symbols): MIT / Apache-2.0 (maximum adoption). → [`LICENSE.md`](LICENSE.md)

---

*LibreA11y — because accessibility is not a premium feature.*
