# OptAImum

> **Deine KI-Nutzung. Auf das Maximum optimiert.**
> *Your AI usage. Optimized to the maximum.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-0.1.0-indigo.svg)](CHANGELOG.md)
[![Open Source](https://img.shields.io/badge/Open%20Source-❤-green.svg)](https://github.com/cryptoclemens/OptAImum)

OptAImum ist eine kostenlose, quelloffene Webseite, die dabei hilft, die Nutzung von KI-Assistenten wie Claude und ChatGPT zu optimieren – ohne technische Vorkenntnisse.

---

## Features

| Feature | Beschreibung |
|---|---|
| **📝 MD-Creator** | Erstellt personalisierte Profile-, Skill- und Hook-Markdown-Dateien per geführtem Wizard – optional mit Google Gemini KI-Unterstützung |
| **🔄 LLM-Wechsel** | Schritt-für-Schritt-Anleitung zum Wechsel zwischen ChatGPT, Claude, Gemini & Co. in Minuten |
| **🤖 Prompt-Generator** | Sofort einsetzbare Prompts für Claude Cowork, ChatGPT, GitHub Copilot, Cursor AI u.a. |
| **🖥️ VM-Anleitung** | Anbietervergleich (Hetzner, Oracle Cloud, DigitalOcean usw.) + Setup-Script für Claude Code / OpenClaw |

## Was sind Profile-, Skill- und Hook-MDs?

- **Profil-MD** – Persönlicher Kontext über dich: Rolle, Kommunikationsstil, Use Cases, was die KI vermeiden soll. Wird in Custom Instructions / Projektanweisungen hinterlegt.
- **Skill-MD** – Fachlicher Kontext für einen spezifischen Use-Case (z.B. "Python-Entwicklung", "Marketing-Texte"). Wird in Claude-Projekten oder ChatGPT-Custom-GPTs genutzt.
- **Hook-MD** – Verhaltensregeln und Automatisierungen: Was die KI immer/nie tun soll. Für Claude Code als `settings.json`, für andere LLMs als Systemanweisungen.

## Schnellstart

1. Öffne `index.html` in deinem Browser
2. Wähle einen der vier Einstiegspunkte
3. Folge dem Wizard – fertig!

Kein Build-Step, kein Server, keine Installation notwendig.

## Technischer Stack

- Reines HTML / CSS / JavaScript (Vanilla)
- Keine externen Abhängigkeiten außer optionalem Google Gemini API (kostenlos)
- Funktioniert offline / lokal
- Zweisprachig: Deutsch & Englisch

## Mithelfen / Contributing

Beiträge sind herzlich willkommen! So kannst du helfen:

1. **Fork** dieses Repository
2. Erstelle einen **Feature-Branch**: `git checkout -b feature/mein-feature`
3. **Commit** deine Änderungen: `git commit -m 'feat: beschreibung'`
4. **Push** zum Branch: `git push origin feature/mein-feature`
5. Öffne einen **Pull Request**

### Was wir uns wünschen

- Weitere LLM-Plattformen im LLM-Switcher (Gemini→Claude, Copilot→Claude, etc.)
- Mehr Prompt-Templates für spezifische Use-Cases
- Übersetzungen in weitere Sprachen
- Verbesserungen am MD-Generator

### Code-Stil

- Kein Build-System, kein Framework – bleibt bitte bei Vanilla JS/HTML/CSS
- Übersetzungen gehören in `js/i18n.js` (beide Sprachen gleichzeitig pflegen)
- Neue Seiten folgen dem Muster der bestehenden Seiten (Navbar, Footer, `data-lang-key`)

## Lizenz

[MIT License](LICENSE) – Frei nutzbar, veränderbar und weitergegeben, auch kommerziell. Namensnennung erwünscht aber nicht Pflicht.

## Autor

**Clemens Pompey** – [@cryptoclemens](https://github.com/cryptoclemens)

---

*Made with ❤ for the AI community.*
