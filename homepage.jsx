
// ProConnect — Homepage / Landing Page (Figma-faithful)

// ── Shared nav icons ────────────────────────────────────────────────────────
const navStars = (n = 5, size = 16) =>
<div style={{ display: 'flex', gap: 2 }}>
    {Array.from({ length: n }).map((_, i) =>
  <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="#FF7711">
        <path d="M10 1.5l2.6 5.3 5.9.8-4.3 4.1 1 5.8L10 15l-5.2 2.7 1-5.8L1.5 7.6l5.9-.8z" />
      </svg>
  )}
  </div>;


// ── Navigation ─────────────────────────────────────────────────────────────
// Desktop nav dropdown (hover to open)
function NavDropdown({ label, items, go, activePage }) {
  const [open, setOpen] = React.useState(false);
  const active = items.some((it) => it.page === activePage);
  return (
    <div style={{ position: 'relative' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <span style={{ fontSize: 14, fontWeight: active ? 700 : 500, color: active || open ? PC.blue : PC.dark, fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}>
        {label}<span style={{ fontSize: 9, opacity: 0.6, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▼</span>
      </span>
      {open &&
      <div style={{ position: 'absolute', top: '100%', left: 0, paddingTop: 12, zIndex: 200 }}>
          <div style={{ background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 12, boxShadow: '0 12px 32px rgba(0,0,0,0.14)', overflow: 'hidden', minWidth: 170 }}>
            {items.map((it) =>
          <a key={it.label} href="#" onClick={(e) => {e.preventDefault();go(it.page);}}
          style={{ display: 'block', padding: '12px 18px', fontSize: 14, fontWeight: activePage === it.page ? 700 : 500, color: activePage === it.page ? PC.blue : PC.dark, fontFamily: 'Montserrat', textDecoration: 'none', whiteSpace: 'nowrap' }}
          onMouseEnter={(e) => e.currentTarget.style.background = PC.bg}
          onMouseLeave={(e) => e.currentTarget.style.background = '#fff'}>{it.label}</a>
          )}
          </div>
        </div>
      }
    </div>);

}

function HPNav({ navigate, activePage = 'home' }) {
  const mobile = useMobile(1000);
  const [open, setOpen] = React.useState(false);
  const links = [
  { label: 'Features', page: 'features' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Browse Jobs', page: 'jobs' },
  { label: 'Solution', page: 'solution', caret: true },
  { label: 'Company', dropdown: [{ label: 'About us', page: 'about' }, { label: 'FAQ', page: 'faq' }] }];

  const go = (p) => {navigate(p);setOpen(false);window.scrollTo(0, 0);};
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', boxShadow: '0 1px 0 #EAEBEB' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: mobile ? '0 14px' : '0 24px', height: 72, display: 'flex', alignItems: 'center', gap: mobile ? 8 : 28 }}>
        <div style={{ cursor: 'pointer', height: "30px" }} onClick={() => go('home')}><PCLogo height={mobile ? 18 : 26} /></div>
        {!mobile &&
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 26 }}>
            {links.map((l) => {
            if (l.dropdown) return <NavDropdown key={l.label} label={l.label} items={l.dropdown} go={go} activePage={activePage} />;
            const active = activePage === l.page;
            return (
              <a key={l.label} href="#" onClick={(e) => {e.preventDefault();go(l.page);}}
              style={{ fontSize: 14, fontWeight: active ? 700 : 500, color: active ? PC.blue : PC.dark, textDecoration: 'none', fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', gap: 5 }}
              onMouseEnter={(e) => e.currentTarget.style.color = PC.blue}
              onMouseLeave={(e) => e.currentTarget.style.color = active ? PC.blue : PC.dark}>
                  {l.label}{l.caret && <span style={{ fontSize: 9, opacity: 0.6 }}>▼</span>}
                </a>);

          })}
          </div>
        }
        {mobile && <div style={{ flex: 1 }} />}
        {!mobile ?
        <div style={{ display: 'flex', gap: 10 }}>
            <PCButton variant="secondary" size="md" onClick={() => go('contact')}>Request Demo</PCButton>
            <PCButton variant="primary" size="md" onClick={() => go('login')}>Sign Up</PCButton>
          </div> :

        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <PCButton variant="secondary" size="sm" onClick={() => go('contact')} style={{ whiteSpace: 'nowrap', padding: '7px 11px' }}>Demo</PCButton>
            <PCButton variant="primary" size="sm" onClick={() => go('login')} style={{ whiteSpace: 'nowrap', padding: '7px 12px' }}>Sign Up</PCButton>
            <button onClick={() => setOpen((o) => !o)} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, flexShrink: 0 }}>
              <svg width="24" height="24" viewBox="0 0 26 26" fill="none"><path d="M4 7h18M4 13h18M4 19h18" stroke={PC.blue} strokeWidth="2.2" strokeLinecap="round" /></svg>
            </button>
          </div>
        }
      </div>
      {mobile && open &&
      <div style={{ borderTop: `1px solid ${PC.border}`, padding: '12px 24px 18px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.flatMap((l) => l.dropdown ? l.dropdown : [l]).map((l) =>
        <a key={l.label} href="#" onClick={(e) => {e.preventDefault();go(l.page);}}
        style={{ padding: '11px 4px', fontSize: 15, fontWeight: activePage === l.page ? 700 : 500, color: activePage === l.page ? PC.blue : PC.dark, textDecoration: 'none', fontFamily: 'Montserrat', borderBottom: `1px solid ${PC.bg}` }}>{l.label}</a>
        )}
        </div>
      }
    </nav>);

}

// ── Hero ───────────────────────────────────────────────────────────────────
function HPHero({ navigate }) {
  const mobile = useMobile(900);
  return (
    <section style={{ background: '#fff', padding: mobile ? '40px 0 32px' : '64px 0 56px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: mobile ? 'column' : 'row', alignItems: 'center', gap: mobile ? 36 : 56 }}>
        <div style={{ flex: mobile ? 'none' : '0 0 540px', width: '100%' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: PC.lightBlue, padding: '7px 16px', borderRadius: 24, marginBottom: 22 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: PC.blue, fontFamily: 'Montserrat' }}>Work and Hire Beyond Borders</span>
          </div>
          <h1 style={{ fontSize: mobile ? 34 : 50, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.12, margin: '0 0 18px', letterSpacing: '-0.5px' }}>
            The Hospitality and Tourism Job Platform for <span style={{ color: PC.blue }}>ASEAN</span>
          </h1>
          <p style={{ fontSize: 16, fontWeight: 500, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.7, margin: '0 0 24px', maxWidth: 500 }}>
            Hire verified talent with a built-in ATS and AI matching, or find your next role with a Skill Passport recognized in all 10 ASEAN countries. Free for job seekers.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 26, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: PC.dark, fontFamily: 'Montserrat' }}>Trusted by:</span>
            {[['about_p1', 'ASEANTA', 'https://aseanta.org/'], ['kemenparekraf', 'Ministry of Tourism', 'https://kemenpar.go.id/en']].map(([img, b, href]) =>
            <a key={b} href={href || undefined} target={href ? '_blank' : undefined} rel={href ? 'noopener noreferrer' : undefined} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 600, color: PC.gray, fontFamily: 'Montserrat', textDecoration: 'none', padding: '6px 14px 6px 8px', borderRadius: 8, border: `1px solid ${PC.border}`, cursor: href ? 'pointer' : 'default' }}>
              <img src={`assets/${img}.png`} alt={b} style={{ height: 24, width: 24, objectFit: 'contain', display: 'block' }} />{b}
            </a>
            )}
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <PCButton variant="secondary" size="xl" onClick={() => navigate('register')}>Post Jobs</PCButton>
            <PCButton variant="primary" size="xl" onClick={() => navigate('jobs')}>Find Jobs</PCButton>
          </div>
        </div>
        <div style={{ flex: 1, position: 'relative', width: '100%', maxWidth: mobile ? 420 : 'none' }}>
          <img src="assets/home_hero.png" alt="Hospitality professional" style={{ width: '100%', borderRadius: 18, display: 'block', objectFit: 'cover', aspectRatio: '390/474' }} />
          <div style={{ position: 'absolute', bottom: mobile ? 14 : 28, left: mobile ? 10 : -28, background: '#fff', borderRadius: 16, padding: '16px 18px', boxShadow: '0 12px 40px rgba(4,38,72,0.18)', width: 244, border: `1px solid ${PC.border}` }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 8, lineHeight: 1.35 }}>Hire Verified Hospitality Talent Across ASEAN</div>
            {navStars(5, 15)}
            <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              {['av_h1', 'av_h2', 'av_h3'].map((a, i) =>
              <img key={a} src={`assets/home_${a}.png`} alt="" style={{ width: 30, height: 30, borderRadius: '50%', border: '2px solid #fff', marginLeft: i === 0 ? 0 : -9, objectFit: 'cover' }} />
              )}
              <div style={{ marginLeft: -9, width: 30, height: 30, borderRadius: '50%', background: PC.lightBlue, border: '2px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat' }}>+99</div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 500, color: PC.gray, fontFamily: 'Montserrat' }}>10,000+ candidates verified across ASEAN</div>
          </div>
        </div>
      </div>
    </section>);

}

// ── Job categories ───────────────────────────────────────────────────────────
const catIcon = (paths) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none">{paths}</svg>;
const categories = [
{ label: 'Front Office', icon: catIcon(<><rect x="3" y="4" width="14" height="11" rx="1.5" stroke="#1560BD" strokeWidth="1.6" /><path d="M3 8h14" stroke="#1560BD" strokeWidth="1.6" /></>) },
{ label: 'Food & Beverage', icon: catIcon(<><path d="M6 3v6a2 2 0 11-2 2M6 3v8M14 3c-1.5 0-2 2-2 4s.5 3 2 3v7" stroke="#1560BD" strokeWidth="1.6" strokeLinecap="round" /></>) },
{ label: 'Room Service', icon: catIcon(<><path d="M3 15h14M5 15v-3a5 5 0 0110 0v3M10 6V4" stroke="#1560BD" strokeWidth="1.6" strokeLinecap="round" /></>) },
{ label: 'Hotel Management', icon: catIcon(<><rect x="4" y="3" width="12" height="14" rx="1" stroke="#1560BD" strokeWidth="1.6" /><path d="M8 7h4M8 10h4M8 13h4" stroke="#1560BD" strokeWidth="1.4" strokeLinecap="round" /></>) },
{ label: 'Sales & Marketing', icon: catIcon(<><path d="M3 12l5-1 6-5 1 8-7 2-5-1z" stroke="#1560BD" strokeWidth="1.6" strokeLinejoin="round" /></>) },
{ label: 'Housekeeping', icon: catIcon(<><path d="M5 17V8l5-4 5 4v9M8 17v-4h4v4" stroke="#1560BD" strokeWidth="1.6" strokeLinejoin="round" /></>) },
{ label: 'Human Resources', icon: catIcon(<><circle cx="7" cy="7" r="2.5" stroke="#1560BD" strokeWidth="1.6" /><circle cx="14" cy="8" r="2" stroke="#1560BD" strokeWidth="1.6" /><path d="M3 16c0-2.5 1.8-4 4-4s4 1.5 4 4M12 14c.5-1 1.5-1.5 2.5-1.5 1.5 0 2.5 1.2 2.5 3" stroke="#1560BD" strokeWidth="1.6" strokeLinecap="round" /></>) },
{ label: 'Procurement', icon: catIcon(<><path d="M4 5h2l1.5 8h7L16 7H6" stroke="#1560BD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="8.5" cy="16" r="1" fill="#1560BD" /><circle cx="14" cy="16" r="1" fill="#1560BD" /></>) }];

function HPJobCategories({ navigate }) {
  const mobile = useMobile(900);
  return (
    <section style={{ background: '#fff', padding: mobile ? '24px 0 40px' : '36px 0 56px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 28px', textAlign: 'center' }}>Explore ProConnect Top Jobs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 16 }}>
          {categories.map((c) =>
          <button key={c.label} onClick={() => navigate('jobs')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 16px', borderRadius: 10, border: `1px solid ${PC.border}`, background: '#fff', cursor: 'pointer', fontFamily: 'Montserrat', transition: 'all 0.15s' }}
          onMouseEnter={(e) => {e.currentTarget.style.borderColor = PC.blue;e.currentTarget.style.background = PC.lightBlue;}}
          onMouseLeave={(e) => {e.currentTarget.style.borderColor = PC.border;e.currentTarget.style.background = '#fff';}}>
              <span style={{ width: 36, height: 36, borderRadius: 8, background: PC.lightBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{c.icon}</span>
              <span style={{ flex: 1, textAlign: 'left', fontSize: 13.5, fontWeight: 600, color: PC.dark }}>{c.label}</span>
              <span style={{ color: PC.medGray, fontSize: 16 }}>›</span>
            </button>
          )}
        </div>
      </div>
    </section>);

}

// ── Feature cards ─────────────────────────────────────────────────────────────
function HPFeatureCards({ navigate }) {
  const mobile = useMobile(820);
  const cards = [
  { img: 'feat1', title: 'Hire Verified Talent, Without the Agents', desc: 'Post unlimited jobs and manage your whole pipeline in a built-in ATS. Every candidate is benchmarked against ASEAN MRA-TP standards, so you interview with confidence.', tab: 'employers' },
  { img: 'feat2', title: 'Build a Skill Passport That Travels With You', desc: 'Showcase ASEAN-MRA-TP verified skills, get AI-matched to hospitality jobs across all 10 ASEAN countries, and track every application in real time. Free for job seekers.', tab: 'jobseekers' }];

  return (
    <section style={{ background: PC.bg, padding: mobile ? '40px 0' : '56px 0' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 24 }}>
        {cards.map((c) =>
        <div key={c.title} style={{ background: '#fff', borderRadius: 16, padding: 18, border: `1px solid ${PC.border}` }}>
            <img src={`assets/home_${c.img}.png`} alt="" style={{ width: '100%', borderRadius: 10, display: 'block', aspectRatio: '588/320', objectFit: 'cover' }} />
            <h3 style={{ fontSize: 21, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '20px 0 10px' }}>{c.title}</h3>
            <p style={{ fontSize: 14.5, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 18px', lineHeight: 1.65 }}>{c.desc}</p>
            <PCButton variant="primary" size="md" onClick={() => {window.__solutionTab = c.tab;navigate('solution');window.scrollTo(0, 0);}}>Learn More →</PCButton>
          </div>
        )}
      </div>
    </section>);

}

// ── Stats ──────────────────────────────────────────────────────────────────
function HPStats() {
  const mobile = useMobile(820);
  const stats = [['10', 'ASEAN Countries'], ['250+', 'Partner Schools'], ['10K+', 'Verified Candidates'], ['15M+', 'Hospitality Workers in ASEAN']];
  return (
    <section style={{ background: PC.blue, padding: mobile ? '40px 0' : '52px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 28 }}>
        {stats.map(([n, l]) =>
        <div key={l} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: mobile ? 38 : 46, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', lineHeight: 1 }}>{n}</div>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.82)', fontFamily: 'Montserrat', marginTop: 8 }}>{l}</div>
          </div>
        )}
      </div>
    </section>);

}

// ── Features grid ────────────────────────────────────────────────────────────
const fIcon = (p) => <svg width="26" height="26" viewBox="0 0 26 26" fill="none">{p}</svg>;
function HPFeaturesGrid() {
  const mobile = useMobile(820);
  const features = [
  { title: 'Applicant Tracking (ATS)', desc: 'Manage your entire hiring pipeline from one dashboard. Custom workflows, team collaboration, and automated updates.', icon: fIcon(<><rect x="5" y="3" width="16" height="20" rx="2" fill="#DDEAFB" /><path d="M9 9h8M9 13h8M9 17h5" stroke="#1560BD" strokeWidth="1.8" strokeLinecap="round" /></>) },
  { title: 'AI-Powered Matching', desc: 'Our AI analyzes hospitality-specific skills, certifications, and experience to surface the best candidates automatically.', icon: fIcon(<><circle cx="13" cy="13" r="9" fill="#FFE9D6" /><path d="M13 8v5l3 2" stroke="#FF7711" strokeWidth="1.8" strokeLinecap="round" /></>) },
  { title: 'Skill Passport', desc: 'ASEAN-MRA-TP verified credentials that transfer across all 10 ASEAN countries. Reduce credential fraud by 90%.', icon: fIcon(<><rect x="6" y="3" width="14" height="20" rx="2" fill="#DDEAFB" /><circle cx="13" cy="10" r="2.5" stroke="#1560BD" strokeWidth="1.6" /><path d="M9 18c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" stroke="#1560BD" strokeWidth="1.6" /></>) },
  { title: 'Resume Parsing', desc: 'Automatically extract and structure candidate information from any resume format. Multi-language support included.', icon: fIcon(<><path d="M7 3h7l5 5v15H7z" fill="#DDEAFB" /><path d="M14 3v5h5M10 13h6M10 17h6" stroke="#1560BD" strokeWidth="1.6" strokeLinecap="round" /></>) },
  { title: 'Employee Directory', desc: 'Free member profiles for all employees. Manage internal transfers and build your team database at no extra cost.', icon: fIcon(<><circle cx="9" cy="10" r="3" fill="#FFE9D6" /><circle cx="17" cy="11" r="2.5" fill="#DDEAFB" /><path d="M3 21c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke="#FF7711" strokeWidth="1.6" /></>) },
  { title: 'Cross-Border Hiring', desc: 'Hire across ASEAN with portable Skill Passports, regional compliance support, and multi-language job postings.', icon: fIcon(<><circle cx="13" cy="13" r="9" fill="#DDEAFB" /><path d="M4 13h18M13 4c2.5 2.5 2.5 14 0 18M13 4c-2.5 2.5-2.5 14 0 18" stroke="#1560BD" strokeWidth="1.4" /></>) }];

  return (
    <section style={{ background: PC.lightBlue, padding: mobile ? '48px 0' : '72px 0' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>Everything You Need to Hire in Hospitality</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 22 }}>
          {features.map((f) =>
          <div key={f.title} style={{ padding: '26px 24px', borderRadius: 14, background: '#fff', border: `1px solid ${PC.border}` }}>
              <div style={{ marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>{f.title}</h3>
              <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── Pro Recruitment (video) ──────────────────────────────────────────────────
function HPRecruitment() {
  const mobile = useMobile(820);
  const [playing, setPlaying] = React.useState(false);
  const DRIVE_ID = '1x9Hxwj4WyRRS30kqrTVFAb7H7JIdTOln';
  const pts = [
  { title: 'Connected Throughout ASEAN', desc: 'Our standards are demanding. Rigorous quality checks help ensure every team member performs at a high level.' },
  { title: 'Premium Pay for Premium Talent', desc: 'More than 50% of new hires significantly increase their previous pay, because skilled professionals are valued accordingly.' },
  { title: 'Shortlist by Skills, Not Bias', desc: 'Candidates are shortlisted on verified skills, not on background or connections.' }];

  return (
    <section style={{ background: '#fff', padding: mobile ? '48px 0' : '72px 0' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 36px', textAlign: 'center' }}>Recruit Smarter with ProConnect</h2>
        <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden', marginBottom: 36, aspectRatio: '1200/500', background: '#0B0B0B' }} data-comment-anchor="db0925d18d-div-241-11">
          {playing ?
          <iframe src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`} allow="autoplay; fullscreen" allowFullScreen title="Recruit Smarter with ProConnect"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }} /> :

          <button onClick={() => setPlaying(true)} aria-label="Play video" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 0, border: 'none', cursor: 'pointer', background: 'none' }}>
              <img src="assets/home_recruit.png" alt="" onError={(e) => {e.currentTarget.src = `https://drive.google.com/thumbnail?id=${DRIVE_ID}&sz=w1280`;}}
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }} />
              <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.12)' }} data-comment-anchor="e832489896-span-251-15">
                <span style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(255,255,255,0.94)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 28px rgba(0,0,0,0.3)' }}>
                  <svg width="24" height="26" viewBox="0 0 22 24" fill={PC.blue}><path d="M2 2l18 10L2 22z" /></svg>
                </span>
              </span>
            </button>
          }
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 32 }}>
          {pts.map((p) =>
          <div key={p.title}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── Companies that trust ──────────────────────────────────────────────────────
function HPCompanies() {
  const mobile = useMobile(820);
  return (
    <section style={{ background: '#fff', padding: mobile ? '24px 0 48px' : '24px 0 72px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 24 : 32, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 32px', textAlign: 'center' }}>Companies That Trust ProConnect</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
          {Array.from({ length: 9 }).map((_, i) =>
          <div key={i} style={{ width: mobile ? 'calc(33% - 12px)' : 150, height: 64, borderRadius: 10, background: '#EFF1F2', border: `1px solid ${PC.border}` }} />
          )}
        </div>
      </div>
    </section>);

}

// ── Stakeholders ──────────────────────────────────────────────────────────────
function HPStakeholders({ navigate }) {
  const mobile = useMobile(820);
  const cards = [
  { title: 'For Job Seekers', desc: 'Hospitality professionals at every level. Build a verified Skill Passport that travels with you across all 10 ASEAN countries.', tab: 'jobseekers', bg: PC.orange,
    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="4" y="8" width="18" height="13" rx="2" stroke="#fff" strokeWidth="2" /><path d="M9 8V6a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#fff" strokeWidth="2" /></svg> },
  { title: 'For Schools', desc: 'Hospitality schools and training centers. Join free as a verification partner. Verify your graduates and connect them with employers across ASEAN.', tab: 'schools', bg: PC.green,
    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 5l10 4-10 4L3 9z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /><path d="M7 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" stroke="#fff" strokeWidth="2" /></svg> },
  { title: 'For Employers', desc: 'Replace expensive agents with verified, skill-matched candidates at a fraction of the cost.', tab: 'employers', bg: PC.blue,
    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><rect x="4" y="5" width="18" height="16" rx="2" stroke="#fff" strokeWidth="2" /><circle cx="13" cy="11" r="2.4" stroke="#fff" strokeWidth="2" /><path d="M8.5 18c0-2 2-3 4.5-3s4.5 1 4.5 3" stroke="#fff" strokeWidth="2" /></svg> }];

  return (
    <section style={{ background: PC.blue, padding: mobile ? '48px 0' : '72px 0' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>Built for Every Stakeholder in Hospitality Hiring</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 22 }}>
          {cards.map((c) =>
          <div key={c.title} style={{ background: '#fff', borderRadius: 16, padding: '30px 26px', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: c.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</div>
              <h3 style={{ fontSize: 21, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: 0 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.65, flex: 1 }}>{c.desc}</p>
              <a href="#" onClick={(e) => {e.preventDefault();window.__solutionTab = c.tab;navigate('solution');window.scrollTo(0, 0);}} style={{ fontSize: 14, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat', textDecoration: 'none' }}>Learn More →</a>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── Testimonials ───────────────────────────────────────────────────────────
function HPTestimonials() {
  const mobile = useMobile(820);
  const base = [
  { quote: 'We replaced our recruiting agency contract and saved over $40,000 in the first year. The verified Skill Passports mean we know exactly what we\'re getting.', name: 'Wayan Dharma', country: 'Indonesia', role: 'HR Director, Bali Resort Group', img: 'av_h1' },
  { quote: 'As a verification partner, our graduates get verified and placed faster, and real-time dashboards replaced our spreadsheets. Joining is free, so it pays off from day one.', name: 'Dr. Nadia Tan', country: 'Malaysia', role: 'Dean, ASEAN Hospitality Academy', img: 'av_h2' },
  { quote: 'My Skill Passport helped me get a front office role in Singapore. The verified credentials meant the hotel trusted my qualifications from the Philippines.', name: 'Maria Santos', country: 'Philippines', role: 'Front Office Manager, Marina Bay Hotel', img: 'av_h3' }];

  const items = base;
  return (
    <section style={{ background: '#fff', padding: mobile ? '48px 0' : '72px 0' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>Trusted Across ASEAN Hospitality</h2>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 22 }}>
          {items.map((t, i) =>
          <div key={i} style={{ background: PC.bg, borderRadius: 14, padding: '26px 24px', border: `1px solid ${PC.border}` }}>
              {navStars(5, 15)}
              <p style={{ fontSize: 14, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.6, margin: '14px 0 18px' }}>"{t.quote}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={`assets/home_${t.img}.png`} alt="" style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat' }}>{t.country}</div>
                  <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat' }}>{t.role}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── FAQ ────────────────────────────────────────────────────────────────────
function HPFaq() {
  const mobile = useMobile(820);
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'What is ProConnect?', a: 'ProConnect is a hospitality and tourism job platform that connects skilled professionals with verified employers across ASEAN. We make it easier to showcase verified skills, find the right roles, and hire faster.' },
    { q: 'Which countries does ProConnect support?', a: 'ProConnect serves the ASEAN region. We are currently focused on Indonesia and expanding to Thailand, Vietnam, Malaysia, Cambodia, Singapore, and the Philippines.' },
    { q: 'Is ProConnect free for job seekers?', a: 'Yes. Job seekers use ProConnect for free, including search, your profile, the Skill Passport, and job applications.' },
    { q: 'What is a Skill Passport?', a: 'A Skill Passport is your verified, portable record of skills and credentials, aligned to the ASEAN MRA-TP standard, so employers across the region can trust your qualifications at a glance.' },
    { q: 'How do I apply for jobs?', a: 'Create a free profile, build your Skill Passport, and apply to roles that match your skills. You can track every application in real time.' },
    { q: 'How can my company post jobs?', a: 'Employers sign up, add a company profile, and post unlimited jobs from a built-in applicant tracking system. Only hiring managers need a paid seat; team members join free.' },
    { q: 'Can I use ProConnect on mobile?', a: 'Yes. ProConnect works in any modern browser, and an Android app is available on Google Play.' },
    { q: 'How are skills verified?', a: 'Skills are verified through accredited assessments and partner education providers, so every candidate is benchmarked against recognized ASEAN standards.' },
  ];
  return (
    <section style={{ background: PC.bg, padding: mobile ? '48px 0' : '72px 0' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 12px', textAlign: 'center' }}>Frequently Asked Questions</h2>
        <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', textAlign: 'center', margin: '0 0 36px' }}>Everything you need to know about hiring and getting hired on ProConnect.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {items.map((it, i) => (
            <div key={i} style={{ border: `1px solid ${PC.border}`, borderRadius: 12, overflow: 'hidden', background: '#fff' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '18px 20px', background: '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{it.q}</span>
                <span style={{ fontSize: 12, color: PC.gray, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▼</span>
              </button>
              {open === i && <div style={{ padding: '0 20px 20px', fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.65 }}>{it.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>);

}

// ── CTA ────────────────────────────────────────────────────────────────────
function HPCTA({ navigate }) {
  const mobile = useMobile(820);
  return (
    <section style={{ background: '#fff', padding: mobile ? '20px 0 56px' : '40px 0 80px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ background: PC.blue, borderRadius: 22, padding: mobile ? '40px 28px' : '52px 56px', display: 'flex', alignItems: 'center', gap: 32, position: 'relative', overflow: 'hidden' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: mobile ? 28 : 38, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 14px', lineHeight: 1.2 }}>Ready to Transform Your Hospitality Hiring?</h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: 'rgba(255,255,255,0.85)', fontFamily: 'Montserrat', margin: '0 0 28px', maxWidth: 460 }}>Join hundreds of employers and schools across ASEAN hiring smarter and faster with verified talent. No credit card required to start.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <PCButton variant="secondary" size="xl" onClick={() => navigate('contact')} style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.7)' }}>Contact Us</PCButton>
              <PCButton variant="light" size="xl" onClick={() => navigate('jobs')} style={{ background: '#fff', color: PC.blue, border: 'none' }}>Start Free Trial</PCButton>
            </div>
          </div>
          {!mobile && <img src="assets/home_cta.png" alt="" style={{ width: 320, alignSelf: 'flex-end', display: 'block' }} />}
        </div>
      </div>
    </section>);

}

// ── Footer ─────────────────────────────────────────────────────────────────
function HPFooter({ navigate }) {
  const mobile = useMobile(820);
  const go = (p) => {(navigate || (() => {}))(p);window.scrollTo(0, 0);};
  const cols = [
  { head: 'COMPANY', links: [['About Us', 'about'], ['Contact Us', 'contact'], ['Blog', 'contact'], ['Terms of Service', 'tos'], ['Privacy Policy', 'privacy']] },
  { head: 'SOLUTIONS', links: [['For Employers', 'employer'], ['For Schools', 'solution'], ['For Job Seekers', 'jobs']] },
  { head: 'PLATFORM', links: [['Features', 'features'], ['Pricing', 'pricing'], ['Browse Jobs', 'jobs'], ['FAQ', 'faq']] }];

  const social = (p) => <svg width="22" height="22" viewBox="0 0 18 18" fill="none">{p}</svg>;
  return (
    <footer style={{ background: '#0D0D0D', color: '#fff', padding: mobile ? '44px 0 24px' : '60px 0 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.6fr 1fr 1fr 1fr', gap: mobile ? 32 : 40, marginBottom: 40 }}>
          <div>
            <PCLogo height={28} dark />
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat', lineHeight: 1.7, margin: '18px 0 22px', maxWidth: 360 }}>
              Connecting employers and candidates across ASEAN's hospitality & tourism industry. Backed by ASEANTA and the Indonesian Ministry of Tourism.
            </p>
            <a href="https://aseanta.org/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
              <img src="assets/aseanta_white.png" alt="ASEANTA" style={{ height: 44, display: 'block', cursor: 'pointer', transition: 'opacity 0.15s' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'} />
            </a>
          </div>
          {cols.map((c) =>
          <div key={c.head}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat', letterSpacing: '0.8px', marginBottom: 16 }}>{c.head}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {c.links.map(([label, page]) =>
              <a key={label} href="#" onClick={(e) => {e.preventDefault();go(page);}}
              style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.75)', fontFamily: 'Montserrat', textDecoration: 'none' }}
              onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.75)'}>{label}</a>
              )}
              </div>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, paddingBottom: 22 }}>
          <div style={{ display: 'flex', gap: 12 }} data-comment-anchor="90b31e88a4-div-398-11">
            {[
            { label: 'Facebook', href: 'https://www.facebook.com/proconnectcareer', anchor: null,
              svg: <svg width="22" height="22" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke="rgba(255,255,255,0.4)" /><path d="M10.5 6H9.5c-.6 0-1 .4-1 1v1.2H7v1.4h1.5V14h1.6V10.6h1.3l.3-1.4h-1.6V7.3c0-.3.1-.4.5-.4h1.1V6z" fill="#fff" /></svg> },
            { label: 'Instagram', href: 'https://www.instagram.com/proconnectcareer/', anchor: 'f80e3ff990-circle-401-22',
              svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" stroke="#fff" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.1" stroke="#fff" strokeWidth="1.8" /><circle cx="17.2" cy="6.8" r="1.2" fill="#fff" /></svg> },
            { label: 'TikTok', href: 'https://www.tiktok.com/@proconnectcareer', anchor: '53c4601141-circle-402-22',
              svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M14.1 3c.32 2.4 1.95 4.06 4.4 4.27v2.7c-1.42 0-2.78-.42-3.96-1.17v5.86a5.55 5.55 0 11-5.55-5.55c.3 0 .6.02.88.07v2.78a2.78 2.78 0 102.06 2.68V3h2.17z" /></svg> }].
            map((s, i) =>
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} {...s.anchor ? { 'data-comment-anchor': s.anchor } : {}}
            style={{ width: 46, height: 46, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.15s', textDecoration: 'none' }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>{s.svg}</a>
            )}
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.proconnect.app" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
            <img src="assets/googleplay_badge.png" alt="Get it on Google Play" style={{ height: 46, display: 'block', borderRadius: 8, transition: 'opacity 0.15s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'} />
          </a>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 22, textAlign: 'center' }}>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontFamily: 'Montserrat' }}>© 2026 ProConnect. All rights reserved.</span>
        </div>
      </div>
    </footer>);

}

// ── Homepage root ──────────────────────────────────────────────────────────
function HomePage({ navigate }) {
  const go = (page) => {navigate(page);window.scrollTo(0, 0);};
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', minHeight: '100vh' }}>
      <HPNav navigate={go} activePage="home" />
      <HPHero navigate={go} />
      <HPJobCategories navigate={go} />
      <HPFeatureCards navigate={go} />
      <HPStats />
      <HPFeaturesGrid />
      <HPRecruitment />
      <HPCompanies />
      <HPStakeholders navigate={go} />
      <HPTestimonials />
      <HPFaq />
      <HPCTA navigate={go} />
      <HPFooter navigate={go} />
    </div>);

}

Object.assign(window, { HomePage, HPNav, HPFooter });