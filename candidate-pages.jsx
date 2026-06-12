
// ProConnect — Candidate Pages v2 (Companies grid + detail, Find Jobs, Applied, Profile)

// Company logo generator
function compLogo(bg, fg, txt) {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"><rect width="56" height="56" rx="12" fill="${bg}"/><text x="28" y="28" font-family="Arial" font-size="20" fill="${fg}" text-anchor="middle" dominant-baseline="central" font-weight="bold">${txt}</text></svg>`
  );
}

const COMPANIES = [
  { id: 1, name: 'Artotel Group', legal: 'PT Artotel Kembangan Group', industry: 'Hospitality', location: 'Jakarta, Indonesia', size: '100-200 employee', jobs: 7, logo: compLogo('#1B1B4B', '#E2245E', 'A') },
  { id: 2, name: 'Sinar Mas Agribusiness and Food', legal: 'PT Sinar Mas Pembangunan', industry: 'Agriculture, Forestry & Fishing', location: 'Jakarta, Indonesia', size: '500+ employee', jobs: 4, logo: compLogo('#fff', '#D6202A', 'SM') },
  { id: 3, name: 'Sheraton Media', legal: 'Sheraton Hospitality TBK', industry: 'Hotel & Accommodation Services', location: 'Jakarta, Indonesia', size: '500+ employee', jobs: 8, logo: compLogo('#1A1A1A', '#C8A45C', 'S') },
  { id: 4, name: 'Marina Bay Hotel', legal: 'Marina Bay Sands Pte Ltd', industry: 'Luxury Hospitality', location: 'Singapore', size: '1000+ employee', jobs: 12, logo: compLogo('#0B3D7B', '#fff', 'MB') },
  { id: 5, name: 'The Mulia Resort', legal: 'PT Mulia Bali Resort', industry: 'Resort & Leisure', location: 'Bali, Indonesia', size: '500+ employee', jobs: 5, logo: compLogo('#1E2A38', '#C9A24B', 'M') },
  { id: 6, name: 'Shangri-La Hotel', legal: 'Shangri-La International', industry: 'Luxury Hospitality', location: 'Kuala Lumpur', size: '1000+ employee', jobs: 9, logo: compLogo('#6A1B2A', '#F0D9A8', 'S') },
];

// ── Filter modal (shared by Companies & Jobs) ─────────────────────────────
function CandFilterModal({ onClose, onApply, kind = 'company' }) {
  const mobile = useMobile(640);
  const [range, setRange] = React.useState(50);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(26,43,69,0.45)', display: 'flex', alignItems: mobile ? 'flex-end' : 'center', justifyContent: 'center', padding: mobile ? 0 : 24 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: mobile ? '18px 18px 0 0' : 16, width: mobile ? '100%' : 420, maxWidth: '100%', maxHeight: '88vh', overflowY: 'auto', boxShadow: '0 24px 70px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px 14px' }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: 0 }}>Filter</h2>
          <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6 6l10 10M16 6L6 16" stroke="#6B7480" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
        </div>
        <div style={{ padding: '0 24px 8px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <RegField label="Countries"><RegSelect placeholder="Select Countries" options={['Indonesia', 'Singapore', 'Malaysia', 'Thailand', 'Philippines', 'Vietnam']} value="" onChange={() => {}} /></RegField>
          <RegField label="City"><RegSelect placeholder="Select City" options={['Jakarta', 'Bandung', 'Bali', 'Surabaya']} value="" onChange={() => {}} /></RegField>
          {kind === 'job' && <RegField label="Employee Status"><div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>{['Full-Time', 'Part-Time', 'Contract'].map(t => <span key={t} style={{ padding: '9px 16px', borderRadius: 8, border: `1px solid ${PC.border}`, fontSize: 13.5, fontFamily: 'Montserrat', color: PC.dark, cursor: 'pointer' }}>{t}</span>)}</div></RegField>}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 500, color: REG.label, fontFamily: 'Montserrat' }}>Range Jobs Open</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: PC.blue, fontFamily: 'Montserrat' }}>{range} km</span>
            </div>
            <input type="range" min="0" max="100" value={range} onChange={e => setRange(+e.target.value)} style={{ width: '100%', accentColor: PC.blue }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: PC.gray, fontFamily: 'Montserrat', marginTop: 4 }}><span>0km</span><span>100km</span></div>
          </div>
          <RegField label="Industry"><RegSelect placeholder="Select Industry" options={['Hospitality', 'Hotel & Service', 'F&B', 'Agriculture']} value="" onChange={() => {}} /></RegField>
        </div>
        <div style={{ display: 'flex', gap: 14, padding: '18px 24px', borderTop: `1px solid ${PC.bg}` }}>
          <PCButton variant="secondary" size="lg" fullWidth onClick={onClose}>Cancel</PCButton>
          <PCButton variant="primary" size="lg" fullWidth onClick={() => onApply && onApply()}>{kind === 'job' ? 'Set Filter' : 'Set Filter'}</PCButton>
        </div>
      </div>
    </div>
  );
}

// ── Companies grid ────────────────────────────────────────────────────────
const SORT_OPTS = ['Relevant', 'Most open positions', 'Recently added', 'Alphabetical (A-Z)', 'Most popular'];
function CandCompaniesV2({ onOpenCompany }) {
  const mobile = useMobile(900);
  const [q, setQ] = React.useState('');
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [sortOpen, setSortOpen] = React.useState(false);
  const [sort, setSort] = React.useState('Relevant');
  const [filterCount, setFilterCount] = React.useState(2);
  const sortRef = React.useRef(null);
  React.useEffect(() => {
    if (!sortOpen) return;
    const h = e => { if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, [sortOpen]);
  let list = COMPANIES.filter(c => !q || c.name.toLowerCase().includes(q.toLowerCase()));
  if (sort === 'Alphabetical (A-Z)') list = [...list].sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'Most open positions') list = [...list].sort((a, b) => b.jobs - a.jobs);

  return (
    <div style={{ maxWidth: 1180 }}>
      <h1 style={{ fontSize: mobile ? 26 : 32, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 22px' }}>Companies</h1>
      <div style={{ display: 'flex', gap: 14, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 220, position: 'relative', display: 'flex', alignItems: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', left: 16 }}><circle cx="8" cy="8" r="6" stroke={PC.gray} strokeWidth="1.5" /><path d="M12.5 12.5L16 16" stroke={PC.gray} strokeWidth="1.5" strokeLinecap="round" /></svg>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search company here..." style={{ width: '100%', height: 52, borderRadius: 12, border: `1px solid ${PC.border}`, padding: '0 16px 0 44px', fontSize: 14.5, fontFamily: 'Montserrat', outline: 'none', boxSizing: 'border-box', background: '#fff' }} />
        </div>
        <button onClick={() => setFilterOpen(true)} style={{ position: 'relative', height: 52, padding: '0 24px', borderRadius: 12, border: `1px solid ${PC.blue}`, background: '#fff', color: PC.blue, fontSize: 15, fontWeight: 700, fontFamily: 'Montserrat', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 4h14M4 9h10M7 14h4" stroke={PC.blue} strokeWidth="1.6" strokeLinecap="round" /></svg>Filter
          {filterCount > 0 && <span style={{ position: 'absolute', top: -8, right: -8, background: REG.err, color: '#fff', fontSize: 11, fontWeight: 700, borderRadius: 10, minWidth: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Montserrat' }}>{filterCount}</span>}
        </button>
        <div ref={sortRef} style={{ position: 'relative' }}>
          <button onClick={() => setSortOpen(o => !o)} style={{ height: 52, padding: '0 22px', borderRadius: 12, border: `1px solid ${PC.blue}`, background: '#fff', color: PC.blue, fontSize: 15, fontWeight: 700, fontFamily: 'Montserrat', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, minWidth: 150, justifyContent: 'space-between' }}>
            {sort}<span style={{ fontSize: 11, transform: sortOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
          </button>
          {sortOpen && (
            <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, zIndex: 40, background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 12, boxShadow: '0 12px 32px rgba(0,0,0,0.16)', overflow: 'hidden', minWidth: 220 }}>
              {SORT_OPTS.map(o => (
                <div key={o} onClick={() => { setSort(o); setSortOpen(false); }} style={{ padding: '13px 18px', fontSize: 14, fontFamily: 'Montserrat', color: o === sort ? PC.blue : PC.dark, fontWeight: o === sort ? 700 : 500, background: o === sort ? PC.lightBlue : '#fff', cursor: 'pointer' }}
                  onMouseEnter={e => { if (o !== sort) e.currentTarget.style.background = PC.bg; }} onMouseLeave={e => { if (o !== sort) e.currentTarget.style.background = '#fff'; }}>{o}</div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 20 }}>
        {list.map(c => (
          <div key={c.id} onClick={() => onOpenCompany(c)} style={{ background: '#fff', borderRadius: 14, padding: 22, border: `1px solid ${PC.border}`, cursor: 'pointer', transition: 'box-shadow 0.15s, border-color 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(4,38,72,0.1)'; e.currentTarget.style.borderColor = PC.blue; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = PC.border; }}>
            <img src={c.logo} alt="" style={{ width: 52, height: 52, borderRadius: 12, display: 'block', marginBottom: 16 }} />
            <div style={{ fontSize: 17, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>{c.name}</div>
            <div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 14 }}>{c.legal}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 16 }}>
              <Meta icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke={PC.gray} strokeWidth="1.3" /><path d="M8 4.5v3.5l2 1.2" stroke={PC.gray} strokeWidth="1.3" strokeLinecap="round" /></svg>} text={c.industry} />
              <Meta icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14s5-4.2 5-8a5 5 0 00-10 0c0 3.8 5 8 5 8z" stroke={PC.gray} strokeWidth="1.3" /><circle cx="8" cy="6" r="1.8" stroke={PC.gray} strokeWidth="1.3" /></svg>} text={c.location} />
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600, color: PC.blue, background: PC.lightBlue, borderRadius: 8, padding: '7px 13px', fontFamily: 'Montserrat' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="2" y="4.5" width="11" height="8" rx="1.3" stroke={PC.blue} strokeWidth="1.3" /><path d="M5.5 4.5V3.5a1.2 1.2 0 011.2-1.2h1.6a1.2 1.2 0 011.2 1.2v1" stroke={PC.blue} strokeWidth="1.3" /></svg>
              {c.jobs} Open Positions
            </span>
          </div>
        ))}
      </div>
      {filterOpen && <CandFilterModal onClose={() => setFilterOpen(false)} onApply={() => { setFilterCount(2); setFilterOpen(false); }} kind="company" />}
    </div>
  );
}

const Meta = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
    <span style={{ flexShrink: 0, display: 'flex' }}>{icon}</span>
    <span style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat' }}>{text}</span>
  </div>
);

// ── Company Detail ────────────────────────────────────────────────────────
function CandCompanyDetail({ company, onBack, onOpenJob }) {
  const mobile = useMobile(960);
  const c = company || COMPANIES[0];
  const sideJobs = [
    { title: 'Manager Operational Hospitality', co: 'Amaris Hotel Kupang', loc: 'Kota Kupang', pay: 'IDR 2,500,000 - IDR 4,000,000 per month', ago: '3 days ago' },
    { title: 'Operation Training Manager - (F&B)', co: 'Amaris Hotel Kupang', loc: 'Bandung', pay: 'IDR 9.000.000 - IDR 13.000.000 per month', ago: '1 month ago', active: true },
    { title: 'Manager Operational Hospitality', co: 'Amaris Hotel Kupang', loc: 'Kota Kupang', pay: '', ago: '1 month ago' },
    { title: 'Manager Operational Hospitality', co: 'Amaris Hotel Kupang', loc: 'Kota Kupang', pay: 'IDR 2,500,000 - IDR 4,000,000 per month', ago: '3 days ago' },
  ];
  const Card = ({ title, children }) => (
    <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${PC.border}`, padding: mobile ? 20 : 26, marginBottom: 18 }}>
      <h3 style={{ fontSize: 18, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 18px' }}>{title}</h3>
      {children}
    </div>
  );
  const Field = ({ label, value }) => (
    <div><div style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 5 }}>{label}</div><div style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat' }}>{value}</div></div>
  );
  return (
    <div style={{ maxWidth: 1180 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
        <button onClick={onBack} aria-label="Back" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}><svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M16 6l-8 7 8 7" stroke={PC.dark} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
        <h1 style={{ fontSize: mobile ? 24 : 30, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: 0 }}>Company Detail</h1>
      </div>
      <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${PC.border}`, padding: mobile ? 20 : 26, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 20 }}>
        <img src={c.logo} alt="" style={{ width: 64, height: 64, borderRadius: 14, display: 'block' }} />
        <div><div style={{ fontSize: 22, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat' }}>{c.name}</div><div style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', marginTop: 3 }}>{c.legal}</div></div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.6fr 1fr', gap: 22, alignItems: 'flex-start' }}>
        <div>
          <Card title="About Company">
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(3,1fr)', gap: 18, marginBottom: 18 }}>
              <Field label="Company Size" value={c.size} />
              <Field label="Industry" value={c.industry} />
              <Field label="Location" value={c.location} />
            </div>
            <p style={{ fontSize: 14, color: '#42505F', fontFamily: 'Montserrat', lineHeight: 1.7, margin: '0 0 12px' }}>Lead a team of 20 Product Designers including 6 Design Partners across two main product domains: Supply (B2B), and Demand (B2C). Plan the quarterly roadmap with Product Managers and Design Supervisors.</p>
            <span style={{ fontSize: 14, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat', cursor: 'pointer' }}>View Detail</span>
          </Card>
          <Card title="Contact">
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 18 }}>
              {[['🌐', 'Webiste', 'artotel.com'], ['📞', 'Phone Number', '+62-1234-4321-123'], ['✉️', 'Email', 'info@artotel.com']].map(([ic, l, v]) => (
                <div key={l}><div style={{ fontSize: 18, marginBottom: 6 }}>{ic}</div><div style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 3 }}>{l}</div><div style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat' }}>{v}</div></div>
              ))}
            </div>
          </Card>
          <Card title="Location">
            {[['Head Quarters', 'Jl. Bunga Mawar No.42, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410'], ['Branch - Malang', 'Jl. Bunga Mawar No.42, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410'], ['Branch - Bandung', 'Jl. Bunga Mawar No.42, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410']].map(([l, v]) => (
              <div key={l} style={{ marginBottom: 16 }}><div style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 5 }}>{l}</div><div style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.6 }}>{v}</div></div>
            ))}
          </Card>
        </div>
        {/* Side: Find Jobs */}
        <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${PC.border}`, padding: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 14px' }}>Find Jobs</h3>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: 16 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'absolute', left: 14 }}><circle cx="7" cy="7" r="5" stroke={PC.gray} strokeWidth="1.4" /><path d="M11 11l3 3" stroke={PC.gray} strokeWidth="1.4" strokeLinecap="round" /></svg>
            <input placeholder="Search job here....." style={{ width: '100%', height: 44, borderRadius: 10, border: `1px solid ${PC.border}`, padding: '0 14px 0 38px', fontSize: 13.5, fontFamily: 'Montserrat', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {sideJobs.map((j, i) => (
              <div key={i} onClick={() => onOpenJob && onOpenJob()} style={{ display: 'flex', gap: 12, padding: '12px', borderRadius: 10, cursor: 'pointer', background: j.active ? PC.lightBlue : 'transparent' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>{j.title}</div>
                  <div style={{ fontSize: 12.5, fontFamily: 'Montserrat', marginBottom: 3 }}><span style={{ color: PC.blue, fontWeight: 600 }}>{j.co}</span><span style={{ color: PC.gray }}> · {j.loc}</span></div>
                  {j.pay && <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 3 }}>{j.pay}</div>}
                  <div style={{ fontSize: 11.5, color: PC.medGray, fontFamily: 'Montserrat' }}>{j.ago}</div>
                </div>
                <img src={c.logo} alt="" style={{ width: 38, height: 38, borderRadius: 8, flexShrink: 0 }} />
              </div>
            ))}
          </div>
          <PCButton variant="primary" size="lg" fullWidth style={{ marginTop: 14 }} onClick={() => onOpenJob && onOpenJob()}>View All</PCButton>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { COMPANIES, CandFilterModal, CandCompaniesV2, CandCompanyDetail, compLogo });
