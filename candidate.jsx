
// ProConnect — Candidate Dashboard

const JOBS_LIST = [
  { id:1, title:'Operation Training Manager - (F&B)', company:'Startup Colorbox', location:'Jakarta Selatan', salary:'IDR 9.000.000 - IDR 13.000.000 per month', type:'Full-Time', mode:'Onsite', posted:'2 days ago', match:30, status:'open', saved:false },
  { id:2, title:'Manager Operational Hospitality', company:'Bali Resort Group', location:'Bali', salary:'IDR 12.000.000 - IDR 18.000.000 per month', type:'Full-Time', mode:'Hybrid', posted:'3 days ago', match:85, status:'open', saved:true },
  { id:3, title:'Front Office Supervisor', company:'Marina Bay Hotel', location:'DKI Jakarta', salary:'IDR 6.000.000 - IDR 9.000.000 per month', type:'Full-Time', mode:'Onsite', posted:'1 week ago', match:92, status:'open', saved:false },
  { id:4, title:'Housekeeping Manager', company:'ASEAN Hospitality Group', location:'Remote', salary:'IDR 8.000.000 - IDR 11.000.000 per month', type:'Full-Time', mode:'Remote', posted:'1 month ago', match:74, status:'closed', saved:true },
  { id:5, title:'Sales & Marketing Executive', company:'Grand Mercure ASEAN', location:'Singapore', salary:'SGD 3,500 - SGD 5,500 per month', type:'Full-Time', mode:'Hybrid', posted:'5 days ago', match:68, status:'open', saved:false },
];

const PROFILE_STEPS = [
  { label:'Career History', done:true },
  { label:'Personal Details', done:true },
  { label:'Education History', done:true },
  { label:'Licenses / Certification', done:true },
  { label:'Skills & Languages', done:true },
  { label:'Work Preferences', done:true },
  { label:'Right to Work', done:true },
  { label:'Interest', done:true },
  { label:'Salary Expectations', done:true },
  { label:'Skill Passport (MRA-TP Standard)', done:false },
];

// ── Candidate Dashboard Home ───────────────────────────────────────────────
const candCheck = <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8.4" stroke={PC.blue} strokeWidth="1.4" /><path d="M6.3 10l2.4 2.4L13.8 7" stroke={PC.blue} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const candPencil = <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 14.2l8-8 2 2-8 8H4v-2z" stroke={PC.blue} strokeWidth="1.4" strokeLinejoin="round" /><path d="M11.4 6.6l2 2" stroke={PC.blue} strokeWidth="1.4" /></svg>;

function CandDashboard({ onNav }) {
  const mobile = useMobile(900);
  const [showBanner, setShowBanner] = React.useState(true);
  const [showPromo, setShowPromo] = React.useState(true);
  const done = PROFILE_STEPS.filter(s => s.done).length;

  const actions = [
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="9.5" cy="9.5" r="6" stroke={PC.dark} strokeWidth="1.6" /><path d="M14 14l4 4" stroke={PC.dark} strokeWidth="1.6" strokeLinecap="round" /></svg>, title: 'Find Jobs', desc: 'Directly Find the Ideal Jobs for Your Career', cta: 'Find Now', nav: 'Jobs' },
  { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="7" r="3.2" stroke={PC.dark} strokeWidth="1.6" /><path d="M5 18c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke={PC.dark} strokeWidth="1.6" strokeLinecap="round" /></svg>, title: 'Manage Profile', desc: 'View and Manage Your Profile Details', cta: 'Manage Now', nav: 'Profile' }];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1080 }}>
      <div>
        <h1 style={{ fontSize: mobile ? 24 : 28, fontWeight: 800, fontFamily: 'Montserrat', color: PC.dark, margin: 0 }}>Hello Arufa</h1>
        <p style={{ fontSize: 15, fontWeight: 400, color: PC.gray, fontFamily: 'Montserrat', margin: '6px 0 0' }}>Get Started Finding Jobs Here!</p>
      </div>

      {/* Search bar */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', left: 18 }}><circle cx="8" cy="8" r="6" stroke={PC.gray} strokeWidth="1.5" /><line x1="12.5" y1="12.5" x2="16" y2="16" stroke={PC.gray} strokeWidth="1.5" strokeLinecap="round" /></svg>
        <input placeholder="Find jobs & companies here" onKeyDown={e => e.key === 'Enter' && onNav('Jobs')}
          style={{ width: '100%', height: 52, borderRadius: 12, border: `1px solid ${PC.border}`, padding: '0 18px 0 46px', fontSize: 14.5, fontFamily: 'Montserrat', outline: 'none', boxSizing: 'border-box', background: '#fff' }} />
      </div>

      {/* Purple promo banner */}
      {showBanner &&
      <div style={{ background: 'linear-gradient(180deg, #5C5CE0 0%, #4F46E5 100%)', borderRadius: 14, padding: mobile ? '20px' : '22px 26px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', marginBottom: 12 }}>Profile Completion</div>
            <button onClick={() => onNav('Profile')} style={{ background: '#fff', color: '#4F46E5', border: 'none', borderRadius: 8, padding: '11px 20px', fontSize: 14, fontWeight: 700, fontFamily: 'Montserrat', cursor: 'pointer' }}>Complete Profile</button>
          </div>
          <button onClick={() => setShowBanner(false)} aria-label="Dismiss" style={{ background: 'rgba(255,255,255,0.25)', border: 'none', borderRadius: '50%', width: 30, height: 30, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, alignSelf: 'flex-start' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>
      }

      {/* Profile Completion card */}
      <div style={{ background: '#fff', borderRadius: 14, padding: mobile ? 20 : 26, border: `1px solid ${PC.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 5px' }}>Profile Completion</h2>
            <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', margin: 0 }}>{done} of {PROFILE_STEPS.length} steps completed</p>
          </div>
          <PCButton variant="secondary" size="md" onClick={() => onNav('Profile')}>Edit</PCButton>
        </div>
        <div style={{ borderTop: `1px solid ${PC.bg}`, paddingTop: 20, display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4,1fr)', gap: 14 }}>
          {PROFILE_STEPS.map(s =>
          <div key={s.label} onClick={() => onNav('Profile')} style={{ background: s.done ? PC.lightBlue : '#fff', border: s.done ? '1px solid transparent' : `1.5px solid ${PC.blue}`, borderRadius: 10, padding: '15px 16px', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
              <span style={{ flexShrink: 0, display: 'flex' }}>{s.done ? candCheck : candPencil}</span>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat', lineHeight: 1.3 }}>{s.label}</span>
            </div>
          )}
        </div>
      </div>

      {/* Promo banner */}
      {showPromo &&
      <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', background: 'linear-gradient(110deg, #1560BD 0%, #0C3D7E 100%)', padding: mobile ? '28px 22px' : '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <h3 style={{ fontSize: mobile ? 19 : 23, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 8px' }}>Unlock Cross-Border Jobs</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', fontFamily: 'Montserrat', margin: 0, maxWidth: 440 }}>Verify your Skill Passport to apply for verified hospitality roles across all 10 ASEAN countries.</p>
          </div>
          {!mobile && <PCButton variant="light" size="lg" onClick={() => onNav('Profile')} style={{ background: '#fff', color: PC.blue, border: 'none', flexShrink: 0 }}>Verify Now</PCButton>}
          <button onClick={() => setShowPromo(false)} aria-label="Dismiss" style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(255,255,255,0.25)', border: 'none', borderRadius: '50%', width: 30, height: 30, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>
      }

      {/* Action cards */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 18 }}>
        {actions.map(a =>
        <div key={a.title} style={{ background: '#fff', borderRadius: 14, border: `1px solid ${PC.border}`, padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ flexShrink: 0 }}>{a.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15.5, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 3 }}>{a.title}</div>
              <div style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.4 }}>{a.desc}</div>
            </div>
            <PCButton variant="secondary" size="md" onClick={() => onNav(a.nav)} style={{ flexShrink: 0 }}>{a.cta}</PCButton>
          </div>
        )}
      </div>
    </div>);

}

// ── Jobs Browser ───────────────────────────────────────────────────────────
function CandJobs() {
  const [jobs, setJobs] = React.useState(JOBS_LIST);
  const [selected, setSelected] = React.useState(JOBS_LIST[0]);
  const [search, setSearch] = React.useState('');
  const [showFilter, setShowFilter] = React.useState(false);
  const [filter, setFilter] = React.useState({ type:'', mode:'' });
  const [applied, setApplied] = React.useState([]);
  const [tab, setTab] = React.useState('Jobs');

  const toggleSave = id => setJobs(prev => prev.map(j => j.id===id ? {...j,saved:!j.saved} : j));
  const applyJob = id => setApplied(prev => prev.includes(id) ? prev : [...prev, id]);

  const visible = (() => {
    let list = jobs;
    if (tab === 'Saved Jobs') list = list.filter(j=>j.saved);
    if (tab === 'Applied Jobs') list = list.filter(j=>applied.includes(j.id));
    if (search) list = list.filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()));
    if (filter.type) list = list.filter(j => j.type === filter.type);
    if (filter.mode) list = list.filter(j => j.mode === filter.mode);
    return list;
  })();

  const matchColor = m => m >= 85 ? PC.green : m >= 70 ? PC.blue : PC.orange;
  const jobDesc = `Menyelesaikan tugas-tugas yang diberikan meliputi pekerjaan redaksi, sales, dan divisi lainnya, khususnya terkait desain grafis. Mengimplementasikan setiap brief desain menjadi visual dengan standar kualitas yang ditetapkan. Menghasilkan desain dengan kreativitas original masing-masing talenta. Menyelesaikan pekerjaan dengan tepat waktu sesuai deadline yang ditentukan.`;

  return (
    <div style={{ display:'flex', gap:0, height:'calc(100vh - 120px)', overflow:'hidden', marginTop:-8 }}>
      {/* Left panel */}
      <div style={{ width:368, display:'flex', flexDirection:'column', borderRight:`1px solid ${PC.border}`, background:'#fff', flexShrink:0 }}>
        <div style={{ padding:'16px 16px 0' }}>
          <h2 style={{ fontSize:18, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 14px' }}>Find Jobs</h2>
          <div style={{ position:'relative', display:'flex', gap:8, marginBottom:10 }}>
            <div style={{ flex:1, position:'relative' }}>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ position:'absolute', left:10, top:13, pointerEvents:'none' }}><circle cx="6.5" cy="6.5" r="5" stroke={PC.gray} strokeWidth="1.4"/><line x1="10.5" y1="10.5" x2="13.5" y2="13.5" stroke={PC.gray} strokeWidth="1.4" strokeLinecap="round"/></svg>
              <input placeholder="Search job here..." value={search} onChange={e=>setSearch(e.target.value)}
                style={{ width:'100%', height:40, borderRadius:8, border:`1.5px solid ${PC.border}`, paddingLeft:32, paddingRight:12, fontSize:13, fontFamily:'Montserrat', outline:'none', boxSizing:'border-box' }} />
            </div>
            <button onClick={()=>setShowFilter(!showFilter)} style={{
              height:40, padding:'0 14px', borderRadius:8, border:`1.5px solid ${showFilter?PC.blue:PC.border}`,
              background:showFilter?PC.lightBlue:'#fff', cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'Montserrat',
              color:showFilter?PC.blue:PC.gray, display:'flex', alignItems:'center', gap:5, flexShrink:0,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 3h12M3 7h8M5 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Filter
            </button>
          </div>

          {/* Filter panel */}
          {showFilter && (
            <div style={{ background:PC.bg, borderRadius:10, padding:'14px', marginBottom:10, border:`1px solid ${PC.border}` }}>
              <div style={{ fontSize:14, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, marginBottom:10 }}>Filter</div>
              <div style={{ marginBottom:10 }}>
                <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat', marginBottom:6, fontWeight:600 }}>Employment Status</div>
                <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                  {['Full-Time','Part-Time','Contract'].map(t=>(
                    <button key={t} onClick={()=>setFilter(f=>({...f,type:f.type===t?'':t}))}
                      style={{ padding:'5px 12px', borderRadius:6, border:`1px solid ${filter.type===t?PC.blue:PC.border}`, background:filter.type===t?PC.lightBlue:'#fff', fontSize:12, fontFamily:'Montserrat', fontWeight:600, color:filter.type===t?PC.blue:PC.dark, cursor:'pointer' }}>{t}</button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat', marginBottom:6, fontWeight:600 }}>Work Arrangement</div>
                <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
                  {['Onsite','Hybrid','Remote'].map(m=>(
                    <button key={m} onClick={()=>setFilter(f=>({...f,mode:f.mode===m?'':m}))}
                      style={{ padding:'5px 12px', borderRadius:6, border:`1px solid ${filter.mode===m?PC.blue:PC.border}`, background:filter.mode===m?PC.lightBlue:'#fff', fontSize:12, fontFamily:'Montserrat', fontWeight:600, color:filter.mode===m?PC.blue:PC.dark, cursor:'pointer' }}>{m}</button>
                  ))}
                </div>
              </div>
              <div style={{ display:'flex', gap:8, marginTop:12 }}>
                <PCButton variant="light" size="sm" onClick={()=>setFilter({type:'',mode:''})}>Clear</PCButton>
                <PCButton variant="primary" size="sm" onClick={()=>setShowFilter(false)}>Apply Filter</PCButton>
              </div>
            </div>
          )}

          {/* Sub-tabs */}
          <div style={{ display:'flex', gap:4, marginBottom:4 }}>
            {['Jobs','Saved Jobs','Applied Jobs'].map(t=>(
              <button key={t} onClick={()=>setTab(t)} style={{
                flex:1, padding:'7px 4px', borderRadius:6, border:'none', cursor:'pointer', fontFamily:'Montserrat', fontSize:11, fontWeight:600,
                background:tab===t?PC.blue:PC.bg, color:tab===t?'#fff':PC.gray, transition:'all 0.15s',
              }}>{t}</button>
            ))}
          </div>
        </div>

        <div style={{ flex:1, overflowY:'auto', padding:'6px 8px' }}>
          {visible.length === 0 ? (
            <div style={{ padding:'32px 16px', textAlign:'center', color:PC.medGray, fontFamily:'Montserrat', fontSize:13 }}>No jobs found</div>
          ) : visible.map(j => (
            <div key={j.id} onClick={()=>setSelected(j)} style={{
              padding:'14px', borderRadius:10, marginBottom:4, cursor:'pointer',
              background:selected?.id===j.id?PC.lightBlue:'transparent',
              border:`1px solid ${selected?.id===j.id?PC.blue:'transparent'}`,
            }}>
              <div style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
                <PCAvatar name={j.company} size={40} />
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:8, marginBottom:4 }}>
                    <span style={{ fontSize:13, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, lineHeight:1.35 }}>{j.title}</span>
                    <button onClick={e=>{e.stopPropagation();toggleSave(j.id);}} style={{ background:'none', border:'none', cursor:'pointer', color:j.saved?PC.orange:PC.medGray, padding:0, fontSize:16, flexShrink:0 }}>
                      {j.saved ? '★' : '☆'}
                    </button>
                  </div>
                  <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat', marginBottom:6 }}>{j.company} · {j.location}</div>
                  <div style={{ fontSize:11, color:PC.gray, fontFamily:'Montserrat', marginBottom:8 }}>{j.salary}</div>
                  <div style={{ display:'flex', alignItems:'center', gap:6, flexWrap:'wrap' }}>
                    <PCTag color="navy">{j.mode}</PCTag>
                    <PCTag color="blue">{j.type}</PCTag>
                    {j.status==='closed' && <PCTag color="gray">Closed</PCTag>}
                    {j.match && <span style={{ fontSize:11, fontWeight:700, color:matchColor(j.match), fontFamily:'Montserrat', marginLeft:'auto' }}>{j.match}% match</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job detail */}
      {selected && (
        <div style={{ flex:1, overflowY:'auto', padding:'24px 28px', background:PC.bg }}>
          <div style={{ display:'flex', alignItems:'flex-start', gap:16, marginBottom:22 }}>
            <PCAvatar name={selected.company} size={56} />
            <div style={{ flex:1 }}>
              <h2 style={{ fontSize:22, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 6px' }}>{selected.title}</h2>
              <div style={{ fontSize:15, color:PC.gray, fontFamily:'Montserrat', marginBottom:10 }}>{selected.company} · {selected.location}</div>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                <PCTag color="navy">{selected.mode}</PCTag>
                <PCTag color="blue">{selected.type}</PCTag>
                {selected.status==='closed' && <PCTag color="gray">Closed</PCTag>}
                {selected.match && <PCTag color={selected.match>=80?'green':'blue'}>{selected.match}% Skill Match</PCTag>}
                <span style={{ fontSize:13, color:PC.medGray, fontFamily:'Montserrat', alignSelf:'center' }}>{selected.posted}</span>
              </div>
            </div>
            <div style={{ display:'flex', gap:10, flexShrink:0 }}>
              <button onClick={()=>toggleSave(selected.id)} style={{
                width:40, height:40, borderRadius:8, border:`1.5px solid ${selected.saved?PC.orange:PC.border}`,
                background:selected.saved?'#FFF0E4':'#fff', cursor:'pointer', fontSize:18,
                color:selected.saved?PC.orange:PC.medGray, display:'flex', alignItems:'center', justifyContent:'center',
              }}>{selected.saved?'★':'☆'}</button>
              {selected.status !== 'closed'
                ? <PCButton variant={applied.includes(selected.id)?'light':'primary'} size="lg"
                    onClick={()=>applyJob(selected.id)}
                    disabled={applied.includes(selected.id)}
                  >{applied.includes(selected.id)?'✓ Applied':'Apply Now'}</PCButton>
                : <PCButton variant="light" size="lg" disabled>Job Closed</PCButton>
              }
            </div>
          </div>

          {/* Job info */}
          <div style={{ background:'#fff', borderRadius:12, padding:'24px', border:`1px solid ${PC.border}`, marginBottom:16 }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, paddingBottom:20, marginBottom:20, borderBottom:`1px solid ${PC.bg}` }}>
              {[['Salary',selected.salary],['Employment',selected.type],['Work Mode',selected.mode]].map(([k,v])=>(
                <div key={k}>
                  <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat', marginBottom:4 }}>{k}</div>
                  <div style={{ fontSize:14, fontWeight:600, fontFamily:'Montserrat', color:PC.dark }}>{v}</div>
                </div>
              ))}
            </div>
            <h3 style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 10px' }}>Job Description</h3>
            <div style={{ marginBottom:20 }}>
              <div style={{ fontSize:15, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, marginBottom:6 }}>Ringkasan pekerjaan:</div>
              <p style={{ fontSize:14, color:PC.gray, fontFamily:'Montserrat', lineHeight:1.75, margin:0 }}>{jobDesc}</p>
            </div>
            <h3 style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 10px' }}>Right to Work</h3>
            <p style={{ fontSize:14, color:PC.gray, fontFamily:'Montserrat', lineHeight:1.75, margin:'0 0 16px' }}>Indonesia - Require Indonesian Sponsorship or A Job Offer to Work for A New Employer</p>
            <h3 style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 10px' }}>Location</h3>
            <p style={{ fontSize:14, color:PC.gray, fontFamily:'Montserrat', lineHeight:1.75, margin:'0 0 16px' }}>20-22 National Circuit, Entrance via, Fitzroy St, Jakarta, Indonesia</p>
            <h3 style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 12px' }}>Required Skills</h3>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {['Hospitality Management','F&B Operations','Team Leadership','Customer Service','POS Systems'].map(s=>(
                <span key={s} style={{ padding:'5px 12px', borderRadius:6, background:PC.lightBlue, color:PC.blue, fontSize:13, fontWeight:600, fontFamily:'Montserrat' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Company card */}
          <div style={{ background:'#fff', borderRadius:12, padding:'20px 24px', border:`1px solid ${PC.border}`, display:'flex', alignItems:'center', gap:16 }}>
            <PCAvatar name={selected.company} size={52} />
            <div style={{ flex:1 }}>
              <div style={{ fontSize:16, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, marginBottom:4 }}>{selected.company}</div>
              <div style={{ fontSize:13, color:PC.gray, fontFamily:'Montserrat' }}>Hospitality & Tourism · 500+ employees · {selected.location}</div>
            </div>
            <PCButton variant="secondary" size="md">View Company</PCButton>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Candidate Profile ──────────────────────────────────────────────────────
function CandProfile() {
  const [editSection, setEditSection] = React.useState(null);
  const sections = [
    { title:'Personal Details', icon:'👤', fields:[['Full Name','Altair Ibn La-Ahad'],['Date of Birth','23 September 1995'],['Gender','Male'],['Email','me@fullemailaddress.com'],['Phone','081291028392'],['City','DKI Jakarta'],['Postal Code','12450'],['Address','Jl Tebet Timur Dalam XXX No 88, East Tebet, South Jakarta']] },
    { title:'Career History', icon:'💼', fields:[['Job Title','Job Title Name'],['Duration','3 Years 2 Months'],['Description','Lead a team of 20 Product Designers including 6 Design Partners across two main product domains: Supply (B2B), and Demand (B2C).']] },
    { title:'Education History', icon:'🎓', fields:[['Degree','Bachelor of Name'],['University','University Name'],['Duration','4 Years 0 Months']] },
    { title:'Licenses / Certifications', icon:'🏅', fields:[['Certification','Licence of Name'],['Issuer','Issuing Organization'],['Year','2023']] },
    { title:'Skills & Languages', icon:'⚡', fields:[['Skills','Communication, Hospitality Management, MS Office'],['Languages','English (Fluent), Bahasa Indonesia (Native), Mandarin (Basic)']] },
    { title:'Work Preferences', icon:'🎯', fields:[['Availability','00 Months'],['Employment Type','Full-Time'],['Work Arrangement','Hybrid / Remote']] },
    { title:'Right to Work', icon:'🛂', fields:[['Countries','Indonesia, Singapore, Malaysia']] },
    { title:'Salary Expectations', icon:'💰', fields:[['Min Salary','IDR 8,000,000 / month'],['Currency','IDR'],['Negotiable','Yes']] },
  ];

  const done = PROFILE_STEPS.filter(s=>s.done).length;
  const pct = Math.round((done/PROFILE_STEPS.length)*100);

  return (
    <div style={{ display:'flex', gap:24, alignItems:'flex-start' }}>
      {/* Left col */}
      <div style={{ width:280, flexShrink:0 }}>
        <div style={{ background:'#fff', borderRadius:12, padding:'24px', border:`1px solid ${PC.border}`, marginBottom:16, textAlign:'center' }}>
          <div style={{ display:'flex', justifyContent:'center', marginBottom:12 }}>
            <div style={{ position:'relative' }}>
              <PCAvatar name="Altair Ibn La-Ahad" size={80} />
              <button style={{
                position:'absolute', bottom:0, right:0, width:26, height:26, borderRadius:'50%',
                background:PC.blue, border:'2px solid #fff', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 2L10 4L4 10H2V8L8 2Z" stroke="white" strokeWidth="1.2" fill="none"/></svg>
              </button>
            </div>
          </div>
          <div style={{ fontSize:16, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, marginBottom:3 }}>Altair Ibn La-Ahad</div>
          <div style={{ fontSize:13, color:PC.gray, fontFamily:'Montserrat', marginBottom:14 }}>Front Office Manager · DKI Jakarta</div>
          <div style={{ height:6, background:PC.border, borderRadius:3, marginBottom:8, overflow:'hidden' }}>
            <div style={{ height:6, background:PC.blue, borderRadius:3, width:`${pct}%` }} />
          </div>
          <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat', marginBottom:14 }}>{pct}% profile complete</div>
          <PCTag color="blue">📥 Resume uploaded</PCTag>
        </div>

        {/* Skill Passport */}
        <div style={{ background:PC.lightBlue, borderRadius:12, padding:'18px', border:`1.5px solid ${PC.blue}` }}>
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:6 }}>
            <span>🛂</span>
            <span style={{ fontSize:14, fontWeight:700, fontFamily:'Montserrat', color:PC.navy }}>Skill Passport</span>
            <PCTag color="orange">Pending</PCTag>
          </div>
          <div style={{ fontSize:12, color:PC.blue, fontFamily:'Montserrat', marginBottom:12 }}>MRA-TP Standard verification required to unlock cross-border job applications.</div>
          <PCButton variant="primary" size="sm" fullWidth>Complete Verification</PCButton>
        </div>
      </div>

      {/* Right col */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', gap:14 }}>
        {sections.map(sec=>(
          <div key={sec.title} style={{ background:'#fff', borderRadius:12, border:`1px solid ${PC.border}`, overflow:'hidden' }}>
            <div style={{
              display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'16px 20px', cursor:'pointer', borderBottom: editSection===sec.title ? `1px solid ${PC.border}` : 'none',
            }} onClick={()=>setEditSection(editSection===sec.title?null:sec.title)}>
              <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ fontSize:18 }}>{sec.icon}</span>
                <span style={{ fontSize:15, fontWeight:700, fontFamily:'Montserrat', color:PC.dark }}>{sec.title}</span>
                <PCTag color="green">Complete</PCTag>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:8 }}>
                <PCButton variant="ghost" size="sm" onClick={e=>{e.stopPropagation();setEditSection(sec.title);}}>Edit</PCButton>
                <span style={{ fontSize:11, color:PC.medGray }}>{editSection===sec.title?'▲':'▼'}</span>
              </div>
            </div>
            {editSection===sec.title && (
              <div style={{ padding:'16px 20px', display:'flex', flexDirection:'column', gap:10 }}>
                {sec.fields.map(([k,v])=>(
                  <div key={k} style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
                    <span style={{ width:160, fontSize:14, color:PC.gray, fontFamily:'Montserrat', flexShrink:0 }}>{k}</span>
                    <span style={{ fontSize:14, fontWeight:500, color:PC.dark, fontFamily:'Montserrat', flex:1 }}>: {v}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Companies ──────────────────────────────────────────────────────────────
function CandCompanies() {
  const companies = [
    { name:'Bali Resort Group', industry:'Luxury Hospitality', location:'Bali, Indonesia', size:'500+ employees', jobs:12 },
    { name:'Marina Bay Hotel', industry:'Urban Hotel', location:'Singapore', size:'200-500 employees', jobs:7 },
    { name:'ASEAN Hospitality Group', industry:'Hotel Chain', location:'ASEAN-wide', size:'1000+ employees', jobs:23 },
    { name:'Grand Mercure ASEAN', industry:'International Hotel', location:'Multiple Cities', size:'1000+ employees', jobs:18 },
  ];
  return (
    <div>
      <h2 style={{ fontSize:22, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 20px' }}>Companies</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }}>
        {companies.map(c=>(
          <div key={c.name} style={{ background:'#fff', borderRadius:12, padding:'22px', border:`1px solid ${PC.border}`, display:'flex', gap:16, alignItems:'flex-start' }}>
            <PCAvatar name={c.name} size={52} />
            <div style={{ flex:1 }}>
              <div style={{ fontSize:16, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, marginBottom:4 }}>{c.name}</div>
              <div style={{ fontSize:13, color:PC.gray, fontFamily:'Montserrat', marginBottom:8 }}>{c.industry} · {c.location}</div>
              <div style={{ fontSize:12, color:PC.medGray, fontFamily:'Montserrat', marginBottom:12 }}>{c.size}</div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <PCTag color="blue">{c.jobs} open jobs</PCTag>
                <PCButton variant="secondary" size="sm">Follow</PCButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Candidate sidebar ──────────────────────────────────────────────────────
const CAND_AVATAR = 'assets/home_av_h1.png';
const cIcon = (p) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none">{p}</svg>;
const CAND_MENU = [
{ id: 'Dashboard', icon: cIcon(<><rect x="2.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" /><rect x="11.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" /><rect x="2.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" /><rect x="11.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" /></>) },
{ id: 'Companies', icon: cIcon(<><rect x="3" y="4" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M7 8h2M11 8h2M7 11h2M11 11h2M8 17v-3h4v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></>) },
{ id: 'Jobs', icon: cIcon(<><rect x="3" y="6" width="14" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.5" /><path d="M7 6V5a2 2 0 012-2h2a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.5" /></>), children: ['Jobs', 'Saved Jobs', 'Applied Jobs'] },
{ id: 'Support', icon: cIcon(<><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" /><path d="M8 8a2 2 0 113 1.7c-.6.4-1 .8-1 1.6M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>), children: ['Feedback', 'Term of Service', 'Privacy Policy'] },
{ id: 'Account Management', icon: cIcon(<><circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>), children: ['Reset Password', 'Sign Out'] }];

function CandSwitcher({ navigate }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const companies = [
  { id: 'colorbox', bg: '#F4A340', fg: '#1A1A2E', label: 'SC', name: 'Startup Colorbox', legal: 'PT AMBURAN JA... (Owner)' },
  { id: 'indah', bg: '#1E8E5A', fg: '#fff', label: 'IS', name: 'Indah Studio', legal: 'PT Indah Perti... (Member)' }];

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, border: `1px solid ${PC.border}`, background: '#fff', cursor: 'pointer' }}>
        <img src={CAND_AVATAR} alt="" style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
        <span style={{ flex: 1, textAlign: 'left', fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>Personal Account</span>
        <span style={{ fontSize: 11, color: PC.gray, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▼</span>
      </button>
      {open &&
      <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, zIndex: 80, background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 14, boxShadow: '0 18px 50px rgba(4,38,72,0.18)', padding: '6px 0' }}>
          <div style={{ padding: '8px 16px 6px', fontSize: 13, fontWeight: 600, color: PC.medGray, fontFamily: 'Montserrat' }}>Switch account</div>
          <div style={{ padding: '0 6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', borderRadius: 8, background: PC.lightBlue }}>
              <img src={CAND_AVATAR} alt="" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Arufa Dhiarma Putu...</div>
                <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat' }}>Personal Account (Candidate)</div>
              </div>
            </div>
            {companies.map(c =>
            <div key={c.id} onClick={() => { setOpen(false); navigate && navigate('employer'); }} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', borderRadius: 8, cursor: 'pointer' }}
            onMouseEnter={e => e.currentTarget.style.background = PC.bg} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: c.bg, color: c.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, fontFamily: 'Montserrat', flexShrink: 0 }}>{c.label}</div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.legal}</div>
                </div>
              </div>
            )}
          </div>
          <div style={{ height: 1, background: PC.border, margin: '6px 0' }} />
          <div onClick={() => { setOpen(false); navigate && navigate('register-employer'); }} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '12px 14px', cursor: 'pointer' }}
          onMouseEnter={e => e.currentTarget.style.background = PC.bg} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke={PC.blue} strokeWidth="2" strokeLinecap="round" /></svg>
            <span style={{ fontSize: 14, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat' }}>Create company account</span>
          </div>
        </div>
      }
    </div>);

}

function CandSidebar({ active, onNav }) {
  const [expanded, setExpanded] = React.useState([]);
  const toggle = (id) => setExpanded((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  return (
    <div style={{ width: 280, minHeight: '100vh', background: '#fff', borderRight: `1px solid ${PC.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <div style={{ padding: '16px 16px 8px' }}><CandSwitcher navigate={onNav.navigate} /></div>

      {/* Profile card */}
      <div style={{ margin: '8px 16px 4px', border: `1px solid ${PC.border}`, borderRadius: 12, padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
          <img src={CAND_AVATAR} alt="" style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'cover', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.3 }}>Arufa Dhiarma Putu Riordan Kevin Putra ...</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 7 }}>
              <span title="ASEAN verified" style={{ width: 22, height: 22, borderRadius: '50%', background: '#E23744', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="4.4" stroke="#fff" strokeWidth="1" /><path d="M6.5 2.6l.8 1.7 1.8.2-1.4 1.2.4 1.8-1.6-1-1.6 1 .4-1.8L4 4.5l1.8-.2z" fill="#fff" /></svg>
              </span>
              <span title="Skill verified" style={{ width: 22, height: 22, borderRadius: '50%', background: PC.orange, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M7 2l3 1.4v3c0 2-1.4 3.4-3 4-1.6-.6-3-2-3-4v-3z" stroke="#fff" strokeWidth="1.1" strokeLinejoin="round" /></svg>
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3.5" width="12" height="9" rx="1.4" stroke={PC.gray} strokeWidth="1.3" /><path d="M3 4.5l5 3.5 5-3.5" stroke={PC.gray} strokeWidth="1.3" /></svg>
          <span style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>me@fullemailaddress.com</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 4c0-.6.4-1 1-1h1.5c.4 0 .8.3.9.7l.6 2c.1.4 0 .8-.3 1l-1 .8a8 8 0 003.8 3.8l.8-1c.2-.3.6-.4 1-.3l2 .6c.4.1.7.5.7.9V13c0 .6-.4 1-1 1A11 11 0 013 4z" stroke={PC.gray} strokeWidth="1.3" strokeLinejoin="round" /></svg>
          <span style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat' }}>081291028392</span>
        </div>
        <PCButton variant="secondary" size="sm" fullWidth onClick={() => onNav('Profile')}>Profile</PCButton>
      </div>

      {/* Menu */}
      <div style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
        <div style={{ padding: '10px 20px 6px', fontSize: 11, fontWeight: 700, color: PC.medGray, fontFamily: 'Montserrat', letterSpacing: '0.6px' }}>Main Menu</div>
        {CAND_MENU.map((item) => {
          const act = active === item.id || (item.children || []).includes(active);
          const exp = expanded.includes(item.id);
          return (
            <div key={item.id}>
              <div onClick={() => item.children ? toggle(item.id) : onNav(item.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', margin: '2px 12px', borderRadius: 9, cursor: 'pointer', background: act && !item.children ? PC.lightBlue : 'transparent', color: act ? PC.blue : '#42505F' }}
              onMouseEnter={(e) => { if (!(act && !item.children)) e.currentTarget.style.background = PC.bg; }}
              onMouseLeave={(e) => { if (!(act && !item.children)) e.currentTarget.style.background = 'transparent'; }}>
                <span style={{ display: 'flex', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ flex: 1, fontSize: 14.5, fontWeight: act ? 700 : 600, fontFamily: 'Montserrat', color: act ? PC.blue : '#42505F' }}>{item.id}</span>
                {item.children && <span style={{ fontSize: 10, color: PC.gray }}>{exp ? '▲' : '▼'}</span>}
              </div>
              {item.children && exp && item.children.map((c) =>
              <div key={c} onClick={() => onNav(c)} style={{ display: 'flex', alignItems: 'center', padding: '9px 14px 9px 49px', margin: '1px 12px', borderRadius: 8, cursor: 'pointer', background: active === c ? PC.lightBlue : 'transparent' }}
              onMouseEnter={(e) => { if (active !== c) e.currentTarget.style.background = PC.bg; }} onMouseLeave={(e) => { if (active !== c) e.currentTarget.style.background = 'transparent'; }}>
                  <span style={{ fontSize: 13.5, fontWeight: active === c ? 700 : 500, fontFamily: 'Montserrat', color: active === c ? PC.blue : PC.gray }}>{c}</span>
                </div>
              )}
            </div>);

        })}
      </div>

      {/* Footer */}
      <div style={{ padding: '14px 16px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: PC.medGray, fontFamily: 'Montserrat' }}>ProConnect © 2026</div>
        <div style={{ fontSize: 11, color: PC.medGray, fontFamily: 'Montserrat', margin: '8px 0 6px' }}>Supported by</div>
        <img src="assets/aseanta_white.png" alt="ASEANTA" style={{ height: 30, display: 'block', margin: '0 auto', filter: 'invert(1) brightness(0.5)' }} />
      </div>
    </div>);

}

function CandTopbar({ onMenu }) {
  return (
    <div style={{ height: 72, background: '#fff', borderBottom: `1px solid ${PC.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <button onClick={onMenu} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, display: 'flex' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke={PC.blue} strokeWidth="2" strokeLinecap="round" /></svg>
        </button>
        <PCLogo height={24} />
      </div>
      <button aria-label="Notifications" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, position: 'relative' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3a6 6 0 016 6c0 7 3 8 3 8H3s3-1 3-8a6 6 0 016-6zM9.5 20a2.5 2.5 0 005 0" stroke="#1A2B45" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span style={{ position: 'absolute', top: -4, right: -6, background: REG.err, color: '#fff', fontSize: 10, fontWeight: 700, fontFamily: 'Montserrat', borderRadius: 10, padding: '1px 5px', minWidth: 16, textAlign: 'center' }}>999</span>
      </button>
    </div>);

}

// ── Candidate Dashboard root ───────────────────────────────────────────────
function CandidateDashboard({ onHome, navigate }) {
  const [active, setActive] = React.useState('Dashboard');
  const nav = (p) => {
    if (p === 'Sign Out') { onHome(); return; }
    if (p === 'Term of Service') { navigate && navigate('tos'); return; }
    if (p === 'Privacy Policy') { navigate && navigate('privacy'); return; }
    if (p !== 'Companies') setCompanyView(null);
    setActive(p);
  };
  nav.navigate = navigate;

  const [companyView, setCompanyView] = React.useState(null);
  const renderContent = () => {
    if (active === 'Dashboard') return <CandDashboard onNav={nav} />;
    if (active === 'Jobs') return <CandFindJobs mode="all" />;
    if (active === 'Saved Jobs') return <CandFindJobs mode="saved" />;
    if (active === 'Applied Jobs') return <CandFindJobs mode="applied" />;
    if (active === 'Profile') return <CandProfileV2 />;
    if (active === 'Companies') return companyView
      ? <CandCompanyDetail company={companyView} onBack={() => setCompanyView(null)} onOpenJob={() => { setCompanyView(null); nav('Jobs'); }} />
      : <CandCompaniesV2 onOpenCompany={c => { setCompanyView(c); window.scrollTo(0, 0); }} />;
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <div style={{ textAlign: 'center', padding: 48 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Montserrat', color: PC.dark, margin: '0 0 8px' }}>{active}</h3>
          <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat' }}>This section is under construction</p>
        </div>
      </div>);

  };

  const isFullbleed = false;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: PC.bg }}>
      <CandSidebar active={active} onNav={nav} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <CandTopbar onMenu={() => {}} />
        <div style={{ flex: 1, padding: isFullbleed ? '16px 0 0 0' : 0, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {isFullbleed ?
          <>
                <div style={{ padding: '0 28px', flex: 1 }}>{renderContent()}</div>
                <HPFooter navigate={navigate || onHome} />
              </> :

          <>
                <div style={{ padding: '28px', flex: 1 }}>{renderContent()}</div>
                <HPFooter navigate={navigate || onHome} />
              </>}
        </div>
      </div>
    </div>);

}

Object.assign(window, { CandidateDashboard });
