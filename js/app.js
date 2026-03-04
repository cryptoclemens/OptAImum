/* ============================================================
   OptAImum – app.js  (Core utilities + Navbar + Language)
   ============================================================ */

// ── Navbar ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link
  const links = document.querySelectorAll('.navbar-links a');
  const page  = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if (a.getAttribute('href') === page || (page === '' && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Apply stored language on load
  setLang(currentLang);
});

// ── Copy to clipboard ─────────────────────────────────────────
function copyText(text, btnEl) {
  navigator.clipboard.writeText(text).then(() => {
    if (btnEl) {
      const orig = btnEl.textContent;
      btnEl.textContent = '✓ Copied!';
      btnEl.classList.add('copied');
      setTimeout(() => { btnEl.textContent = orig; btnEl.classList.remove('copied'); }, 2000);
    }
  });
}

// ── Download as .md ───────────────────────────────────────────
function downloadMd(content, filename = 'output.md') {
  const blob = new Blob([content], { type: 'text/markdown' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// ── Tabs ──────────────────────────────────────────────────────
function initTabs(containerEl) {
  const btns   = containerEl.querySelectorAll('.tab-btn');
  const panels = containerEl.querySelectorAll('.tab-panel');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = containerEl.querySelector(`#${btn.dataset.tab}`);
      if (panel) panel.classList.add('active');
    });
  });
  if (btns.length) btns[0].click();
}

// ── Multi-select choice items ─────────────────────────────────
function initChoiceItems(container, multi = true) {
  container.querySelectorAll('.choice-item').forEach(item => {
    item.addEventListener('click', () => {
      if (!multi) {
        container.querySelectorAll('.choice-item').forEach(i => i.classList.remove('selected'));
      }
      item.classList.toggle('selected');
    });
  });
}

function getSelectedChoices(container) {
  return [...container.querySelectorAll('.choice-item.selected')]
    .map(el => el.dataset.value || el.textContent.trim());
}

// ── Gemini API call ───────────────────────────────────────────
async function callGemini(apiKey, prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error?.message || `API Error ${res.status}`);
  }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
}

// ── Toast notification ────────────────────────────────────────
function showToast(msg, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position:fixed; bottom:1.5rem; right:1.5rem; z-index:9999;
    background:${type === 'error' ? '#EF4444' : '#10B981'};
    color:white; padding:0.75rem 1.25rem; border-radius:10px;
    font-size:0.875rem; font-weight:600; box-shadow:0 4px 20px rgba(0,0,0,0.15);
    animation: slideIn 0.3s ease;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

// ── Dark Mode (Feature #8) ────────────────────────────────────
function initDarkMode() {
  const saved = localStorage.getItem('optaimum-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  // Inject toggle button into navbar (after language toggle)
  const navRight = document.querySelector('.navbar-right');
  if (!navRight) return;

  const btn = document.createElement('button');
  btn.className    = 'darkmode-btn';
  btn.id           = 'darkmodeBtn';
  btn.title        = 'Dark / Light Mode';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.textContent  = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  navRight.insertBefore(btn, navRight.firstChild);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('optaimum-theme', next);
    btn.textContent = next === 'dark' ? '☀️' : '🌙';
  });
}

// ── Feedback Slidebar (Feature #18) ──────────────────────────
function initFeedbackSlidebar() {
  const lang = typeof currentLang !== 'undefined' ? currentLang : 'de';

  const labels = {
    de: {
      tab:        'Feedback',
      title:      'Dein Feedback',
      ratingLbl:  'Wie gefällt dir OptAImum?',
      catLbl:     'Was betrifft dein Feedback?',
      cats:       ['🖊️ MD-Creator', '🔀 LLM-Wechsel', '💬 Prompts', '🖥️ VM-Guide', '✨ Design', '💡 Idee'],
      msgLbl:     'Deine Nachricht (optional)',
      msgPh:      'Was können wir verbessern?',
      submit:     'Feedback senden',
      thanksH:    'Danke! 🙌',
      thanksT:    'Dein Feedback hilft uns, OptAImum zu verbessern.',
      newFb:      'Weiteres Feedback',
    },
    en: {
      tab:        'Feedback',
      title:      'Your Feedback',
      ratingLbl:  'How do you like OptAImum?',
      catLbl:     'What is your feedback about?',
      cats:       ['🖊️ MD Creator', '🔀 LLM Switch', '💬 Prompts', '🖥️ VM Guide', '✨ Design', '💡 Idea'],
      msgLbl:     'Your message (optional)',
      msgPh:      'What can we improve?',
      submit:     'Send Feedback',
      thanksH:    'Thank you! 🙌',
      thanksT:    'Your feedback helps us improve OptAImum.',
      newFb:      'More Feedback',
    },
  };

  const l = labels[lang] || labels.de;
  let selectedStars = 0;
  let selectedCats  = [];

  // Build HTML
  const overlay = document.createElement('div');
  overlay.className = 'feedback-overlay';
  overlay.id = 'feedbackOverlay';

  const tab = document.createElement('button');
  tab.className = 'feedback-tab';
  tab.id        = 'feedbackTab';
  tab.textContent = l.tab;

  const panel = document.createElement('div');
  panel.className = 'feedback-panel';
  panel.id        = 'feedbackPanel';
  panel.innerHTML = `
    <div class="feedback-header">
      <h3>${l.title}</h3>
      <button class="feedback-close" id="feedbackClose" aria-label="Close">✕</button>
    </div>
    <div class="feedback-body" id="feedbackBody">
      <div>
        <span class="feedback-label">${l.ratingLbl}</span>
        <div class="star-row" id="starRow">
          ${[1,2,3,4,5].map(n => `<button class="star-btn" data-star="${n}" aria-label="${n} Sterne">★</button>`).join('')}
        </div>
      </div>
      <div>
        <span class="feedback-label">${l.catLbl}</span>
        <div class="feedback-chips" id="chipRow">
          ${l.cats.map(c => `<button class="feedback-chip" data-cat="${c}">${c}</button>`).join('')}
        </div>
      </div>
      <div>
        <span class="feedback-label">${l.msgLbl}</span>
        <textarea class="feedback-textarea" id="feedbackMsg" placeholder="${l.msgPh}"></textarea>
      </div>
      <button class="feedback-submit" id="feedbackSubmit">${l.submit}</button>
    </div>
    <div class="feedback-thanks" id="feedbackThanks">
      <div class="thanks-icon">🎉</div>
      <h3>${l.thanksH}</h3>
      <p>${l.thanksT}</p>
      <button class="feedback-submit" id="feedbackReset" style="margin-top:1rem;width:auto;padding:.6rem 1.5rem">${l.newFb}</button>
    </div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(tab);
  document.body.appendChild(panel);

  // Helpers
  const openPanel  = () => { panel.classList.add('open'); overlay.classList.add('open'); };
  const closePanel = () => { panel.classList.remove('open'); overlay.classList.remove('open'); };

  tab.addEventListener('click', openPanel);
  overlay.addEventListener('click', closePanel);
  panel.querySelector('#feedbackClose').addEventListener('click', closePanel);

  // Stars
  panel.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectedStars = +btn.dataset.star;
      panel.querySelectorAll('.star-btn').forEach(b => {
        b.classList.toggle('active', +b.dataset.star <= selectedStars);
      });
    });
  });

  // Chips
  panel.querySelectorAll('.feedback-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      const cat = chip.dataset.cat;
      if (selectedCats.includes(cat)) selectedCats = selectedCats.filter(c => c !== cat);
      else selectedCats.push(cat);
    });
  });

  // Submit – opens mailto with pre-filled subject & body
  panel.querySelector('#feedbackSubmit').addEventListener('click', () => {
    const stars   = selectedStars ? '★'.repeat(selectedStars) + '☆'.repeat(5 - selectedStars) : 'keine Bewertung';
    const cats    = selectedCats.length ? selectedCats.join(', ') : '–';
    const msg     = panel.querySelector('#feedbackMsg').value.trim() || '–';
    const page    = location.pathname.split('/').pop() || 'index';
    const subject = encodeURIComponent(`OptAImum Feedback – ${stars}`);
    const body    = encodeURIComponent(
      `Bewertung: ${stars}\nKategorie: ${cats}\nSeite: ${page}\n\nNachricht:\n${msg}`
    );
    window.open(`mailto:feedback@innovation-republic.de?subject=${subject}&body=${body}`, '_blank');

    // Show thank-you
    panel.querySelector('#feedbackBody').style.display   = 'none';
    panel.querySelector('#feedbackThanks').style.display = 'flex';
  });

  // Reset
  panel.querySelector('#feedbackReset').addEventListener('click', () => {
    panel.querySelector('#feedbackBody').style.display   = 'flex';
    panel.querySelector('#feedbackThanks').style.display = 'none';
    panel.querySelector('#feedbackMsg').value = '';
    panel.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
    panel.querySelectorAll('.feedback-chip').forEach(b => b.classList.remove('active'));
    selectedStars = 0; selectedCats = [];
  });
}

// Auto-init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initFeedbackSlidebar();
});
