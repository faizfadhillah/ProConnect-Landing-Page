
// ProConnect — Shared Design Tokens & Components

const PC = {
  blue: '#1560BD',
  blueDark: '#1151A6',
  orange: '#FF7711',
  orangeDark: '#E06800',
  dark: '#292929',
  gray: '#929393',
  border: '#EAEBEB',
  lightBlue: '#EEFAFF',
  bg: '#F8F9F9',
  navy: '#042648',
  white: '#FFFFFF',
  medGray: '#B5B6B6',
  green: '#16A34A',
  red: '#EF4444',
  cardBg: '#F7F8F8'
};

// ── Responsive hook ─────────────────────────────────────────────────────────
function useMobile(bp = 860) {
  const [m, setM] = React.useState(typeof window !== 'undefined' ? window.innerWidth <= bp : false);
  React.useEffect(() => {
    const h = () => setM(window.innerWidth <= bp);
    h();
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, [bp]);
  return m;
}

// ── Button ────────────────────────────────────────────────────────────────
function PCButton({ children, variant = 'primary', size = 'md', onClick, fullWidth, disabled, style: xtra = {} }) {
  const [hov, setHov] = React.useState(false);
  const sizes = {
    xs: { fontSize: 11, padding: '5px 10px', height: 26, borderRadius: 6 },
    sm: { fontSize: 12, padding: '7px 14px', height: 32, borderRadius: 6 },
    md: { fontSize: 14, padding: '10px 20px', height: 40, borderRadius: 8 },
    lg: { fontSize: 15, padding: '12px 28px', height: 48, borderRadius: 8 },
    xl: { fontSize: 16, padding: '14px 32px', height: 52, borderRadius: 8 }
  };
  const vars = {
    primary: { bg: hov ? PC.blueDark : PC.blue, color: '#fff', border: 'none' },
    secondary: { bg: hov ? '#EEF3FB' : '#fff', color: PC.blue, border: `1.5px solid ${PC.blue}` },
    orange: { bg: hov ? PC.orangeDark : PC.orange, color: '#fff', border: 'none' },
    ghost: { bg: hov ? PC.border : 'transparent', color: PC.dark, border: 'none' },
    danger: { bg: hov ? '#DC2626' : PC.red, color: '#fff', border: 'none' },
    navy: { bg: hov ? '#031D3E' : PC.navy, color: '#fff', border: 'none' },
    light: { bg: hov ? PC.border : PC.bg, color: PC.dark, border: `1px solid ${PC.border}` }
  };
  const s = sizes[size] || sizes.md;
  const v = vars[variant] || vars.primary;
  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: 'Montserrat, sans-serif', fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 7,
        transition: 'all 0.15s', opacity: disabled ? 0.55 : 1,
        ...(fullWidth ? { width: '100%' } : {}),
        // Use the `background` shorthand (not `backgroundColor`) so a custom
        // `background` from `style` overrides cleanly. Mixing the longhand here
        // with a shorthand in `xtra` makes React's style diffing leave a stale
        // hover color stuck on the button (it never reverts).
        ...s, background: v.bg, color: v.color, border: v.border,
        ...xtra
      }}>
      {children}</button>);

}

// ── Tag / Status chip ──────────────────────────────────────────────────────
function PCTag({ children, color = 'blue' }) {
  const map = {
    blue: { bg: '#DDEAFB', fg: PC.blue },
    orange: { bg: '#FFF0E4', fg: PC.orange },
    green: { bg: '#DCFCE7', fg: PC.green },
    gray: { bg: PC.border, fg: PC.gray },
    red: { bg: '#FEE2E2', fg: PC.red },
    navy: { bg: '#E2EBF5', fg: PC.navy },
    yellow: { bg: '#FEF9C3', fg: '#CA8A04' }
  };
  const c = map[color] || map.blue;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '2px 8px', borderRadius: 4,
      fontSize: 10, fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase',
      fontFamily: 'Montserrat, sans-serif',
      backgroundColor: c.bg, color: c.fg
    }}>{children}</span>);

}

// ── Avatar ────────────────────────────────────────────────────────────────
function PCAvatar({ name = '?', size = 36, bg, img }) {
  const initials = (name || '?').split(' ').filter(Boolean).map((n) => n[0]).join('').substring(0, 2).toUpperCase();
  const colors = [PC.blue, '#7C3AED', PC.orange, PC.green, '#0891B2', '#BE185D'];
  const autoBg = colors[(name.charCodeAt(0) || 0) % colors.length];
  if (img) return <img src={img} alt={name} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      backgroundColor: bg || autoBg, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: Math.max(10, size * 0.36), fontWeight: 700,
      fontFamily: 'Montserrat, sans-serif', flexShrink: 0, userSelect: 'none'
    }}>{initials}</div>);

}

// ── Input ─────────────────────────────────────────────────────────────────
function PCInput({ label, placeholder, value, onChange, type = 'text', icon, helper, required, style: xtra = {} }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      {label &&
      <label style={{ fontSize: 13, fontWeight: 600, fontFamily: 'Montserrat', color: PC.dark }}>
          {label}{required && <span style={{ color: PC.orange, marginLeft: 2 }}>*</span>}
        </label>
      }
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', left: 12, color: PC.gray, fontSize: 15, pointerEvents: 'none' }}>{icon}</span>}
        <input
          type={type} placeholder={placeholder} value={value} onChange={onChange}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', height: 42, borderRadius: 8, boxSizing: 'border-box',
            border: `1.5px solid ${focus ? PC.blue : PC.border}`,
            padding: icon ? '0 12px 0 38px' : '0 12px',
            fontSize: 14, fontFamily: 'Montserrat, sans-serif', fontWeight: 500,
            color: PC.dark, outline: 'none', backgroundColor: '#fff',
            transition: 'border-color 0.15s', ...xtra
          }} />
        
      </div>
      {helper && <span style={{ fontSize: 11, color: PC.gray, fontFamily: 'Montserrat' }}>{helper}</span>}
    </div>);

}

// ── Logo ──────────────────────────────────────────────────────────────────
function PCLogo({ height = 28, dark = false }) {
  const width = Math.round(height * (297 / 45));
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', userSelect: 'none', flexShrink: 0 }}>
      <img
        src="proconnect-logo.svg"
        alt="ProConnect"
        width={width}
        height={height}
        style={{ display: 'block', filter: dark ? 'brightness(0) invert(1)' : 'none', height: "30px" }} />
      
    </div>);

}
// ── Sidebar ───────────────────────────────────────────────────────────────
function PCSidebar({ type = 'employer', active, onNav, onHome }) {
  const [expanded, setExpanded] = React.useState(['Jobs']);
  const toggle = (l) => setExpanded((p) => p.includes(l) ? p.filter((x) => x !== l) : [...p, l]);

  const employerItems = [
  { id: 'Dashboard', icon: dashIcon, badge: null },
  { id: 'Candidate', icon: candidateIcon, badge: '49' },
  { id: 'Jobs', icon: jobsIcon, badge: '49', children: [
    { id: 'Jobs', badge: '30' },
    { id: 'Internal Jobs', badge: '10' },
    { id: 'Freelance Jobs', badge: '9' }]
  },
  null,
  { id: 'Support', icon: supportIcon, badge: null },
  { id: 'Feedback', icon: msgIcon, badge: null },
  { id: 'Term of Service', icon: docIcon, badge: null },
  { id: 'Privacy Policy', icon: lockIcon, badge: null },
  null,
  { id: 'Account Management', icon: settingsIcon, badge: null },
  { id: 'Staff Management', icon: teamIcon, badge: null },
  { id: 'Billing', icon: cardIcon, badge: null },
  { id: 'Plan', icon: starIcon, badge: 'Free' },
  { id: 'Reset Password', icon: keyIcon, badge: null },
  { id: 'Sign Out', icon: exitIcon, badge: null, action: onHome }];


  const candidateItems = [
  { id: 'Dashboard', icon: dashIcon, badge: null },
  { id: 'Companies', icon: buildingIcon, badge: '49' },
  { id: 'Jobs', icon: jobsIcon, badge: '49', children: [
    { id: 'Jobs', badge: '30' },
    { id: 'Saved Jobs', badge: '10' },
    { id: 'Applied Jobs', badge: '9' }]
  },
  null,
  { id: 'Support', icon: supportIcon, badge: null },
  { id: 'Feedback', icon: msgIcon, badge: null },
  { id: 'Term of Service', icon: docIcon, badge: null },
  { id: 'Privacy Policy', icon: lockIcon, badge: null },
  null,
  { id: 'Account Management', icon: settingsIcon, badge: null },
  { id: 'Delete Account', icon: trashIcon, badge: null },
  { id: 'Reset Password', icon: keyIcon, badge: null },
  { id: 'Sign Out', icon: exitIcon, badge: null, action: onHome }];


  const items = type === 'employer' ? employerItems : candidateItems;

  const isActive = (id) => active === id || (items.find((i) => i && i.id === id)?.children || []).some((c) => c.id === active);

  const renderItem = (item, child = false) => {
    if (!item) return <div key={Math.random()} style={{ height: 1, background: PC.border, margin: '6px 16px' }} />;
    const act = isActive(item.id) || active === item.id;
    const exp = expanded.includes(item.id);
    return (
      <div key={item.id}>
        <div
          onClick={() => {if (item.action) {item.action();return;}item.children ? toggle(item.id) : onNav(item.id);}}
          style={{
            display: 'flex', alignItems: 'center', gap: 9,
            padding: child ? '7px 16px 7px 40px' : '8px 12px',
            margin: '1px 6px', borderRadius: 7, cursor: 'pointer',
            background: act ? '#EEF3FB' : 'transparent',
            transition: 'background 0.12s'
          }}
          onMouseEnter={(e) => !act && (e.currentTarget.style.background = PC.bg)}
          onMouseLeave={(e) => !act && (e.currentTarget.style.background = 'transparent')}>
          
          {!child && <span style={{ width: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</span>}
          <span style={{ flex: 1, fontSize: child ? 13 : 14, fontWeight: act ? 700 : 600, fontFamily: 'Montserrat', color: act ? PC.blue : PC.dark }}>{item.id}</span>
          {item.badge &&
          <span style={{
            background: act ? PC.blue : '#E8ECF2', color: act ? '#fff' : PC.gray,
            borderRadius: 9, padding: '1px 7px', fontSize: 10, fontWeight: 700, fontFamily: 'Montserrat'
          }}>{item.badge}</span>
          }
          {item.children && <span style={{ fontSize: 9, color: PC.gray, marginLeft: 2 }}>{exp ? '▲' : '▼'}</span>}
        </div>
        {item.children && exp && item.children.map((c) => renderItem(c, true))}
      </div>);

  };

  return (
    <div style={{
      width: 258, minHeight: '100vh', background: '#fff',
      borderRight: `1px solid ${PC.border}`,
      display: 'flex', flexDirection: 'column', flexShrink: 0
    }}>
      {/* Logo */}
      <div style={{ padding: '18px 18px 14px', borderBottom: `1px solid ${PC.border}` }}>
        <PCLogo height={26} />
      </div>

      {/* Profile */}
      <div style={{ padding: '14px 16px', borderBottom: `1px solid ${PC.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <PCAvatar name={type === 'employer' ? 'Startup Colorbox' : 'Arufa Dhiarma'} size={42} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Montserrat', color: PC.dark, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {type === 'employer' ? 'Startup Colorbox' : 'Personal Account'}
            </div>
            <div style={{ fontSize: 11, color: PC.gray, fontFamily: 'Montserrat', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 2 }}>
              {type === 'employer' ? 'PT AMBURAN JAKARTA' : 'me@fullemailaddress.com'}
            </div>
            <div style={{ fontSize: 11, color: PC.gray, fontFamily: 'Montserrat', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {type === 'employer' ? 'Arufa Dhiarma Putu Riordan...' : '081291028392'}
            </div>
          </div>
        </div>
        {type === 'employer' &&
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <PCTag color="yellow">Free Seats</PCTag>
            <PCTag color="orange">⚠ Verify Phone</PCTag>
          </div>
        }
        <PCButton variant="secondary" size="sm" fullWidth onClick={() => onNav('Profile')}>Profile</PCButton>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, padding: '8px 0', overflowY: 'auto' }}>
        <div style={{ padding: '8px 18px 4px', fontSize: 10, fontWeight: 700, color: PC.medGray, fontFamily: 'Montserrat', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
          Main Menu
        </div>
        {items.map((item, i) => <React.Fragment key={i}>{renderItem(item)}</React.Fragment>)}
      </div>

      {/* Trial banner (employer only) */}
      {type === 'employer' &&
      <div style={{ margin: '0 10px 10px', padding: '12px 14px', background: '#FFF7F0', border: `1px solid #FFD5AA`, borderRadius: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, fontFamily: 'Montserrat', color: PC.dark, marginBottom: 2 }}>You're on a free trial</div>
          <div style={{ fontSize: 11, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 8 }}>Your trial ends in 6 days</div>
          <PCButton variant="orange" size="sm" fullWidth>Upgrade Plan Now</PCButton>
        </div>
      }

      {/* Footer */}
      <div style={{ padding: '10px 18px', borderTop: `1px solid ${PC.border}` }}>
        <div style={{ fontSize: 11, color: PC.medGray, fontFamily: 'Montserrat', marginBottom: 2 }}>ProConnect © 2026</div>
        <div style={{ fontSize: 11, color: PC.medGray, fontFamily: 'Montserrat' }}>Supported by ASEANTA</div>
      </div>
    </div>);

}

// ── Top header bar ────────────────────────────────────────────────────────
function PCDashHeader({ type, onHome }) {
  return (
    <div style={{
      height: 58, background: '#fff', borderBottom: `1px solid ${PC.border}`,
      display: 'flex', alignItems: 'center', padding: '0 24px', gap: 16, flexShrink: 0
    }}>
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', gap: 9,
        background: PC.bg, border: `1px solid ${PC.border}`, borderRadius: 8,
        padding: '9px 14px', maxWidth: 380, cursor: 'text'
      }}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="6.5" cy="6.5" r="5" stroke={PC.gray} strokeWidth="1.5" /><line x1="10.5" y1="10.5" x2="13.5" y2="13.5" stroke={PC.gray} strokeWidth="1.5" strokeLinecap="round" /></svg>
        <span style={{ fontSize: 13, color: PC.medGray, fontFamily: 'Montserrat' }}>
          {type === 'employer' ? 'Search candidates, jobs...' : 'Find jobs & companies here'}
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: PC.gray, fontSize: 18, padding: 4 }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2a6 6 0 016 6v2l1.5 3H2.5L4 10V8a6 6 0 016-6z" stroke={PC.gray} strokeWidth="1.5" fill="none" /><path d="M8 16a2 2 0 004 0" stroke={PC.gray} strokeWidth="1.5" /></svg>
        </button>
        <PCAvatar name="Arufa Dhiarma" size={34} />
      </div>
    </div>);

}

// ── SVG icon helpers ──────────────────────────────────────────────────────
const iconProps = { width: 15, height: 15, viewBox: '0 0 15 15', fill: 'none', style: { display: 'block' } };
const dashIcon = <svg {...iconProps}><rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" /><rect x="8" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" /><rect x="2" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" /><rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" /></svg>;
const candidateIcon = <svg {...iconProps}><circle cx="7.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
const jobsIcon = <svg {...iconProps}><rect x="2" y="4" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M5 4V3a2.5 2.5 0 015 0v1" stroke="currentColor" strokeWidth="1.4" /></svg>;
const supportIcon = <svg {...iconProps}><circle cx="7.5" cy="7.5" r="5.5" stroke="currentColor" strokeWidth="1.4" /><path d="M7.5 5v3l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
const msgIcon = <svg {...iconProps}><path d="M2 2h11a1 1 0 011 1v7a1 1 0 01-1 1H5L2 14V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.4" /></svg>;
const docIcon = <svg {...iconProps}><rect x="3" y="1" width="9" height="13" rx="1" stroke="currentColor" strokeWidth="1.4" /><line x1="5.5" y1="5" x2="9.5" y2="5" stroke="currentColor" strokeWidth="1.2" /><line x1="5.5" y1="8" x2="9.5" y2="8" stroke="currentColor" strokeWidth="1.2" /></svg>;
const lockIcon = <svg {...iconProps}><rect x="3" y="6" width="9" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M5 6V5a2.5 2.5 0 015 0v1" stroke="currentColor" strokeWidth="1.4" /></svg>;
const settingsIcon = <svg {...iconProps}><circle cx="7.5" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.4" /><path d="M7.5 1v1.5M7.5 12v1.5M1 7.5h1.5M12 7.5h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
const teamIcon = <svg {...iconProps}><circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" /><circle cx="10" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" /><path d="M1 13c0-2.2 1.8-4 4-4s4 1.8 4 4M7 11c.5-.6 1.4-1 2-1 1.7 0 3 1.3 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>;
const cardIcon = <svg {...iconProps}><rect x="1.5" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><line x1="1.5" y1="6.5" x2="13.5" y2="6.5" stroke="currentColor" strokeWidth="1.4" /></svg>;
const starIcon = <svg {...iconProps}><path d="M7.5 1.5l1.5 4h4L9.5 8l1.5 4-3.5-2.5L4 12l1.5-4-3.5-2.5h4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" /></svg>;
const keyIcon = <svg {...iconProps}><circle cx="5.5" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.4" /><path d="M9 7.5h4.5M11 6v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;
const exitIcon = <svg {...iconProps}><path d="M9 2H3a1 1 0 00-1 1v9a1 1 0 001 1h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /><path d="M11 5l3 2.5L11 10M14 7.5H6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const buildingIcon = <svg {...iconProps}><rect x="2" y="3" width="11" height="11" rx="1" stroke="currentColor" strokeWidth="1.4" /><path d="M5 14V9h5v5" stroke="currentColor" strokeWidth="1.4" /><line x1="5" y1="6" x2="7" y2="6" stroke="currentColor" strokeWidth="1.2" /><line x1="8" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="1.2" /></svg>;
const trashIcon = <svg {...iconProps}><path d="M2 4h11M5 4V2h5v2M4 4l.75 9.5h5.5L11 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>;

// ── Country dial codes (flag emoji + ISO + dial code) ─────────────────────
const COUNTRY_CODES = [
  ['ID','Indonesia','62'],['SG','Singapore','65'],['MY','Malaysia','60'],['TH','Thailand','66'],
  ['PH','Philippines','63'],['VN','Vietnam','84'],['KH','Cambodia','855'],['BN','Brunei','673'],
  ['LA','Laos','856'],['MM','Myanmar','95'],['US','United States','1'],['GB','United Kingdom','44'],
  ['AU','Australia','61'],['NZ','New Zealand','64'],['IN','India','91'],['CN','China','86'],
  ['HK','Hong Kong','852'],['TW','Taiwan','886'],['JP','Japan','81'],['KR','South Korea','82'],
  ['MO','Macau','853'],['BD','Bangladesh','880'],['PK','Pakistan','92'],['LK','Sri Lanka','94'],
  ['NP','Nepal','977'],['AE','United Arab Emirates','971'],['SA','Saudi Arabia','966'],['QA','Qatar','974'],
  ['KW','Kuwait','965'],['BH','Bahrain','973'],['OM','Oman','968'],['IL','Israel','972'],
  ['TR','Turkey','90'],['EG','Egypt','20'],['ZA','South Africa','27'],['NG','Nigeria','234'],
  ['KE','Kenya','254'],['MA','Morocco','212'],['DE','Germany','49'],['FR','France','33'],
  ['IT','Italy','39'],['ES','Spain','34'],['PT','Portugal','351'],['NL','Netherlands','31'],
  ['BE','Belgium','32'],['CH','Switzerland','41'],['AT','Austria','43'],['SE','Sweden','46'],
  ['NO','Norway','47'],['DK','Denmark','45'],['FI','Finland','358'],['IE','Ireland','353'],
  ['PL','Poland','48'],['CZ','Czechia','420'],['GR','Greece','30'],['RU','Russia','7'],
  ['UA','Ukraine','380'],['RO','Romania','40'],['HU','Hungary','36'],['CA','Canada','1'],
  ['MX','Mexico','52'],['BR','Brazil','55'],['AR','Argentina','54'],['CL','Chile','56'],
  ['CO','Colombia','57'],['PE','Peru','51'],['VE','Venezuela','58'],['TL','Timor-Leste','670'],
  ['PG','Papua New Guinea','675'],['FJ','Fiji','679'],['MV','Maldives','960'],['MN','Mongolia','976'],
];
function flagEmoji(iso) {
  return iso.toUpperCase().replace(/./g, c => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

// Searchable country-code picker. value = dial code string like "62". dark = login theme.
function CountryCodeSelect({ value = '62', onChange, dark = false }) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const ref = React.useRef(null);
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 10);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const sel = COUNTRY_CODES.find(c => c[2] === String(value).replace('+', '')) || ['', 'Custom', String(value).replace('+', '')];
  const digits = q.replace(/[^0-9]/g, '');
  const filtered = COUNTRY_CODES.filter(c => {
    const s = q.trim().toLowerCase();
    if (!s) return true;
    const byName = c[1].toLowerCase().includes(s);
    const byCode = digits && c[2].includes(digits);
    return byName || byCode;
  });
  const showCustom = digits && !COUNTRY_CODES.some(c => c[2] === digits);
  const pick = (code) => { onChange && onChange(code); setOpen(false); setQ(''); };

  const trigBg = dark ? 'rgba(255,255,255,0.06)' : '#fff';
  const trigBorder = dark ? 'rgba(255,255,255,0.28)' : '#E3E6EA';
  const trigColor = dark ? '#fff' : '#1A2B45';
  const panelBg = dark ? '#16202E' : '#fff';
  const panelBorder = dark ? 'rgba(255,255,255,0.16)' : '#E3E6EA';
  const itemColor = dark ? 'rgba(255,255,255,0.92)' : '#1A2B45';
  const subColor = dark ? 'rgba(255,255,255,0.5)' : '#9AA3AD';
  const height = dark ? 50 : 52;

  return (
    <div ref={ref} style={{ position: 'relative', width: '100%' }}>
      <button type="button" onClick={() => setOpen(o => !o)} style={{
        width: '100%', height, borderRadius: dark ? 8 : 10, border: `1px solid ${trigBorder}`, background: trigBg,
        display: 'flex', alignItems: 'center', gap: 7, padding: '0 12px', cursor: 'pointer', fontFamily: 'Montserrat',
        color: trigColor, fontSize: 15, fontWeight: 600,
      }}>
        <span style={{ fontSize: 18, lineHeight: 1 }}>{sel[0] ? flagEmoji(sel[0]) : '🌐'}</span>
        <span>+{sel[2]}</span>
        <span style={{ marginLeft: 'auto', fontSize: 10, color: dark ? 'rgba(255,255,255,0.7)' : '#7A828C' }}>▼</span>
      </button>
      {open && (
        <div style={{ position: 'absolute', top: height + 6, left: 0, zIndex: 60, width: 300, maxWidth: '86vw', background: panelBg, border: `1px solid ${panelBorder}`, borderRadius: 12, boxShadow: '0 16px 44px rgba(0,0,0,0.22)', overflow: 'hidden' }}>
          <div style={{ padding: 10, borderBottom: `1px solid ${panelBorder}` }}>
            <input ref={inputRef} value={q} onChange={e => setQ(e.target.value)} placeholder="Search country or code…"
              onKeyDown={e => { if (e.key === 'Enter' && showCustom) pick(digits); }}
              style={{ width: '100%', height: 40, boxSizing: 'border-box', borderRadius: 8, border: `1px solid ${panelBorder}`, background: dark ? 'rgba(255,255,255,0.06)' : '#fff', color: itemColor, padding: '0 12px', fontSize: 14, fontFamily: 'Montserrat', outline: 'none' }} />
          </div>
          <div style={{ maxHeight: 260, overflowY: 'auto' }}>
            {showCustom && (
              <div onClick={() => pick(digits)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.07)' : PC.bg} onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <span style={{ fontSize: 18 }}>🌐</span>
                <span style={{ fontSize: 14, color: itemColor, fontFamily: 'Montserrat', fontWeight: 600 }}>Use +{digits}</span>
                <span style={{ marginLeft: 'auto', fontSize: 12, color: subColor, fontFamily: 'Montserrat' }}>Custom</span>
              </div>
            )}
            {filtered.map(c => (
              <div key={c[0] + c[2]} onClick={() => pick(c[2])} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 14px', cursor: 'pointer', background: c[2] === String(value).replace('+', '') ? (dark ? 'rgba(255,255,255,0.06)' : PC.lightBlue) : 'transparent' }}
                onMouseEnter={e => e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.07)' : PC.bg} onMouseLeave={e => e.currentTarget.style.background = c[2] === String(value).replace('+', '') ? (dark ? 'rgba(255,255,255,0.06)' : PC.lightBlue) : 'transparent'}>
                <span style={{ fontSize: 18, lineHeight: 1 }}>{flagEmoji(c[0])}</span>
                <span style={{ fontSize: 14, color: itemColor, fontFamily: 'Montserrat', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c[1]}</span>
                <span style={{ fontSize: 13.5, color: subColor, fontFamily: 'Montserrat', fontWeight: 600 }}>+{c[2]}</span>
              </div>
            ))}
            {filtered.length === 0 && !showCustom && <div style={{ padding: '16px 14px', fontSize: 13, color: subColor, fontFamily: 'Montserrat', textAlign: 'center' }}>No match. Type a number for a custom code</div>}
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, {
  PC, PCButton, PCTag, PCAvatar, PCInput, PCLogo, PCBadge: () => null, PCSidebar, PCDashHeader, useMobile,
  COUNTRY_CODES, flagEmoji, CountryCodeSelect,
});