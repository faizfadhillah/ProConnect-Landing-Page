
// ProConnect — Candidate Registration Wizard (Part 1: helpers + steps 1-5)

const CAND_STEPS = [
  'Personal Details', 'Career History', 'Education History', 'Licenses / Certifications',
  'Skills & Languanges', 'Work Preferences', 'Right to Work', 'Interest', 'Salary Expectation',
  'Skill Passport (MRA-TP Standard)',
];

// ── Reusable bits ─────────────────────────────────────────────────────────
function AddRowButton({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ width: '100%', padding: '14px', borderRadius: 10, border: `1.5px solid ${PC.blue}`, background: '#fff', color: PC.blue, fontWeight: 700, fontFamily: 'Montserrat', fontSize: 14.5, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9 }}>
      <span style={{ fontSize: 18, lineHeight: 1 }}>+</span> {label}
    </button>
  );
}

function DeleteRowButton({ onClick }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button onClick={onClick} style={{ padding: '11px 26px', borderRadius: 8, border: `1.5px solid ${REG.err}`, background: '#fff', color: REG.err, fontWeight: 700, fontFamily: 'Montserrat', fontSize: 14, cursor: 'pointer' }}>Delete</button>
    </div>
  );
}

// Inline "add to list" field (e.g. Achievements, Skills typed) with Add button
function AddTagField({ placeholder, hint, tags, onAdd, onRemove }) {
  const [v, setV] = React.useState('');
  const add = () => { if (v.trim()) { onAdd(v.trim()); setV(''); } };
  return (
    <div>
      <RegInput placeholder={placeholder} value={v} onChange={e => setV(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); add(); } }}
        trailing={<span onClick={add} style={{ fontSize: 14, fontWeight: 700, color: PC.blue, cursor: 'pointer', fontFamily: 'Montserrat' }}>Add</span>} />
      {hint && <div style={{ fontSize: 12.5, color: REG.ph, fontFamily: 'Montserrat', marginTop: 6 }}>{hint}</div>}
      {tags && tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
          {tags.map((t, i) => <Chip key={i} label={t} onRemove={() => onRemove(i)} />)}
        </div>
      )}
    </div>
  );
}

function Chip({ label, onRemove }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: PC.blue, color: '#fff', borderRadius: 8, padding: '7px 12px', fontSize: 13.5, fontWeight: 600, fontFamily: 'Montserrat' }}>
      {label}
      <button onClick={onRemove} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M3.5 3.5l6 6M9.5 3.5l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
      </button>
    </span>
  );
}

// Multi-select dropdown that renders selected items as chips inside the control
function ChipMultiSelect({ placeholder, options, value = [], onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const toggle = (o) => onChange(value.includes(o) ? value.filter(x => x !== o) : [...value, o]);
  const remove = (o) => onChange(value.filter(x => x !== o));
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div onClick={() => setOpen(o => !o)} style={{ minHeight: REG.fieldH, borderRadius: REG.radius, border: `1px solid ${open ? PC.blue : REG.border}`, background: '#fff', padding: value.length ? '8px 40px 8px 10px' : '0 40px 0 16px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8, cursor: 'pointer', position: 'relative' }}>
        {value.length === 0 && <span style={{ color: REG.ph, fontSize: 14.5, fontFamily: 'Montserrat' }}>{placeholder}</span>}
        {value.map(v => <Chip key={v} label={v} onRemove={() => remove(v)} />)}
        <span style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: '#7A828C', fontSize: 11, pointerEvents: 'none' }}>▼</span>
      </div>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, background: '#fff', border: `1px solid ${REG.border}`, borderRadius: 10, boxShadow: '0 12px 32px rgba(0,0,0,0.14)', zIndex: 20, maxHeight: 240, overflowY: 'auto' }}>
          {options.map(o => {
            const sel = value.includes(o);
            return (
              <div key={o} onClick={() => toggle(o)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', cursor: 'pointer', background: sel ? PC.lightBlue : '#fff', fontFamily: 'Montserrat' }}
                onMouseEnter={e => { if (!sel) e.currentTarget.style.background = PC.bg; }} onMouseLeave={e => { if (!sel) e.currentTarget.style.background = '#fff'; }}>
                <span style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${sel ? PC.blue : '#C4CAD2'}`, background: sel ? PC.blue : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {sel && <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.2 2.2L9 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                </span>
                <span style={{ fontSize: 14, color: REG.text }}>{o}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function CheckRow({ label, checked, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', padding: '6px 0' }}>
      <span onClick={onChange} style={{ width: 22, height: 22, borderRadius: 6, border: `1.5px solid ${checked ? PC.blue : '#C4CAD2'}`, background: checked ? PC.blue : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {checked && <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2.5 6.5l2.8 2.8L11 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </span>
      <span style={{ fontSize: 15, color: REG.text, fontFamily: 'Montserrat' }}>{label}</span>
    </label>
  );
}

function UploadField({ placeholder, label }) {
  return (
    <div style={{ ...regBaseInput(false), display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
      <span style={{ color: REG.ph, fontSize: 14.5 }}>{placeholder}</span>
      <span style={{ fontSize: 14, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat' }}>{label || 'Upload'}</span>
    </div>
  );
}

const SectionDivider = () => <div style={{ height: 1, background: PC.border, margin: '28px 0' }} />;

// ── Data ──────────────────────────────────────────────────────────────────
const CAND_JOB_TITLES = ['Front Office Manager', 'Executive Chef', 'Housekeeping Supervisor', 'F&B Manager', 'Guest Relations Officer', 'Sales Manager', 'HR Manager', 'Concierge'];
const DEGREES = ['High School', 'Diploma (D3)', "Bachelor's (S1)", "Master's (S2)", 'Doctorate (S3)', 'Vocational'];
const SKILLS = ['HTML', 'CSS', 'UX Design', 'Front Office', 'Food Safety', 'Customer Service', 'Reservations', 'Housekeeping', 'POS Systems', 'Event Planning'];
const LANGUAGES = ['Bahasa', 'English', 'Mandarin', 'Japanese', 'Korean', 'Arabic', 'Thai', 'Vietnamese', 'Tagalog'];
const INTERESTS = ['Front End', 'Back End', 'Full Stack', 'Hospitality', 'Tourism', 'Culinary', 'Management', 'Marketing'];
const AVAILABILITY = ['Immediately', 'Within 2 weeks', 'Within 1 month', '1-3 months', 'More than 3 months'];
const WORK_RIGHTS = ['Citizen', 'Permanent Resident', 'Work Visa', 'Requires Sponsorship', 'ABTC (APEC Card)'];
const PAY_INTERVALS = ['Per Month', 'Per Year', 'Per Hour', 'Per Project'];

// ════════════════ STEP 1 — Personal Details ════════════════
function CandPersonal({ data, set }) {
  return (
    <RegCard title="Personal Details" subtitle="Tell me about yourself.">
      <div style={{ marginBottom: 28 }}><UploadAvatar label="Upload Photo" /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
        <RegField label="Full Name" required><RegInput placeholder="Input your full name here" value={data.fullName} onChange={e => set('fullName', e.target.value)} /></RegField>
        <RegField label="Gender" required><RegSelect placeholder="Select gender" options={['Male', 'Female', 'Prefer not to say']} value={data.gender} onChange={e => set('gender', e.target.value)} /></RegField>
        <RegField label="Date of Birth" required><RegInput type="date" value={data.dob} onChange={e => set('dob', e.target.value)} /></RegField>
        <RegField label="Email" required><div style={{ ...regBaseInput(false), background: PC.bg, display: 'flex', alignItems: 'center', fontWeight: 700, color: REG.text }}>me@username.com</div></RegField>
        <RegField label="Phone Number" required><PhoneField value={data.phone} onChange={e => set('phone', e.target.value)} verify code={data.code || '62'} onCodeChange={v => set('code', v)} /></RegField>
        <RegToggle on={data.outside} onClick={() => set('outside', !data.outside)} label="Outside Indonesia?" />
        <RegField label="City" required><RegSelect placeholder="Select city" options={CITIES} value={data.city} onChange={e => set('city', e.target.value)} /></RegField>
        <RegField label="Postal Code" required><RegInput placeholder="Input postal code" value={data.postal} onChange={e => set('postal', e.target.value)} /></RegField>
        <RegField label="Location"><RegTextarea placeholder="Please state your address, city, and postal code (optional)" value={data.location} onChange={e => set('location', e.target.value)} /></RegField>
        <RegField label="Resume"><UploadField placeholder="Upload Resume (max 5 mb)" label="Upload" /></RegField>
      </div>
    </RegCard>
  );
}

// ════════════════ STEP 2 — Career History ════════════════
function CareerEntry({ d, set, onDelete, canDelete }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <RegField label="Job Title" required><RegSelect placeholder="Select job title" options={CAND_JOB_TITLES} value={d.title} onChange={e => set('title', e.target.value)} /></RegField>
      <RegField label="Company Name"><RegInput placeholder="Input company name" value={d.company} onChange={e => set('company', e.target.value)} /></RegField>
      <RegField label="Start Date" required><RegInput type="date" value={d.start} onChange={e => set('start', e.target.value)} /></RegField>
      <RegToggle on={d.current} onClick={() => set('current', !d.current)} label="Currently working here" />
      {!d.current && <RegField label="End Date" required><RegInput type="date" value={d.end} onChange={e => set('end', e.target.value)} /></RegField>}
      <RegField label="Description"><RegTextarea placeholder="Describe your job description and responsibilities" value={d.desc} onChange={e => set('desc', e.target.value)} /></RegField>
      <RegField label="Achievements"><AddTagField placeholder="Add achievement history" hint="Share your most impactful work achievements." tags={d.achievements || []} onAdd={t => set('achievements', [...(d.achievements || []), t])} onRemove={i => set('achievements', d.achievements.filter((_, j) => j !== i))} /></RegField>
      {canDelete && <DeleteRowButton onClick={onDelete} />}
    </div>
  );
}

function CandCareer({ items, setItems }) {
  const blank = { title: '', company: '', start: '', end: '', current: false, desc: '', achievements: [] };
  const setItem = (i, k, v) => setItems(items.map((it, j) => j === i ? { ...it, [k]: v } : it));
  return (
    <RegCard title="Career History" subtitle="Describe your past experience">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {items.map((it, i) => (
          <React.Fragment key={i}>
            {i > 0 && <SectionDivider />}
            <CareerEntry d={it} set={(k, v) => setItem(i, k, v)} canDelete={items.length > 1} onDelete={() => setItems(items.filter((_, j) => j !== i))} />
          </React.Fragment>
        ))}
        <div style={{ marginTop: 24 }}><AddRowButton label="Add Work Experience" onClick={() => setItems([...items, { ...blank }])} /></div>
      </div>
    </RegCard>
  );
}

// ════════════════ STEP 3 — Education History ════════════════
function EduEntry({ d, set, onDelete, canDelete }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <RegField label="Degree" required><RegSelect placeholder="Select degree" options={DEGREES} value={d.degree} onChange={e => set('degree', e.target.value)} /></RegField>
      <RegField label="School Name"><RegInput placeholder="Input school name" value={d.school} onChange={e => set('school', e.target.value)} /></RegField>
      <RegToggle on={d.outside} onClick={() => set('outside', !d.outside)} label="Outside Indonesia?" />
      <RegField label="City"><RegSelect placeholder="Select city" options={CITIES} value={d.city} onChange={e => set('city', e.target.value)} /></RegField>
      <RegField label="Start Date" required><RegInput type="date" value={d.start} onChange={e => set('start', e.target.value)} /></RegField>
      <RegToggle on={d.enrolling} onClick={() => set('enrolling', !d.enrolling)} label="I'm still enrolling" />
      {!d.enrolling && <RegField label="End Date" required><RegInput type="date" value={d.end} onChange={e => set('end', e.target.value)} /></RegField>}
      <RegField label="Upload Document"><UploadField placeholder="Upload file" label="Add" /></RegField>
      {canDelete && <DeleteRowButton onClick={onDelete} />}
    </div>
  );
}

function CandEducation({ items, setItems }) {
  const blank = { degree: '', school: '', outside: false, city: '', start: '', end: '', enrolling: false };
  const setItem = (i, k, v) => setItems(items.map((it, j) => j === i ? { ...it, [k]: v } : it));
  return (
    <RegCard title="Education History" subtitle="Describe your educational background">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <SectionDivider />}
          <EduEntry d={it} set={(k, v) => setItem(i, k, v)} canDelete={items.length > 1} onDelete={() => setItems(items.filter((_, j) => j !== i))} />
        </React.Fragment>
      ))}
      <div style={{ marginTop: 24 }}><AddRowButton label="Add Education" onClick={() => setItems([...items, { ...blank }])} /></div>
    </RegCard>
  );
}

// ════════════════ STEP 4 — Licenses / Certifications ════════════════
function LicenseEntry({ d, set, onDelete, canDelete }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <RegField label="License / Certification Number"><RegInput placeholder="Input number" value={d.number} onChange={e => set('number', e.target.value)} /></RegField>
      <RegField label="License / Certification Name"><RegInput placeholder="Input name" value={d.name} onChange={e => set('name', e.target.value)} /></RegField>
      <RegField label="Issue Organization"><RegInput placeholder="Input issue organization" value={d.org} onChange={e => set('org', e.target.value)} /></RegField>
      <RegField label="Issue Date"><RegInput type="date" value={d.issue} onChange={e => set('issue', e.target.value)} /></RegField>
      <RegField label="No Expiry"><RegSelect placeholder="Select type" options={['No Expiry', 'Has Expiry']} value={d.expiryType} onChange={e => set('expiryType', e.target.value)} /></RegField>
      {d.expiryType !== 'No Expiry' && <RegField label="Expiry Date" required><RegInput type="date" value={d.expiry} onChange={e => set('expiry', e.target.value)} /></RegField>}
      <RegField label="Description"><RegTextarea placeholder="Describe your license / certification" value={d.desc} onChange={e => set('desc', e.target.value)} /></RegField>
      <RegField label="Upload Document"><UploadField placeholder="Upload file" label="Add" /></RegField>
      {canDelete && <DeleteRowButton onClick={onDelete} />}
    </div>
  );
}

function CandLicenses({ items, setItems }) {
  const blank = { number: '', name: '', org: '', issue: '', expiryType: '', expiry: '', desc: '' };
  const setItem = (i, k, v) => setItems(items.map((it, j) => j === i ? { ...it, [k]: v } : it));
  return (
    <RegCard title="Licenses / Certificates" subtitle="Licenses / Certificates you had taken along your career journey">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <SectionDivider />}
          <LicenseEntry d={it} set={(k, v) => setItem(i, k, v)} canDelete={items.length > 1} onDelete={() => setItems(items.filter((_, j) => j !== i))} />
        </React.Fragment>
      ))}
      <div style={{ marginTop: 24 }}><AddRowButton label="Add License / Certification" onClick={() => setItems([...items, { ...blank }])} /></div>
    </RegCard>
  );
}

// ════════════════ STEP 5 — Skills & Languages ════════════════
function CandSkills({ data, set }) {
  return (
    <RegCard title="Skills & Languages" subtitle="Highlight your key skills and languages that support your professional profile.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <RegField label="Skills" hint="List the key skills that showcase your strengths and expertise.">
          <ChipMultiSelect placeholder="Select skills" options={SKILLS} value={data.skills || []} onChange={v => set('skills', v)} />
        </RegField>
        <RegField label="Mastered Language" hint="List the languages you can use proficiently.">
          <ChipMultiSelect placeholder="Select languages" options={LANGUAGES} value={data.languages || []} onChange={v => set('languages', v)} />
        </RegField>
      </div>
    </RegCard>
  );
}

Object.assign(window, {
  CAND_STEPS, AddRowButton, DeleteRowButton, AddTagField, Chip, ChipMultiSelect, CheckRow, UploadField, SectionDivider,
  CAND_JOB_TITLES, DEGREES, SKILLS, LANGUAGES, INTERESTS, AVAILABILITY, WORK_RIGHTS, PAY_INTERVALS,
  CandPersonal, CandCareer, CandEducation, CandLicenses, CandSkills,
});
