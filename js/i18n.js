/* ============================================================
   OptAImum – i18n Translations (DE / EN)
   ============================================================ */

const t = {
  de: {
    nav: {
      home:       'Start',
      mdCreator:  'MD-Creator',
      llmSwitch:  'LLM-Wechsel',
      promptGen:  'Prompts',
      vmGuide:    'VM-Anleitung',
    },
    footer: {
      copy:  '© 2025 OptAImum. Für die KI-Community.',
      links: ['MD-Creator', 'LLM-Wechsel', 'Prompts', 'VM-Anleitung'],
    },

    // ── Landing Page ──────────────────────────────────────────
    hero: {
      badge:    '✦ KI-Nutzung einfach gemacht',
      title:    'Deine KI-Nutzung.<br><span class="gradient-text">Auf das Maximum optimiert.</span>',
      subtitle: 'Profile, Skill- & Hook-MDs erstellen, Anbieter in Minuten wechseln, Prompts generieren und KI-Sandboxen aufsetzen – alles an einem Ort.',
      cta1:     'Jetzt starten',
      cta2:     'Was ist OptAImum?',
    },
    features: {
      title:    'Was möchtest du tun?',
      subtitle: 'Wähle deinen Einstiegspunkt – du kannst jederzeit wechseln.',
      cards: [
        { icon: '📝', title: 'MD-Creator', desc: 'Erstelle dein persönliches Profil, Skill- und Hook-MD für Claude, ChatGPT & Co. in wenigen Minuten – KI-kuratiert.', link: 'md-creator.html', badge: 'Starter-Tipp' },
        { icon: '🔄', title: 'LLM-Wechsel', desc: 'Wechsle in Minuten von ChatGPT zu Claude (oder umgekehrt). Nimm deinen Kontext, deine Prefs und Settings einfach mit.', link: 'llm-switcher.html', badge: '' },
        { icon: '🤖', title: 'Prompt-Generator', desc: 'Erstelle sofort einsetzbare Prompts für Claude Cowork, ChatGPT, Copilot & andere KI-Agenten – auch für Anfänger.', link: 'prompt-generator.html', badge: 'Anfänger-freundlich' },
        { icon: '🖥️', title: 'VM-Anleitung', desc: 'Setze eine Sandbox für OpenClaw / Claude Code auf. Anbietervergleich mit Preis-Leistung und Kompatibilitäts-Check.', link: 'vm-guide.html', badge: '' },
      ],
    },
    why: {
      title:    'Warum OptAImum?',
      subtitle: 'Stunden sparen, besser prompten, schnell wechseln.',
      points: [
        { icon: '⚡', title: 'Minuten statt Stunden', desc: 'Was früher Recherche und Trial-and-Error kostete, erledigt OptAImum in einem geführten Prozess.' },
        { icon: '🎯', title: 'Personalisiert', desc: 'Kein One-Size-Fits-All. Deine MDs werden auf deinen Use-Case, dein Level und deinen Stil zugeschnitten.' },
        { icon: '🔓', title: 'Keine Lock-in', desc: 'Die generierten Dateien gehören dir und funktionieren mit Claude, ChatGPT, Gemini und anderen LLMs.' },
      ],
    },

    // ── MD Creator ────────────────────────────────────────────
    md: {
      pageTitle:   'MD-Creator',
      intro:       'Erstelle dein persönliches Profil-, Skill- und Hook-MD in einem geführten Wizard – optional mit KI-Unterstützung.',
      chooseType: {
        title: 'Welches MD möchtest du erstellen?',
        types: [
          { id: 'profile', icon: '👤', title: 'Profil-MD', desc: 'Persönlicher Kontext über dich – wer du bist, wie du kommunizierst, was du vermeidest.' },
          { id: 'skill',   icon: '🛠️', title: 'Skill-MD',   desc: 'Fachlicher Kontext für einen spezifischen Use-Case oder eine Aufgabe.' },
          { id: 'hook',    icon: '🪝', title: 'Hook-MD',   desc: 'Verhaltensregeln & Automatisierungen – was die KI immer/nie tun soll.' },
        ],
      },
      apiSection: {
        toggleLabel: '✨ KI-Unterstützung aktivieren (Google Gemini – kostenlos)',
        placeholder: 'Dein Gemini API Key (ai.google.dev)',
        hint:        'Dein Key wird nur lokal im Browser verwendet und nie gespeichert. Ohne Key werden intelligente Vorlagen genutzt.',
        getLinkText: 'Kostenlosen API Key holen →',
        getLinkUrl:  'https://ai.google.dev',
      },
      profile: {
        steps: ['Wer bist du?', 'Kommunikation', 'Use Cases', 'Regeln', 'Fertig'],
        q1_label:  'Name / Rolle (optional)',
        q1_hint:   'z.B. "Freelance-Designer", "Product Manager bei Startup", "Student"',
        q2_label:  'In welcher Sprache arbeitest du hauptsächlich?',
        q2_opts:   ['Deutsch', 'Englisch', 'Beides', 'Andere'],
        q3_label:  'KI-Erfahrungslevel',
        q3_opts:   ['Anfänger – ich starte gerade', 'Mittel – nutze KI regelmäßig', 'Profi – tiefe KI-Nutzung'],
        q4_label:  'Bevorzugter Kommunikationsstil',
        q4_opts:   ['Locker & direkt', 'Professionell & präzise', 'Ausführlich mit Erklärungen', 'Sehr kompakt & bullet-point'],
        q5_label:  'Deine Hauptaufgaben / Use Cases',
        q5_hint:   'z.B. E-Mails, Code, Recherche, Präsentationen, Texte, Datenanalyse …',
        q6_label:  'Was soll die KI vermeiden?',
        q6_hint:   'z.B. keine Emojis, keine langen Einleitungen, keine englischen Antworten …',
        q7_label:  'Sonstige wichtige Infos über dich',
        q7_hint:   'z.B. Domain-Wissen, besondere Anforderungen, Tools die du nutzt …',
      },
      skill: {
        steps: ['Use Case', 'Output', 'Anforderungen', 'Fertig'],
        q1_label:  'Für welchen Use-Case / welche Aufgabe?',
        q1_hint:   'z.B. "Python-Code schreiben", "Marketing-Texte", "Kundensupport-Antworten"',
        q2_label:  'Welche Output-Formate benötigst du?',
        q2_opts:   ['Fließtext', 'Bullet Points', 'Code', 'Tabellen', 'JSON/Daten', 'Markdown', 'Strukturierte Berichte'],
        q3_label:  'Technisches Level des Outputs',
        q3_opts:   ['Laienverständlich', 'Fachlich (mit Fachbegriffen)', 'Expert-Level', 'Variabel je nach Kontext'],
        q4_label:  'Relevante Tools, Frameworks oder Plattformen',
        q4_hint:   'z.B. "Notion, Python, Shopify", "Excel, SAP", "React, TypeScript"',
        q5_label:  'Besondere Anforderungen oder Einschränkungen',
        q5_hint:   'z.B. DSGVO-konform, nur auf Deutsch, max. 200 Wörter, immer mit Quellen …',
      },
      hook: {
        steps: ['Verhalten', 'Format', 'Grenzen', 'Fertig'],
        q1_label:  'Was soll die KI IMMER tun?',
        q1_hint:   'z.B. Aufgabe zusammenfassen bevor Ausführung, immer auf Deutsch antworten …',
        q2_label:  'Was soll die KI NIE tun?',
        q2_hint:   'z.B. keine Dateien löschen ohne Bestätigung, nie externe Dienste nutzen …',
        q3_label:  'Bevorzugtes Antwortformat',
        q3_opts:   ['Immer strukturiert mit Headings', 'Immer kompakt & direkt', 'Adaptiv je nach Aufgabe', 'Immer Code-first'],
        q4_label:  'Bestätigung einholen vor...',
        q4_opts:   ['Dateioperationen', 'API-Calls', 'Dauerhaften Änderungen', 'Allem Wichtigen'],
        q5_label:  'Besondere Automatisierungen oder Hooks',
        q5_hint:   'z.B. "Nach jeder Aufgabe kurze Zusammenfassung ausgeben", "Pre-Task: Aufgabe wiederholen" …',
      },
      generate: 'MD generieren',
      generating: 'Generiere...',
      result: {
        title:     'Dein {type}-MD ist fertig! 🎉',
        copyBtn:   'Kopieren',
        copied:    '✓ Kopiert!',
        download:  'Als .md herunterladen',
        placement: 'Wo hinterlegst du diese Datei?',
      },
      placement: {
        profile: [
          { platform: 'Claude (claude.ai)', icon: '🟠', steps: ['Gehe zu claude.ai → Profil (oben rechts)', 'Klicke auf „Profil & Einstellungen"', 'Füge den Inhalt in das Feld „Über mich" ein (Custom Instructions)', 'Alternativ: Neues Projekt → Projektanweisungen'] },
          { platform: 'ChatGPT', icon: '🟢', steps: ['Gehe zu chatgpt.com → Einstellungen (oben rechts)', 'Klicke auf „Personalisierung" → „Benutzerdefinierte Anweisungen"', 'Füge den Profilinhalt in das erste Feld ein'] },
          { platform: 'Claude Code / Cowork', icon: '💻', steps: ['Speichere als PROFILE.md im Projektordner', 'Oder: ~/.claude/PROFILE.md für globale Nutzung', 'Claude Code liest sie automatisch als Kontext'] },
        ],
        skill: [
          { platform: 'Claude (Projekte)', icon: '🟠', steps: ['Erstelle ein neues Projekt in claude.ai', 'Gehe zu „Projektanweisungen" (Stiftsymbol)', 'Füge deinen Skill-MD-Inhalt ein'] },
          { platform: 'ChatGPT (GPTs)', icon: '🟢', steps: ['Gehe zu „Meine GPTs" → GPT erstellen', 'Im Konfigurationsfeld unter „Anweisungen" einfügen', 'Alternativ: Custom Instructions → zweites Feld'] },
          { platform: 'Claude Code / Cowork', icon: '💻', steps: ['Speichere als SKILL.md im Skill-Ordner', 'Pfad: .skills/skills/mein-skill/SKILL.md', 'Aktiviere die Skill über das Interface'] },
        ],
        hook: [
          { platform: 'Claude Code Hooks', icon: '💻', steps: ['Speichere als settings.json unter ~/.claude/', 'Oder im Projektordner: .claude/settings.json', 'Füge den Hook-Inhalt in den hooks-Abschnitt ein', 'Teste mit: claude --hooks'] },
          { platform: 'Claude / ChatGPT (Verhaltensregeln)', icon: '🟠', steps: ['Hinterlege den Hook-Inhalt in den System-Anweisungen', 'Claude: Projektanweisungen oder Custom Instructions', 'ChatGPT: Custom Instructions → zweites Feld'] },
        ],
      },
    },

    // ── LLM Switcher ──────────────────────────────────────────
    llm: {
      pageTitle: 'LLM-Wechsel in Minuten',
      intro:     'Wechsle deinen KI-Anbieter ohne Datenverlust. Deine Einstellungen, dein Stil und dein Kontext kommen mit.',
      from:      'Von welchem Anbieter wechselst du?',
      to:        'Zu welchem Anbieter wechselst du?',
      generate:  'Wechsel-Anleitung generieren',
      steps: {
        chatgpt_claude: [
          { title: '1. ChatGPT-Kontext exportieren', desc: 'Gehe zu chatgpt.com → Einstellungen → Datenverwaltung → „Daten exportieren". Du erhältst eine ZIP mit deinen Chats.', time: '2 Min.' },
          { title: '2. Custom Instructions sichern', desc: 'Gehe zu Einstellungen → Personalisierung → „Benutzerdefinierte Anweisungen" – kopiere beide Felder.', time: '1 Min.' },
          { title: '3. Claude-Account einrichten', desc: 'Gehe zu claude.ai → Registrieren oder anmelden. Free-Plan ist ausreichend zum Starten.', time: '2 Min.' },
          { title: '4. Profil-MD in Claude hinterlegen', desc: 'Nutze den OptAImum MD-Creator, um dein Profil zu erstellen, und hinterlege es unter Custom Instructions in Claude.', time: '3 Min.' },
          { title: '5. Projekt-Kontext übertragen', desc: 'Erstelle ein neues Projekt in claude.ai und füge wichtige Kontextinfos aus deinen ChatGPT-Chats ein.', time: '5 Min.' },
          { title: '6. Claude testen', desc: 'Starte mit einem Prompt, den du bisher bei ChatGPT genutzt hast. Passe dein Profil-MD bei Bedarf an.', time: '5 Min.' },
        ],
        claude_chatgpt: [
          { title: '1. Claude-Projekte exportieren', desc: 'Claude bietet noch keinen vollständigen Export. Öffne wichtige Chats und kopiere relevante Infos manuell.', time: '5 Min.' },
          { title: '2. Projektanweisungen sichern', desc: 'Gehe zu deinen Claude-Projekten und kopiere alle Projektanweisungen (Skill-MDs).', time: '2 Min.' },
          { title: '3. ChatGPT-Account einrichten', desc: 'Gehe zu chatgpt.com → Registrieren. Für Custom GPTs benötigst du ChatGPT Plus.', time: '2 Min.' },
          { title: '4. Custom Instructions setzen', desc: 'Einstellungen → Personalisierung → Benutzerdefinierte Anweisungen. Nutze OptAImum zum Konvertieren.', time: '3 Min.' },
          { title: '5. Kontext in ChatGPT einfügen', desc: 'Starte Gespräche mit kurzer Kontextzusammenfassung oder nutze Custom GPTs mit hinterlegten Anweisungen.', time: '5 Min.' },
          { title: '6. Testen & anpassen', desc: 'Vergleiche Antworten. ChatGPT reagiert oft anders auf gleiche Prompts – passe Formulierungen leicht an.', time: '5 Min.' },
        ],
      },
      comparison: {
        title: 'Claude vs. ChatGPT – Quick Reference',
        headers: ['Feature', 'Claude', 'ChatGPT'],
        rows: [
          ['Kontext-Fenster', '200k Token', '128k Token (GPT-4o)'],
          ['Custom Instructions', 'Projektanweisungen', 'Custom Instructions'],
          ['Agenten', 'Claude Code / Cowork', 'GPTs / Assistants API'],
          ['Dateien', 'Projekte (Uploads)', 'MyGPTs (Uploads)'],
          ['Kostenloser Plan', 'Ja (begrenzt)', 'Ja (begrenzt)'],
          ['Code-Ausführung', 'Claude Code (CLI)', 'Code Interpreter'],
          ['Plugins/Tools', 'MCP / Cowork Plugins', 'ChatGPT Plugins'],
          ['Datenschutz (EU)', '✓ Anthropic', '⚠ OpenAI US'],
        ],
      },
      tip: '💡 Tipp: Nutze den OptAImum MD-Creator, um dein Profil einmal zu erstellen – es funktioniert bei beiden Plattformen!',
    },

    // ── Prompt Generator ──────────────────────────────────────
    prompt: {
      pageTitle: 'Prompt-Generator',
      intro:     'Erstelle sofort einsetzbare Prompts für deine KI-Agenten – auch ohne Vorkenntnisse.',
      agent:     'Für welchen Agenten / welche Plattform?',
      task:      'Was möchtest du tun?',
      taskHint:  'Beschreibe kurz deine Aufgabe (z.B. "E-Mail an Kunden schreiben", "Python-Funktion debuggen")',
      context:   'Zusätzlicher Kontext (optional)',
      contextHint: 'z.B. Zielgruppe, Tonalität, Einschränkungen, verwendete Tools …',
      level:     'Ausgabe-Level',
      levelOpts: ['Beginner – einfach & klar', 'Standard – ausgewogen', 'Profi – detailliert & strukturiert'],
      generate:  'Prompt generieren',
      result:    'Dein generierter Prompt',
      copyBtn:   'Kopieren',
      copied:    '✓ Kopiert!',
      tips: {
        title: 'Prompt-Tipps für Anfänger',
        items: [
          { icon: '🎯', title: 'Klar & spezifisch', desc: 'Je genauer du beschreibst, was du willst, desto besser das Ergebnis. "Schreibe eine kurze E-Mail" ist besser als "Schreibe was".' },
          { icon: '🧩', title: 'Kontext geben', desc: 'Wer bist du? Wer ist die Zielgruppe? Was ist das Ziel? Diese Infos verbessern jede Antwort enorm.' },
          { icon: '📋', title: 'Format angeben', desc: 'Sage der KI wie sie antworten soll: "Als Liste", "In 3 Sätzen", "Als Markdown-Tabelle" usw.' },
          { icon: '🔄', title: 'Iterieren', desc: 'Das erste Ergebnis muss nicht perfekt sein. Baue auf der Antwort auf und verfeinere mit Folge-Prompts.' },
        ],
      },
      agents: [
        { id: 'claude-cowork', label: 'Claude Cowork', emoji: '🟠' },
        { id: 'claude-api', label: 'Claude (claude.ai)', emoji: '🟠' },
        { id: 'chatgpt', label: 'ChatGPT', emoji: '🟢' },
        { id: 'gemini', label: 'Google Gemini', emoji: '🔵' },
        { id: 'copilot', label: 'GitHub Copilot', emoji: '⚫' },
        { id: 'cursor', label: 'Cursor AI', emoji: '⚡' },
      ],
    },

    // ── VM Guide ──────────────────────────────────────────────
    vm: {
      pageTitle: 'VM & Sandbox Aufsetzen',
      intro:     'Vergleiche Anbieter, finde das beste Preis-Leistungs-Verhältnis und setze deine OpenClaw/Claude Code Sandbox in Minuten auf.',
      comparison: {
        title: 'Anbietervergleich',
        subtitle: 'Für das Ausführen von Claude Code / OpenClaw',
        headers: ['Anbieter', 'Plan', 'vCPU', 'RAM', 'Preis/Monat', 'Basis-Nutzung', 'Standard', 'Erweitert', 'Empfehlung'],
      },
      providers: [
        { name: 'Oracle Cloud', plan: 'Always Free', cpu: '2 OCPU', ram: '12 GB', price: '0 €', basic: '✓', std: '✓', adv: '✗', note: '🏆 Bestes Gratis-Angebot', tier: 'free', best: true },
        { name: 'Google Cloud', plan: 'e2-micro (Free)', cpu: '0.25 vCPU', ram: '1 GB', price: '0 €', basic: '✓', std: '✗', adv: '✗', note: 'Sehr limitiert', tier: 'free', best: false },
        { name: 'Hetzner', plan: 'CX22', cpu: '2 vCPU', ram: '4 GB', price: '~4,50 €', basic: '✓', std: '✓', adv: '✓', note: '🏆 Bestes Preis-Leistungs-Verhältnis', tier: 'budget', best: true },
        { name: 'Hetzner', plan: 'CX32', cpu: '4 vCPU', ram: '8 GB', price: '~8,50 €', basic: '✓', std: '✓', adv: '✓', note: 'Ideal für intensive Nutzung', tier: 'budget', best: false },
        { name: 'DigitalOcean', plan: 'Droplet Basic', cpu: '2 vCPU', ram: '4 GB', price: '~24 $', basic: '✓', std: '✓', adv: '✓', note: 'Gute Doku & Anfängerfreundlich', tier: 'budget', best: false },
        { name: 'Vultr', plan: 'Cloud Compute', cpu: '2 vCPU', ram: '4 GB', price: '~24 $', basic: '✓', std: '✓', adv: '✓', note: 'Gute Verfügbarkeit', tier: 'budget', best: false },
        { name: 'AWS Lightsail', plan: 'Bundle 2GB', cpu: '1 vCPU', ram: '2 GB', price: '~12 $', basic: '✓', std: '⚠', adv: '✗', note: 'Einfach, aber teurer', tier: 'mid', best: false },
      ],
      features: {
        title: 'OpenClaw Feature-Kompatibilität',
        basic: { label: 'Basis-Nutzung', desc: 'Claude Code CLI, einfache Skripte, Textverarbeitung', req: '1 vCPU, 1 GB RAM' },
        std:   { label: 'Standard', desc: 'Cowork, Browser-Automatisierung, mittlere Projekte', req: '2 vCPU, 2–4 GB RAM' },
        adv:   { label: 'Erweitert', desc: 'Parallele Agents, lokale LLMs, schwere Workloads', req: '4+ vCPU, 8+ GB RAM' },
      },
      setup: {
        title: 'Setup-Anleitung (Ubuntu 22.04)',
        oracle: 'Oracle Cloud (empfohlen für 0 €)',
        hetzner: 'Hetzner (empfohlen für <10 €/Monat)',
        steps: {
          oracle: [
            'Erstelle kostenlosen Account auf oracle.com/cloud/free',
            'Gehe zu Compute → Instances → Instance erstellen',
            'Wähle Ubuntu 22.04 und Shape: VM.Standard.A1.Flex (2 OCPU, 12 GB RAM – gratis!)',
            'Lade SSH-Key herunter und merke dir die IP',
            'SSH: ssh -i key.pem ubuntu@DEINE-IP',
            'Führe das Setup-Skript aus (siehe unten)',
          ],
          hetzner: [
            'Erstelle Account auf hetzner.com/cloud',
            'Neues Projekt → Server erstellen → Ubuntu 22.04',
            'Wähle CX22 (4,50 €/Monat) oder CX32 (8,50 €/Monat)',
            'SSH-Key hinzufügen oder Passwort setzen',
            'Verbinde dich: ssh root@DEINE-IP',
            'Führe das Setup-Skript aus (siehe unten)',
          ],
        },
        script: `#!/bin/bash
# OptAImum – Claude Code / OpenClaw Setup Script
# Ubuntu 22.04 LTS

echo "🚀 OptAImum Setup – Claude Code Environment"

# Update System
sudo apt-get update && sudo apt-get upgrade -y

# Install Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install essential tools
sudo apt-get install -y git curl wget python3 python3-pip build-essential

# Install Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Verify installation
node --version
npm --version
claude --version

echo "✅ Setup abgeschlossen!"
echo "Führe 'claude' aus, um Claude Code zu starten."
echo "Setze deinen API-Key: export ANTHROPIC_API_KEY='dein-key'"`
      },
    },
  },

  /* ============================================================
     ENGLISH TRANSLATIONS
     ============================================================ */
  en: {
    nav: {
      home:       'Home',
      mdCreator:  'MD Creator',
      llmSwitch:  'LLM Switch',
      promptGen:  'Prompts',
      vmGuide:    'VM Guide',
    },
    footer: {
      copy:  '© 2025 OptAImum. For the AI community.',
      links: ['MD Creator', 'LLM Switch', 'Prompts', 'VM Guide'],
    },
    hero: {
      badge:    '✦ AI usage made simple',
      title:    'Your AI usage.<br><span class="gradient-text">Optimized to the maximum.</span>',
      subtitle: 'Create Profile, Skill & Hook MDs, switch providers in minutes, generate prompts and set up AI sandboxes – all in one place.',
      cta1:     'Get started',
      cta2:     'What is OptAImum?',
    },
    features: {
      title:    'What do you want to do?',
      subtitle: 'Choose your entry point – you can switch at any time.',
      cards: [
        { icon: '📝', title: 'MD Creator', desc: 'Create your personal Profile, Skill and Hook MD for Claude, ChatGPT & more in minutes – AI-curated.', link: 'md-creator.html', badge: 'Starter tip' },
        { icon: '🔄', title: 'LLM Switch', desc: 'Switch from ChatGPT to Claude (or vice versa) in minutes. Bring your context, preferences and settings with you.', link: 'llm-switcher.html', badge: '' },
        { icon: '🤖', title: 'Prompt Generator', desc: 'Create ready-to-use prompts for Claude Cowork, ChatGPT, Copilot & other AI agents – beginner friendly.', link: 'prompt-generator.html', badge: 'Beginner-friendly' },
        { icon: '🖥️', title: 'VM Guide', desc: 'Set up a sandbox for OpenClaw / Claude Code. Provider comparison with price-performance and compatibility check.', link: 'vm-guide.html', badge: '' },
      ],
    },
    why: {
      title:    'Why OptAImum?',
      subtitle: 'Save hours, prompt better, switch fast.',
      points: [
        { icon: '⚡', title: 'Minutes not hours', desc: 'What used to take research and trial-and-error, OptAImum handles in a guided process.' },
        { icon: '🎯', title: 'Personalized', desc: 'No one-size-fits-all. Your MDs are tailored to your use case, level and style.' },
        { icon: '🔓', title: 'No lock-in', desc: 'The generated files are yours and work with Claude, ChatGPT, Gemini and others.' },
      ],
    },
    md: {
      pageTitle:   'MD Creator',
      intro:       'Create your personal Profile, Skill and Hook MD in a guided wizard – optionally with AI support.',
      chooseType: {
        title: 'Which MD do you want to create?',
        types: [
          { id: 'profile', icon: '👤', title: 'Profile MD', desc: 'Personal context about you – who you are, how you communicate, what to avoid.' },
          { id: 'skill',   icon: '🛠️', title: 'Skill MD',   desc: 'Technical context for a specific use case or task.' },
          { id: 'hook',    icon: '🪝', title: 'Hook MD',   desc: 'Behavioral rules & automations – what the AI should always/never do.' },
        ],
      },
      apiSection: {
        toggleLabel: '✨ Enable AI support (Google Gemini – free)',
        placeholder: 'Your Gemini API Key (ai.google.dev)',
        hint:        'Your key is only used locally in the browser and never stored. Without a key, smart templates are used.',
        getLinkText: 'Get free API Key →',
        getLinkUrl:  'https://ai.google.dev',
      },
      profile: {
        steps: ['Who are you?', 'Communication', 'Use Cases', 'Rules', 'Done'],
        q1_label:  'Name / Role (optional)',
        q1_hint:   'e.g. "Freelance Designer", "Product Manager at startup", "Student"',
        q2_label:  'In which language do you mainly work?',
        q2_opts:   ['German', 'English', 'Both', 'Other'],
        q3_label:  'AI experience level',
        q3_opts:   ['Beginner – just starting out', 'Intermediate – use AI regularly', 'Pro – deep AI usage'],
        q4_label:  'Preferred communication style',
        q4_opts:   ['Casual & direct', 'Professional & precise', 'Detailed with explanations', 'Very compact & bullet-point'],
        q5_label:  'Your main tasks / use cases',
        q5_hint:   'e.g. emails, code, research, presentations, texts, data analysis…',
        q6_label:  'What should the AI avoid?',
        q6_hint:   'e.g. no emojis, no long intros, no English replies…',
        q7_label:  'Other important info about you',
        q7_hint:   'e.g. domain knowledge, special requirements, tools you use…',
      },
      skill: {
        steps: ['Use Case', 'Output', 'Requirements', 'Done'],
        q1_label:  'For which use case / task?',
        q1_hint:   'e.g. "Writing Python code", "Marketing copy", "Customer support replies"',
        q2_label:  'Which output formats do you need?',
        q2_opts:   ['Prose text', 'Bullet points', 'Code', 'Tables', 'JSON/Data', 'Markdown', 'Structured reports'],
        q3_label:  'Technical level of output',
        q3_opts:   ['Layman-friendly', 'Technical (with jargon)', 'Expert level', 'Variable by context'],
        q4_label:  'Relevant tools, frameworks or platforms',
        q4_hint:   'e.g. "Notion, Python, Shopify", "Excel, SAP", "React, TypeScript"',
        q5_label:  'Special requirements or constraints',
        q5_hint:   'e.g. GDPR-compliant, English only, max 200 words, always with sources…',
      },
      hook: {
        steps: ['Behavior', 'Format', 'Limits', 'Done'],
        q1_label:  'What should the AI ALWAYS do?',
        q1_hint:   'e.g. summarize task before executing, always reply in English…',
        q2_label:  'What should the AI NEVER do?',
        q2_hint:   'e.g. never delete files without confirmation, never use external services…',
        q3_label:  'Preferred response format',
        q3_opts:   ['Always structured with headings', 'Always compact & direct', 'Adaptive by task', 'Always code-first'],
        q4_label:  'Ask for confirmation before…',
        q4_opts:   ['File operations', 'API calls', 'Permanent changes', 'Everything important'],
        q5_label:  'Special automations or hooks',
        q5_hint:   'e.g. "After each task output a brief summary", "Pre-task: repeat the task"…',
      },
      generate: 'Generate MD',
      generating: 'Generating...',
      result: {
        title:     'Your {type} MD is ready! 🎉',
        copyBtn:   'Copy',
        copied:    '✓ Copied!',
        download:  'Download as .md',
        placement: 'Where do you place this file?',
      },
      placement: {
        profile: [
          { platform: 'Claude (claude.ai)', icon: '🟠', steps: ['Go to claude.ai → Profile (top right)', 'Click "Profile & Settings"', 'Paste content into "About me" field (Custom Instructions)', 'Alternative: New Project → Project Instructions'] },
          { platform: 'ChatGPT', icon: '🟢', steps: ['Go to chatgpt.com → Settings (top right)', 'Click "Personalization" → "Custom Instructions"', 'Paste profile content into the first field'] },
          { platform: 'Claude Code / Cowork', icon: '💻', steps: ['Save as PROFILE.md in project folder', 'Or: ~/.claude/PROFILE.md for global use', 'Claude Code reads it automatically as context'] },
        ],
        skill: [
          { platform: 'Claude (Projects)', icon: '🟠', steps: ['Create a new project in claude.ai', 'Go to "Project Instructions" (pencil icon)', 'Paste your Skill MD content'] },
          { platform: 'ChatGPT (GPTs)', icon: '🟢', steps: ['Go to "My GPTs" → Create a GPT', 'Paste in the "Instructions" config field', 'Alternative: Custom Instructions → second field'] },
          { platform: 'Claude Code / Cowork', icon: '💻', steps: ['Save as SKILL.md in the skill folder', 'Path: .skills/skills/my-skill/SKILL.md', 'Activate skill via the interface'] },
        ],
        hook: [
          { platform: 'Claude Code Hooks', icon: '💻', steps: ['Save as settings.json under ~/.claude/', 'Or in project folder: .claude/settings.json', 'Insert hook content into the hooks section', 'Test with: claude --hooks'] },
          { platform: 'Claude / ChatGPT (Rules)', icon: '🟠', steps: ['Place hook content in system instructions', 'Claude: Project instructions or Custom Instructions', 'ChatGPT: Custom Instructions → second field'] },
        ],
      },
    },
    llm: {
      pageTitle: 'LLM Switch in Minutes',
      intro:     'Switch your AI provider without losing data. Your settings, style and context come with you.',
      from:      'Which provider are you switching from?',
      to:        'Which provider are you switching to?',
      generate:  'Generate Switch Guide',
      steps: {
        chatgpt_claude: [
          { title: '1. Export ChatGPT context', desc: 'Go to chatgpt.com → Settings → Data Management → "Export data". You will receive a ZIP with your chats.', time: '2 min' },
          { title: '2. Save Custom Instructions', desc: 'Go to Settings → Personalization → "Custom Instructions" – copy both fields.', time: '1 min' },
          { title: '3. Set up Claude account', desc: 'Go to claude.ai → Register or sign in. Free plan is enough to get started.', time: '2 min' },
          { title: '4. Place Profile MD in Claude', desc: 'Use OptAImum MD Creator to create your profile and place it under Custom Instructions in Claude.', time: '3 min' },
          { title: '5. Transfer project context', desc: 'Create a new project in claude.ai and add important context from your ChatGPT chats.', time: '5 min' },
          { title: '6. Test Claude', desc: 'Start with a prompt you used in ChatGPT. Adjust your Profile MD if needed.', time: '5 min' },
        ],
        claude_chatgpt: [
          { title: '1. Export Claude projects', desc: 'Claude does not yet offer a full export. Open important chats and copy relevant info manually.', time: '5 min' },
          { title: '2. Save project instructions', desc: 'Go to your Claude projects and copy all project instructions (Skill MDs).', time: '2 min' },
          { title: '3. Set up ChatGPT account', desc: 'Go to chatgpt.com → Register. For Custom GPTs you need ChatGPT Plus.', time: '2 min' },
          { title: '4. Set Custom Instructions', desc: 'Settings → Personalization → Custom Instructions. Use OptAImum to convert.', time: '3 min' },
          { title: '5. Add context to ChatGPT', desc: 'Start conversations with a brief context summary or use Custom GPTs with stored instructions.', time: '5 min' },
          { title: '6. Test & adjust', desc: 'Compare answers. ChatGPT often responds differently to the same prompts – adjust phrasing slightly.', time: '5 min' },
        ],
      },
      comparison: {
        title: 'Claude vs. ChatGPT – Quick Reference',
        headers: ['Feature', 'Claude', 'ChatGPT'],
        rows: [
          ['Context window', '200k tokens', '128k tokens (GPT-4o)'],
          ['Custom instructions', 'Project instructions', 'Custom Instructions'],
          ['Agents', 'Claude Code / Cowork', 'GPTs / Assistants API'],
          ['Files', 'Projects (uploads)', 'MyGPTs (uploads)'],
          ['Free plan', 'Yes (limited)', 'Yes (limited)'],
          ['Code execution', 'Claude Code (CLI)', 'Code Interpreter'],
          ['Plugins/Tools', 'MCP / Cowork Plugins', 'ChatGPT Plugins'],
          ['Privacy (EU)', '✓ Anthropic', '⚠ OpenAI US'],
        ],
      },
      tip: '💡 Tip: Use the OptAImum MD Creator to create your profile once – it works on both platforms!',
    },
    prompt: {
      pageTitle: 'Prompt Generator',
      intro:     'Create ready-to-use prompts for your AI agents – even without prior knowledge.',
      agent:     'For which agent / platform?',
      task:      'What do you want to do?',
      taskHint:  'Briefly describe your task (e.g. "Write email to client", "Debug Python function")',
      context:   'Additional context (optional)',
      contextHint: 'e.g. target audience, tone, constraints, tools used…',
      level:     'Output level',
      levelOpts: ['Beginner – simple & clear', 'Standard – balanced', 'Pro – detailed & structured'],
      generate:  'Generate prompt',
      result:    'Your generated prompt',
      copyBtn:   'Copy',
      copied:    '✓ Copied!',
      tips: {
        title: 'Prompt tips for beginners',
        items: [
          { icon: '🎯', title: 'Clear & specific', desc: 'The more precisely you describe what you want, the better the result. "Write a short email" is better than "Write something".' },
          { icon: '🧩', title: 'Provide context', desc: 'Who are you? Who is the audience? What is the goal? This info massively improves every answer.' },
          { icon: '📋', title: 'Specify format', desc: 'Tell the AI how to respond: "As a list", "In 3 sentences", "As a Markdown table" etc.' },
          { icon: '🔄', title: 'Iterate', desc: 'The first result doesn\'t have to be perfect. Build on the answer and refine with follow-up prompts.' },
        ],
      },
      agents: [
        { id: 'claude-cowork', label: 'Claude Cowork', emoji: '🟠' },
        { id: 'claude-api', label: 'Claude (claude.ai)', emoji: '🟠' },
        { id: 'chatgpt', label: 'ChatGPT', emoji: '🟢' },
        { id: 'gemini', label: 'Google Gemini', emoji: '🔵' },
        { id: 'copilot', label: 'GitHub Copilot', emoji: '⚫' },
        { id: 'cursor', label: 'Cursor AI', emoji: '⚡' },
      ],
    },
    vm: {
      pageTitle: 'VM & Sandbox Setup',
      intro:     'Compare providers, find the best price-performance ratio and set up your OpenClaw/Claude Code sandbox in minutes.',
      comparison: {
        title: 'Provider Comparison',
        subtitle: 'For running Claude Code / OpenClaw',
        headers: ['Provider', 'Plan', 'vCPU', 'RAM', 'Price/Month', 'Basic Use', 'Standard', 'Advanced', 'Recommendation'],
      },
      providers: [
        { name: 'Oracle Cloud', plan: 'Always Free', cpu: '2 OCPU', ram: '12 GB', price: '$0', basic: '✓', std: '✓', adv: '✗', note: '🏆 Best free offering', tier: 'free', best: true },
        { name: 'Google Cloud', plan: 'e2-micro (Free)', cpu: '0.25 vCPU', ram: '1 GB', price: '$0', basic: '✓', std: '✗', adv: '✗', note: 'Very limited', tier: 'free', best: false },
        { name: 'Hetzner', plan: 'CX22', cpu: '2 vCPU', ram: '4 GB', price: '~€4.50', basic: '✓', std: '✓', adv: '✓', note: '🏆 Best price-performance', tier: 'budget', best: true },
        { name: 'Hetzner', plan: 'CX32', cpu: '4 vCPU', ram: '8 GB', price: '~€8.50', basic: '✓', std: '✓', adv: '✓', note: 'Ideal for heavy use', tier: 'budget', best: false },
        { name: 'DigitalOcean', plan: 'Droplet Basic', cpu: '2 vCPU', ram: '4 GB', price: '~$24', basic: '✓', std: '✓', adv: '✓', note: 'Great docs & beginner-friendly', tier: 'budget', best: false },
        { name: 'Vultr', plan: 'Cloud Compute', cpu: '2 vCPU', ram: '4 GB', price: '~$24', basic: '✓', std: '✓', adv: '✓', note: 'Good availability', tier: 'budget', best: false },
        { name: 'AWS Lightsail', plan: 'Bundle 2GB', cpu: '1 vCPU', ram: '2 GB', price: '~$12', basic: '✓', std: '⚠', adv: '✗', note: 'Simple but pricier', tier: 'mid', best: false },
      ],
      features: {
        title: 'OpenClaw Feature Compatibility',
        basic: { label: 'Basic use', desc: 'Claude Code CLI, simple scripts, text processing', req: '1 vCPU, 1 GB RAM' },
        std:   { label: 'Standard', desc: 'Cowork, browser automation, medium projects', req: '2 vCPU, 2–4 GB RAM' },
        adv:   { label: 'Advanced', desc: 'Parallel agents, local LLMs, heavy workloads', req: '4+ vCPU, 8+ GB RAM' },
      },
      setup: {
        title: 'Setup Guide (Ubuntu 22.04)',
        oracle: 'Oracle Cloud (recommended for $0)',
        hetzner: 'Hetzner (recommended for <€10/month)',
        steps: {
          oracle: [
            'Create free account at oracle.com/cloud/free',
            'Go to Compute → Instances → Create Instance',
            'Select Ubuntu 22.04 and Shape: VM.Standard.A1.Flex (2 OCPU, 12 GB RAM – free!)',
            'Download SSH key and note your IP',
            'SSH: ssh -i key.pem ubuntu@YOUR-IP',
            'Run the setup script (see below)',
          ],
          hetzner: [
            'Create account at hetzner.com/cloud',
            'New project → Create server → Ubuntu 22.04',
            'Choose CX22 (€4.50/month) or CX32 (€8.50/month)',
            'Add SSH key or set password',
            'Connect: ssh root@YOUR-IP',
            'Run the setup script (see below)',
          ],
        },
        script: `#!/bin/bash
# OptAImum – Claude Code / OpenClaw Setup Script
# Ubuntu 22.04 LTS

echo "🚀 OptAImum Setup – Claude Code Environment"

# Update System
sudo apt-get update && sudo apt-get upgrade -y

# Install Node.js 20 (LTS)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install essential tools
sudo apt-get install -y git curl wget python3 python3-pip build-essential

# Install Claude Code CLI
npm install -g @anthropic-ai/claude-code

# Verify installation
node --version
npm --version
claude --version

echo "✅ Setup complete!"
echo "Run 'claude' to start Claude Code."
echo "Set your API key: export ANTHROPIC_API_KEY='your-key'"`
      },
    },
  },
};

// Helper: get nested key
function getT(lang, keyPath) {
  const keys = keyPath.split('.');
  let obj = t[lang];
  for (const k of keys) {
    if (obj == null) return keyPath;
    obj = obj[k];
  }
  return obj ?? keyPath;
}

// Current language (persisted)
let currentLang = localStorage.getItem('optaimum_lang') || 'de';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('optaimum_lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    const val = getT(lang, key);
    if (typeof val === 'string') el.innerHTML = val;
  });
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    const key = el.getAttribute('data-lang-placeholder');
    el.placeholder = getT(lang, key);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  // Dispatch custom event for page-specific re-renders
  document.dispatchEvent(new CustomEvent('langChange', { detail: { lang } }));
}
