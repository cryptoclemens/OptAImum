/* ============================================================
   OptAImum – app.js  (Core utilities + Navbar + Language)
   ============================================================ */

// ── Supabase config ───────────────────────────────────────────
const SUPABASE_URL = 'https://ntdqmucoztkyuisldncd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_VR4xX9UrTCxeilwYh2EZkw_85Bp-JmT';

async function saveFeedbackToSupabase(payload) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/feedback`, {
    method:  'POST',
    headers: {
      'apikey':        SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type':  'application/json',
      'Prefer':        'return=minimal',
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.text().catch(() => '');
    throw new Error(`Supabase ${res.status}: ${err}`);
  }
}

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

  // Inject toggle button into navbar (before language toggle)
  const navRight = document.querySelector('.lang-toggle');
  if (!navRight) return;

  const btn = document.createElement('button');
  btn.className    = 'darkmode-btn';
  btn.id           = 'darkmodeBtn';
  btn.title        = 'Dark / Light Mode';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.textContent  = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  navRight.parentNode.insertBefore(btn, navRight);

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

  // Submit – save to Supabase, fallback to mailto on error
  panel.querySelector('#feedbackSubmit').addEventListener('click', async () => {
    const submitBtn = panel.querySelector('#feedbackSubmit');
    const stars     = selectedStars || null;
    const cats      = selectedCats.length ? selectedCats : null;
    const msg       = panel.querySelector('#feedbackMsg').value.trim() || null;
    const page      = location.pathname.split('/').pop() || 'index';
    const lang      = typeof currentLang !== 'undefined' ? currentLang : 'de';

    submitBtn.disabled   = true;
    submitBtn.textContent = '…';

    try {
      await saveFeedbackToSupabase({ page, stars, categories: cats, message: msg, lang });
    } catch (err) {
      console.warn('Supabase feedback failed, falling back to mailto:', err);
      // Mailto fallback
      const starsStr = stars ? '★'.repeat(stars) + '☆'.repeat(5 - stars) : '–';
      const catsStr  = cats  ? cats.join(', ')                            : '–';
      const subject  = encodeURIComponent(`OptAImum Feedback – ${starsStr}`);
      const body     = encodeURIComponent(
        `Bewertung: ${starsStr}\nKategorie: ${catsStr}\nSeite: ${page}\n\nNachricht:\n${msg || '–'}`
      );
      window.open(`mailto:feedback@innovation-republic.de?subject=${subject}&body=${body}`, '_blank');
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = typeof currentLang !== 'undefined' && currentLang === 'en'
        ? 'Send Feedback' : 'Feedback senden';
    }

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

// ── Impressum Modal ───────────────────────────────────────────
function initImpressum() {
  const overlay = document.createElement('div');
  overlay.className = 'impressum-overlay';
  overlay.id        = 'impressumOverlay';
  overlay.innerHTML = `
    <div class="impressum-modal" role="dialog" aria-modal="true" aria-labelledby="impressumTitle">
      <div class="impressum-header">
        <h2 id="impressumTitle">Impressum</h2>
        <button class="impressum-close" id="impressumClose" aria-label="Schließen">✕</button>
      </div>
      <div class="impressum-body">
        <h3>Angaben gemäß § 5 TMG</h3>
        <p>vencly GmbH<br>Leopoldstraße 31<br>80802 München</p>

        <h3>Vertreten durch</h3>
        <p>Clemens Eugen Theodor Pompeÿ</p>

        <h3>Kontakt</h3>
        <p>E-Mail: <a href="mailto:hello@vencly.com">hello@vencly.com</a></p>

        <h3>Registereintrag</h3>
        <p>Registernummer: HRB 290524 (AG München)</p>

        <h3>Umsatzsteuer-ID</h3>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE367131457</p>

        <h3>Streitbeilegung</h3>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h3>Haftung für Inhalte</h3>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

        <h3>Haftung für Links</h3>
        <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

        <h3>Urheberrecht</h3>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

        <h3>Datenschutz</h3>
        <p>Bei vencly.com, erreichbar unter www.vencly.com, ist der Schutz der Privatsphäre unserer Besucher eine unserer Hauptprioritäten. Wenn Sie weitere Fragen haben, zögern Sie nicht, uns zu kontaktieren. Diese Datenschutzerklärung gilt nur für unsere Online-Aktivitäten und ist gültig für Besucher unserer Website in Bezug auf die Informationen, die sie auf vencly.com geteilt und/oder gesammelt haben.</p>

        <h3>DSGVO-Datenschutzrechte</h3>
        <p>Jeder Nutzer hat das Recht auf Zugang, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit. Anfragen werden innerhalb eines Monats beantwortet. Kontakt: <a href="mailto:hello@vencly.com">hello@vencly.com</a></p>
      </div>
    </div>`;

  document.body.appendChild(overlay);

  const close = () => overlay.classList.remove('open');
  overlay.querySelector('#impressumClose').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  // Wire up all footer trigger links
  document.querySelectorAll('.impressum-trigger').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      overlay.classList.add('open');
    });
  });
}

// Auto-init on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initFeedbackSlidebar();
  initImpressum();
});
