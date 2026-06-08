
// ProConnect — Employer Dashboard

const JOBS_DATA = [
  { id:1, title:'Operation Training Manager - (F&B)', salary:'IDR 9.000.000 - IDR 13.000.000 per month', status:'published', type:'Full-Time', mode:'Onsite', posted:'2 days ago', applicants:24, branch:'Headquarters', dept:'Food & Beverage', location:'Jakarta, Indonesia' },
  { id:2, title:'Manager Operational Hospitality', salary:'IDR 12.000.000 - IDR 18.000.000 per month', status:'published', type:'Full-Time', mode:'Hybrid', posted:'5 days ago', applicants:17, branch:'Headquarters', dept:'Operations', location:'Jakarta Selatan' },
  { id:3, title:'Front Office Supervisor', salary:'IDR 6.000.000 - IDR 9.000.000 per month', status:'draft', type:'Full-Time', mode:'Onsite', posted:'1 day ago', applicants:0, branch:'Branch - Bali', dept:'Front Office', location:'Bali, Indonesia' },
  { id:4, title:'Food & Beverage Attendant', salary:'IDR 4.000.000 - IDR 6.500.000 per month', status:'closed', type:'Part-Time', mode:'Onsite', posted:'1 month ago', applicants:56, branch:'Headquarters', dept:'Food & Beverage', location:'Jakarta, Indonesia' },
  { id:5, title:'Housekeeping Manager', salary:'IDR 8.000.000 - IDR 11.000.000 per month', status:'draft', type:'Full-Time', mode:'Onsite', posted:'3 days ago', applicants:0, branch:'Branch - Surabaya', dept:'Housekeeping', location:'Surabaya, Indonesia' },
];

const CANDIDATES_DATA = [
  { id:1, name:'Altair Ibn La-Ahad', role:'Front Office Manager', location:'DKI Jakarta', skills:['Communication','Hospitality','MS Office'], match:92, status:'Reviewing', applied:'2 days ago' },
  { id:2, name:'Bambang Setiawan', role:'F&B Supervisor', location:'Bali', skills:['F&B Operations','Inventory','POS Systems'], match:85, status:'Shortlisted', applied:'4 days ago' },
  { id:3, name:'Clara Dewi Puspita', role:'Housekeeping Supervisor', location:'Surabaya', skills:['Room Inspection','Team Management'], match:78, status:'New', applied:'1 day ago' },
  { id:4, name:'David Lim Wei', role:'Hotel Management', location:'DKI Jakarta', skills:['Revenue Management','OTA','OPERA PMS'], match:91, status:'Interview', applied:'1 week ago' },
  { id:5, name:'Elena Ramirez', role:'Sales & Marketing Manager', location:'Remote', skills:['Digital Marketing','CRM','SEO'], match:74, status:'New', applied:'6 hours ago' },
];

// ── Dashboard Home ─────────────────────────────────────────────────────────
function EmpDashboard({ onNav }) {
  const steps = ['Business Profile Details','Company Representative Info','Headquarters and Branch Information','Team Management'];
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
      {/* Greeting */}
      <div>
        <h1 style={{ fontSize:26, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:0 }}>Hello, Arufa 👋</h1>
        <p style={{ fontSize:14, fontWeight:400, color:PC.gray, fontFamily:'Montserrat', marginTop:4 }}>Get Started Finding Something</p>
      </div>

      {/* Stats row */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16 }}>
        {[['Total Country','2'],['Total Branch','2'],['Total Member','14'],['Total Active Jobs','0']].map(([label,val])=>(
          <div key={label} style={{ background:'#fff', borderRadius:12, padding:'20px 22px', border:`1px solid ${PC.border}` }}>
            <div style={{ fontSize:13, fontWeight:500, color:PC.gray, fontFamily:'Montserrat', marginBottom:8 }}>{label}</div>
            <div style={{ fontSize:28, fontWeight:700, color:PC.dark, fontFamily:'Montserrat' }}>{val}</div>
          </div>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
        {/* Profile completion */}
        <div style={{ background:'#fff', borderRadius:12, padding:'24px', border:`1px solid ${PC.border}` }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
            <span style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark }}>Profile Completion</span>
            <PCButton variant="ghost" size="sm">Edit</PCButton>
          </div>
          <div style={{ fontSize:13, color:PC.gray, fontFamily:'Montserrat', marginBottom:16 }}>4 of 4 steps completed</div>
          <div style={{ height:6, background:PC.border, borderRadius:3, marginBottom:20 }}>
            <div style={{ height:6, background:PC.blue, borderRadius:3, width:'100%', transition:'width 0.6s' }} />
          </div>
          {steps.map((s,i)=>(
            <div key={s} style={{ display:'flex', alignItems:'center', gap:10, padding:'8px 0', borderTop: i>0 ? `1px solid ${PC.bg}`:undefined }}>
              <div style={{ width:20, height:20, borderRadius:'50%', background:PC.blue, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                <svg width="10" height="10" viewBox="0 0 10 10"><path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
              <span style={{ fontSize:13, fontWeight:600, fontFamily:'Montserrat', color:PC.dark }}>{s}</span>
            </div>
          ))}
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
          {/* Plan widget */}
          <div style={{ background:'#fff', borderRadius:12, padding:'24px', border:`1px solid ${PC.border}` }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8 }}>
              <span style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark }}>You're on Trial Plan</span>
              <PCTag color="orange">Trial</PCTag>
            </div>
            <p style={{ fontSize:13, color:PC.gray, fontFamily:'Montserrat', margin:'0 0 16px' }}>Upgrade to unlock more features</p>
            <PCButton variant="primary" size="md" fullWidth>Add seat / Upgrade</PCButton>
          </div>

          {/* Quick actions */}
          {[
            { title:'Find Candidates', desc:'Directly Find the Ideal Candidates for Your Business', nav:'Candidate' },
            { title:'Manage Jobs', desc:'Post Jobs and Manage Candidate Recruitment for Your Business', nav:'Jobs' },
            { title:'Manage Profile', desc:'View and Manage Your Business Profile Details', nav:'Profile' },
          ].map(a=>(
            <div key={a.title} style={{ background:'#fff', borderRadius:12, padding:'16px 18px', border:`1px solid ${PC.border}`, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div>
                <div style={{ fontSize:14, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, marginBottom:3 }}>{a.title}</div>
                <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat' }}>{a.desc}</div>
              </div>
              <PCButton variant="primary" size="sm" onClick={()=>onNav(a.nav)}>Manage Now →</PCButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Jobs Management ────────────────────────────────────────────────────────
function EmpJobs() {
  const [tab, setTab] = React.useState('All');
  const [selected, setSelected] = React.useState(JOBS_DATA[0]);
  const [showCreate, setShowCreate] = React.useState(false);
  const tabs = ['All','Published','Draft','Closed'];

  const filtered = tab === 'All' ? JOBS_DATA : JOBS_DATA.filter(j => j.status === tab.toLowerCase());

  const statusColor = s => ({ published:'green', draft:'yellow', closed:'gray' }[s] || 'gray');

  const jobDescText = `Menyelesaikan tugas-tugas yang diberikan meliputi pekerjaan redaksi, sales, dan divisi lainnya, khususnya terkait desain grafis. Mengimplementasikan setiap brief desain menjadi visual dengan standar kualitas yang ditetapkan. Menghasilkan desain dengan kreativitas original masing-masing talenta.`;

  if (showCreate) return (
    <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <button onClick={()=>setShowCreate(false)} style={{ background:'none', border:`1px solid ${PC.border}`, borderRadius:8, padding:'8px 16px', fontFamily:'Montserrat', fontSize:14, fontWeight:600, cursor:'pointer', color:PC.dark }}>← Back</button>
        <h2 style={{ fontSize:20, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:0 }}>Create Job Post</h2>
      </div>
      <div style={{ background:'#fff', borderRadius:12, padding:'28px', border:`1px solid ${PC.border}`, display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
        {[['Job Title','e.g. Front Office Manager'],['Department','e.g. Food & Beverage'],['Employment Type','e.g. Full-Time'],['Work Mode','e.g. Onsite'],['Salary Min','IDR'],['Salary Max','IDR'],['Location','City, Country'],['Branch','Select branch']].map(([l,p])=>(
          <PCInput key={l} label={l} placeholder={p} required />
        ))}
        <div style={{ gridColumn:'1/-1', display:'flex', flexDirection:'column', gap:5 }}>
          <label style={{ fontSize:13, fontWeight:600, fontFamily:'Montserrat', color:PC.dark }}>Job Description <span style={{ color:PC.orange }}>*</span></label>
          <textarea placeholder="Describe the role, responsibilities, and requirements..." style={{ width:'100%', minHeight:140, borderRadius:8, border:`1.5px solid ${PC.border}`, padding:'10px 12px', fontSize:14, fontFamily:'Montserrat', color:PC.dark, resize:'vertical', outline:'none', boxSizing:'border-box' }} />
        </div>
        <div style={{ gridColumn:'1/-1', display:'flex', gap:12, justifyContent:'flex-end', paddingTop:8 }}>
          <PCButton variant="light" size="lg" onClick={()=>setShowCreate(false)}>Save as Draft</PCButton>
          <PCButton variant="primary" size="lg">Publish Job Post</PCButton>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ display:'flex', gap:0, height:'calc(100vh - 120px)', overflow:'hidden', marginTop:-8 }}>
      {/* Left panel */}
      <div style={{ width:360, display:'flex', flexDirection:'column', borderRight:`1px solid ${PC.border}`, background:'#fff', flexShrink:0 }}>
        <div style={{ padding:'16px 16px 0' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
            <span style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark }}>Jobs</span>
            <PCButton variant="primary" size="sm" onClick={()=>setShowCreate(true)}>+ Create Job Post</PCButton>
          </div>
          <div style={{ position:'relative', marginBottom:14 }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ position:'absolute', left:10, top:13 }}><circle cx="6.5" cy="6.5" r="5" stroke={PC.gray} strokeWidth="1.4"/><line x1="10.5" y1="10.5" x2="13.5" y2="13.5" stroke={PC.gray} strokeWidth="1.4" strokeLinecap="round"/></svg>
            <input placeholder="Search job here..." style={{ width:'100%', height:40, borderRadius:8, border:`1.5px solid ${PC.border}`, paddingLeft:32, paddingRight:12, fontSize:13, fontFamily:'Montserrat', outline:'none', boxSizing:'border-box' }} />
          </div>
          <div style={{ display:'flex', gap:4, marginBottom:4 }}>
            {tabs.map(t=>(
              <button key={t} onClick={()=>setTab(t)} style={{
                flex:1, padding:'7px 4px', borderRadius:6, border:'none', cursor:'pointer', fontFamily:'Montserrat', fontSize:12, fontWeight:600,
                background: tab===t ? PC.blue : PC.bg, color: tab===t ? '#fff' : PC.gray, transition:'all 0.15s',
              }}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{ flex:1, overflowY:'auto', padding:'8px 8px' }}>
          {filtered.map(j=>(
            <div key={j.id} onClick={()=>setSelected(j)} style={{
              padding:'14px 14px', borderRadius:10, marginBottom:4, cursor:'pointer',
              background: selected?.id===j.id ? PC.lightBlue : 'transparent',
              border: `1px solid ${selected?.id===j.id ? PC.blue : 'transparent'}`,
              transition:'all 0.15s',
            }}>
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:6, gap:8 }}>
                <span style={{ fontSize:13, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, lineHeight:1.4 }}>{j.title}</span>
                <PCTag color={statusColor(j.status)}>{j.status}</PCTag>
              </div>
              <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat', marginBottom:6 }}>{j.salary}</div>
              <div style={{ display:'flex', gap:6 }}>
                <PCTag color="navy">{j.mode}</PCTag>
                <PCTag color="blue">{j.type}</PCTag>
                <span style={{ fontSize:11, color:PC.medGray, fontFamily:'Montserrat', marginLeft:'auto' }}>{j.posted}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right detail panel */}
      {selected && (
        <div style={{ flex:1, overflowY:'auto', padding:'24px 28px', background:PC.bg }}>
          <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:20, gap:16 }}>
            <div>
              <h2 style={{ fontSize:22, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 8px' }}>{selected.title}</h2>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
                <PCTag color={statusColor(selected.status)}>{selected.status}</PCTag>
                <PCTag color="navy">{selected.mode}</PCTag>
                <PCTag color="blue">{selected.type}</PCTag>
                <span style={{ fontSize:13, color:PC.gray, fontFamily:'Montserrat' }}>{selected.posted}</span>
              </div>
            </div>
            <div style={{ display:'flex', gap:10, flexShrink:0 }}>
              {selected.status==='published' && <>
                <PCButton variant="primary" size="md">View Applicants ({selected.applicants}+)</PCButton>
                <PCButton variant="light" size="md">Edit Post</PCButton>
                <PCButton variant="danger" size="md">Close Post</PCButton>
              </>}
              {selected.status==='draft' && <>
                <PCButton variant="primary" size="md">Publish</PCButton>
                <PCButton variant="light" size="md">Edit Post</PCButton>
                <PCButton variant="danger" size="md">Delete Post</PCButton>
              </>}
              {selected.status==='closed' && <>
                <PCButton variant="light" size="md">Reopen Post</PCButton>
              </>}
            </div>
          </div>

          <div style={{ background:'#fff', borderRadius:12, padding:'24px', border:`1px solid ${PC.border}`, marginBottom:16 }}>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:20, marginBottom:24 }}>
              {[['Department', selected.dept],['Location', selected.location],['Branch', selected.branch]].map(([k,v])=>(
                <div key={k}>
                  <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat', marginBottom:4 }}>{k}</div>
                  <div style={{ fontSize:14, fontWeight:600, fontFamily:'Montserrat', color:PC.dark }}>{v}</div>
                </div>
              ))}
              <div>
                <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat', marginBottom:4 }}>Salary</div>
                <div style={{ fontSize:14, fontWeight:600, fontFamily:'Montserrat', color:PC.dark }}>{selected.salary}</div>
              </div>
            </div>
            <h3 style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 10px' }}>Job Description</h3>
            <div style={{ fontSize:14, color:PC.gray, fontFamily:'Montserrat', lineHeight:1.75, marginBottom:20 }}>{jobDescText}</div>
            <h3 style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 10px' }}>Right to Work</h3>
            <div style={{ fontSize:14, color:PC.gray, fontFamily:'Montserrat', lineHeight:1.75, marginBottom:20 }}>Indonesia - Require Indonesian Sponsorship or A Job Offer to Work for A New Employer</div>
            <h3 style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 10px' }}>Location</h3>
            <div style={{ fontSize:14, color:PC.gray, fontFamily:'Montserrat', lineHeight:1.75 }}>20-22 National Circuit, Jakarta, Indonesia</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Candidates (ATS) ───────────────────────────────────────────────────────
function EmpCandidates() {
  const [selected, setSelected] = React.useState(CANDIDATES_DATA[0]);
  const [search, setSearch] = React.useState('');
  const filtered = CANDIDATES_DATA.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.role.toLowerCase().includes(search.toLowerCase()));
  const statusColor = s => ({ Reviewing:'blue', Shortlisted:'green', New:'orange', Interview:'navy' }[s] || 'gray');
  const matchColor = m => m >= 90 ? PC.green : m >= 75 ? PC.blue : PC.orange;

  return (
    <div style={{ display:'flex', gap:0, height:'calc(100vh - 120px)', overflow:'hidden', marginTop:-8 }}>
      {/* Left panel */}
      <div style={{ width:360, display:'flex', flexDirection:'column', borderRight:`1px solid ${PC.border}`, background:'#fff', flexShrink:0 }}>
        <div style={{ padding:'16px 16px 0' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14 }}>
            <span style={{ fontSize:17, fontWeight:700, fontFamily:'Montserrat', color:PC.dark }}>Candidates</span>
            <PCTag color="blue">{filtered.length} found</PCTag>
          </div>
          <div style={{ position:'relative', marginBottom:14 }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ position:'absolute', left:10, top:13 }}><circle cx="6.5" cy="6.5" r="5" stroke={PC.gray} strokeWidth="1.4"/><line x1="10.5" y1="10.5" x2="13.5" y2="13.5" stroke={PC.gray} strokeWidth="1.4" strokeLinecap="round"/></svg>
            <input placeholder="Search candidates..." value={search} onChange={e=>setSearch(e.target.value)} style={{ width:'100%', height:40, borderRadius:8, border:`1.5px solid ${PC.border}`, paddingLeft:32, paddingRight:12, fontSize:13, fontFamily:'Montserrat', outline:'none', boxSizing:'border-box' }} />
          </div>
        </div>
        <div style={{ flex:1, overflowY:'auto', padding:'4px 8px' }}>
          {filtered.map(c=>(
            <div key={c.id} onClick={()=>setSelected(c)} style={{
              padding:'14px', borderRadius:10, marginBottom:4, cursor:'pointer',
              background: selected?.id===c.id ? PC.lightBlue : 'transparent',
              border: `1px solid ${selected?.id===c.id ? PC.blue : 'transparent'}`,
            }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                <PCAvatar name={c.name} size={38} />
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ fontSize:13, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{c.name}</div>
                  <div style={{ fontSize:12, color:PC.gray, fontFamily:'Montserrat' }}>{c.role}</div>
                </div>
                <PCTag color={statusColor(c.status)}>{c.status}</PCTag>
              </div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <span style={{ fontSize:11, color:PC.gray, fontFamily:'Montserrat' }}>📍 {c.location}</span>
                <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                  <div style={{ width:8, height:8, borderRadius:'50%', background:matchColor(c.match) }} />
                  <span style={{ fontSize:12, fontWeight:700, fontFamily:'Montserrat', color:matchColor(c.match) }}>{c.match}% match</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <div style={{ flex:1, overflowY:'auto', padding:'28px', background:PC.bg }}>
          <div style={{ display:'flex', alignItems:'flex-start', gap:20, marginBottom:24 }}>
            <PCAvatar name={selected.name} size={72} />
            <div style={{ flex:1 }}>
              <h2 style={{ fontSize:22, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 6px' }}>{selected.name}</h2>
              <div style={{ fontSize:15, color:PC.gray, fontFamily:'Montserrat', marginBottom:10 }}>{selected.role} · {selected.location}</div>
              <div style={{ display:'flex', gap:8 }}>
                <PCTag color={statusColor(selected.status)}>{selected.status}</PCTag>
                <PCTag color="blue">{selected.match}% Skill Match</PCTag>
                <span style={{ fontSize:12, color:PC.medGray, fontFamily:'Montserrat', alignSelf:'center' }}>Applied {selected.applied}</span>
              </div>
            </div>
            <div style={{ display:'flex', gap:10, flexShrink:0 }}>
              <PCButton variant="primary" size="md">Shortlist</PCButton>
              <PCButton variant="secondary" size="md">Schedule Interview</PCButton>
              <PCButton variant="danger" size="md">Reject</PCButton>
            </div>
          </div>

          {/* Skills */}
          <div style={{ background:'#fff', borderRadius:12, padding:'22px', border:`1px solid ${PC.border}`, marginBottom:16 }}>
            <h3 style={{ fontSize:16, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 14px' }}>Skills</h3>
            <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
              {selected.skills.map(s=>(
                <span key={s} style={{ padding:'5px 12px', borderRadius:6, background:PC.lightBlue, color:PC.blue, fontSize:13, fontWeight:600, fontFamily:'Montserrat' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Sections */}
          {[{title:'Personal Details', content:[['Date of Birth','23 September 1995'],['Gender','Male'],['City','DKI Jakarta'],['Postal Code','12450']]},
            {title:'Career History', content:[['Job Title','Product Design Lead'],['Description','Lead a team of 20 Product Designers across Supply (B2B) and Demand (B2C).']]},
            {title:'Education History', content:[['Degree','Bachelor of Hospitality Management'],['University','ASEAN Hospitality Academy']]},
          ].map(sec=>(
            <div key={sec.title} style={{ background:'#fff', borderRadius:12, padding:'22px', border:`1px solid ${PC.border}`, marginBottom:16 }}>
              <h3 style={{ fontSize:16, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 14px' }}>{sec.title}</h3>
              {sec.content.map(([k,v])=>(
                <div key={k} style={{ display:'flex', gap:16, marginBottom:10 }}>
                  <span style={{ width:140, fontSize:14, color:PC.gray, fontFamily:'Montserrat', flexShrink:0 }}>{k}</span>
                  <span style={{ fontSize:14, fontWeight:500, color:PC.dark, fontFamily:'Montserrat' }}>: {v}</span>
                </div>
              ))}
            </div>
          ))}

          {/* Skill Passport */}
          <div style={{ background:PC.lightBlue, borderRadius:12, padding:'22px', border:`1.5px solid ${PC.blue}` }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:6 }}>
              <span style={{ fontSize:22 }}>🛂</span>
              <h3 style={{ fontSize:16, fontWeight:700, fontFamily:'Montserrat', color:PC.navy, margin:0 }}>Skill Passport (MRA-TP Standard)</h3>
              <PCTag color="blue">Verified</PCTag>
            </div>
            <div style={{ fontSize:13, color:PC.blue, fontFamily:'Montserrat', fontWeight:600 }}>Full_Certification_Number: MRA-TP-2024-IDN-00234</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Profile page ──────────────────────────────────────────────────────────
function EmpProfile() {
  return (
    <div style={{ maxWidth:800 }}>
      <h2 style={{ fontSize:22, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 24px' }}>Company Profile</h2>
      <div style={{ background:'#fff', borderRadius:12, padding:'28px', border:`1px solid ${PC.border}`, marginBottom:16 }}>
        <div style={{ display:'flex', alignItems:'center', gap:20, marginBottom:24 }}>
          <div style={{ width:80, height:80, borderRadius:14, background:PC.lightBlue, display:'flex', alignItems:'center', justifyContent:'center', fontSize:32, border:`1px solid ${PC.border}` }}>🏨</div>
          <div>
            <h3 style={{ fontSize:20, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 4px' }}>Startup Colorbox</h3>
            <div style={{ fontSize:14, color:PC.gray, fontFamily:'Montserrat', marginBottom:8 }}>PT AMBURAN JAKARTA · Owner</div>
            <PCTag color="green">Verified Employer</PCTag>
          </div>
          <PCButton variant="secondary" size="md" style={{ marginLeft:'auto' }}>Edit Profile</PCButton>
        </div>
        {[['Company Name','Startup Colorbox'],['Legal Entity','PT AMBURAN JAKARTA'],['Representative','Arufa Dhiarma Putu Riordan Kevin Putra'],['Email','info@startupcolorbox.com'],['Phone','081291028392'],['HQ Location','Jakarta, Indonesia'],['Industry','Hospitality & Tourism'],['Company Size','10-50 employees']].map(([k,v])=>(
          <div key={k} style={{ display:'flex', alignItems:'center', padding:'11px 0', borderBottom:`1px solid ${PC.bg}` }}>
            <span style={{ width:200, fontSize:14, color:PC.gray, fontFamily:'Montserrat' }}>{k}</span>
            <span style={{ fontSize:14, fontWeight:500, color:PC.dark, fontFamily:'Montserrat' }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Employer Dashboard root ────────────────────────────────────────────────
function EmployerDashboard({ onHome }) {
  const [active, setActive] = React.useState('Dashboard');

  const renderContent = () => {
    if (active === 'Dashboard') return <EmpDashboard onNav={setActive} />;
    if (active === 'Jobs' || active === 'Internal Jobs' || active === 'Freelance Jobs') return <EmpJobs />;
    if (active === 'Candidate') return <EmpCandidates />;
    if (active === 'Profile') return <EmpProfile />;
    return (
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flex:1 }}>
        <div style={{ textAlign:'center', padding:48 }}>
          <div style={{ fontSize:48, marginBottom:16 }}>🚧</div>
          <h3 style={{ fontSize:20, fontWeight:700, fontFamily:'Montserrat', color:PC.dark, margin:'0 0 8px' }}>{active}</h3>
          <p style={{ fontSize:14, color:PC.gray, fontFamily:'Montserrat' }}>This section is under construction</p>
        </div>
      </div>
    );
  };

  const isFullbleed = active === 'Jobs' || active === 'Internal Jobs' || active === 'Freelance Jobs' || active === 'Candidate';

  return (
    <div style={{ display:'flex', minHeight:'100vh', background:PC.bg }}>
      <PCSidebar type="employer" active={active} onNav={setActive} onHome={onHome} />
      <div style={{ flex:1, display:'flex', flexDirection:'column', minWidth:0 }}>
        <PCDashHeader type="employer" onHome={onHome} />
        <div style={{ flex:1, padding: isFullbleed ? '16px 0 0 0' : '28px', overflowY: isFullbleed ? 'hidden' : 'auto' }}>
          {isFullbleed
            ? <div style={{ padding:'0 28px', flex:1 }}>{renderContent()}</div>
            : renderContent()}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { EmployerDashboard, EmpJobs, EmpCandidates, EmpProfile, EmpDashboard });
