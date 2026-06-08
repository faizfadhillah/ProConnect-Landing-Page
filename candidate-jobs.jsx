
// ProConnect — Candidate Find Jobs + Applied Jobs + Profile Applicant

const CJOBS = [
  { id: 1, title: 'Operation Training Manager - (F&B)', co: 'PT Company Full Name', coShort: 'Amaris Hotel Kupang', loc: 'Bandung', pay: 'IDR 9.000.000 - IDR 13.000.000 per month', ago: '2 days ago', match: 30, mode: 'Onsite', type: 'Full-Time', verified: true, logo: compLogo('#1B1B4B', '#E2245E', 'A') },
  { id: 2, title: 'Manager Operational Hospitality', co: 'PT Amaris Hotel', coShort: 'Amaris Hotel Kupang', loc: 'Kota Kupang', pay: 'IDR 2,500,000 - IDR 4,000,000 per month', ago: '3 days ago', match: 72, mode: 'Onsite', type: 'Full-Time', verified: true, logo: compLogo('#1B1B4B', '#E2245E', 'A') },
  { id: 3, title: 'Manager Operational Hospitality', co: 'PT Amaris Hotel', coShort: 'Amaris Hotel Kupang', loc: 'Kota Kupang', pay: '', ago: '1 month ago', match: 65, mode: 'Hybrid', type: 'Full-Time', verified: false, logo: compLogo('#1B1B4B', '#E2245E', 'A') },
  { id: 4, title: 'Manager Operational Hospitality', co: 'PT Amaris Hotel', coShort: 'Amaris Hotel Kupang', loc: 'Kota Kupang', pay: 'IDR 2,500,000 - IDR 4,000,000 per month', ago: '3 days ago', match: 88, mode: 'Onsite', type: 'Full-Time', verified: true, logo: compLogo('#1B1B4B', '#E2245E', 'A') },
  { id: 5, title: 'Front Office Supervisor', co: 'PT Marina Bay', coShort: 'Marina Bay Hotel', loc: 'Singapore', pay: 'SGD 3,500 - SGD 5,500 per month', ago: '5 days ago', match: 92, mode: 'Hybrid', type: 'Full-Time', verified: true, logo: compLogo('#0B3D7B', '#fff', 'MB') },
  { id: 6, title: 'Housekeeping Manager', co: 'PT Mulia Resort', coShort: 'The Mulia Resort', loc: 'Bali', pay: 'IDR 8.000.000 - IDR 11.000.000 per month', ago: '1 week ago', match: 78, mode: 'Onsite', type: 'Full-Time', verified: false, logo: compLogo('#1E2A38', '#C9A24B', 'M') },
];

function matchColor(m) { return m >= 80 ? PC.green : m >= 50 ? PC.orange : '#E2245E'; }

function JobListRow({ job, active, onClick }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', gap: 12, padding: '16px', borderRadius: 10, cursor: 'pointer', background: active ? PC.lightBlue : 'transparent', borderBottom: `1px solid ${PC.border}`, alignItems: 'flex-start' }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = PC.bg; }} onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 5 }}>{job.title}</div>
        <div style={{ fontSize: 13, fontFamily: 'Montserrat', marginBottom: 4 }}><span style={{ color: PC.blue, fontWeight: 600 }}>{job.coShort}</span><span style={{ color: PC.gray }}> · {job.loc}</span></div>
        {job.pay && <div style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 4 }}>{job.pay}</div>}
        <div style={{ fontSize: 12, color: PC.medGray, fontFamily: 'Montserrat' }}>{job.ago}</div>
      </div>
      <img src={job.logo} alt="" style={{ width: 44, height: 44, borderRadius: 8, flexShrink: 0 }} />
    </div>
  );
}

function JobDetailPanel({ job, saved, applied, onSave, onApply }) {
  const Section = ({ title, children }) => (
    <div style={{ marginBottom: 22 }}>
      <h3 style={{ fontSize: 17, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 12px' }}>{title}</h3>
      {children}
    </div>
  );
  const Sub = ({ children }) => <div style={{ fontSize: 14.5, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>{children}</div>;
  const Bullets = ({ items }) => <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>{items.map((t, i) => <li key={i} style={{ fontSize: 14, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.6 }}>{t}</li>)}</ul>;
  const Chips = ({ items }) => <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{items.map(i => <span key={i} style={{ padding: '6px 14px', borderRadius: 20, background: PC.bg, border: `1px solid ${PC.border}`, fontSize: 12.5, fontWeight: 500, color: PC.dark, fontFamily: 'Montserrat' }}>{i}</span>)}</div>;
  return (
    <div style={{ flex: 1, border: `1px solid ${PC.border}`, borderRadius: 14, padding: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 14 }}>
        <div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, color: matchColor(job.match), background: matchColor(job.match) + '1A', borderRadius: 16, padding: '5px 12px', fontFamily: 'Montserrat', marginBottom: 12 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5l4 1.7v3.3c0 2.6-1.8 4.4-4 5.2-2.2-.8-4-2.6-4-5.2V3.2z" stroke={matchColor(job.match)} strokeWidth="1.2" strokeLinejoin="round" /></svg>
            {job.match}% Skill Match
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{job.title}</span>
            {job.verified && <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="#1560BD" /><path d="M5.5 9l2.2 2.2L12.5 6.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          </div>
          <div style={{ fontSize: 14, fontFamily: 'Montserrat', marginBottom: 4 }}><span style={{ color: PC.blue, fontWeight: 600 }}>{job.co}</span><span style={{ color: PC.gray }}> · {job.loc}</span></div>
          {job.pay && <div style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}>{job.pay}</div>}
          <div style={{ fontSize: 12.5, color: PC.medGray, fontFamily: 'Montserrat', marginTop: 4 }}>{job.ago}</div>
        </div>
        <img src={job.logo} alt="" style={{ width: 48, height: 48, borderRadius: 8, flexShrink: 0 }} />
      </div>
      <div style={{ marginBottom: 18 }}><Chips items={[job.mode, job.type]} /></div>
      <div style={{ display: 'flex', gap: 14, marginBottom: 26 }}>
        <PCButton variant="secondary" size="lg" fullWidth onClick={onSave}>{saved ? '✓ Saved' : 'Save'}</PCButton>
        <PCButton variant="primary" size="lg" fullWidth onClick={onApply}>{applied ? '✓ Applied' : 'Apply'}</PCButton>
      </div>
      <Section title="Job description">
        <Sub>Ringkasan pekerjaan :</Sub>
        <Bullets items={['Menyelesaikan tugas-tugas yang diberikan meliputi pekerjaan redaksi, sales, dan divisi lainnya, khususnya terkait desain grafis.', 'Mengimplementasikan setiap brief desain menjadi visual dengan standar kualitas yang ditetapkan.', 'Menghasilkan desain dengan kreativitas original masing-masing talenta.', 'Menyelesaikan pekerjaan dengan tepat waktu sesuai deadline yang ditentukan.', 'Menjaga kualitas desain dan konsistensi yang ditetapkan oleh Manajer Desain.']} />
        <div style={{ height: 14 }} />
        <Sub>Keahlian khusus :</Sub>
        <Bullets items={['Minimal lulusan S1 DKV dari universitas terkemuka.', 'Minimal 1 tahun pengalaman dalam desain grafis.', 'Mahir menggunakan Adobe Photoshop & Adobe Illustrator.', 'Memiliki komunikasi, pemikiran konseptual, keterampilan tipografi, dan keterampilan desain yang baik.']} />
      </Section>
      <Section title="Right To Work"><Bullets items={['Indonesia - Require Indonesian Sponsorship or A Job Offer to Work for A New Employer', 'Indonesia - Indonesian ABTC (APEC Business Travel Card)']} /></Section>
      <Section title="Location"><p style={{ fontSize: 14, color: PC.dark, fontFamily: 'Montserrat', margin: 0 }}>20-22 National Circuit, Entrance via, Fitzroy St, Forrest ACT 2603, Australia</p></Section>
      <Section title="Job Skills"><Chips items={['Photoshop', 'Illustrator', 'Figma', 'Adobe XD']} /></Section>
      <Section title="Interest"><Chips items={['3D Art', 'HTML', 'CSS']} /></Section>
      <Section title="Language"><Chips items={['Bahasa', 'English']} /></Section>
    </div>
  );
}

function CandFindJobs({ mode = 'all' }) {
  const mobile = useMobile(960);
  const title = mode === 'saved' ? 'Saved Jobs' : mode === 'applied' ? 'Applied Jobs' : 'Find Jobs';
  const [activeId, setActiveId] = React.useState(CJOBS[0].id);
  const [showDetail, setShowDetail] = React.useState(false);
  const [q, setQ] = React.useState('');
  const [filterOpen, setFilterOpen] = React.useState(false);
  const [saved, setSaved] = React.useState(mode === 'saved' ? CJOBS.map(j => j.id) : [2]);
  const [applied, setApplied] = React.useState(mode === 'applied' ? CJOBS.map(j => j.id) : []);
  let list = CJOBS;
  if (mode === 'saved') list = CJOBS.filter(j => saved.includes(j.id));
  if (mode === 'applied') list = CJOBS.filter(j => applied.includes(j.id) || [1, 2, 3].includes(j.id));
  list = list.filter(j => !q || j.title.toLowerCase().includes(q.toLowerCase()) || j.coShort.toLowerCase().includes(q.toLowerCase()));
  const activeJob = CJOBS.find(j => j.id === activeId) || list[0] || CJOBS[0];

  return (
    <div style={{ maxWidth: 1240 }}>
      <h1 style={{ fontSize: mobile ? 26 : 32, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 22px' }}>{title}</h1>
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        {(!mobile || !showDetail) && (
          <div style={{ flex: mobile ? 1 : '0 0 440px', minWidth: 0 }}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ position: 'absolute', left: 14 }}><circle cx="7" cy="7" r="5" stroke={PC.gray} strokeWidth="1.4" /><path d="M11 11l3 3" stroke={PC.gray} strokeWidth="1.4" strokeLinecap="round" /></svg>
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search job here....." style={{ width: '100%', height: 48, borderRadius: 10, border: `1px solid ${PC.border}`, padding: '0 14px 0 38px', fontSize: 14, fontFamily: 'Montserrat', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <button onClick={() => setFilterOpen(true)} aria-label="Filter" style={{ width: 48, height: 48, borderRadius: 10, border: `1px solid ${PC.blue}`, background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 5h14M5 10h10M8 15h4" stroke={PC.blue} strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>
            <div style={{ border: `1px solid ${PC.border}`, borderRadius: 14, padding: 8 }}>
              {list.length === 0 && <div style={{ textAlign: 'center', padding: '48px 20px', color: PC.gray, fontFamily: 'Montserrat', fontSize: 14 }}>No jobs here yet.</div>}
              {list.map(j => <JobListRow key={j.id} job={j} active={!mobile && activeId === j.id} onClick={() => { setActiveId(j.id); if (mobile) setShowDetail(true); }} />)}
            </div>
          </div>
        )}
        {(!mobile || showDetail) && (
          <div style={{ flex: 1, width: '100%', minWidth: 0 }}>
            {mobile && <button onClick={() => setShowDetail(false)} style={{ background: 'none', border: 'none', color: PC.blue, fontFamily: 'Montserrat', fontSize: 14, fontWeight: 600, cursor: 'pointer', marginBottom: 12, padding: 0 }}>‹ Back to list</button>}
            <JobDetailPanel job={activeJob} saved={saved.includes(activeJob.id)} applied={applied.includes(activeJob.id)}
              onSave={() => setSaved(s => s.includes(activeJob.id) ? s.filter(x => x !== activeJob.id) : [...s, activeJob.id])}
              onApply={() => setApplied(a => a.includes(activeJob.id) ? a : [...a, activeJob.id])} />
          </div>
        )}
      </div>
      {filterOpen && <CandFilterModal onClose={() => setFilterOpen(false)} onApply={() => setFilterOpen(false)} kind="job" />}
    </div>
  );
}

// ── Profile Applicant ─────────────────────────────────────────────────────
function ProfileSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${PC.border}`, marginBottom: 16, overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: '#fff', border: 'none', cursor: 'pointer' }}>
        <span style={{ fontSize: 17, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat' }}>{title}</span>
        <span style={{ fontSize: 13, color: PC.gray, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▼</span>
      </button>
      {open && <div style={{ padding: '0 24px 24px' }}>{children}</div>}
    </div>
  );
}
const TagRow = ({ items, color = 'blue' }) => {
  const map = { blue: [PC.lightBlue, PC.blue], green: ['#E7F6EC', PC.green] };
  const [bg, fg] = map[color];
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{items.map((t, i) => <span key={i} style={{ fontSize: 12.5, fontWeight: 600, color: fg, background: bg, padding: '6px 14px', borderRadius: 16, fontFamily: 'Montserrat' }}>{t}</span>)}</div>;
};
const PRow = ({ label, value }) => (
  <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
    <span style={{ width: 130, fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', flexShrink: 0 }}>{label}</span>
    <span style={{ fontSize: 14, fontWeight: 500, color: PC.dark, fontFamily: 'Montserrat' }}>: {value}</span>
  </div>
);
const ExpItem = ({ title, company, period, ach, desc }) => (
  <div style={{ marginBottom: 18 }}>
    <div style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 8 }}>{title}</div>
    <div style={{ display: 'flex', gap: 18, marginBottom: 8, flexWrap: 'wrap' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}>🏢 {company}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}>🕐 {period}</span>
      {ach && <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}>🏁 {ach}</span>}
    </div>
    {desc && <p style={{ fontSize: 13.5, color: '#42505F', fontFamily: 'Montserrat', lineHeight: 1.6, margin: '0 0 6px' }}>{desc}</p>}
    <span style={{ fontSize: 13, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat', cursor: 'pointer' }}>Lihat selengkapnya</span>
  </div>
);

function CandProfileV2() {
  const mobile = useMobile(820);
  return (
    <div style={{ maxWidth: 920 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
        <h1 style={{ fontSize: mobile ? 24 : 30, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: 0 }}>Profile Applicant</h1>
      </div>
      {/* Header banner */}
      <div style={{ background: '#fff', borderRadius: 14, border: `1px solid ${PC.border}`, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ height: 110, background: 'linear-gradient(90deg, #2563EB 0%, #7C3AED 100%)' }} />
        <div style={{ padding: '0 24px 22px', marginTop: -44 }}>
          <img src="assets/home_av_h1.png" alt="" style={{ width: 88, height: 88, borderRadius: '50%', border: '4px solid #fff', objectFit: 'cover', display: 'block', marginBottom: 12 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat' }}>Altair Ibn La-Ahad</span>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: '#E23744', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 2.6l.8 1.7 1.8.2-1.4 1.2.4 1.8-1.6-1-1.6 1 .4-1.8L4 4.5l1.8-.2z" fill="#fff" /></svg></span>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: PC.orange, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2l3 1.4v3c0 2-1.4 3.4-3 4-1.6-.6-3-2-3-4v-3z" stroke="#fff" strokeWidth="1.1" strokeLinejoin="round" /></svg></span>
          </div>
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat' }}>
            <span>📞 +62 812 4567 890</span><span>✉️ altair.ibn@gmail.com</span>
          </div>
        </div>
      </div>

      <ProfileSection title="Job Applied">
        {[['Graphic Designer', 'Last Update on 20 March 2025', 'Reviewed', true], ['Graphic Designer', 'Last Update on 20 March 2025', 'Open Submission', false]].map(([role, upd, status, reviewed], i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i === 0 ? `1px solid ${PC.bg}` : 'none' }}>
            <div><div style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{role}</div><div style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat', marginTop: 2 }}>{upd}</div></div>
            {reviewed ? <span style={{ fontSize: 14, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat' }}>{status} ›</span> : <PCButton variant="secondary" size="sm">{status}</PCButton>}
          </div>
        ))}
      </ProfileSection>

      <ProfileSection title="Personal Details">
        <PRow label="Date of Birth" value="23 September 2024" />
        <PRow label="Gender" value="Male" />
        <PRow label="Address" value="Jl Tebet Timur Dalam XXX No 88, East Tebet, South Jakarta" />
        <PRow label="City" value="DKI Jakarta" />
        <PRow label="Postal Code" value="12450" />
      </ProfileSection>

      <ProfileSection title="Resume">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div><div style={{ fontSize: 15, fontWeight: 600, color: PC.dark, fontFamily: 'Montserrat' }}>📄 altair_resume.pdf</div><div style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat', marginTop: 4 }}>Last Update on 20 March 2025</div></div>
          <span style={{ fontSize: 14, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat', cursor: 'pointer' }}>Download</span>
        </div>
      </ProfileSection>

      <ProfileSection title="Career History">
        <ExpItem title="Job Title Name" company="Company Name" period="00 Years 00 Months" ach="00 Achievements" desc="Lead a team of 20 Product Designers including 6 Design Partners across two main product domains: Supply (B2B), and Demand (B2C). Plan the quarterly roadmap with Product Managers and Design Supervisors." />
        <ExpItem title="Job Title Name" company="Company Name" period="00 Years 00 Months" ach="00 Achievements" desc="Lead a team of 20 Product Designers including 6 Design Partners across two main product domains: Supply (B2B), and Demand (B2C). Plan the quarterly roadmap with Product Managers and Design Supervisors." />
      </ProfileSection>

      <ProfileSection title="Education History">
        <ExpItem title="Bachelor of Name" company="University Name" period="00 Years 00 Months" />
      </ProfileSection>

      <ProfileSection title="Licences / Certifications">
        <ExpItem title="Licence of Name" company="Company Name" period="00 Years 00 Months" desc="Lead a team of 20 Product Designers including 6 Design Partners across two main product domains: Supply (B2B), and Demand (B2C)." />
        <ExpItem title="Licence of Name" company="Company Name" period="00 Years 00 Months" desc="Lead a team of 20 Product Designers including 6 Design Partners across two main product domains: Supply (B2B), and Demand (B2C)." />
      </ProfileSection>

      <ProfileSection title="Skills & Languages">
        <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>List of Skills</div>
        <TagRow items={Array(8).fill('User Experience')} />
        <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '16px 0 10px' }}>List of Languages</div>
        <TagRow items={['Bahasa', 'User Experience', 'English', 'Melayu']} />
      </ProfileSection>

      <ProfileSection title="Work Preferences">
        <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 8px' }}>Availability</div>
        <div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 14 }}>🕐 00 Months</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 8px' }}>Employment type</div>
        <div style={{ marginBottom: 14 }}><TagRow items={['Full-Time', 'Contract', 'Part-Time']} /></div>
        <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 8px' }}>Working Arrangement Preference</div>
        <TagRow items={['On-Site', 'Remote']} />
      </ProfileSection>

      <ProfileSection title="Right to Work">
        <div style={{ marginBottom: 12 }}><div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>Indonesia</div><div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat' }}>🪪 Visa ************</div></div>
        <div><div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>Singapore</div><div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat' }}>🪪 Visa ************</div></div>
      </ProfileSection>

      <ProfileSection title="Interests"><TagRow items={Array(8).fill('User Experience')} /></ProfileSection>

      <ProfileSection title="Salary Expectation">
        <div style={{ marginBottom: 12 }}><div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>Indonesia</div><div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat' }}>💵 IDR 10.000.000 - 15.000.000</div></div>
        <div><div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>Singapore</div><div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat' }}>💵 SGD 2,000 - 4,000</div></div>
      </ProfileSection>

      <ProfileSection title="Skill Passport (MRA-TP Standard)">
        {[['Full_Certification_Number', 'document_full_name', true], ['Full_Certification_Number', 'document_full_name', false]].map(([num, doc, ver], i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>{num}</div>
            <div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 5 }}>📄 {doc}</div>
            {ver ? <span style={{ fontSize: 12.5, fontWeight: 600, color: PC.green, fontFamily: 'Montserrat' }}>✓ Verified</span> : <span style={{ fontSize: 12.5, fontWeight: 600, color: PC.medGray, fontFamily: 'Montserrat' }}>○ Unverified</span>}
          </div>
        ))}
      </ProfileSection>
    </div>
  );
}

Object.assign(window, { CandFindJobs, CandProfileV2 });
