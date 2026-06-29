
// ProConnect — FAQ page (accordion layout, topic + source filters, pagination)
// Merges the FAQ content from across the landing pages. Each answer shows its
// source page as a clickable link back to that page.

const FAQ_ITEMS = [
  // ── From the Homepage FAQ ──
  { q: 'What is ProConnect?', a: 'ProConnect is a hospitality and tourism job platform that connects skilled professionals with verified employers across ASEAN. We make it easier to showcase verified skills, find the right roles, and hire faster.', source: 'Home', page: 'home', category: 'General' },
  { q: 'Which countries does ProConnect support?', a: 'ProConnect serves the ASEAN region. We are currently focused on Indonesia and expanding to Thailand, Vietnam, Malaysia, Cambodia, Singapore, and the Philippines.', source: 'Home', page: 'home', category: 'General' },
  { q: 'Is ProConnect free for job seekers?', a: 'Yes. Job seekers use ProConnect for free, including search, your profile, the Skill Passport, and job applications.', source: 'Home', page: 'home', category: 'For Job Seekers' },
  { q: 'What is a Skill Passport?', a: 'A Skill Passport is your verified, portable record of skills and credentials, aligned to the ASEAN MRA-TP standard, so employers across the region can trust your qualifications at a glance.', source: 'Home', page: 'home', category: 'Skill Passport' },
  { q: 'How do I apply for jobs?', a: 'Create a free profile, build your Skill Passport, and apply to roles that match your skills. You can track every application in real time.', source: 'Home', page: 'home', category: 'For Job Seekers' },
  { q: 'How can my company post jobs?', a: 'Employers sign up, add a company profile, and post unlimited jobs from a built-in applicant tracking system. Only hiring managers need a paid seat; team members join free.', source: 'Home', page: 'home', category: 'For Employers' },
  { q: 'Can I use ProConnect on mobile?', a: 'Yes. ProConnect works in any modern browser, and an Android app is available on Google Play.', source: 'Home', page: 'home', category: 'General' },
  { q: 'How are skills verified?', a: 'Skills are verified through accredited assessments and partner education providers, so every candidate is benchmarked against recognized ASEAN standards.', source: 'Home', page: 'home', category: 'Skill Passport' },

  // ── From the Pricing FAQ ──
  { q: 'What exactly is a "seat"?', a: 'A seat is a paid license for one person who needs to post jobs and manage hiring. Everyone else in your company can be invited as a Member Profile for FREE to view the directory and apply for internal jobs.', source: 'Pricing', page: 'pricing', category: 'Pricing' },
  { q: 'Can I mix Full Recruiter and Department Head seats?', a: 'Yes. Buy any combination of Full Recruiter and Department Head seats. Add or remove seats anytime, and billing adjusts automatically.', source: 'Pricing', page: 'pricing', category: 'Pricing' },
  { q: 'Why are prices different in each country?', a: 'Pricing is purchasing-power adjusted so every ASEAN market pays a fair local rate rather than a single global price.', source: 'Pricing', page: 'pricing', category: 'Pricing' },
  { q: 'Do I get charged per branch or location?', a: 'No. You are only charged per recruiter seat. Branches and locations are unlimited and included on every paid plan.', source: 'Pricing', page: 'pricing', category: 'Pricing' },
  { q: 'Is it free for job seekers and schools?', a: 'Yes. Job seekers always use ProConnect for free, including search, profile, Skill Passport, and applications. Education partners also join free to verify their graduates. We charge employers, not candidates or schools.', source: 'Pricing', page: 'pricing', category: 'Pricing' },
].map((it, i) => ({ id: i, ...it }));

const FAQ_CATEGORIES = ['All Topics', ...Array.from(new Set(FAQ_ITEMS.map(f => f.category)))];
const FAQ_SOURCES = ['All Sources', ...Array.from(new Set(FAQ_ITEMS.map(f => f.source)))];
const FAQ_PER_PAGE = 6;

// Clickable chip linking back to the source page.
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

function FaqAccordion({ item, open, onToggle, navigate }) {
  return (
    <div style={{ border: `1px solid ${open ? PC.blue : PC.border}`, borderRadius: 14, background: '#fff', overflow: 'hidden', marginBottom: 14, transition: 'border-color 0.15s', boxShadow: open ? '0 6px 24px rgba(4,38,72,0.07)' : 'none' }}>
      <button onClick={onToggle} style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, padding: '20px 24px', background: '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.4 }}>{item.q}</span>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <PCTag color="blue">{item.category}</PCTag>
            <FaqSourceChip item={item} navigate={navigate} />
          </div>
        </div>
        <span style={{ width: 30, height: 30, borderRadius: '50%', background: open ? PC.blue : PC.bg, color: open ? '#fff' : PC.gray, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0, transition: 'all 0.18s', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>
      {open && <div style={{ padding: '0 24px 22px', fontSize: 14.5, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.7 }}>{item.a}</div>}
    </div>
  );
}

function FaqPage({ navigate }) {
  const mobile = useMobile(820);
  const [query, setQuery] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('All Topics');
  const [source, setSource] = React.useState('All Sources');
  const [page, setPage] = React.useState(1);
  const [openId, setOpenId] = React.useState(FAQ_ITEMS[0].id);

  const filtered = React.useMemo(() => {
    const q = search.trim().toLowerCase();
    return FAQ_ITEMS.filter(f => {
      const qMatch = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      const cMatch = category === 'All Topics' || f.category === category;
      const sMatch = source === 'All Sources' || f.source === source;
      return qMatch && cMatch && sMatch;
    });
  }, [search, category, source]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / FAQ_PER_PAGE));
  const curPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((curPage - 1) * FAQ_PER_PAGE, curPage * FAQ_PER_PAGE);

  React.useEffect(() => { setPage(1); }, [search, category, source]);

  const runSearch = () => setSearch(query);

  const catCount = (c) => c === 'All Topics' ? FAQ_ITEMS.length : FAQ_ITEMS.filter(f => f.category === c).length;

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HPNav navigate={navigate} activePage="faq" />

      {/* Search header (kept: navy band + white input + orange Search button) */}
      <div style={{ background: PC.navy, padding: mobile ? '24px 0 26px' : '32px 0 30px' }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: mobile ? 26 : 34, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 6px' }}>Frequently Asked Questions</h1>
          <p style={{ fontSize: mobile ? 13 : 15, color: 'rgba(255,255,255,0.8)', fontFamily: 'Montserrat', margin: '0 0 20px' }}>Answers from across ProConnect, in one place. Search, or filter by topic and source.</p>
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 14, alignItems: mobile ? 'stretch' : 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', marginBottom: 10 }}>Search FAQ</label>
              <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && runSearch()} placeholder="Search questions and answers" style={{ width: '100%', height: 50, borderRadius: 10, border: 'none', padding: '0 18px', fontSize: 14, fontFamily: 'Montserrat', boxSizing: 'border-box', outline: 'none' }} />
            </div>
            <PCButton variant="orange" size="xl" style={{ height: 50, minWidth: 150 }} onClick={runSearch}>Search</PCButton>
          </div>

          {/* Topic filter chips */}
          <div style={{ display: 'flex', gap: 10, marginTop: 18, flexWrap: mobile ? 'nowrap' : 'wrap', overflowX: mobile ? 'auto' : 'visible', paddingBottom: mobile ? 4 : 0 }}>
            {FAQ_CATEGORIES.map(c => {
              const on = category === c;
              return (
                <button key={c} onClick={() => setCategory(c)} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 15px', borderRadius: 22, border: `1px solid ${on ? '#fff' : 'rgba(255,255,255,0.4)'}`, background: on ? '#fff' : 'transparent', color: on ? PC.navy : '#fff', fontFamily: 'Montserrat', fontSize: 13, fontWeight: on ? 700 : 500, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  {c}
                  <span style={{ fontSize: 11, fontWeight: 700, color: on ? PC.blue : 'rgba(255,255,255,0.65)' }}>{catCount(c)}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, background: PC.bg, padding: mobile ? '24px 0 48px' : '36px 0 72px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
          {/* Toolbar: count + source filter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, marginBottom: 18, flexWrap: 'wrap' }}>
            <div style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat' }}>Showing <b style={{ color: PC.dark }}>{filtered.length}</b> question{filtered.length !== 1 ? 's' : ''}{(category !== 'All Topics' || source !== 'All Sources' || search) ? ' (filtered)' : ''}</div>
            <FilterPill label="Source" value={source} options={FAQ_SOURCES} onChange={setSource} />
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 20px', background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 14 }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 6 }}>No questions found</div>
              <div style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 18 }}>Try a different search, topic, or source.</div>
              <PCButton variant="secondary" size="md" onClick={() => { setQuery(''); setSearch(''); setCategory('All Topics'); setSource('All Sources'); }}>Clear filters</PCButton>
            </div>
          ) : (
            <>
              {pageItems.map(item => (
                <FaqAccordion key={item.id} item={item} navigate={navigate} open={openId === item.id} onToggle={() => setOpenId(openId === item.id ? null : item.id)} />
              ))}
              <Pagination page={curPage} setPage={setPage} totalPages={totalPages} />
            </>
          )}
        </div>
      </div>

      <HPFooter navigate={navigate} />
    </div>
  );
}

Object.assign(window, { FaqPage });
