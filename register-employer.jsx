
// ProConnect — Employer Registration Wizard (4 steps + modals)

const DEPARTMENTS = ['Maintenance', 'IT', 'HRD', 'Marketing', 'Finance', 'Legal', 'Operation', 'Human Resource', 'Food & Beverage', 'Front Office'];
const INDUSTRIES = ['Hospitality & Tourism', 'Hotel & Resort', 'Food & Beverage', 'Travel & Leisure', 'Event Management', 'Other'];
const COUNTRIES = ['Indonesia', 'Singapore', 'Malaysia', 'Thailand', 'Philippines', 'Vietnam', 'Cambodia', 'Brunei', 'Laos', 'Myanmar'];
const REGIONS = ['Jakarta', 'West Java', 'Central Java', 'East Java', 'Bali', 'Yogyakarta', 'Banten'];
const CITIES = ['Jakarta', 'Bandung', 'Surabaya', 'Medan', 'Bali', 'Yogyakarta', 'Semarang'];
const ROLES = ['Owner', 'Admin', 'HRD HQ', 'PIC Branch', 'HRD Branch', 'Dept Head HQ', 'Dept Head Branch', 'Member'];
const EMP_TYPES = ['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Freelance'];
const JOB_TITLES = ['HRD', 'Manager', 'Supervisor', 'Staff', 'Director', 'General Manager'];

// ════════════════ STEP 1 — Business Profile ════════════════
function StepBusinessProfile({ data, set }) {
  const mobile = useMobile(900);
  const grid = { display: 'grid', gridTemplateColumns: '1fr', gap: 20 };
  return (
    <RegCard title="Business Profile Details" subtitle="Tell us about your company so we can set up your profile.">
      <div style={{ marginBottom: 28 }}><UploadAvatar /></div>
      <div style={grid}>
        <RegField label="Brand Name" required><RegInput placeholder="Your brand name, ie: ABC Hotel" value={data.brand} onChange={e => set('brand', e.target.value)} /></RegField>
        <RegField label="Branch" required hint="info"><RegInput placeholder="Please state your branch name" value={data.branch} onChange={e => set('branch', e.target.value)} /></RegField>
        <RegField label="Company Name" required><RegInput placeholder="Your company name, ie: PT ABC" value={data.company} onChange={e => set('company', e.target.value)} /></RegField>
        <RegField label="Industry" required><RegSelect placeholder="Choose one that suits your company the most" options={INDUSTRIES} value={data.industry} onChange={e => set('industry', e.target.value)} /></RegField>
        <RegField label="Company Description" required><RegTextarea placeholder="Explain about your company" value={data.desc} onChange={e => set('desc', e.target.value)} /></RegField>
        <RegField label="Organization Type"><RegSelect placeholder="What is your organization type?" options={['Private', 'Government', 'Non-Profit', 'Startup']} value={data.orgType} onChange={e => set('orgType', e.target.value)} /></RegField>
        <RegField label="Organization Size"><RegSelect placeholder="What is your organization size?" options={['1-10', '11-50', '51-200', '201-500', '500+']} value={data.orgSize} onChange={e => set('orgSize', e.target.value)} /></RegField>
        <RegField label="List of Department"><RegSelect placeholder="Select your Department" options={DEPARTMENTS} value={data.dept} onChange={e => set('dept', e.target.value)} /></RegField>
        <RegField label="Tagline"><RegInput placeholder="Describe your company motto / tagline" value={data.tagline} onChange={e => set('tagline', e.target.value)} /></RegField>
        <RegField label="Location"><RegTextarea placeholder="Please state your address, city, and postal code (optional)" value={data.location} onChange={e => set('location', e.target.value)} /></RegField>
        <RegField label="NPWP / TIN Number"><RegInput placeholder="Input your NPWP / Tax ID Number (optional)" value={data.npwp} onChange={e => set('npwp', e.target.value)} /></RegField>
        <RegField label="Upload Document NPWP / TIN Number"><RegInput placeholder="Upload your NPWP / Tax ID Number (optional)" readOnly trailing={<span style={{ fontSize: 14, fontWeight: 600, color: PC.blue, cursor: 'pointer', fontFamily: 'Montserrat' }}>Upload</span>} /></RegField>
        <RegField label="Company Website"><RegInput placeholder="Input your website (without https)" value={data.website} onChange={e => set('website', e.target.value)} /></RegField>
        <RegField label="Company Email"><RegInput placeholder="Input your general email address (optional)" value={data.cEmail} onChange={e => set('cEmail', e.target.value)} trailing={<span style={{ fontSize: 14, fontWeight: 600, color: PC.blue, cursor: 'pointer', fontFamily: 'Montserrat' }}>Verify</span>} /></RegField>
        <RegField label="Company Phone"><RegInput placeholder="Input your general phone number (optional)" value={data.cPhone} onChange={e => set('cPhone', e.target.value)} trailing={<span style={{ fontSize: 14, fontWeight: 600, color: PC.blue, cursor: 'pointer', fontFamily: 'Montserrat' }}>Verify</span>} /></RegField>
        <RegField label="Status"><div style={{ ...regBaseInput(false), display: 'flex', alignItems: 'center', fontWeight: 700, color: REG.text }}>Unverified</div></RegField>
      </div>
    </RegCard>
  );
}

// ════════════════ STEP 2 — Representative ════════════════
function StepRepresentative({ data, set }) {
  return (
    <RegCard title="Company Representative Info" subtitle="Provide your information as the company's point of contact.">
      <div style={{ marginBottom: 28 }}><UploadAvatar label="Upload Photo" /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 20 }}>
        <RegField label="Full Name" required hint="Please use first letter capital"><RegInput placeholder="Input your full name" value={data.fullName} onChange={e => set('fullName', e.target.value)} /></RegField>
        <RegField label="Gender" required><RegSelect placeholder="Select your Gender" options={['Male', 'Female', 'Prefer not to say']} value={data.gender} onChange={e => set('gender', e.target.value)} /></RegField>
        <RegField label="Date of Birth" required><RegInput type="date" placeholder="Select date of birth" value={data.dob} onChange={e => set('dob', e.target.value)} /></RegField>
        <RegField label="Email" required><div style={{ ...regBaseInput(false), background: PC.bg, display: 'flex', alignItems: 'center', fontWeight: 700, color: REG.text }}>bambang@seruam.com</div></RegField>
        <RegField label="Phone Number" required hint="Verify your number to boost trust and job visibility."><PhoneField value={data.phone} onChange={e => set('phone', e.target.value)} verify /></RegField>
        <RegToggle on={data.outside} onClick={() => set('outside', !data.outside)} label="Outside Indonesia?" />
        <RegField label="City" required><RegSelect placeholder="Select city" options={CITIES} value={data.city} onChange={e => set('city', e.target.value)} /></RegField>
        <RegField label="Postal Code" required><RegInput placeholder="Input postal code" value={data.postal} onChange={e => set('postal', e.target.value)} /></RegField>
        <RegField label="Location"><RegTextarea placeholder="Please state your address, city, and postal code (optional)" value={data.repLocation} onChange={e => set('repLocation', e.target.value)} /></RegField>
      </div>
    </RegCard>
  );
}

// ════════════════ STEP 3 — HQ & Branches ════════════════
const sortHead = (label) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>{label}<svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1.5l2.5 3H3zM5.5 9.5l2.5-3H3z" fill="#B4BAC2" /></svg></span>
);

function StepBranches({ branches, onAdd, onDelete }) {
  const mobile = useMobile(900);
  const [q, setQ] = React.useState('');
  const [dept, setDept] = React.useState('');
  return (
    <RegCard title="Headquarters and Branch Information"
      subtitle="Please enter the details of your company's headquarters and branches. Ensure all fields are accurate for an updated company profile."
      action={<PCButton variant="secondary" size="md" onClick={onAdd} style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18, lineHeight: 1 }}>+</span> Add Branch</PCButton>}>
      <div style={{ display: 'flex', gap: 14, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}><circle cx="8" cy="8" r="6" stroke="#9AA3AD" strokeWidth="1.5" /><path d="M12.5 12.5L16 16" stroke="#9AA3AD" strokeWidth="1.5" strokeLinecap="round" /></svg>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search name or email..." style={{ ...regBaseInput(false), paddingLeft: 42 }} />
        </div>
        {!mobile && <div style={{ flex: '0 0 240px' }}><RegSelect placeholder="Select Department" options={DEPARTMENTS} value={dept} onChange={e => setDept(e.target.value)} /></div>}
        <PCButton variant="secondary" size="md" style={{ minWidth: 100 }}>Apply</PCButton>
      </div>
      <BranchTable branches={branches.filter(b => !q || b.branch.toLowerCase().includes(q.toLowerCase()))} onDelete={onDelete} />
    </RegCard>
  );
}

function BranchTable({ branches, onDelete }) {
  const mobile = useMobile(900);
  if (mobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {branches.map((b, i) => (
          <div key={b.id} style={{ border: `1px solid ${PC.border}`, borderRadius: 12, padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: REG.text, fontFamily: 'Montserrat' }}>{i + 1}. {b.branch}</span>
              <div style={{ display: 'flex', gap: 12 }}><EditIcon /><TrashIcon onClick={() => onDelete(b.id)} /></div>
            </div>
            <Row label="Department" val={b.dept} /><Row label="Location" val={b.location} /><Row label="Email" val={b.email} /><Row label="Phone" val={b.phone} />
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${PC.border}` }}>
            {['No', 'Branch', 'Department', 'Location', 'Email', 'Phone Number', 'Action'].map(h => (
              <th key={h} style={{ textAlign: 'left', padding: '12px 14px', fontSize: 14, fontWeight: 700, color: REG.text, fontFamily: 'Montserrat', whiteSpace: 'nowrap' }}>{['No', 'Action'].includes(h) ? h : sortHead(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {branches.map((b, i) => (
            <tr key={b.id} style={{ borderBottom: `1px solid ${PC.bg}` }}>
              <td style={td}>{i + 1}</td>
              <td style={{ ...td, fontWeight: 600 }}>{b.branch}</td>
              <td style={{ ...td, maxWidth: 200 }}>{b.dept}</td>
              <td style={td}>{b.location}</td>
              <td style={td}>{b.email}</td>
              <td style={td}>{b.phone}</td>
              <td style={td}><div style={{ display: 'flex', gap: 14 }}><EditIcon /><TrashIcon onClick={() => onDelete(b.id)} /></div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const td = { padding: '16px 14px', fontSize: 14, color: '#42505F', fontFamily: 'Montserrat', verticalAlign: 'top' };
const Row = ({ label, val }) => <div style={{ display: 'flex', fontSize: 13, fontFamily: 'Montserrat', marginBottom: 3 }}><span style={{ color: '#9AA3AD', width: 90 }}>{label}</span><span style={{ color: '#42505F', flex: 1 }}>{val}</span></div>;
const EditIcon = ({ onClick }) => <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}><svg width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M3 13.5L12 4.5l2.5 2.5-9 9H3v-2.5z" stroke="#42505F" strokeWidth="1.4" strokeLinejoin="round" /><path d="M11 5.5l2.5 2.5" stroke="#42505F" strokeWidth="1.4" /></svg></button>;
const TrashIcon = ({ onClick }) => <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}><svg width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M4 5.5h11M7.5 5.5V4a1 1 0 011-1h2a1 1 0 011 1v1.5M5.5 5.5l.7 9a1 1 0 001 .9h4.6a1 1 0 001-.9l.7-9" stroke="#42505F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg></button>;

function AddBranchModal({ onClose, onSave }) {
  const [d, setD] = React.useState({ name: '', country: '', region: '', location: '', npwp: '', same: false, website: '', email: '', phone: '', dept: '' });
  const [err, setErr] = React.useState(false);
  const set = (k, v) => setD(p => ({ ...p, [k]: v }));
  const save = () => {
    if (!d.name || !d.country || !d.region) { setErr(true); return; }
    onSave({ id: Date.now(), branch: d.name, dept: d.dept || 'Maintenance, IT, HRD, Marketing, Finance, Legal, Operation', location: (d.region ? d.region + ', ' : '') + (d.country || 'Indonesia'), email: d.email || 'info@seruam.com', phone: d.phone || '081234567890' });
  };
  return (
    <RegModal title="Add Branch" onClose={onClose}
      footer={<><PCButton variant="secondary" size="lg" fullWidth onClick={onClose}>Cancel</PCButton><PCButton variant="primary" size="lg" fullWidth onClick={save}>Save</PCButton></>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, paddingBottom: 8 }}>
        <RegField label="Branch Name" required error={err && !d.name ? 'Please fill this field' : ''}><RegInput placeholder="Please state your branch name" value={d.name} onChange={e => set('name', e.target.value)} error={err && !d.name} /></RegField>
        <RegField label="Country" required error={err && !d.country ? 'Please fill this field' : ''}><RegSelect placeholder="Please select country" options={COUNTRIES} value={d.country} onChange={e => set('country', e.target.value)} error={err && !d.country} /></RegField>
        <RegField label="Region" required error={err && !d.region ? 'Please fill this field' : ''}><RegSelect placeholder="Please select region" options={REGIONS} value={d.region} onChange={e => set('region', e.target.value)} error={err && !d.region} /></RegField>
        <RegField label="Location"><RegTextarea placeholder="Please state your address, city, and postal code (optional)" value={d.location} onChange={e => set('location', e.target.value)} /></RegField>
        <RegField label="NPWP / TIN Number"><RegInput placeholder="Input your NPWP / Tax ID Number (optional)" value={d.npwp} onChange={e => set('npwp', e.target.value)} /></RegField>
        <RegToggle on={d.same} onClick={() => set('same', !d.same)} label="Same as Business Profile" />
        <RegField label="Company Website"><RegInput placeholder="Input your website (without https)" value={d.website} onChange={e => set('website', e.target.value)} /></RegField>
        <RegField label="Company Email"><RegInput placeholder="Input your general email address (optional)" value={d.email} onChange={e => set('email', e.target.value)} /></RegField>
        <RegField label="Company Phone"><RegInput placeholder="Input your general phone number (optional)" value={d.phone} onChange={e => set('phone', e.target.value)} /></RegField>
        <RegField label="List of Department"><RegSelect placeholder="Select your Department" options={DEPARTMENTS} value={d.dept} onChange={e => set('dept', e.target.value)} /></RegField>
      </div>
    </RegModal>
  );
}

// ════════════════ STEP 4 — Team Management ════════════════
function StepTeam({ members, onInvite, onDelete, onTransfer }) {
  const mobile = useMobile(900);
  const [q, setQ] = React.useState('');
  return (
    <RegCard title="Team Management"
      subtitle="Add, edit, and manage your team members information and roles. You can invite new staff and update existing member details anytime."
      action={<PCButton variant="secondary" size="md" onClick={onInvite} style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 18, lineHeight: 1 }}>+</span> Invite New Member</PCButton>}>
      <div style={{ display: 'flex', gap: 14, marginBottom: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}><circle cx="8" cy="8" r="6" stroke="#9AA3AD" strokeWidth="1.5" /><path d="M12.5 12.5L16 16" stroke="#9AA3AD" strokeWidth="1.5" strokeLinecap="round" /></svg>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search name or email..." style={{ ...regBaseInput(false), paddingLeft: 42 }} />
        </div>
        {!mobile && <div style={{ flex: '0 0 180px' }}><RegSelect placeholder="Select Branch" options={['Headquarters', 'Bandung']} value="" onChange={() => {}} /></div>}
        {!mobile && <div style={{ flex: '0 0 180px' }}><RegSelect placeholder="Select Role" options={ROLES} value="" onChange={() => {}} /></div>}
        <PCButton variant="secondary" size="md" style={{ minWidth: 100 }}>Apply</PCButton>
      </div>
      <TeamTable members={members.filter(m => !q || m.name.toLowerCase().includes(q.toLowerCase()) || m.email.toLowerCase().includes(q.toLowerCase()))} onDelete={onDelete} onTransfer={onTransfer} />
    </RegCard>
  );
}

const roleBadge = (role) => {
  const map = { Owner: ['#FCE7E9', '#D33A47'], Admin: ['#E3EEFD', PC.blue], Member: ['#EAF6EE', PC.green] };
  const [bg, col] = map[role] || ['#EEF1F4', '#5A6573'];
  return <span style={{ fontSize: 12, fontWeight: 600, color: col, background: bg, padding: '4px 12px', borderRadius: 14, fontFamily: 'Montserrat' }}>{role}</span>;
};

function TeamTable({ members, onDelete, onTransfer }) {
  const mobile = useMobile(900);
  const avatar = (m) => m.img
    ? <img src={m.img} alt="" style={{ width: 34, height: 34, borderRadius: '50%', objectFit: 'cover' }} />
    : <div style={{ width: 34, height: 34, borderRadius: '50%', background: PC.lightBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat' }}>{m.name[0]}</div>;
  const actions = (m) => (
    <div style={{ display: 'flex', gap: 14 }}>
      <EditIcon />
      <button onClick={() => onTransfer(m)} title="Transfer ownership" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none"><circle cx="7" cy="6.5" r="2.6" stroke="#42505F" strokeWidth="1.3" /><path d="M2.5 15c0-2.5 2-4 4.5-4 1 0 1.9.25 2.6.7" stroke="#42505F" strokeWidth="1.3" strokeLinecap="round" /><path d="M12 9.5l2.5 2.5L12 14.5M14.5 12H10" stroke="#42505F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  );
  if (mobile) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {members.map((m, i) => (
          <div key={m.id} style={{ border: `1px solid ${PC.border}`, borderRadius: 12, padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              {avatar(m)}
              <div style={{ flex: 1 }}><div style={{ fontSize: 15, fontWeight: 700, color: REG.text, fontFamily: 'Montserrat' }}>{m.name}</div><div style={{ fontSize: 12.5, color: '#9AA3AD', fontFamily: 'Montserrat' }}>{m.email}</div></div>
              {roleBadge(m.role)}
            </div>
            <Row label="Branch" val={m.branch} /><Row label="Department" val={m.dept} /><Row label="Job Title" val={m.title} />
            <div style={{ marginTop: 10, display: 'flex', gap: 14 }}>{actions(m)}</div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 820 }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${PC.border}` }}>
            {['No', 'Name', 'Email', 'Branch', 'Departement', 'Job Title', 'Role', 'Action'].map(h => (
              <th key={h} style={{ textAlign: 'left', padding: '12px 14px', fontSize: 14, fontWeight: 700, color: REG.text, fontFamily: 'Montserrat', whiteSpace: 'nowrap' }}>{['No', 'Action'].includes(h) ? h : sortHead(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((m, i) => (
            <tr key={m.id} style={{ borderBottom: `1px solid ${PC.bg}` }}>
              <td style={td}>{i + 1}</td>
              <td style={td}><div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{avatar(m)}<span style={{ fontWeight: 600, color: REG.text }}>{m.name}{m.you && <span style={{ color: '#9AA3AD', fontWeight: 500 }}> (you)</span>}</span></div></td>
              <td style={td}>{m.email}</td>
              <td style={td}>{m.branch}</td>
              <td style={td}>{m.dept}</td>
              <td style={td}>{m.title}</td>
              <td style={td}>{roleBadge(m.role)}</td>
              <td style={td}>{actions(m)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RoleAccordion({ idx, role, set, onRemove, removable }) {
  const [open, setOpen] = React.useState(true);
  return (
    <div style={{ border: `1px solid ${PC.border}`, borderRadius: 12, overflow: 'hidden' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', background: '#fff', border: 'none', cursor: 'pointer' }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: REG.text, fontFamily: 'Montserrat' }}>Role {idx + 1}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {removable && <span onClick={e => { e.stopPropagation(); onRemove(); }} style={{ color: REG.err, fontSize: 13, fontWeight: 600, fontFamily: 'Montserrat' }}>Remove</span>}
          <span style={{ fontSize: 12, color: '#6B7480', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▼</span>
        </div>
      </button>
      {open && (
        <div style={{ padding: '4px 18px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <RegField label="Placement Branch" required><RegSelect placeholder="Select branch" options={['Headquarters', 'Bandung']} value={role.branch} onChange={e => set('branch', e.target.value)} /></RegField>
          <RegField label="Role" required><RegSelect placeholder="Select role" options={ROLES} value={role.role} onChange={e => set('role', e.target.value)} /></RegField>
          <RegField label="Department" required><RegSelect placeholder="Select department" options={DEPARTMENTS} value={role.dept} onChange={e => set('dept', e.target.value)} /></RegField>
          <RegField label="Job Title" required><RegSelect placeholder="Select job title" options={JOB_TITLES} value={role.title} onChange={e => set('title', e.target.value)} /></RegField>
          <RegField label="Employee Type" required><RegSelect placeholder="Select employee type" options={EMP_TYPES} value={role.empType} onChange={e => set('empType', e.target.value)} /></RegField>
          <RegField label="Start Date" required><RegInput type="date" value={role.start} onChange={e => set('start', e.target.value)} /></RegField>
          <RegField label="End Date" required><RegInput type="date" value={role.end} onChange={e => set('end', e.target.value)} /></RegField>
          <div style={{ display: 'flex', alignItems: 'flex-end', paddingBottom: 14 }}><RegToggle on={role.current} onClick={() => set('current', !role.current)} label="Currently here" /></div>
          <RegField label="Status" required full><RegSelect placeholder="Select status" options={['Active', 'Inactive', 'On Leave']} value={role.status} onChange={e => set('status', e.target.value)} /></RegField>
        </div>
      )}
    </div>
  );
}

function AddTeamMemberModal({ onClose, onSave }) {
  const mobile = useMobile(640);
  const [d, setD] = React.useState({ fullName: '', gender: '', dob: '', email: '', phone: '', outside: false, city: '', postal: '', address: '' });
  const [roles, setRoles] = React.useState([{ branch: '', role: '', dept: '', title: '', empType: '', start: '', end: '', current: false, status: '' }]);
  const set = (k, v) => setD(p => ({ ...p, [k]: v }));
  const setRole = (i, k, v) => setRoles(rs => rs.map((r, j) => j === i ? { ...r, [k]: v } : r));
  const grid = { display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 16 };
  const save = () => onSave({
    id: Date.now(), name: d.fullName || 'New Member', email: d.email || 'member@seruam.com',
    branch: roles[0].branch || 'Headquarters', dept: roles[0].dept || 'Human Resource',
    title: roles[0].title || 'Staff', role: roles[0].role || 'Member',
  });
  return (
    <RegModal title="Add Team Member" onClose={onClose} width={760}
      footer={<><PCButton variant="secondary" size="lg" fullWidth onClick={onClose}>Cancel</PCButton><PCButton variant="primary" size="lg" fullWidth onClick={save}>Save</PCButton></>}>
      <h3 style={{ fontSize: 18, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: '4px 0 18px' }}>Personal Detail</h3>
      <div style={{ marginBottom: 22 }}><UploadAvatar label="Upload Photo" /></div>
      <div style={grid}>
        <RegField label="Full Name" required hint="Please use first letter capital"><RegInput placeholder="Input your full name" value={d.fullName} onChange={e => set('fullName', e.target.value)} /></RegField>
        <RegField label="Gender" required><RegSelect placeholder="Select your Gender" options={['Male', 'Female']} value={d.gender} onChange={e => set('gender', e.target.value)} /></RegField>
        <RegField label="Date of Birth" required><RegInput type="date" value={d.dob} onChange={e => set('dob', e.target.value)} /></RegField>
        <RegField label="Email" required><RegInput placeholder="Input email" value={d.email} onChange={e => set('email', e.target.value)} /></RegField>
      </div>
      <div style={{ marginTop: 16 }}><RegField label="Phone Number" required><PhoneField value={d.phone} onChange={e => set('phone', e.target.value)} code={d.code || '62'} onCodeChange={v => set('code', v)} /></RegField></div>
      <div style={{ margin: '18px 0' }}><RegToggle on={d.outside} onClick={() => set('outside', !d.outside)} label="Outside Indonesia?" /></div>
      <div style={grid}>
        <RegField label="City" required><RegSelect placeholder="Select city" options={CITIES} value={d.city} onChange={e => set('city', e.target.value)} /></RegField>
        <RegField label="Postal Code" required><RegInput placeholder="Input postal code" value={d.postal} onChange={e => set('postal', e.target.value)} /></RegField>
      </div>
      <div style={{ marginTop: 16 }}><RegField label="Address"><RegTextarea placeholder="Please state your address, city, and postal code (optional)" value={d.address} onChange={e => set('address', e.target.value)} /></RegField></div>

      <h3 style={{ fontSize: 18, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: '28px 0 16px' }}>Team Role</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {roles.map((r, i) => <RoleAccordion key={i} idx={i} role={r} set={(k, v) => setRole(i, k, v)} removable={roles.length > 1} onRemove={() => setRoles(rs => rs.filter((_, j) => j !== i))} />)}
      </div>
      <button onClick={() => setRoles(rs => [...rs, { branch: '', role: '', dept: '', title: '', empType: '', start: '', end: '', current: false, status: '' }])}
        style={{ width: '100%', marginTop: 16, marginBottom: 8, padding: '13px', borderRadius: 10, border: `1.5px solid ${PC.blue}`, background: '#fff', color: PC.blue, fontWeight: 700, fontFamily: 'Montserrat', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
        <span style={{ fontSize: 18, lineHeight: 1 }}>+</span> Add role
      </button>
    </RegModal>
  );
}

function TransferOwnershipModal({ member, onClose, onConfirm }) {
  const [owner, setOwner] = React.useState('');
  const cands = ['Brooklyn Simmons', 'Brokiyesnar', 'Cody Fisher'];
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(false);
  return (
    <RegModal title="Transfer Ownership" onClose={onClose} width={580}
      footer={<><PCButton variant="secondary" size="lg" fullWidth onClick={onClose}>Cancel</PCButton><PCButton variant="primary" size="lg" fullWidth onClick={() => onConfirm(owner)}>Next</PCButton></>}>
      <p style={{ fontSize: 15, color: '#42505F', fontFamily: 'Montserrat', lineHeight: 1.6, margin: '0 0 16px' }}>By transferring ownership, new owner is granted full owner permissions while the previous owner is demoted to a standard member role.</p>
      <p style={{ fontSize: 15, color: '#42505F', fontFamily: 'Montserrat', lineHeight: 1.6, margin: '0 0 22px' }}>This action is permanent and cannot be undone.</p>
      <RegField label="Select New Owner" required>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }}><circle cx="8" cy="8" r="6" stroke="#9AA3AD" strokeWidth="1.5" /><path d="M12.5 12.5L16 16" stroke="#9AA3AD" strokeWidth="1.5" strokeLinecap="round" /></svg>
            <input value={owner || q} onChange={e => { setQ(e.target.value); setOwner(''); setOpen(true); }} onFocus={() => setOpen(true)} placeholder="Search owner"
              style={{ ...regBaseInput(false), paddingLeft: 42, fontWeight: owner ? 700 : 400 }} />
          </div>
          {open && (
            <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 10, boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 5, overflow: 'hidden' }}>
              {cands.filter(c => c.toLowerCase().includes(q.toLowerCase())).map(c => (
                <div key={c} onClick={() => { setOwner(c); setQ(''); setOpen(false); }} style={{ padding: '12px 16px', fontSize: 14, fontFamily: 'Montserrat', color: REG.text, cursor: 'pointer' }}
                  onMouseEnter={e => e.currentTarget.style.background = PC.bg} onMouseLeave={e => e.currentTarget.style.background = '#fff'}>{c}</div>
              ))}
            </div>
          )}
        </div>
      </RegField>
    </RegModal>
  );
}

function SuccessModal({ title, body, onClose }) {
  return (
    <RegModal title={title} onClose={onClose} width={460}
      footer={<PCButton variant="primary" size="lg" fullWidth onClick={onClose}>Got it</PCButton>}>
      <div style={{ textAlign: 'center', padding: '8px 0 16px' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#EAF6EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><path d="M9 17l5 5 11-11" stroke={PC.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <p style={{ fontSize: 15, color: '#42505F', fontFamily: 'Montserrat', lineHeight: 1.6, margin: 0 }}>{body}</p>
      </div>
    </RegModal>
  );
}

// ════════════════ Orchestrator ════════════════
function EmployerRegister({ navigate }) {
  const [step, setStep] = React.useState(0);
  const [biz, setBiz] = React.useState({});
  const [rep, setRep] = React.useState({});
  const setBizF = (k, v) => setBiz(p => ({ ...p, [k]: v }));
  const setRepF = (k, v) => setRep(p => ({ ...p, [k]: v }));
  const [toast, setToast] = React.useState(null);
  const [modal, setModal] = React.useState(null);

  const [branches, setBranches] = React.useState([
    { id: 1, branch: 'Headquarter', dept: 'Maintenance, IT, HRD, Marketing, Finance, Legal, Operation', location: 'Jakarta, Indonesia', email: 'info@seruam.com', phone: '081234567890' },
    { id: 2, branch: 'Bandung', dept: 'Maintenance, IT, HRD, Marketing, Finance, Legal, Operation', location: 'Bandung, Indonesia', email: 'info@seruam.com', phone: '081234567890' },
  ]);
  const [members, setMembers] = React.useState([
    { id: 1, name: 'Bambang Setiawan', you: true, email: 'bambang@seruam.com', branch: 'Headquarters', dept: 'Human Resource', title: 'HRD', role: 'Owner' },
  ]);

  const next = () => { setToast(null); if (step < 3) { window.scrollTo(0, 0); setStep(step + 1); } else { window.__pcJustRegistered = true; window.scrollTo(0, 0); navigate('employer'); } };
  const back = () => { setToast(null); if (step > 0) { window.scrollTo(0, 0); setStep(step - 1); } else navigate('choose-role'); };

  return (
    <>
      <WizardLayout current={step} onBack={back} onNext={next} nextLabel={step === 3 ? 'Submit' : 'Next'}
        toast={toast} onToastClose={() => setToast(null)}>
        {step === 0 && <StepBusinessProfile data={biz} set={setBizF} />}
        {step === 1 && <StepRepresentative data={rep} set={setRepF} />}
        {step === 2 && <StepBranches branches={branches} onAdd={() => setModal({ type: 'addBranch' })} onDelete={id => setBranches(bs => bs.filter(b => b.id !== id))} />}
        {step === 3 && <StepTeam members={members} onInvite={() => setModal({ type: 'addMember' })} onDelete={id => setMembers(ms => ms.filter(m => m.id !== id))} onTransfer={m => setModal({ type: 'transfer', member: m })} />}
      </WizardLayout>

      {modal && modal.type === 'addBranch' && <AddBranchModal onClose={() => setModal(null)} onSave={b => { setBranches(bs => [...bs, b]); setModal(null); setToast('Success add branch'); }} />}
      {modal && modal.type === 'addMember' && <AddTeamMemberModal onClose={() => setModal(null)} onSave={m => { setMembers(ms => [...ms, m]); setModal(null); setToast('Success add team member'); }} />}
      {modal && modal.type === 'transfer' && <TransferOwnershipModal member={modal.member} onClose={() => setModal(null)} onConfirm={owner => { setModal(null); if (owner) setToast('Ownership transferred to ' + owner); }} />}
      {modal && modal.type === 'submitted' && <SuccessModal title="Registration Complete" body="Your employer account has been set up successfully. Welcome to ProConnect!" onClose={() => { setModal(null); navigate('employer'); }} />}
    </>
  );
}

Object.assign(window, { EmployerRegister, ChooseRolePage });
