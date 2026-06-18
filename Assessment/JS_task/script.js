// ════════════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════════════
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
function escAttr(str) { return escHtml(str); }


// ════════════════════════════════════════════════════════
//  TAB NAVIGATION
// ════════════════════════════════════════════════════════
function switchTab(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-tab="${id}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});


// ════════════════════════════════════════════════════════
//  GLOBAL THEME TOGGLE  (header button)
// ════════════════════════════════════════════════════════
const themeBtn = document.getElementById('themeToggle');
let globalDark = true;

themeBtn.addEventListener('click', () => {
  globalDark = !globalDark;
  applyTheme(globalDark);
  localStorage.setItem('globalTheme', globalDark ? 'dark' : 'light');
});

function applyTheme(isDark) {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeBtn.textContent = isDark ? '☀ Light' : '🌙 Dark';
  // keep capstone toggle in sync
  const cTheme = document.getElementById('cTheme');
  if (cTheme) cTheme.checked = !isDark;
}

// Restore saved theme on load
const savedTheme = localStorage.getItem('globalTheme');
if (savedTheme === 'light') {
  globalDark = false;
  applyTheme(false);
}


// ════════════════════════════════════════════════════════
//  SECTION A — Accordion
// ════════════════════════════════════════════════════════
function toggle(card) {
  card.classList.toggle('open');
}


// ════════════════════════════════════════════════════════
//  SECTION B — Creator Profile Link Manager
// ════════════════════════════════════════════════════════
let bLinks = JSON.parse(localStorage.getItem('bLinks') || '[]');

function bSave() {
  localStorage.setItem('bLinks', JSON.stringify(bLinks));
}

function bRender() {
  const container = document.getElementById('linkList');
  if (bLinks.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="big">🔗</div>
        No links yet. Add one above!
      </div>`;
    return;
  }

  container.innerHTML = bLinks.map((lk, i) => `
    <div class="link-item">
      <div class="link-icon">🔗</div>
      <div class="link-info">
        <div class="link-title">${escHtml(lk.title)}</div>
        <div class="link-url">${escHtml(lk.url)}</div>
      </div>
      <a class="btn-open" href="${escAttr(lk.url)}" target="_blank" rel="noopener">Open ↗</a>
      <button class="btn-remove" data-idx="${i}">✕ Remove</button>
    </div>
  `).join('');
}

// Event delegation — one listener handles all Remove buttons
document.getElementById('linkList').addEventListener('click', e => {
  const btn = e.target.closest('.btn-remove');
  if (!btn) return;
  bLinks.splice(+btn.dataset.idx, 1);
  bSave();
  bRender();
});

function addLink() {
  const titleEl = document.getElementById('bTitle');
  const urlEl   = document.getElementById('bUrl');
  const tErr    = document.getElementById('bTitleErr');
  const uErr    = document.getElementById('bUrlErr');
  let ok = true;

  // Reset errors
  titleEl.classList.remove('err'); tErr.classList.remove('show');
  urlEl.classList.remove('err');   uErr.classList.remove('show');

  // Validate
  if (!titleEl.value.trim()) {
    titleEl.classList.add('err');
    tErr.classList.add('show');
    ok = false;
  }
  if (!urlEl.value.trim().startsWith('https://')) {
    urlEl.classList.add('err');
    uErr.classList.add('show');
    ok = false;
  }

  if (!ok) return;

  bLinks.push({ title: titleEl.value.trim(), url: urlEl.value.trim() });
  bSave();
  bRender();
  titleEl.value = '';
  urlEl.value   = '';
}

// Initial render on page load
bRender();


// ════════════════════════════════════════════════════════
//  SECTION C — Bio-Stack Capstone
// ════════════════════════════════════════════════════════
const VERIFIED_THRESHOLD = 1000;

let cLinks   = JSON.parse(localStorage.getItem('cLinks')   || '[]');
let cProfile = JSON.parse(
  localStorage.getItem('cProfile') ||
  '{"name":"Alex Creator","bio":"Designer · Coder · Creator 🚀","followers":800}'
);

function cSave() {
  localStorage.setItem('cLinks',   JSON.stringify(cLinks));
  localStorage.setItem('cProfile', JSON.stringify(cProfile));
}

function cRender() {
  const list = document.getElementById('cLinkList');

  // Update stats
  document.getElementById('statLinks').textContent     = cLinks.length;
  document.getElementById('statFollowers').textContent = cProfile.followers;

  // Verified badge — truthy/falsy check
  const badge = document.getElementById('verifiedBadge');
  badge.style.display = cProfile.followers >= VERIFIED_THRESHOLD ? 'inline-block' : 'none';

  // Render link list
  if (cLinks.length === 0) {
    list.innerHTML = `<div style="color:var(--muted);font-size:.82rem;padding:12px 0">No links yet — add some!</div>`;
    return;
  }

  list.innerHTML = cLinks.map((lk, i) => `
    <div class="c-link-btn">
      <a class="c-link-left"
         href="${escAttr(lk.url)}"
         target="_blank"
         rel="noopener"
         style="text-decoration:none;color:inherit">
        <div class="c-link-dot"></div>
        <span>${escHtml(lk.title)}</span>
      </a>
      <button class="c-remove" data-idx="${i}" title="Remove">✕</button>
    </div>
  `).join('');
}

// Event delegation for capstone remove buttons
document.getElementById('cLinkList').addEventListener('click', e => {
  const btn = e.target.closest('.c-remove');
  if (!btn) return;
  cLinks.splice(+btn.dataset.idx, 1);
  cSave();
  cRender();
});

function cAddLink() {
  const tEl = document.getElementById('cTitle');
  const uEl = document.getElementById('cUrl');
  const tE  = document.getElementById('cTitleErr');
  const uE  = document.getElementById('cUrlErr');
  let ok = true;

  tEl.classList.remove('err'); tE.classList.remove('show');
  uEl.classList.remove('err'); uE.classList.remove('show');

  if (!tEl.value.trim()) {
    tEl.classList.add('err');
    tE.classList.add('show');
    ok = false;
  }
  if (!uEl.value.trim().startsWith('https://')) {
    uEl.classList.add('err');
    uE.classList.add('show');
    ok = false;
  }

  if (!ok) return;

  cLinks.push({ title: tEl.value.trim(), url: uEl.value.trim() });
  cSave();
  cRender();
  tEl.value = '';
  uEl.value = '';
}

function updateProfile() {
  cProfile.name = document.getElementById('cName').value;
  cProfile.bio  = document.getElementById('cBio').value;
  document.getElementById('profileName').textContent = cProfile.name;
  document.getElementById('profileBio').textContent  = cProfile.bio;
  document.getElementById('avatarInitial').textContent =
    (cProfile.name[0] || 'A').toUpperCase();
  cSave();
}

function updateFollowers() {
  cProfile.followers = +document.getElementById('cFollowers').value || 0;
  cSave();
  cRender();
}

function toggleCapstoneTheme() {
  // When checkbox is checked → light mode
  const isLight = document.getElementById('cTheme').checked;
  globalDark = !isLight;
  applyTheme(globalDark);
  localStorage.setItem('globalTheme', globalDark ? 'dark' : 'light');
}

// ── Restore capstone profile from localStorage ──────────
document.getElementById('cName').value      = cProfile.name;
document.getElementById('cBio').value       = cProfile.bio;
document.getElementById('cFollowers').value = cProfile.followers;

document.getElementById('profileName').textContent = cProfile.name;
document.getElementById('profileBio').textContent  = cProfile.bio;
document.getElementById('avatarInitial').textContent =
  (cProfile.name[0] || 'A').toUpperCase();

// Keep capstone toggle in sync with current global theme
document.getElementById('cTheme').checked = !globalDark;

// Initial render
cRender();
