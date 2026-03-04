/* ============================================================
   OptAImum – md-generator.js
   Generates Profile / Skill / Hook MDs from wizard answers.
   Uses Gemini API if key provided, otherwise smart templates.
   ============================================================ */

// ── Template generators ───────────────────────────────────────

function generateProfileMD(answers, lang) {
  const {
    role = '', language = 'Deutsch / German', level = 'Mittel',
    style = 'Professionell & präzise', tasks = '', avoid = '', extra = ''
  } = answers;

  const isDE = lang === 'de';
  const levelMap = {
    'Anfänger – ich starte gerade': 'Beginner',
    'Mittel – nutze KI regelmäßig': 'Intermediate',
    'Profi – tiefe KI-Nutzung': 'Expert',
    'Beginner – just starting out': 'Beginner',
    'Intermediate – use AI regularly': 'Intermediate',
    'Pro – deep AI usage': 'Expert',
  };
  const styleMap = {
    'Locker & direkt': 'casual and direct',
    'Professionell & präzise': 'professional and precise',
    'Ausführlich mit Erklärungen': 'detailed with explanations',
    'Sehr kompakt & bullet-point': 'compact, bullet-point style',
    'Casual & direct': 'casual and direct',
    'Professional & precise': 'professional and precise',
    'Detailed with explanations': 'detailed with explanations',
    'Very compact & bullet-point': 'compact, bullet-point style',
  };

  const normLevel = levelMap[level] || level;
  const normStyle = styleMap[style] || style;

  if (isDE) {
    return `# Nutzer-Profil

> *Erstellt mit [OptAImum](https://github.com/cryptoclemens/OptAImum) – Kopiere diesen Inhalt in deine Custom Instructions oder Projekt-Anweisungen.*

## Über mich
${role ? `- **Rolle / Kontext:** ${role}` : ''}
- **Arbeitssprache:** ${language}
- **KI-Erfahrungslevel:** ${normLevel}
- **Bevorzugter Kommunikationsstil:** ${normStyle}

## Hauptaufgaben & Use Cases
${tasks ? tasks.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- (Allgemeine Unterstützung)'}

## Was du vermeiden sollst
${avoid ? avoid.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- (Keine besonderen Einschränkungen)'}

## Weiteres
${extra || 'Keine weiteren Angaben.'}

---
*Bitte passe deine Antworten immer an dieses Profil an. Frage nach, wenn etwas unklar ist.*`;
  } else {
    return `# User Profile

> *Created with [OptAImum](https://github.com/cryptoclemens/OptAImum) – Paste this into your Custom Instructions or Project Instructions.*

## About Me
${role ? `- **Role / Context:** ${role}` : ''}
- **Working language:** ${language}
- **AI experience level:** ${normLevel}
- **Preferred communication style:** ${normStyle}

## Main Tasks & Use Cases
${tasks ? tasks.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- (General support)'}

## What You Should Avoid
${avoid ? avoid.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- (No special restrictions)'}

## Additional Info
${extra || 'No additional information provided.'}

---
*Please always adapt your responses to this profile. Ask if anything is unclear.*`;
  }
}

function generateSkillMD(answers, lang) {
  const {
    useCase = '', formats = [], level = 'Fachlich', tools = '', constraints = ''
  } = answers;

  const isDE = lang === 'de';
  const fmtStr = Array.isArray(formats) ? formats.join(', ') : formats;

  if (isDE) {
    return `# Skill: ${useCase || 'Allgemeiner Skill'}

> *Erstellt mit [OptAImum](https://github.com/cryptoclemens/OptAImum) – Hinterlege diesen Inhalt in den Projektanweisungen des entsprechenden Projekts.*

## Kontext & Ziel
Dieser Skill ist für folgenden Use-Case ausgelegt:
**${useCase}**

## Ausgabe-Anforderungen

### Formate
${fmtStr ? `Die bevorzugten Ausgabeformate sind: **${fmtStr}**` : 'Kein spezifisches Format vorgegeben.'}

### Technisches Level
Antworte auf **${level}**-Niveau. Passe die Fachtiefe entsprechend an.

## Relevante Tools & Technologien
${tools ? tools.split(',').map(t => `- ${t.trim()}`).join('\n') : '- (Keine spezifischen Tools angegeben)'}

## Einschränkungen & Besonderheiten
${constraints ? constraints.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- (Keine besonderen Einschränkungen)'}

## Verhaltensregeln für diesen Skill
- Halte dich strikt an den definierten Use-Case
- Frage nach, wenn Informationen fehlen, bevor du loslegst
- Liefere immer vollständige, direkt verwendbare Ergebnisse

---
*Skill erstellt via OptAImum. Anpassen nach Bedarf.*`;
  } else {
    return `# Skill: ${useCase || 'General Skill'}

> *Created with [OptAImum](https://github.com/cryptoclemens/OptAImum) – Place this content in the project instructions of the corresponding project.*

## Context & Goal
This skill is designed for the following use case:
**${useCase}**

## Output Requirements

### Formats
${fmtStr ? `Preferred output formats: **${fmtStr}**` : 'No specific format defined.'}

### Technical Level
Respond at **${level}** level. Adjust depth accordingly.

## Relevant Tools & Technologies
${tools ? tools.split(',').map(t => `- ${t.trim()}`).join('\n') : '- (No specific tools stated)'}

## Constraints & Special Requirements
${constraints ? constraints.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- (No special constraints)'}

## Behavioral Rules for This Skill
- Stick strictly to the defined use case
- Ask for clarification if information is missing before starting
- Always deliver complete, immediately usable results

---
*Skill created via OptAImum. Customize as needed.*`;
  }
}

function generateHookMD(answers, lang) {
  const {
    always = '', never = '', format = '', confirm = [], automations = ''
  } = answers;

  const isDE = lang === 'de';
  const confirmStr = Array.isArray(confirm) ? confirm.join(', ') : confirm;

  if (isDE) {
    return `# Hook-Konfiguration

> *Erstellt mit [OptAImum](https://github.com/cryptoclemens/OptAImum) – Hinterlege dies in deinen Systemanweisungen oder in ~/.claude/settings.json (Claude Code).*

## Verhaltensregeln

### Immer tun ✅
${always ? always.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- Aufgabe verstehen, bevor mit der Ausführung begonnen wird'}

### Nie tun 🚫
${never ? never.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- Irreversible Aktionen ohne explizite Bestätigung durchführen'}

## Antwortformat
**Bevorzugtes Format:** ${format || 'Adaptiv je nach Aufgabe'}

## Bestätigung einholen vor…
${confirmStr ? confirmStr.split(',').map(c => `- ${c.trim()}`).join('\n') : '- Wichtigen oder irreversiblen Aktionen'}

## Automatisierungen & Spezial-Hooks
${automations ? automations.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- (Keine automatischen Hooks definiert)'}

---

### 📁 Claude Code – settings.json Vorlage

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": ".*",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Hook: Pre-Tool-Use aktiv'"
          }
        ]
      }
    ]
  }
}
\`\`\`

*Passe die Matcher und Commands auf deine Bedürfnisse an. Dokumentation: docs.anthropic.com/claude-code*`;
  } else {
    return `# Hook Configuration

> *Created with [OptAImum](https://github.com/cryptoclemens/OptAImum) – Place this in your system instructions or in ~/.claude/settings.json (Claude Code).*

## Behavioral Rules

### Always Do ✅
${always ? always.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- Understand the task before beginning execution'}

### Never Do 🚫
${never ? never.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- Perform irreversible actions without explicit confirmation'}

## Response Format
**Preferred format:** ${format || 'Adaptive by task'}

## Ask for Confirmation Before…
${confirmStr ? confirmStr.split(',').map(c => `- ${c.trim()}`).join('\n') : '- Important or irreversible actions'}

## Automations & Special Hooks
${automations ? automations.split('\n').map(l => `- ${l.trim()}`).filter(l => l.length > 2).join('\n') : '- (No automatic hooks defined)'}

---

### 📁 Claude Code – settings.json Template

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": ".*",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'Hook: Pre-Tool-Use active'"
          }
        ]
      }
    ]
  }
}
\`\`\`

*Adjust matchers and commands to your needs. Documentation: docs.anthropic.com/claude-code*`;
  }
}

// ── Gemini-powered generation ─────────────────────────────────
async function generateWithAI(apiKey, mdType, answers, lang) {
  const isDE = lang === 'de';
  const answerStr = JSON.stringify(answers, null, 2);

  let sysPrompt = '';
  if (mdType === 'profile') {
    sysPrompt = isDE
      ? `Du bist ein Experte für KI-Konfiguration. Erstelle ein präzises, gut strukturiertes Profil-MD (Markdown) für einen KI-Assistenten basierend auf den folgenden Nutzerangaben. Das MD soll als Custom Instructions oder Projektanweisungen bei Claude oder ChatGPT verwendet werden. Schreibe auf Deutsch. Nutze klare Überschriften, Bullet Points und sei präzise. Füge am Ende eine Zeile "Erstellt mit OptAImum" ein.`
      : `You are an AI configuration expert. Create a precise, well-structured Profile MD (Markdown) for an AI assistant based on the following user inputs. The MD will be used as Custom Instructions or Project Instructions in Claude or ChatGPT. Write in English. Use clear headings, bullet points and be precise. Add a line "Created with OptAImum" at the end.`;
  } else if (mdType === 'skill') {
    sysPrompt = isDE
      ? `Du bist ein Experte für KI-Konfiguration. Erstelle ein präzises Skill-MD (Markdown) für einen spezifischen Use-Case basierend auf den Nutzerangaben. Das MD soll als Projektanweisungen bei Claude oder als Custom GPT Instructions bei ChatGPT verwendet werden. Schreibe auf Deutsch. Sei klar und direkt einsetzbar.`
      : `You are an AI configuration expert. Create a precise Skill MD (Markdown) for a specific use case based on the user inputs. The MD will be used as Project Instructions in Claude or as Custom GPT Instructions in ChatGPT. Write in English. Be clear and immediately usable.`;
  } else {
    sysPrompt = isDE
      ? `Du bist ein Experte für KI-Konfiguration. Erstelle ein Hook-MD (Markdown) mit Verhaltensregeln und Automatisierungsanweisungen für einen KI-Assistenten basierend auf den Nutzerangaben. Schreibe auf Deutsch. Inkludiere auch eine kommentierte settings.json Vorlage für Claude Code falls relevant.`
      : `You are an AI configuration expert. Create a Hook MD (Markdown) with behavioral rules and automation instructions for an AI assistant based on the user inputs. Write in English. Include a commented settings.json template for Claude Code if relevant.`;
  }

  const fullPrompt = `${sysPrompt}\n\nNutzerangaben / User inputs:\n${answerStr}`;
  return callGemini(apiKey, fullPrompt);
}

// ── Prompt generator ─────────────────────────────────────────
function generatePrompt(agent, task, context, level, lang) {
  const isDE = lang === 'de';

  const levelInstructions = {
    0: isDE
      ? 'Antworte einfach und verständlich, ohne Fachbegriffe. Erkläre Schritt für Schritt.'
      : 'Reply simply and clearly, without jargon. Explain step by step.',
    1: isDE
      ? 'Antworte ausgewogen – präzise aber nicht übermäßig technisch.'
      : 'Reply in a balanced way – precise but not overly technical.',
    2: isDE
      ? 'Antworte auf Expert-Niveau. Nutze Fachbegriffe, strukturiere ausführlich, zeige Alternativen auf.'
      : 'Reply at expert level. Use technical terms, structure thoroughly, show alternatives.',
  };

  const agentHints = {
    'claude-cowork': isDE
      ? '<!-- Optimiert für Claude Cowork: Nutze klare Aufgabenbeschreibungen und Datei-Referenzen wenn nötig. -->\n'
      : '<!-- Optimized for Claude Cowork: Use clear task descriptions and file references when needed. -->\n',
    'claude-api': '',
    'chatgpt': isDE ? '<!-- ChatGPT: Direkte, klare Anweisungen funktionieren am besten. -->\n' : '<!-- ChatGPT: Direct, clear instructions work best. -->\n',
    'gemini': isDE ? '<!-- Gemini: Unterstützt gut strukturierte, multimodale Anfragen. -->\n' : '<!-- Gemini: Supports well-structured, multimodal requests. -->\n',
    'copilot': isDE ? '<!-- GitHub Copilot: Fokussiere auf Code-Kontext und spezifische Funktion/Datei. -->\n' : '<!-- GitHub Copilot: Focus on code context and specific function/file. -->\n',
    'cursor': isDE ? '<!-- Cursor AI: Referenziere relevante Dateien und gib Codebase-Kontext. -->\n' : '<!-- Cursor AI: Reference relevant files and provide codebase context. -->\n',
  };

  const hint = agentHints[agent] || '';
  const levelTxt = levelInstructions[level] || levelInstructions[1];

  if (isDE) {
    return `${hint}## Aufgabe
${task}
${context ? `\n## Kontext\n${context}\n` : ''}
## Anweisungen
${levelTxt}

Bitte antworte strukturiert und vollständig. Falls du Annahmen triffst, weise kurz darauf hin.`;
  } else {
    return `${hint}## Task
${task}
${context ? `\n## Context\n${context}\n` : ''}
## Instructions
${levelTxt}

Please respond in a structured and complete way. If you make assumptions, briefly note them.`;
  }
}

async function generatePromptWithAI(apiKey, agent, task, context, level, lang) {
  const isDE = lang === 'de';
  const levelNames = ['Beginner', 'Standard', 'Expert'];
  const agentName = agent;
  const lvlName = levelNames[level] || 'Standard';

  const sysPrompt = isDE
    ? `Du bist ein Prompt-Engineering-Experte. Erstelle einen optimalen Prompt für ${agentName} auf ${lvlName}-Niveau für die folgende Aufgabe. Der Prompt soll direkt einsetzbar sein, klar strukturiert und auf die Stärken des Agenten abgestimmt. Schreibe NUR den Prompt, keine Erklärungen davor oder danach.`
    : `You are a prompt engineering expert. Create an optimal prompt for ${agentName} at ${lvlName} level for the following task. The prompt should be immediately usable, clearly structured and tailored to the agent's strengths. Write ONLY the prompt, no explanations before or after.`;

  const fullPrompt = `${sysPrompt}\n\nAufgabe / Task: ${task}\nKontext / Context: ${context || 'none'}\nSprache der Ausgabe / Output language: ${isDE ? 'Deutsch' : 'English'}`;

  return callGemini(apiKey, fullPrompt);
}
