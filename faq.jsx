
// ProConnect — FAQ page (Jobs-style layout: search header + list + detail)
// Merges the FAQ content from across the landing pages. Each answer shows its
// source page as a clickable link back to that page.

const FAQ_ITEMS = [
  // ── From the Homepage FAQ ──
  { q: 'What is ProConnect?', a: 'ProConnect is a hospitality and tourism job platform that connects skilled professionals with verified employers across ASEAN. We make it easier to showcase verified skills, find the right roles, and hire faster.', source: 'Home', page: 'home' },
  { q: 'Which countries does ProConnect support?', a: 'ProConnect serves the ASEAN region. We are currently focused on Indonesia and expanding to Thailand, Vietnam, Malaysia, Cambodia, Singapore, and the Philippines.', source: 'Home', page: 'home' },
  { q: 'Is ProConnect free for job seekers?', a: 'Yes. Job seekers use ProConnect for free, including search, your profile, the Skill Passport, and job applications.', source: 'Home', page: 'home' },
  { q: 'What is a Skill Passport?', a: 'A Skill Passport is your verified, portable record of skills and credentials, aligned to the ASEAN MRA-TP standard, so employers across the region can trust your qualifications at a glance.', source: 'Home', page: 'home' },
  { q: 'How do I apply for jobs?', a: 'Create a free profile, build your Skill Passport, and apply to roles that match your skills. You can track every application in real time.', source: 'Home', page: 'home' },
  { q: 'How can my company post jobs?', a: 'Employers sign up, add a company profile, and post unlimited jobs from a built-in applicant tracking system. Only hiring managers need a paid seat; team members join free.', source: 'Home', page: 'home' },
  { q: 'Can I use ProConnect on mobile?', a: 'Yes. ProConnect works in any modern browser, and an Android app is available on Google Play.', source: 'Home', page: 'home' },
  { q: 'How are skills verified?', a: 'Skills are verified through accredited assessments and partner education providers, so every candidate is benchmarked against recognized ASEAN standards.', source: 'Home', page: 'home' },

  // ── From the Pricing FAQ ──
  { q: 'What exactly is a "seat"?', a: 'A seat is a paid license for one person who needs to post jobs and manage hiring. Everyone else in your company can be invited as a Member Profile for FREE to view the directory and apply for internal jobs.', source: 'Pricing', page: 'pricing' },
  { q: 'Can I mix Full Recruiter and Department Head seats?', a: 'Yes. Buy any combination of Full Recruiter and Department Head seats. Add or remove seats anytime, and billing adjusts automatically.', source: 'Pricing', page: 'pricing' },
  { q: 'Why are prices different in each country?', a: 'Pricing is purchasing-power adjusted so every ASEAN market pays a fair local rate rather than a single global price.', source: 'Pricing', page: 'pricing' },
  { q: 'Do I get charged per branch or location?', a: 'No. You are only charged per recruiter seat. Branches and locations are unlimited and included on every paid plan.', source: 'Pricing', page: 'pricing' },
  { q: 'Is it free for job seekers and schools?', a: 'Yes. Job seekers always use ProConnect for free, including search, profile, Skill Passport, and applications. Education partners also join free to verify their graduates. We charge employers, not candidates or schools.', source: 'Pricing', page: 'pricing' },
].map((it, i) => ({ id: i, ...it }));

const FAQ_SOURCES = ['All Sources', ...Array.from(new Set(FAQ_ITEMS.map(f => f.source)))];

// Small clickable chip linking back to the source page.
function FaqSourceChip({ item, navigate }) {
  return (
    <a href="#" onClick={e => { e.preventDefault(); e.stopPropagation(); navigate(item.page); window.scrollTo(0, 0); }}
      title={`Open the ${item.source} page`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 10px', borderRadius: 20, background: PC.lightBlue, color: PC.blue, fontSize: 11.5, fontWeight: 700, fontFamily: 'Montserrat', textDecoration: 'none', whiteSpace: 'nowrap' }}>
      {item.source}
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M3 9l6-6M9 3H4M9 3v5" stroke={PC.blue} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </a>
  );
}

function FaqRow({ item, active, onClick, navigate }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', gap: 12, padding: '16px 16px', borderRadius: 10, cursor: 'pointer', background: active ? PC.lightBlue : 'transparent', borderBottom: `1px solid ${PC.border}`, alignItems: 'flex-start', transition: 'background 0.12s' }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = PC.bg; }} onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14.5, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 8, lineHeight: 1.35 }}>{item.q}</div>
        <FaqSourceChip item={item} navigate={navigate} />
      </div>
    </div>
  );
}

function FaqDetail({ item, navigate }) {
  if (!item) return null;
  return (
    <div style={{ flex: 1, border: `1px solid ${PC.border}`, borderRadius: 14, padding: 28 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: PC.gray, fontFamily: 'Montserrat' }}>From</span>
        <FaqSourceChip item={item} navigate={navigate} />
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 16px', lineHeight: 1.3 }}>{item.q}</h2>
      <p style={{ fontSize: 15, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
    </div>
  );
}

function FaqPage({ navigate }) {
  const mobile = useMobile(900);
  const [activeId, setActiveId] = React.useState(FAQ_ITEMS[0].id);
  const [showDetail, setShowDetail] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [source, setSource] = React.useState('All Sources');

  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    return FAQ_ITEMS.filter(f => {
      const qMatch = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      const sMatch = source === 'All Sources' || f.source === source;
      return qMatch && sMatch;
    });
  }, [search, source]);

  React.useEffect(() => {
    if (filtered.length && !filtered.some(f => f.id === activeId)) setActiveId(filtered[0].id);
  }, [filtered, activeId]);

  const activeItem = FAQ_ITEMS.find(f => f.id === activeId) || filtered[0] || FAQ_ITEMS[0];
  const runSearch = () => setSearch(query);

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HPNav navigate={navigate} activePage="faq" />

      {/* Search header (Jobs-style navy band) */}
      <div style={{ background: PC.navy, padding: mobile ? '24px 0' : '28px 0' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: mobile ? 24 : 30, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 4px' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: mobile ? 13 : 14.5, color: 'rgba(255,255,255,0.8)', fontFamily: 'Montserrat', margin: '0 0 18px' }}>Answers from across ProConnect, in one place. Search or filter by source page.</p>
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 16, alignItems: mobile ? 'stretch' : 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', marginBottom: 10 }}>Search FAQ</label>
              <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && runSearch()} placeholder="Search questions and answers" style={{ width: '100%', height: 50, borderRadius: 10, border: 'none', padding: '0 18px', fontSize: 14, fontFamily: 'Montserrat', boxSizing: 'border-box', outline: 'none' }} />
            </div>
            <PCButton variant="orange" size="xl" style={{ height: 50, minWidth: 150 }} onClick={runSearch}>Search</PCButton>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: mobile ? 'nowrap' : 'wrap', overflowX: mobile ? 'auto' : 'visible', paddingBottom: mobile ? 4 : 0 }}>
            <FilterPill label="Source" value={source} options={FAQ_SOURCES} onChange={setSource} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, background: '#fff', padding: mobile ? '24px 0 40px' : '40px 0 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 28, alignItems: 'flex-start' }}>
          {(!mobile || !showDetail) && (
            <div style={{ flex: mobile ? 1 : '0 0 440px', border: mobile ? 'none' : `1px solid ${PC.border}`, borderRadius: 14, padding: mobile ? 0 : 20 }}>
              {!mobile && (
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>Questions</div>
                  <div style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', marginTop: 2 }}>Showing {filtered.length} question{filtered.length !== 1 ? 's' : ''}</div>
                </div>
              )}
              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                  <div style={{ fontSize: 36, marginBottom: 10 }}>🔍</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>No questions found</div>
                  <div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat' }}>Try a different search or source.</div>
                </div>
              )}
              {filtered.map(f => <FaqRow key={f.id} item={f} navigate={navigate} active={!mobile && activeId === f.id} onClick={() => { setActiveId(f.id); if (mobile) setShowDetail(true); }} />)}
            </div>
          )}
          {(!mobile || showDetail) && (
            <div style={{ flex: 1, width: '100%' }}>
              {mobile && <button onClick={() => setShowDetail(false)} style={{ background: 'none', border: 'none', color: PC.blue, fontFamily: 'Montserrat', fontSize: 14, fontWeight: 600, cursor: 'pointer', marginBottom: 12, padding: 0 }}>‹ Back to questions</button>}
              <FaqDetail item={activeItem} navigate={navigate} />
            </div>
          )}
        </div>
      </div>

      <HPFooter navigate={navigate} />
    </div>
  );
}

Object.assign(window, { FaqPage });
