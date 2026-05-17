/* ============================================================
   ADMIN PANEL — Prof. Swati Sah Portfolio
   Password: testing123  |  Data stored in localStorage
   ============================================================ */

const ADMIN_PASSWORD  = 'testing123';
const STORAGE_KEY     = 'admin_portfolio_data';

let adminData         = null;
let currentSection    = 'dashboard';
let editingCourseUni  = null; // currently expanded university key

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  updateThemeBtn();
  checkAuth();
});

/* ============================================================
   THEME
   ============================================================ */
function updateThemeBtn() {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.innerHTML = isDark
    ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg> Light`
    : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/></svg> Dark`;
}

function toggleAdminTheme() {
  const cur  = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeBtn();
}

/* ============================================================
   AUTH
   ============================================================ */
function checkAuth() {
  if (sessionStorage.getItem('admin_auth') === 'true') {
    adminData = loadData();
    renderAdminLayout();
  } else {
    renderLogin();
  }
}

function handleLogin() {
  const pw  = document.getElementById('adminPassword').value;
  const err = document.getElementById('loginError');
  if (pw === ADMIN_PASSWORD) {
    sessionStorage.setItem('admin_auth', 'true');
    adminData = loadData();
    renderAdminLayout();
  } else {
    err.textContent = 'Incorrect password. Please try again.';
    err.style.display = 'block';
    document.getElementById('adminPassword').value = '';
    document.getElementById('adminPassword').focus();
  }
}

function handleLogout() {
  if (!confirm('Log out of admin panel?')) return;
  sessionStorage.removeItem('admin_auth');
  adminData = null;
  renderLogin();
}

/* ============================================================
   DATA
   ============================================================ */
function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch(e) {}
  }
  return buildDefaultData();
}

function buildDefaultData() {
  const toISO = (ds) => {
    if (!ds) return '';
    const d = new Date(ds);
    return isNaN(d) ? ds : d.toISOString().split('T')[0];
  };

  const allW = [
    ...(SITE_DATA.workshops.past     || []),
    ...(SITE_DATA.workshops.upcoming || []),
    ...(SITE_DATA.workshops.ongoing  || [])
  ].map(w => ({ ...w, id: uid(), date: toISO(w.date) }));

  return {
    professor:    JSON.parse(JSON.stringify(SITE_DATA.professor)),
    about:        JSON.parse(JSON.stringify(SITE_DATA.about)),
    qualifications: JSON.parse(JSON.stringify(SITE_DATA.qualifications)),
    recognitions: JSON.parse(JSON.stringify(SITE_DATA.recognitions)),
    workshops:    allW,
    lectures:     JSON.parse(JSON.stringify(SITE_DATA.lectures)),
    books:        JSON.parse(JSON.stringify(SITE_DATA.books)),
    papers:       JSON.parse(JSON.stringify(SITE_DATA.papers)),
    articles:     JSON.parse(JSON.stringify(SITE_DATA.articles)),
    universities: JSON.parse(JSON.stringify(SITE_DATA.universities)),
    youtubeChannel: SITE_DATA.youtubeChannel,
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(adminData));
  showToast('Saved!');
}

function uid() {
  return '_' + Math.random().toString(36).slice(2, 11);
}

/* ============================================================
   HELPERS
   ============================================================ */
function ytThumb(url) {
  if (!url) return '';
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?.*?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/);
  return m ? `https://img.youtube.com/vi/${m[1]}/mqdefault.jpg` : '';
}

function fmtDate(ds) {
  if (!ds) return '';
  const d = new Date(ds);
  if (isNaN(d)) return ds;
  return d.toLocaleDateString('en-GB', { day:'2-digit', month:'short', year:'numeric' });
}

function wsStatus(ds) {
  const today = new Date(); today.setHours(0,0,0,0);
  const wd    = new Date(ds); wd.setHours(0,0,0,0);
  const diff  = wd - today;
  if (diff < 0) return 'past';
  if (diff === 0) return 'ongoing';
  return 'upcoming';
}

function esc(s) {
  return String(s || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
}

function showToast(msg, type = 'success') {
  let t = document.getElementById('adminToast');
  if (!t) { t = document.createElement('div'); t.id = 'adminToast'; document.body.appendChild(t); }
  t.className = `admin-toast admin-toast-${type}`;
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = 'none'; }, 2800);
}

/* ============================================================
   LOGIN
   ============================================================ */
function renderLogin() {
  document.getElementById('admin-app').innerHTML = `
    <div class="admin-login-page">
      <div class="admin-login-card">
        <div class="admin-login-logo">
          <div class="admin-login-icon">⚙</div>
          <h1>Admin Panel</h1>
          <p>Prof. Swati Sah Portfolio</p>
        </div>
        <div class="admin-login-form">
          <label for="adminPassword">Password</label>
          <input type="password" id="adminPassword" placeholder="Enter admin password"
                 onkeydown="if(event.key==='Enter')handleLogin()">
          <div id="loginError" class="admin-login-error" style="display:none;"></div>
          <button class="btn btn-primary" onclick="handleLogin()"
                  style="width:100%;margin-top:1rem;padding:.7rem;">
            Login to Admin Panel
          </button>
        </div>
        <div style="margin-top:1.5rem;text-align:center;">
          <a href="index.html" style="font-size:.85rem;color:var(--text-light);">← Back to Portfolio</a>
        </div>
      </div>
    </div>`;
  setTimeout(() => { const p = document.getElementById('adminPassword'); if(p) p.focus(); }, 80);
}

/* ============================================================
   ADMIN LAYOUT
   ============================================================ */
const NAV_ITEMS = [
  { id:'dashboard',      icon:'⊞',  label:'Dashboard'     },
  { id:'profile',        icon:'👤', label:'Profile'        },
  { id:'about',          icon:'📖', label:'About & Bio'    },
  { id:'qualifications', icon:'🎓', label:'Qualifications' },
  { id:'recognitions',   icon:'🏆', label:'Recognitions'   },
  { id:'courses',        icon:'📚', label:'Courses'        },
  { id:'workshops',      icon:'🗓',  label:'Workshops'      },
  { id:'lectures',       icon:'▶',  label:'Lectures'       },
  { id:'books',          icon:'📕', label:'Books'          },
  { id:'papers',         icon:'📄', label:'Publications'   },
  { id:'articles',       icon:'📰', label:'Articles'       },
];

function renderAdminLayout() {
  const nav = NAV_ITEMS.map(s => `
    <li class="admin-nav-item" data-sec="${s.id}" onclick="switchSection('${s.id}')">
      <span class="admin-nav-icon">${s.icon}</span>
      <span>${s.label}</span>
    </li>`).join('');

  document.getElementById('admin-app').innerHTML = `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="admin-sidebar-header">
          <div class="admin-sidebar-logo">
            <span style="font-family:'Cormorant Garamond',serif;font-size:1.1rem;font-weight:600;color:var(--gold)">
              Prof. Swati Sah
            </span>
            <span style="font-size:.72rem;color:var(--text-light);display:block;margin-top:.1rem;">Admin Panel</span>
          </div>
        </div>
        <nav class="admin-sidebar-nav"><ul>${nav}</ul></nav>
        <div class="admin-sidebar-footer">
          <a href="index.html" target="_blank" class="admin-sidebar-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            View Site
          </a>
          <button onclick="toggleAdminTheme()" id="themeToggleBtn" class="admin-sidebar-link admin-theme-btn"></button>
          <button onclick="handleLogout()" class="admin-sidebar-link admin-logout-btn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Logout
          </button>
        </div>
      </aside>
      <main class="admin-main">
        <div class="admin-content" id="adminContent"></div>
      </main>
    </div>
    <div class="admin-modal-overlay" id="adminModal" style="display:none;" onclick="overlayClose(event)">
      <div class="admin-modal" id="adminModalInner">
        <div class="admin-modal-header">
          <h3 id="adminModalTitle"></h3>
          <button class="admin-modal-close" onclick="closeModal()">✕</button>
        </div>
        <div class="admin-modal-body" id="adminModalBody"></div>
        <div class="admin-modal-footer" id="adminModalFooter"></div>
      </div>
    </div>
    <div id="adminToast" class="admin-toast" style="display:none;"></div>`;

  updateThemeBtn();
  switchSection(currentSection);
}

function switchSection(id) {
  currentSection = id;
  document.querySelectorAll('.admin-nav-item').forEach(el =>
    el.classList.toggle('active', el.dataset.sec === id));
  const el = document.getElementById('adminContent');
  if (!el) return;
  switch(id) {
    case 'dashboard':      el.innerHTML = renderDashboard();      break;
    case 'profile':        el.innerHTML = renderProfileSection(); break;
    case 'about':          el.innerHTML = renderAboutSection();   break;
    case 'qualifications': el.innerHTML = renderQuals();          break;
    case 'recognitions':   el.innerHTML = renderRecognitions();   break;
    case 'courses':        el.innerHTML = renderCourses();        break;
    case 'workshops':      el.innerHTML = renderWorkshops();      break;
    case 'lectures':       el.innerHTML = renderLectures();       break;
    case 'books':          el.innerHTML = renderBooks();          break;
    case 'papers':         el.innerHTML = renderPapers();         break;
    case 'articles':       el.innerHTML = renderArticles();       break;
  }
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(title, bodyHtml, footerHtml) {
  document.getElementById('adminModalTitle').textContent = title;
  document.getElementById('adminModalBody').innerHTML   = bodyHtml;
  document.getElementById('adminModalFooter').innerHTML = footerHtml || `
    <button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>`;
  document.getElementById('adminModal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  const first = document.querySelector('#adminModalBody input, #adminModalBody textarea');
  if (first) setTimeout(() => first.focus(), 80);
}

function closeModal() {
  document.getElementById('adminModal').style.display = 'none';
  document.body.style.overflow = '';
}

function overlayClose(e) {
  if (e.target === document.getElementById('adminModal')) closeModal();
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard() {
  const d = adminData;
  const cards = [
    { icon:'🏆', count: d.recognitions.length,   label:'Recognitions', sec:'recognitions' },
    { icon:'🎓', count: d.qualifications.length,  label:'Qualifications', sec:'qualifications' },
    { icon:'🗓',  count: d.workshops.length,       label:'Workshops', sec:'workshops' },
    { icon:'▶',  count: d.lectures.length,        label:'Lectures', sec:'lectures' },
    { icon:'📕', count: d.books.length,           label:'Books', sec:'books' },
    { icon:'📄', count: d.papers.length,          label:'Publications', sec:'papers' },
    { icon:'📰', count: d.articles.length,        label:'Articles', sec:'articles' },
    { icon:'📚', count: d.universities.reduce((a,u)=>a+u.courses.length,0), label:'Courses', sec:'courses' },
  ].map(c => `
    <div class="admin-stat-card" onclick="switchSection('${c.sec}')">
      <div class="admin-stat-icon">${c.icon}</div>
      <div class="admin-stat-num">${c.count}</div>
      <div class="admin-stat-label">${c.label}</div>
    </div>`).join('');

  const upcoming = d.workshops.filter(w => wsStatus(w.date) === 'upcoming')
    .sort((a,b) => new Date(a.date)-new Date(b.date)).slice(0,3);

  const upHtml = upcoming.length
    ? upcoming.map(w => `
        <div style="padding:.6rem .75rem;border-radius:8px;background:var(--bg-alt);margin-bottom:.5rem;">
          <div style="font-weight:500;font-size:.875rem;color:var(--text-dark);">${esc(w.title)}</div>
          <div style="font-size:.78rem;color:var(--text-light);margin-top:.2rem;">
            📅 ${fmtDate(w.date)} &nbsp;·&nbsp; 📍 ${esc(w.location)}
          </div>
        </div>`).join('')
    : `<p style="color:var(--text-light);font-size:.875rem;">No upcoming workshops.</p>`;

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Dashboard</h1>
        <p class="admin-section-sub">Portfolio content overview</p>
      </div>
      <a href="index.html" target="_blank" class="admin-btn admin-btn-outline">
        🌐 View Live Site
      </a>
    </div>
    <div class="admin-dashboard-grid">${cards}</div>
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:14px;padding:1.25rem 1.5rem;margin-top:.5rem;">
      <div style="font-family:'Cormorant Garamond',serif;font-size:1.2rem;font-weight:600;color:var(--brown-deep);margin-bottom:1rem;">
        Upcoming Workshops
      </div>
      ${upHtml}
    </div>`;
}

/* ============================================================
   PROFILE
   ============================================================ */
function renderProfileSection() {
  const p = adminData.professor;

  const statsHtml = (p.stats || []).map((s,i) => `
    <div class="admin-stat-row">
      <input type="text" value="${esc(s.num)}" placeholder="e.g. 12+"
             onchange="adminData.professor.stats[${i}].num=this.value">
      <input type="text" value="${esc(s.label)}" placeholder="Label"
             onchange="adminData.professor.stats[${i}].label=this.value">
      <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="removeStat(${i})">✕</button>
    </div>`).join('');

  const photoSrc = p.photo || '';
  const aboutPhotoSrc = p.aboutPhoto || '';

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Profile</h1>
        <p class="admin-section-sub">Basic professor information shown site-wide</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="saveProfileSection()">Save Changes</button>
    </div>

    <div class="admin-table-wrap" style="padding:1.5rem;margin-bottom:1.5rem;">
      <div class="admin-form-grid">
        <div class="admin-form-group">
          <label>Full Name</label>
          <input type="text" id="pName" value="${esc(p.name)}">
        </div>
        <div class="admin-form-group">
          <label>Title / Designation</label>
          <input type="text" id="pTitle" value="${esc(p.title)}">
        </div>
        <div class="admin-form-group">
          <label>Institution</label>
          <input type="text" id="pInstitution" value="${esc(p.institution)}">
        </div>
        <div class="admin-form-group">
          <label>Email</label>
          <input type="email" id="pEmail" value="${esc(p.email)}">
        </div>
        <div class="admin-form-group">
          <label>LinkedIn URL</label>
          <input type="url" id="pLinkedin" value="${esc(p.linkedin)}">
        </div>
        <div class="admin-form-group">
          <label>Google Scholar URL</label>
          <input type="url" id="pScholar" value="${esc(p.googleScholar)}">
        </div>
        <div class="admin-form-group">
          <label>ORCID URL</label>
          <input type="url" id="pOrcid" value="${esc(p.orcid)}">
        </div>
        <div class="admin-form-group">
          <label>YouTube Channel URL</label>
          <input type="url" id="pYoutube" value="${esc(adminData.youtubeChannel)}">
        </div>
        <div class="admin-form-group full-span">
          <label>Short Bio (shown on homepage)</label>
          <textarea id="pShortBio" rows="4">${esc(p.shortBio)}</textarea>
        </div>
      </div>
    </div>

    <div class="admin-table-wrap" style="padding:1.5rem;margin-bottom:1.5rem;">
      <div style="font-weight:600;color:var(--brown-deep);margin-bottom:1rem;font-family:'DM Sans',sans-serif;">
        Hero Photos
      </div>
      <div class="admin-form-grid">
        <div class="admin-form-group">
          <label>Hero / Circle Photo URL or Path</label>
          <input type="text" id="pPhoto" value="${esc(p.photo)}"
                 oninput="document.getElementById('pPhotoPreview').src=this.value">
          <img id="pPhotoPreview" src="${esc(photoSrc)}" alt="preview" class="admin-img-preview"
               onerror="this.style.display='none'" style="${photoSrc?'':'display:none'}">
          <span class="admin-hint">Or upload a file:</span>
          <input type="file" accept="image/*" onchange="uploadPhoto(event,'pPhoto','pPhotoPreview')">
        </div>
        <div class="admin-form-group">
          <label>About Page Photo URL or Path</label>
          <input type="text" id="pAboutPhoto" value="${esc(p.aboutPhoto)}"
                 oninput="document.getElementById('pAboutPhotoPreview').src=this.value">
          <img id="pAboutPhotoPreview" src="${esc(aboutPhotoSrc)}" alt="preview" class="admin-img-preview"
               onerror="this.style.display='none'" style="${aboutPhotoSrc?'':'display:none'}">
          <span class="admin-hint">Or upload a file:</span>
          <input type="file" accept="image/*" onchange="uploadPhoto(event,'pAboutPhoto','pAboutPhotoPreview')">
        </div>
      </div>
    </div>

    <div class="admin-table-wrap" style="padding:1.5rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
        <div style="font-weight:600;color:var(--brown-deep);font-family:'DM Sans',sans-serif;">
          Hero Stats
        </div>
        <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="addStat()">+ Add Stat</button>
      </div>
      <div class="admin-stats-list" id="statsList">${statsHtml}</div>
    </div>`;
}

function saveProfileSection() {
  const p = adminData.professor;
  p.name        = document.getElementById('pName').value;
  p.title       = document.getElementById('pTitle').value;
  p.institution = document.getElementById('pInstitution').value;
  p.email       = document.getElementById('pEmail').value;
  p.linkedin    = document.getElementById('pLinkedin').value;
  p.googleScholar = document.getElementById('pScholar').value;
  p.orcid       = document.getElementById('pOrcid').value;
  p.shortBio    = document.getElementById('pShortBio').value;
  adminData.youtubeChannel = document.getElementById('pYoutube').value;
  // photos may already be set via uploadPhoto
  const ph = document.getElementById('pPhoto').value;
  const ap = document.getElementById('pAboutPhoto').value;
  if (ph) p.photo = ph;
  if (ap) p.aboutPhoto = ap;
  saveData();
}

function addStat() {
  if (!adminData.professor.stats) adminData.professor.stats = [];
  adminData.professor.stats.push({ num: '', label: '' });
  switchSection('profile');
}

function removeStat(i) {
  adminData.professor.stats.splice(i, 1);
  switchSection('profile');
}

function uploadPhoto(evt, inputId, previewId) {
  const file = evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const dataUrl = e.target.result;
    document.getElementById(inputId).value = dataUrl;
    const prev = document.getElementById(previewId);
    prev.src = dataUrl;
    prev.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

/* ============================================================
   ABOUT
   ============================================================ */
function renderAboutSection() {
  const a = adminData.about;

  const paraHtml = (a.fullBio || []).map((p,i) => `
    <div class="admin-bio-item">
      <textarea onchange="adminData.about.fullBio[${i}]=this.value">${esc(p)}</textarea>
      <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="removeBioPara(${i})">✕</button>
    </div>`).join('');

  const expHtml = (a.experience || []).map((e,i) => `
    <div class="admin-exp-item">
      <input type="text" value="${esc(e.icon)}" placeholder="Icon" style="max-width:60px"
             onchange="adminData.about.experience[${i}].icon=this.value">
      <input type="text" value="${esc(e.title)}" placeholder="Title (e.g. Professor)"
             onchange="adminData.about.experience[${i}].title=this.value">
      <input type="text" value="${esc(e.org)}" placeholder="Organisation"
             onchange="adminData.about.experience[${i}].org=this.value">
      <input type="text" value="${esc(e.period)}" placeholder="Period (e.g. Present)"
             style="max-width:100px" onchange="adminData.about.experience[${i}].period=this.value">
      <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="removeExp(${i})">✕</button>
    </div>`).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">About & Bio</h1>
        <p class="admin-section-sub">Biography paragraphs and experience timeline</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="saveAbout()">Save Changes</button>
    </div>

    <div class="admin-table-wrap" style="padding:1.5rem;margin-bottom:1.5rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
        <div style="font-weight:600;color:var(--brown-deep);font-family:'DM Sans',sans-serif;">
          Biography Paragraphs
        </div>
        <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="addBioPara()">+ Add Paragraph</button>
      </div>
      <div class="admin-bio-list" id="bioList">${paraHtml}</div>
    </div>

    <div class="admin-table-wrap" style="padding:1.5rem;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
        <div style="font-weight:600;color:var(--brown-deep);font-family:'DM Sans',sans-serif;">
          Experience Timeline
        </div>
        <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="addExp()">+ Add Entry</button>
      </div>
      <div class="admin-exp-list" id="expList">${expHtml}</div>
    </div>`;
}

function saveAbout() {
  // Bio paragraphs & experience are updated inline via onchange
  saveData();
}

function addBioPara() {
  if (!adminData.about.fullBio) adminData.about.fullBio = [];
  adminData.about.fullBio.push('');
  switchSection('about');
}

function removeBioPara(i) {
  adminData.about.fullBio.splice(i, 1);
  switchSection('about');
}

function addExp() {
  if (!adminData.about.experience) adminData.about.experience = [];
  adminData.about.experience.push({ icon:'🎓', title:'', org:'', period:'' });
  switchSection('about');
}

function removeExp(i) {
  adminData.about.experience.splice(i, 1);
  switchSection('about');
}

/* ============================================================
   QUALIFICATIONS
   ============================================================ */
function renderQuals() {
  const rows = adminData.qualifications.map((q,i) => `
    <tr>
      <td>
        <div class="admin-item-title">${esc(q.degree)} — ${esc(q.field)}</div>
        <div class="admin-item-meta">${esc(q.university)}</div>
        ${q.specialization ? `<div style="font-size:.75rem;color:var(--gold);margin-top:.2rem;">${esc(q.specialization)}</div>` : ''}
      </td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editQual(${i})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteItem('qualifications',${i})">Delete</button>
        </div>
      </td>
    </tr>`).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Qualifications</h1>
        <p class="admin-section-sub">${adminData.qualifications.length} degree(s)</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="editQual(-1)">+ Add Qualification</button>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Degree</th><th style="width:120px">Actions</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="2"><div class="admin-empty"><div class="admin-empty-icon">🎓</div>No qualifications yet.</div></td></tr>`}</tbody>
      </table>
    </div>`;
}

function editQual(i) {
  const q = i >= 0 ? adminData.qualifications[i] : { degree:'', field:'', university:'', specialization:'' };
  openModal(
    i >= 0 ? 'Edit Qualification' : 'Add Qualification',
    `<div class="admin-form-grid one-col">
      <div class="admin-form-group">
        <label>Degree (e.g. Ph.D., M.Tech.)</label>
        <input type="text" id="qDeg" value="${esc(q.degree)}">
      </div>
      <div class="admin-form-group">
        <label>Field of Study</label>
        <input type="text" id="qField" value="${esc(q.field)}">
      </div>
      <div class="admin-form-group">
        <label>University, Year</label>
        <input type="text" id="qUni" value="${esc(q.university)}" placeholder="e.g. XYZ University, 2016">
      </div>
      <div class="admin-form-group">
        <label>Specialization (optional)</label>
        <input type="text" id="qSpec" value="${esc(q.specialization)}">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="saveQual(${i})">Save</button>`
  );
}

function saveQual(i) {
  const obj = {
    degree:         document.getElementById('qDeg').value.trim(),
    field:          document.getElementById('qField').value.trim(),
    university:     document.getElementById('qUni').value.trim(),
    specialization: document.getElementById('qSpec').value.trim(),
  };
  if (!obj.degree) { showToast('Degree is required', 'error'); return; }
  if (i >= 0) adminData.qualifications[i] = obj;
  else adminData.qualifications.push(obj);
  saveData();
  closeModal();
  switchSection('qualifications');
}

/* ============================================================
   RECOGNITIONS
   ============================================================ */
function renderRecognitions() {
  const rows = adminData.recognitions.map((r,i) => `
    <tr>
      <td style="width:70px">
        ${r.image
          ? `<img src="${esc(r.image)}" class="admin-cert-thumb" onerror="this.style.display='none'">`
          : `<div class="admin-cert-thumb" style="display:flex;align-items:center;justify-content:center;font-size:1.5rem;">🏆</div>`}
      </td>
      <td>
        <div class="admin-item-title">${esc(r.title)}</div>
        <div class="admin-item-meta">${esc(r.organization)} · ${esc(r.date)}</div>
        <div class="admin-item-meta" style="margin-top:.2rem;">${esc((r.description||'').slice(0,80))}${r.description&&r.description.length>80?'…':''}</div>
      </td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editRecognition(${i})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteItem('recognitions',${i})">Delete</button>
        </div>
      </td>
    </tr>`).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Recognitions & Awards</h1>
        <p class="admin-section-sub">${adminData.recognitions.length} award(s)</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="editRecognition(-1)">+ Add Recognition</button>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th></th><th>Award</th><th style="width:120px">Actions</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="3"><div class="admin-empty"><div class="admin-empty-icon">🏆</div>No recognitions yet.</div></td></tr>`}</tbody>
      </table>
    </div>`;
}

function editRecognition(i) {
  const r = i >= 0 ? adminData.recognitions[i]
    : { title:'', organization:'', date:'', description:'', image:'', link:'' };

  const id = `rec_img_${Date.now()}`;
  const prvId = `rec_prv_${Date.now()}`;

  openModal(
    i >= 0 ? 'Edit Recognition' : 'Add Recognition',
    `<div class="admin-form-grid">
      <div class="admin-form-group">
        <label>Award Title</label>
        <input type="text" id="rTitle" value="${esc(r.title)}">
      </div>
      <div class="admin-form-group">
        <label>Awarding Organisation</label>
        <input type="text" id="rOrg" value="${esc(r.organization)}">
      </div>
      <div class="admin-form-group">
        <label>Date (display text, e.g. Feb 18, 2026)</label>
        <input type="text" id="rDate" value="${esc(r.date)}">
      </div>
      <div class="admin-form-group">
        <label>External Link (optional)</label>
        <input type="url" id="rLink" value="${esc(r.link)}">
      </div>
      <div class="admin-form-group full-span">
        <label>Description</label>
        <textarea id="rDesc" rows="3">${esc(r.description)}</textarea>
      </div>
      <div class="admin-form-group full-span">
        <label>Certificate Image</label>
        <input type="text" id="${id}" value="${esc(r.image)}" placeholder="Paste URL or path"
               oninput="previewImg('${id}','${prvId}')">
        <span class="admin-hint">Or upload file:</span>
        <input type="file" accept="image/*" onchange="uploadImg(event,'${id}','${prvId}')">
        <img id="${prvId}" src="${esc(r.image)}" class="admin-img-preview"
             onerror="this.style.display='none'" style="${r.image?'':'display:none'}">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="saveRecognition(${i},'${id}')">Save</button>`
  );
}

function previewImg(inputId, previewId) {
  const val = document.getElementById(inputId).value;
  const img = document.getElementById(previewId);
  if (val) { img.src = val; img.style.display = 'block'; }
  else img.style.display = 'none';
}

function uploadImg(evt, inputId, previewId) {
  const file = evt.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById(inputId).value = e.target.result;
    const img = document.getElementById(previewId);
    img.src = e.target.result;
    img.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function saveRecognition(i, imgInputId) {
  const obj = {
    title:        document.getElementById('rTitle').value.trim(),
    organization: document.getElementById('rOrg').value.trim(),
    date:         document.getElementById('rDate').value.trim(),
    description:  document.getElementById('rDesc').value.trim(),
    image:        document.getElementById(imgInputId).value.trim(),
    link:         document.getElementById('rLink').value.trim(),
  };
  if (!obj.title) { showToast('Title is required', 'error'); return; }
  if (i >= 0) adminData.recognitions[i] = obj;
  else adminData.recognitions.push(obj);
  saveData();
  closeModal();
  switchSection('recognitions');
}

/* ============================================================
   WORKSHOPS
   ============================================================ */
function renderWorkshops() {
  const sorted = [...adminData.workshops].sort((a,b) => new Date(b.date)-new Date(a.date));

  const rows = sorted.map((w,i) => {
    const realIdx = adminData.workshops.indexOf(w);
    const st = wsStatus(w.date);
    const badge = `<span class="ws-badge ws-badge-${st}">${st}</span>`;
    return `
    <tr>
      <td>
        <div class="admin-item-title">${esc(w.title)}</div>
        <div class="admin-item-meta">📅 ${fmtDate(w.date)} &nbsp;·&nbsp; ⏰ ${esc(w.time)}</div>
        <div class="admin-item-meta">📍 ${esc(w.location)}</div>
      </td>
      <td style="white-space:nowrap;">${badge}</td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editWorkshop(${realIdx})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteItem('workshops',${realIdx})">Delete</button>
        </div>
      </td>
    </tr>`;
  }).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Workshops</h1>
        <p class="admin-section-sub">Date-based auto-sorting — upcoming / past / ongoing</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="editWorkshop(-1)">+ Add Workshop</button>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Workshop</th><th>Status</th><th style="width:120px">Actions</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="3"><div class="admin-empty"><div class="admin-empty-icon">🗓</div>No workshops yet.</div></td></tr>`}</tbody>
      </table>
    </div>`;
}

function editWorkshop(i) {
  const w = i >= 0 ? adminData.workshops[i]
    : { title:'', date:'', time:'', location:'', link:'' };

  openModal(
    i >= 0 ? 'Edit Workshop' : 'Add Workshop',
    `<div class="admin-form-grid">
      <div class="admin-form-group full-span">
        <label>Workshop / Event Name</label>
        <input type="text" id="wTitle" value="${esc(w.title)}">
      </div>
      <div class="admin-form-group">
        <label>Date</label>
        <input type="date" id="wDate" value="${esc(w.date)}">
        <span class="admin-hint">Website auto-sorts upcoming / past based on this</span>
      </div>
      <div class="admin-form-group">
        <label>Time (e.g. 10:00 AM – 5:00 PM)</label>
        <input type="text" id="wTime" value="${esc(w.time)}">
      </div>
      <div class="admin-form-group full-span">
        <label>📍 Location</label>
        <input type="text" id="wLocation" value="${esc(w.location)}" placeholder="Building, City, Country">
      </div>
      <div class="admin-form-group full-span">
        <label>Link / Drive URL (optional)</label>
        <input type="url" id="wLink" value="${esc(w.link)}">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="saveWorkshop(${i})">Save</button>`
  );
}

function saveWorkshop(i) {
  const obj = {
    id:       i >= 0 ? (adminData.workshops[i].id || uid()) : uid(),
    title:    document.getElementById('wTitle').value.trim(),
    date:     document.getElementById('wDate').value,
    time:     document.getElementById('wTime').value.trim(),
    location: document.getElementById('wLocation').value.trim(),
    link:     document.getElementById('wLink').value.trim(),
  };
  if (!obj.title) { showToast('Title is required', 'error'); return; }
  if (!obj.date)  { showToast('Date is required', 'error');  return; }
  if (i >= 0) adminData.workshops[i] = obj;
  else adminData.workshops.push(obj);
  saveData();
  closeModal();
  switchSection('workshops');
}

/* ============================================================
   LECTURES
   ============================================================ */
function renderLectures() {
  const rows = adminData.lectures.map((v,i) => {
    const thumb = v.thumbnailUrl || ytThumb(v.youtubeUrl);
    return `
    <tr>
      <td style="width:90px">
        ${thumb
          ? `<img src="${esc(thumb)}" class="admin-yt-table-thumb" onerror="this.style.display='none'">`
          : `<div class="admin-yt-table-thumb" style="display:flex;align-items:center;justify-content:center;font-size:1.5rem;background:var(--bg-alt);">▶</div>`}
      </td>
      <td>
        <div class="admin-item-title">${esc(v.title)}</div>
        <div class="admin-item-meta" style="word-break:break-all;">${esc(v.youtubeUrl)}</div>
        ${v.playlist ? `<div class="admin-item-meta">${esc(v.playlist)}</div>` : ''}
      </td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editLecture(${i})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteItem('lectures',${i})">Delete</button>
        </div>
      </td>
    </tr>`;
  }).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Lectures & Videos</h1>
        <p class="admin-section-sub">YouTube thumbnails auto-generated from URL</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="editLecture(-1)">+ Add Lecture</button>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th></th><th>Lecture</th><th style="width:120px">Actions</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="3"><div class="admin-empty"><div class="admin-empty-icon">▶</div>No lectures yet.</div></td></tr>`}</tbody>
      </table>
    </div>`;
}

function editLecture(i) {
  const v = i >= 0 ? adminData.lectures[i]
    : { title:'', youtubeUrl:'', playlist:'', thumbnailUrl:'' };

  const previewId = `lec_prv_${Date.now()}`;

  openModal(
    i >= 0 ? 'Edit Lecture' : 'Add Lecture',
    `<div class="admin-form-grid one-col">
      <div class="admin-form-group">
        <label>Lecture Title</label>
        <input type="text" id="lTitle" value="${esc(v.title)}">
      </div>
      <div class="admin-form-group">
        <label>YouTube URL</label>
        <input type="url" id="lUrl" value="${esc(v.youtubeUrl)}"
               oninput="updateYtPreview('lUrl','${previewId}')">
        <span class="admin-hint">Thumbnail auto-generated from URL</span>
        <img id="${previewId}" class="admin-yt-thumb"
             src="${esc(v.thumbnailUrl || ytThumb(v.youtubeUrl))}"
             style="${(v.thumbnailUrl||ytThumb(v.youtubeUrl)) ? 'display:block' : 'display:none'}"
             onerror="this.style.display='none'">
      </div>
      <div class="admin-form-group">
        <label>Playlist / Category (optional)</label>
        <input type="text" id="lPlaylist" value="${esc(v.playlist)}">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="saveLecture(${i})">Save</button>`
  );
}

function updateYtPreview(inputId, previewId) {
  const url   = document.getElementById(inputId).value;
  const thumb = ytThumb(url);
  const img   = document.getElementById(previewId);
  if (thumb) { img.src = thumb; img.style.display = 'block'; }
  else img.style.display = 'none';
}

function saveLecture(i) {
  const url = document.getElementById('lUrl').value.trim();
  const obj = {
    title:        document.getElementById('lTitle').value.trim(),
    youtubeUrl:   url,
    playlist:     document.getElementById('lPlaylist').value.trim(),
    thumbnailUrl: ytThumb(url),
  };
  if (!obj.title)      { showToast('Title is required', 'error');      return; }
  if (!obj.youtubeUrl) { showToast('YouTube URL is required', 'error'); return; }
  if (i >= 0) adminData.lectures[i] = obj;
  else adminData.lectures.push(obj);
  saveData();
  closeModal();
  switchSection('lectures');
}

/* ============================================================
   BOOKS
   ============================================================ */
function renderBooks() {
  const rows = adminData.books.map((b,i) => `
    <tr>
      <td>
        <div class="admin-item-title">${esc(b.title)}</div>
        <div class="admin-item-meta">${esc(b.publisher)} · ${esc(b.year)}</div>
        ${b.status ? `<span class="ws-badge ws-badge-upcoming" style="margin-top:.25rem;display:inline-block;">${esc(b.status)}</span>` : ''}
      </td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editBook(${i})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteItem('books',${i})">Delete</button>
        </div>
      </td>
    </tr>`).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Books</h1>
        <p class="admin-section-sub">${adminData.books.length} book(s)</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="editBook(-1)">+ Add Book</button>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Book</th><th style="width:120px">Actions</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="2"><div class="admin-empty"><div class="admin-empty-icon">📕</div>No books yet.</div></td></tr>`}</tbody>
      </table>
    </div>`;
}

function editBook(i) {
  const b = i >= 0 ? adminData.books[i]
    : { title:'', subtitle:'', publisher:'', year:'', status:'Forthcoming', description:'', cover:'', link:'' };

  const covId  = `bk_cov_${Date.now()}`;
  const covPrv = `bk_prv_${Date.now()}`;

  openModal(
    i >= 0 ? 'Edit Book' : 'Add Book',
    `<div class="admin-form-grid">
      <div class="admin-form-group full-span">
        <label>Title</label>
        <input type="text" id="bTitle" value="${esc(b.title)}">
      </div>
      <div class="admin-form-group full-span">
        <label>Subtitle (optional)</label>
        <input type="text" id="bSubtitle" value="${esc(b.subtitle||'')}">
      </div>
      <div class="admin-form-group">
        <label>Publisher</label>
        <input type="text" id="bPub" value="${esc(b.publisher)}">
      </div>
      <div class="admin-form-group">
        <label>Year</label>
        <input type="text" id="bYear" value="${esc(b.year)}">
      </div>
      <div class="admin-form-group">
        <label>Status</label>
        <input type="text" id="bStatus" value="${esc(b.status)}" placeholder="e.g. Published / Forthcoming">
      </div>
      <div class="admin-form-group">
        <label>Buy / View Link (optional)</label>
        <input type="url" id="bLink" value="${esc(b.link||'')}">
      </div>
      <div class="admin-form-group full-span">
        <label>Description</label>
        <textarea id="bDesc" rows="3">${esc(b.description||'')}</textarea>
      </div>
      <div class="admin-form-group full-span">
        <label>Cover Image</label>
        <input type="text" id="${covId}" value="${esc(b.cover||'')}" placeholder="URL or path"
               oninput="previewImg('${covId}','${covPrv}')">
        <span class="admin-hint">Or upload:</span>
        <input type="file" accept="image/*" onchange="uploadImg(event,'${covId}','${covPrv}')">
        <img id="${covPrv}" src="${esc(b.cover||'')}" class="admin-img-preview"
             onerror="this.style.display='none'" style="${b.cover?'':'display:none'}">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="saveBook(${i},'${covId}')">Save</button>`
  );
}

function saveBook(i, covId) {
  const obj = {
    title:       document.getElementById('bTitle').value.trim(),
    subtitle:    document.getElementById('bSubtitle').value.trim(),
    publisher:   document.getElementById('bPub').value.trim(),
    year:        document.getElementById('bYear').value.trim(),
    status:      document.getElementById('bStatus').value.trim(),
    link:        document.getElementById('bLink').value.trim(),
    description: document.getElementById('bDesc').value.trim(),
    cover:       document.getElementById(covId).value.trim(),
  };
  if (!obj.title) { showToast('Title is required', 'error'); return; }
  if (i >= 0) adminData.books[i] = obj;
  else adminData.books.push(obj);
  saveData();
  closeModal();
  switchSection('books');
}

/* ============================================================
   PUBLICATIONS
   ============================================================ */
function renderPapers() {
  const rows = adminData.papers.map((p,i) => `
    <tr>
      <td>
        <div class="admin-item-title">${esc(p.title)}</div>
        <div class="admin-item-meta">${esc(p.venue)}</div>
        <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.3rem;">
          ${(p.tags||[]).map(t=>`<span style="font-size:.7rem;padding:.15rem .45rem;background:var(--gold-pale);color:var(--gold);border-radius:20px;font-family:'DM Mono',monospace;">${esc(t)}</span>`).join('')}
        </div>
      </td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editPaper(${i})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteItem('papers',${i})">Delete</button>
        </div>
      </td>
    </tr>`).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Publications</h1>
        <p class="admin-section-sub">${adminData.papers.length} paper(s)</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="editPaper(-1)">+ Add Publication</button>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Paper</th><th style="width:120px">Actions</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="2"><div class="admin-empty"><div class="admin-empty-icon">📄</div>No publications yet.</div></td></tr>`}</tbody>
      </table>
    </div>`;
}

function editPaper(i) {
  const p = i >= 0 ? adminData.papers[i]
    : { title:'', authors:'Swati Sah et al.', venue:'', tags:[], url:'' };
  openModal(
    i >= 0 ? 'Edit Publication' : 'Add Publication',
    `<div class="admin-form-grid one-col">
      <div class="admin-form-group">
        <label>Paper Title</label>
        <input type="text" id="ppTitle" value="${esc(p.title)}">
      </div>
      <div class="admin-form-group">
        <label>Authors</label>
        <input type="text" id="ppAuthors" value="${esc(p.authors)}">
      </div>
      <div class="admin-form-group">
        <label>Venue / Publisher</label>
        <input type="text" id="ppVenue" value="${esc(p.venue)}" placeholder="e.g. IEEE / Springer">
      </div>
      <div class="admin-form-group">
        <label>Tags (comma-separated)</label>
        <input type="text" id="ppTags" value="${esc((p.tags||[]).join(', '))}" placeholder="AI, Machine Learning, ...">
      </div>
      <div class="admin-form-group">
        <label>Paper URL (Google Scholar etc.)</label>
        <input type="url" id="ppUrl" value="${esc(p.url)}">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="savePaper(${i})">Save</button>`
  );
}

function savePaper(i) {
  const tagsRaw = document.getElementById('ppTags').value;
  const obj = {
    title:   document.getElementById('ppTitle').value.trim(),
    authors: document.getElementById('ppAuthors').value.trim(),
    venue:   document.getElementById('ppVenue').value.trim(),
    tags:    tagsRaw.split(',').map(t=>t.trim()).filter(Boolean),
    url:     document.getElementById('ppUrl').value.trim(),
  };
  if (!obj.title) { showToast('Title is required', 'error'); return; }
  if (i >= 0) adminData.papers[i] = obj;
  else adminData.papers.push(obj);
  saveData();
  closeModal();
  switchSection('papers');
}

/* ============================================================
   ARTICLES
   ============================================================ */
function renderArticles() {
  const rows = adminData.articles.map((a,i) => `
    <tr>
      <td>
        <div class="admin-item-title">${esc(a.title)}</div>
        <div class="admin-item-meta">${esc(a.journal)} · ${esc(a.year)}</div>
        <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.3rem;">
          ${(a.tags||[]).map(t=>`<span style="font-size:.7rem;padding:.15rem .45rem;background:var(--gold-pale);color:var(--gold);border-radius:20px;font-family:'DM Mono',monospace;">${esc(t)}</span>`).join('')}
        </div>
      </td>
      <td>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editArticle(${i})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteItem('articles',${i})">Delete</button>
        </div>
      </td>
    </tr>`).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Articles & Journals</h1>
        <p class="admin-section-sub">${adminData.articles.length} article(s)</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="editArticle(-1)">+ Add Article</button>
    </div>
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead><tr><th>Article</th><th style="width:120px">Actions</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="2"><div class="admin-empty"><div class="admin-empty-icon">📰</div>No articles yet.</div></td></tr>`}</tbody>
      </table>
    </div>`;
}

function editArticle(i) {
  const a = i >= 0 ? adminData.articles[i]
    : { title:'', journal:'', year:'', tags:[], url:'' };
  openModal(
    i >= 0 ? 'Edit Article' : 'Add Article',
    `<div class="admin-form-grid one-col">
      <div class="admin-form-group">
        <label>Article Title</label>
        <input type="text" id="arTitle" value="${esc(a.title)}">
      </div>
      <div class="admin-form-group">
        <label>Journal / Publication</label>
        <input type="text" id="arJournal" value="${esc(a.journal)}">
      </div>
      <div class="admin-form-group">
        <label>Year</label>
        <input type="text" id="arYear" value="${esc(a.year)}">
      </div>
      <div class="admin-form-group">
        <label>Tags (comma-separated)</label>
        <input type="text" id="arTags" value="${esc((a.tags||[]).join(', '))}">
      </div>
      <div class="admin-form-group">
        <label>Article URL</label>
        <input type="url" id="arUrl" value="${esc(a.url)}">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="saveArticle(${i})">Save</button>`
  );
}

function saveArticle(i) {
  const obj = {
    title:   document.getElementById('arTitle').value.trim(),
    journal: document.getElementById('arJournal').value.trim(),
    year:    document.getElementById('arYear').value.trim(),
    tags:    document.getElementById('arTags').value.split(',').map(t=>t.trim()).filter(Boolean),
    url:     document.getElementById('arUrl').value.trim(),
  };
  if (!obj.title) { showToast('Title is required', 'error'); return; }
  if (i >= 0) adminData.articles[i] = obj;
  else adminData.articles.push(obj);
  saveData();
  closeModal();
  switchSection('articles');
}

/* ============================================================
   COURSES (nested: Universities → Courses)
   ============================================================ */
function renderCourses() {
  const unis = adminData.universities.map((u, ui) => {
    const courseRows = u.courses.map((c,ci) => `
      <div class="admin-course-row">
        <span class="admin-course-name">📖 ${esc(c.title)}</span>
        <div class="admin-actions">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editCourse(${ui},${ci})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="deleteCourse(${ui},${ci})">Delete</button>
        </div>
      </div>`).join('');

    const isOpen = editingCourseUni === u.key;
    return `
    <div class="admin-uni-card">
      <div class="admin-uni-header" onclick="toggleUniExpand('${u.key}')">
        <div>
          <div class="admin-uni-name">${esc(u.icon||'🏛')} ${esc(u.name)}</div>
          <div class="admin-uni-location">📍 ${esc(u.location)} &nbsp;·&nbsp; ${u.courses.length} course(s)</div>
        </div>
        <div style="display:flex;gap:.5rem;align-items:center;">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="event.stopPropagation();editUniversity(${ui})">Edit</button>
          <button class="admin-btn admin-btn-danger admin-btn-sm" onclick="event.stopPropagation();deleteUniversity(${ui})">Delete</button>
          <span style="font-size:.75rem;color:var(--text-light)">${isOpen ? '▲' : '▼'}</span>
        </div>
      </div>
      ${isOpen ? `
      <div class="admin-uni-courses">
        ${courseRows}
        <div style="padding:.5rem .75rem;">
          <button class="admin-btn admin-btn-outline admin-btn-sm" onclick="editCourse(${ui},-1)">
            + Add Course to ${esc(u.name)}
          </button>
        </div>
      </div>` : ''}
    </div>`;
  }).join('');

  return `
    <div class="admin-section-header">
      <div>
        <h1 class="admin-section-title">Courses</h1>
        <p class="admin-section-sub">${adminData.universities.length} universities · ${adminData.universities.reduce((a,u)=>a+u.courses.length,0)} courses total</p>
      </div>
      <button class="admin-btn admin-btn-primary" onclick="editUniversity(-1)">+ Add University</button>
    </div>
    ${unis || `<div class="admin-empty"><div class="admin-empty-icon">📚</div>No universities yet.</div>`}`;
}

function toggleUniExpand(key) {
  editingCourseUni = editingCourseUni === key ? null : key;
  switchSection('courses');
}

function editUniversity(ui) {
  const u = ui >= 0 ? adminData.universities[ui]
    : { key:'', name:'', location:'', icon:'🏛️' };
  openModal(
    ui >= 0 ? 'Edit University' : 'Add University',
    `<div class="admin-form-grid">
      <div class="admin-form-group">
        <label>University Name</label>
        <input type="text" id="uName" value="${esc(u.name)}">
      </div>
      <div class="admin-form-group">
        <label>Unique Key (no spaces, e.g. sharda)</label>
        <input type="text" id="uKey" value="${esc(u.key)}" placeholder="e.g. sharda">
      </div>
      <div class="admin-form-group">
        <label>Location</label>
        <input type="text" id="uLocation" value="${esc(u.location)}">
      </div>
      <div class="admin-form-group">
        <label>Icon (emoji)</label>
        <input type="text" id="uIcon" value="${esc(u.icon)}" maxlength="4">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="saveUniversity(${ui})">Save</button>`
  );
}

function saveUniversity(ui) {
  const obj = {
    key:      document.getElementById('uKey').value.trim().replace(/\s+/g,'_'),
    name:     document.getElementById('uName').value.trim(),
    location: document.getElementById('uLocation').value.trim(),
    icon:     document.getElementById('uIcon').value.trim(),
    courses:  ui >= 0 ? adminData.universities[ui].courses : [],
  };
  if (!obj.name) { showToast('Name is required', 'error'); return; }
  if (!obj.key)  { showToast('Key is required', 'error');  return; }
  if (ui >= 0) adminData.universities[ui] = obj;
  else adminData.universities.push(obj);
  saveData();
  closeModal();
  switchSection('courses');
}

function deleteUniversity(ui) {
  if (!confirm(`Delete "${adminData.universities[ui].name}" and all its courses?`)) return;
  adminData.universities.splice(ui, 1);
  saveData();
  switchSection('courses');
}

function editCourse(ui, ci) {
  const c = ci >= 0 ? adminData.universities[ui].courses[ci]
    : { key:'', title:'', description:'', topics:[], syllabusUrl:'#', notesUrl:'#', assignmentsUrl:'#' };

  const topicsStr = (c.topics || []).join('\n');

  openModal(
    ci >= 0 ? 'Edit Course' : 'Add Course',
    `<div class="admin-form-grid one-col">
      <div class="admin-form-group">
        <label>Course Title</label>
        <input type="text" id="cTitle" value="${esc(c.title)}">
      </div>
      <div class="admin-form-group">
        <label>Unique Key (no spaces)</label>
        <input type="text" id="cKey" value="${esc(c.key)}" placeholder="e.g. machine-learning-101">
      </div>
      <div class="admin-form-group">
        <label>Description</label>
        <textarea id="cDesc" rows="3">${esc(c.description)}</textarea>
      </div>
      <div class="admin-form-group">
        <label>Topics (one per line)</label>
        <textarea id="cTopics" rows="6" placeholder="Introduction to AI&#10;Machine Learning Basics&#10;...">${esc(topicsStr)}</textarea>
      </div>
      <div class="admin-form-group">
        <label>Syllabus URL</label>
        <input type="text" id="cSyllabus" value="${esc(c.syllabusUrl||'#')}">
      </div>
      <div class="admin-form-group">
        <label>Notes URL</label>
        <input type="text" id="cNotes" value="${esc(c.notesUrl||'#')}">
      </div>
      <div class="admin-form-group">
        <label>Assignments URL</label>
        <input type="text" id="cAssignments" value="${esc(c.assignmentsUrl||'#')}">
      </div>
    </div>`,
    `<button class="admin-btn admin-btn-outline" onclick="closeModal()">Cancel</button>
     <button class="admin-btn admin-btn-primary" onclick="saveCourse(${ui},${ci})">Save</button>`
  );
}

function saveCourse(ui, ci) {
  const topicsRaw = document.getElementById('cTopics').value;
  const obj = {
    key:            document.getElementById('cKey').value.trim().replace(/\s+/g,'_'),
    title:          document.getElementById('cTitle').value.trim(),
    description:    document.getElementById('cDesc').value.trim(),
    topics:         topicsRaw.split('\n').map(t=>t.trim()).filter(Boolean),
    syllabusUrl:    document.getElementById('cSyllabus').value.trim() || '#',
    notesUrl:       document.getElementById('cNotes').value.trim() || '#',
    assignmentsUrl: document.getElementById('cAssignments').value.trim() || '#',
  };
  if (!obj.title) { showToast('Title is required', 'error'); return; }
  if (!obj.key)   { obj.key = obj.title.toLowerCase().replace(/[^a-z0-9]+/g,'-'); }
  if (ci >= 0) adminData.universities[ui].courses[ci] = obj;
  else adminData.universities[ui].courses.push(obj);
  saveData();
  closeModal();
  editingCourseUni = adminData.universities[ui].key;
  switchSection('courses');
}

function deleteCourse(ui, ci) {
  if (!confirm(`Delete course "${adminData.universities[ui].courses[ci].title}"?`)) return;
  adminData.universities[ui].courses.splice(ci, 1);
  saveData();
  switchSection('courses');
}

/* ============================================================
   GENERIC DELETE
   ============================================================ */
function deleteItem(collection, i) {
  const names = {
    qualifications: 'qualification',
    recognitions:   'recognition',
    workshops:      'workshop',
    lectures:       'lecture',
    books:          'book',
    papers:         'publication',
    articles:       'article',
  };
  const item = adminData[collection][i];
  const label = item.title || item.degree || item.name || names[collection];
  if (!confirm(`Delete "${label}"?`)) return;
  adminData[collection].splice(i, 1);
  saveData();
  switchSection(currentSection);
}
