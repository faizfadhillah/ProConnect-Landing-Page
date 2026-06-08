
// ProConnect — Multi-role Dashboard (account switcher + redesigned home)

// ── Account data ──────────────────────────────────────────────────────────
const ACCT_AVA = {
  colorbox: { bg: '#F4A340', fg: '#1A1A2E', label: 'AC' },
  indah: { bg: '#1E8E5A', fg: '#fff', label: 'IS' },
  superjoy: { bg: '#E23744', fg: '#fff', label: 'SJ' }
};
function AcctAvatar({ id, size = 36, photo }) {
  const a = ACCT_AVA[id] || { bg: PC.lightBlue, fg: PC.blue, label: 'PA' };
  if (photo) return <img src={photo} alt="" style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />;
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: a.bg, color: a.fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.36, fontWeight: 800, fontFamily: 'Montserrat', flexShrink: 0 }}>{a.label}</div>);

}

const INITIAL_ACCOUNTS = [
{ id: 'colorbox', kind: 'company', name: 'Startup Colorbox', legal: 'PT AMBURAN JA...', role: 'Owner', seats: 'Member Seats' },
{ id: 'indah', kind: 'company', name: 'Indah Studio', legal: 'PT Indah Perti...', role: 'Member', seats: 'Member Seats' },
{ id: 'superjoy', kind: 'company', name: 'Superjoy', legal: 'PT Super Joy Semest...', role: 'Owner', incomplete: true },
{ id: 'arufa', kind: 'personal', name: 'Arufa Dhiarma Putu...', legal: 'Personal Acc...', role: 'Candidate', photo: 'assets/role_candidate.png' }];


// ── Account Switcher dropdown ─────────────────────────────────────────────
function AccountSwitcher({ accounts, activeId, onSwitch, onCreateCompany, onAddPersonal, onCancelAccount, navigate }) {
  const [open, setOpen] = React.useState(false);
  const [info, setInfo] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => {if (ref.current && !ref.current.contains(e.target)) {setOpen(false);setInfo(false);}};
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);

  const active = accounts.find((a) => a.id === activeId) || accounts[0];
  const companies = accounts.filter((a) => a.kind === 'company');
  const personal = accounts.find((a) => a.kind === 'personal');

  const Row = ({ a, highlight }) =>
  <div onClick={() => {if (a.incomplete) return;onSwitch(a);setOpen(false);}}
  style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', cursor: a.incomplete ? 'default' : 'pointer', background: highlight ? PC.lightBlue : 'transparent', borderRadius: 8 }}
  onMouseEnter={(e) => {if (!highlight && !a.incomplete) e.currentTarget.style.background = PC.bg;}}
  onMouseLeave={(e) => {if (!highlight) e.currentTarget.style.background = 'transparent';}}>
      <AcctAvatar id={a.id} size={36} photo={a.photo} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.name}</div>
        <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{a.legal} ({a.role})</div>
        {a.incomplete &&
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, color: '#C77A14', background: '#FDEBD0', borderRadius: 6, padding: '4px 10px', fontFamily: 'Montserrat' }}>Registration is incomplete</span>
            <button onClick={(e) => {e.stopPropagation();onCancelAccount(a.id);}} style={{ fontSize: 11.5, fontWeight: 700, color: REG.err, background: '#fff', border: `1px solid ${REG.err}`, borderRadius: 6, padding: '4px 14px', cursor: 'pointer', fontFamily: 'Montserrat' }}>Cancel</button>
          </div>
      }
      </div>
    </div>;


  const PlusRow = ({ label, onClick }) =>
  <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '13px 14px', cursor: 'pointer' }}
  onMouseEnter={(e) => e.currentTarget.style.background = PC.bg} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4v12M4 10h12" stroke={PC.blue} strokeWidth="2" strokeLinecap="round" /></svg>
      <span style={{ fontSize: 14, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat' }}>{label}</span>
    </div>;

  const divider = <div style={{ height: 1, background: PC.border }} />;

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen((o) => !o)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, border: `1px solid ${PC.border}`, background: '#fff', cursor: 'pointer' }}>
        <AcctAvatar id={active.id} size={28} photo={active.photo} />
        <span style={{ flex: 1, textAlign: 'left', fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{active.name}</span>
        <span style={{ fontSize: 11, color: PC.gray, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▼</span>
      </button>
      {open &&
      <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, zIndex: 80, background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 14, boxShadow: '0 18px 50px rgba(4,38,72,0.18)', overflow: 'visible', padding: '6px 0' }}>
          {/* header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px 10px', position: 'relative' }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: PC.medGray, fontFamily: 'Montserrat' }}>Switch account</span>
            <button onClick={() => setInfo((v) => !v)} aria-label="Info" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2, display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.2" stroke={PC.blue} strokeWidth="1.3" /><path d="M9 8v4.2M9 5.6v.6" stroke={PC.blue} strokeWidth="1.4" strokeLinecap="round" /></svg>
            </button>
            {info &&
          <div style={{ position: 'absolute', top: 30, right: 8, zIndex: 90, background: '#111827', color: '#fff', borderRadius: 10, padding: '12px 14px', width: 230, display: 'flex', alignItems: 'flex-start', gap: 10, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="9" cy="9" r="7.2" stroke="#fff" strokeWidth="1.3" /><path d="M9 8v4.2M9 5.6v.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" /></svg>
                <span style={{ fontSize: 13, fontFamily: 'Montserrat', lineHeight: 1.45, flex: 1 }}>You can join another company if you have an invitation</span>
                <button onClick={() => setInfo(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4 4l6 6M10 4l-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg></button>
                <div style={{ position: 'absolute', top: -6, right: 12, width: 12, height: 12, background: '#111827', transform: 'rotate(45deg)' }} />
              </div>
          }
          </div>
          <div style={{ padding: '0 6px' }}>
            {companies.map((a) => <Row key={a.id} a={a} highlight={a.id === activeId} />)}
          </div>
          {divider}
          <PlusRow label="Create company account" onClick={() => {setOpen(false);onCreateCompany();}} />
          {divider}
          {personal ?
        <div style={{ padding: '0 6px' }}><Row a={personal} highlight={personal.id === activeId} /></div> :
        <PlusRow label="Add personal account" onClick={() => {setOpen(false);onAddPersonal();}} />}
        </div>
      }
    </div>);

}

// ── Sidebar ───────────────────────────────────────────────────────────────
const mrIcon = (p) => <svg width="20" height="20" viewBox="0 0 20 20" fill="none">{p}</svg>;
const MR_MENU = [
{ id: 'Dashboard', icon: mrIcon(<><rect x="2.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" /><rect x="11.5" y="2.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" /><rect x="2.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" /><rect x="11.5" y="11.5" width="6" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" /></>) },
{ id: 'Candidate', icon: mrIcon(<><circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M4 17c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>) },
{ id: 'Jobs', icon: mrIcon(<><rect x="3" y="6" width="14" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.5" /><path d="M7 6V5a2 2 0 012-2h2a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.5" /></>), badge: '49', children: ['Jobs', 'Internal Jobs', 'Freelance Jobs'] },
{ id: 'Support', icon: mrIcon(<><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" /><path d="M8 8a2 2 0 113 1.7c-.6.4-1 .8-1 1.6M10 14h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>), children: ['Feedback', 'Term of Service', 'Privacy Policy'] },
{ id: 'Account Management', icon: mrIcon(<><circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M4.5 16.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>), children: ['Staff Management', 'Billing', 'Plan', 'Reset Password', 'Sign Out'] }];


function MultiRoleSidebar({ active, onNav, account, switcher, onUpgrade }) {
  const [expanded, setExpanded] = React.useState([]);
  const toggle = (id) => setExpanded((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  return (
    <div style={{ width: 280, minHeight: '100vh', background: '#fff', borderRight: `1px solid ${PC.border}`, display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <div style={{ padding: '16px 16px 8px' }}>{switcher}</div>

      {/* Profile card */}
      <div style={{ margin: '8px 16px 4px', border: `1px solid ${PC.border}`, borderRadius: 12, padding: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14 }}>
          <AcctAvatar id={account.id} size={42} photo={account.photo} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.3 }}>{account.person || 'Arufa Dhiarma Putu Riordan Kevin Putra ...'}</div>
            <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat', marginTop: 2 }}>{account.legalFull || account.legal}</div>
          </div>
        </div>
        {account.seats &&
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${PC.bg}`, paddingTop: 12, marginBottom: 12 }}>
            <span style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}>Current Seats</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: PC.gray, background: '#E8ECF2', borderRadius: 14, padding: '4px 12px', fontFamily: 'Montserrat' }}>{account.seats}</span>
          </div>
        }
        <PCButton variant="secondary" size="sm" fullWidth onClick={() => onNav('Profile')}>Profile →</PCButton>
      </div>

      {/* Menu */}
      <div style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
        <div style={{ padding: '10px 20px 6px', fontSize: 11, fontWeight: 700, color: PC.medGray, fontFamily: 'Montserrat', letterSpacing: '0.6px' }}>Main Menu</div>
        {MR_MENU.map((item) => {
          const act = active === item.id || (item.children || []).includes(active);
          const exp = expanded.includes(item.id);
          return (
            <div key={item.id}>
              <div onClick={() => item.children ? toggle(item.id) : onNav(item.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px', margin: '2px 12px', borderRadius: 9, cursor: 'pointer', background: act && !item.children ? PC.lightBlue : 'transparent', color: act ? PC.blue : '#42505F' }}
              onMouseEnter={(e) => {if (!(act && !item.children)) e.currentTarget.style.background = PC.bg;}}
              onMouseLeave={(e) => {if (!(act && !item.children)) e.currentTarget.style.background = 'transparent';}}>
                <span style={{ display: 'flex', flexShrink: 0 }}>{item.icon}</span>
                <span style={{ flex: 1, fontSize: 14.5, fontWeight: act ? 700 : 600, fontFamily: 'Montserrat', color: act ? PC.blue : '#42505F' }}>{item.id}</span>
                {item.badge && <span style={{ background: '#E3EEFD', color: PC.blue, borderRadius: 10, padding: '2px 9px', fontSize: 11, fontWeight: 700, fontFamily: 'Montserrat' }}>{item.badge}</span>}
                {item.children && <span style={{ fontSize: 10, color: PC.gray }}>{exp ? '▲' : '▼'}</span>}
              </div>
              {item.children && exp && item.children.map((c) =>
              <div key={c} onClick={() => onNav(c)} style={{ display: 'flex', alignItems: 'center', padding: '9px 14px 9px 49px', margin: '1px 12px', borderRadius: 8, cursor: 'pointer', background: active === c ? PC.lightBlue : 'transparent' }}
              onMouseEnter={(e) => {if (active !== c) e.currentTarget.style.background = PC.bg;}} onMouseLeave={(e) => {if (active !== c) e.currentTarget.style.background = 'transparent';}}>
                  <span style={{ fontSize: 13.5, fontWeight: active === c ? 700 : 500, fontFamily: 'Montserrat', color: active === c ? PC.blue : PC.gray }}>{c}</span>
                </div>
              )}
            </div>);

        })}

        {/* Trial — sits directly below the menu */}
        <div style={{ margin: '16px 16px 0', background: PC.lightBlue, borderRadius: 12, padding: '16px', textAlign: 'center' }} data-comment-anchor="824929fc25-div-173-7">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" style={{ margin: '0 auto 8px', display: 'block' }}><path d="M13 4l9 16H4z" stroke={PC.blue} strokeWidth="1.6" strokeLinejoin="round" /><path d="M13 11v4M13 17.5v.5" stroke={PC.blue} strokeWidth="1.7" strokeLinecap="round" /></svg>
          <div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>You're on a free trial</div>
          <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat', margin: '4px 0 12px' }}>Your trial ends in 6 days</div>
          <PCButton variant="primary" size="sm" fullWidth onClick={onUpgrade}>Upgrade Plan Now</PCButton>
        </div>
      </div>

      <div style={{ padding: '14px 16px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: 12, color: PC.medGray, fontFamily: 'Montserrat' }}>ProConnect © 2026</div>
        <div style={{ fontSize: 11, color: PC.medGray, fontFamily: 'Montserrat', margin: '8px 0 6px' }}>Supported by</div>
        <img src="assets/aseanta_white.png" alt="ASEANTA" style={{ height: 30, display: 'block', margin: '0 auto', filter: 'invert(1) brightness(0.5)' }} />
      </div>
    </div>);

}

// ── Top bar ───────────────────────────────────────────────────────────────
function MultiRoleTopbar({ onMenu }) {
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

// ── Dashboard home ────────────────────────────────────────────────────────
function MultiRoleHome({ account, onNav, onAddSeat }) {
  const mobile = useMobile(900);
  const stats = [['Total Country', '2'], ['Total Branch', '2'], ['Total Member', '14'], ['Total Active Jobs', '0']];
  const steps = ['Business Profile Details', 'Company Representative Info', 'Headquarters and Branch Information', 'Team Management'];
  const seatIcon = {
    full: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l8 4H3z" fill="#fff" /><path d="M5 9v6M9 9v6M13 9v6M17 9v6M3 17h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg>,
    dept: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="7" r="3" stroke="#fff" strokeWidth="1.7" /><circle cx="5.5" cy="9" r="2.2" stroke="#fff" strokeWidth="1.5" /><circle cx="16.5" cy="9" r="2.2" stroke="#fff" strokeWidth="1.5" /></svg>,
    member: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.2" stroke="#7A7A7A" strokeWidth="1.7" /><path d="M5 17c0-3 2.7-5 6-5s6 2 6 5" stroke="#7A7A7A" strokeWidth="1.7" /></svg>
  };
  const seats = [
  { k: 'full', bg: PC.blue, name: 'Full seats', n: '10 seats' },
  { k: 'dept', bg: PC.green, name: 'Dept seats', n: '2 seats' },
  { k: 'member', bg: '#E8ECF2', name: 'Member seats', n: '2 seats' }];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 1060 }}>
      <div>
        <h1 style={{ fontSize: mobile ? 24 : 28, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: 0 }}>Hello {account.first || 'Arufa'}</h1>
        <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', margin: '6px 0 0' }}>Get Started Finding Something</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 16 }}>
        {stats.map(([label, val]) =>
        <div key={label} style={{ background: '#fff', borderRadius: 12, padding: '20px 22px', border: `1px solid ${PC.border}` }}>
            <div style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 12 }}>{label}</div>
            <div style={{ fontSize: 30, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat' }}>{val}</div>
          </div>
        )}
      </div>

      {/* Profile completion */}
      <div style={{ background: '#fff', borderRadius: 14, padding: mobile ? 20 : 26, border: `1px solid ${PC.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 5px' }}>Profile Completion</h2>
            <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', margin: 0 }}>4 of 4 steps completed</p>
          </div>
          <PCButton variant="secondary" size="md" onClick={() => onNav('Profile')}>Edit</PCButton>
        </div>
        <div style={{ borderTop: `1px solid ${PC.bg}`, paddingTop: 20, display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 14 }}>
          {steps.map((s) =>
          <div key={s} style={{ background: PC.lightBlue, borderRadius: 10, padding: '16px 16px', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0 }}><circle cx="11" cy="11" r="9.5" stroke={PC.blue} strokeWidth="1.4" /><path d="M7 11l2.6 2.6L15 8.4" stroke={PC.blue} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ fontSize: 14, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat', lineHeight: 1.35 }}>{s}</span>
            </div>
          )}
        </div>
      </div>

      {/* Plan / seats */}
      <div style={{ background: '#fff', borderRadius: 14, padding: mobile ? 20 : 26, border: `1px solid ${PC.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 22 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 5px' }}>You're on Trial Plan</h2>
            <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', margin: 0 }}>Upgrade to unlock more features</p>
          </div>
          <PCButton variant="primary" size="md" onClick={onAddSeat}>Upgrade Now</PCButton>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 18, borderTop: `1px solid ${PC.bg}`, paddingTop: 22 }}>
          {seats.map((s) =>
          <div key={s.k} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 46, height: 46, borderRadius: 10, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{seatIcon[s.k]}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{s.name}</div>
                <div style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', marginTop: 2 }}>{s.n}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 18 }}>
        {[
        { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="9.5" cy="9.5" r="6" stroke={PC.dark} strokeWidth="1.6" /><path d="M14 14l4 4" stroke={PC.dark} strokeWidth="1.6" strokeLinecap="round" /></svg>, title: 'Find Candidates', desc: 'Directly Find the Ideal Candidates for Your Business', cta: 'Find Now', nav: 'Candidate' },
        { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="7" r="3.2" stroke={PC.dark} strokeWidth="1.6" /><path d="M5 18c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke={PC.dark} strokeWidth="1.6" strokeLinecap="round" /></svg>, title: 'Manage Profile', desc: 'View and Manage Your Business Profile Details', cta: 'Manage Now', nav: 'Profile' },
        { icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="6" width="16" height="12" rx="1.6" stroke={PC.dark} strokeWidth="1.6" /><path d="M8 6V5a2 2 0 012-2h2a2 2 0 012 2v1" stroke={PC.dark} strokeWidth="1.6" /></svg>, title: 'Manage Jobs', desc: 'Post Jobs and Manage Candidate Recruitment for Your Business', cta: 'Manage Now', nav: 'Jobs' }].
        map((a) =>
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

// ── Root ──────────────────────────────────────────────────────────────────
function MultiRoleDashboard({ navigate }) {
  const [accounts, setAccounts] = React.useState(INITIAL_ACCOUNTS);
  const [activeId, setActiveId] = React.useState('colorbox');
  const [active, setActive] = React.useState('Dashboard');
  const [showSuccess, setShowSuccess] = React.useState(() => !!window.__pcJustRegistered);
  const [onTrial, setOnTrial] = React.useState(() => !!window.__pcJustRegistered);
  const [orderModal, setOrderModal] = React.useState(null);
  const [paidToast, setPaidToast] = React.useState(false);
  React.useEffect(() => {window.__pcJustRegistered = false;}, []);

  const account = accounts.find((a) => a.id === activeId) || accounts[0];
  const enriched = { ...account, first: 'Arufa', person: 'Arufa Dhiarma Putu Riordan Kevin Putra ...', legalFull: account.kind === 'company' ? 'PT AMBURAN JAKARTA' : 'me@fullemailaddress.com' };

  const onSwitch = (a) => {
    if (a.kind === 'personal') {navigate('candidate');return;}
    setActiveId(a.id);setActive('Dashboard');
  };
  const goPlan = () => {setActive('Plan');window.scrollTo(0, 0);};
  const openOrder = (cfg) => setOrderModal(cfg || { country: 'Malaysia', full: 5, dept: 1 });

  const switcher =
  <AccountSwitcher accounts={accounts} activeId={activeId} navigate={navigate}
  onSwitch={onSwitch}
  onCreateCompany={() => navigate('register-employer')}
  onAddPersonal={() => navigate('register-candidate')}
  onCancelAccount={(id) => setAccounts((as) => as.filter((a) => a.id !== id))} />;


  const renderContent = () => {
    if (active === 'Dashboard') return <MultiRoleHome account={enriched} onNav={setActive} onAddSeat={goPlan} />;
    if (active === 'Plan') return <PlanPage onUpgrade={openOrder} />;
    if (['Jobs', 'Internal Jobs', 'Freelance Jobs'].includes(active)) return <EmpJobs />;
    if (active === 'Candidate') return <EmpCandidates />;
    if (active === 'Profile') return <EmpProfile />;
    if (active === 'Sign Out') {navigate('home');return null;}
    if (active === 'Term of Service') {navigate('tos');return null;}
    if (active === 'Privacy Policy') {navigate('privacy');return null;}
    if (active === 'Billing') {setActive('Plan');return null;}
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 360 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🚧</div>
          <h3 style={{ fontSize: 20, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 6px' }}>{active}</h3>
          <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat' }}>This section is under construction</p>
        </div>
      </div>);

  };

  const fullbleed = ['Jobs', 'Internal Jobs', 'Freelance Jobs', 'Candidate'].includes(active);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: PC.bg, fontFamily: 'Montserrat, sans-serif' }}>
      <MultiRoleSidebar active={active} onNav={setActive} account={enriched} switcher={switcher} onUpgrade={goPlan} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <MultiRoleTopbar onMenu={() => {}} />
        {onTrial && <TrialBanner onPlan={goPlan} />}
        <div style={{ flex: 1, padding: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
          {fullbleed ?
          <div style={{ padding: '16px 28px 0', flex: 1 }}>{renderContent()}</div> :
          <>
                <div style={{ padding: window.innerWidth <= 900 ? '20px 16px' : '28px 32px', flex: 1 }}>{renderContent()}</div>
                <HPFooter navigate={navigate} />
              </>}
        </div>
      </div>

      {showSuccess && <AccountSuccessModal onClose={() => setShowSuccess(false)} onViewPlan={() => {setShowSuccess(false);goPlan();}} />}
      {orderModal && <ConfirmationOrderModal initCountry={orderModal.country} initFull={orderModal.full} initDept={orderModal.dept}
      onClose={() => setOrderModal(null)}
      onPay={() => {setOrderModal(null);setOnTrial(false);setPaidToast(true);setActive('Dashboard');setTimeout(() => setPaidToast(false), 4000);}} />}
      {paidToast &&
      <div style={{ position: 'fixed', top: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 1200, background: '#1E9E54', color: '#fff', borderRadius: 10, padding: '14px 22px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 12px 36px rgba(0,0,0,0.2)' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.6" /><path d="M6.5 11l3 3L15 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span style={{ fontSize: 15, fontWeight: 700, fontFamily: 'Montserrat' }}>Payment successful. Your plan is now active!</span>
        </div>
      }
    </div>);

}

Object.assign(window, { MultiRoleDashboard, AccountSwitcher });