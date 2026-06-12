
// ProConnect — Subscription / Payment flow (Plan page, Confirmation Order, trial banner, success modal)

const PLAN_COUNTRIES = {
  Indonesia:   { iso: 'ID', full: 350000, dept: 150000 },
  Malaysia:    { iso: 'MY', full: 750000, dept: 580000 },
  Singapore:   { iso: 'SG', full: 820000, dept: 610000 },
  Thailand:    { iso: 'TH', full: 640000, dept: 470000 },
  Philippines: { iso: 'PH', full: 520000, dept: 390000 },
  Vietnam:     { iso: 'VN', full: 480000, dept: 360000 },
};
const rp = (n) => 'Rp ' + Math.round(n).toLocaleString('id-ID');

// ── Trial banner ──────────────────────────────────────────────────────────
function TrialBanner({ onPlan }) {
  return (
    <div style={{ background: '#FBF4DD', borderBottom: '1px solid #F0E2B6', padding: '13px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0 }}><path d="M11 3l8 15H3z" stroke="#B7860B" strokeWidth="1.6" strokeLinejoin="round" /><path d="M11 9v4M11 15.5v.5" stroke="#B7860B" strokeWidth="1.7" strokeLinecap="round" /></svg>
      <span style={{ fontSize: 14, color: '#7A5A05', fontFamily: 'Montserrat' }}>
        You have <b>6D 23H</b> on the free trial. You can manage your subscription from the <span onClick={onPlan} style={{ fontWeight: 700, color: '#7A5A05', textDecoration: 'underline', cursor: 'pointer' }}>Plan page</span>
      </span>
    </div>
  );
}

// ── Account Created Successfully modal ────────────────────────────────────
function AccountSuccessModal({ onClose, onViewPlan }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(26,43,69,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ background: '#fff', borderRadius: 18, width: 560, maxWidth: '100%', padding: '40px 44px', position: 'relative', textAlign: 'center', boxShadow: '0 24px 70px rgba(0,0,0,0.3)' }}>
        <button onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6 6l10 10M16 6L6 16" stroke="#6B7480" strokeWidth="1.8" strokeLinecap="round" /></svg>
        </button>
        <div style={{ width: 72, height: 72, borderRadius: '50%', margin: '0 auto 18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none"><circle cx="36" cy="36" r="26" stroke={PC.green} strokeWidth="3.5" /><path d="M25 36l8 8 16-17" stroke={PC.green} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 12px' }}>Account Created Successfully</h2>
        <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 28px', lineHeight: 1.6 }}>Enjoy 7 days of free access to Full Seats and Department Seats.</p>
        <div style={{ display: 'flex', gap: 14 }}>
          <PCButton variant="secondary" size="lg" fullWidth onClick={onViewPlan}>View about plan</PCButton>
          <PCButton variant="primary" size="lg" fullWidth onClick={onClose}>Understand</PCButton>
        </div>
      </div>
    </div>
  );
}

// ── Country select with flag ──────────────────────────────────────────────
function PlanCountrySelect({ value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const iso = PLAN_COUNTRIES[value].iso;
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', height: 52, borderRadius: 10, border: `1.5px solid ${open ? PC.blue : PC.border}`, background: '#fff', display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', cursor: 'pointer' }}>
        <span style={{ fontSize: 20 }}>{flagEmoji(iso)}</span>
        <span style={{ flex: 1, textAlign: 'left', fontSize: 15, fontWeight: 600, color: PC.dark, fontFamily: 'Montserrat' }}>{value}</span>
        <span style={{ fontSize: 11, color: '#7A828C', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0, background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 10, boxShadow: '0 12px 32px rgba(0,0,0,0.14)', zIndex: 30, overflow: 'hidden' }}>
          {Object.keys(PLAN_COUNTRIES).map(c => (
            <div key={c} onClick={() => { onChange(c); setOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 16px', cursor: 'pointer', background: c === value ? PC.lightBlue : '#fff', fontFamily: 'Montserrat' }}
              onMouseEnter={e => { if (c !== value) e.currentTarget.style.background = PC.bg; }} onMouseLeave={e => { if (c !== value) e.currentTarget.style.background = '#fff'; }}>
              <span style={{ fontSize: 18 }}>{flagEmoji(PLAN_COUNTRIES[c].iso)}</span>
              <span style={{ fontSize: 14, color: PC.dark }}>{c}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SeatStepper({ value, set }) {
  const btn = (label, fn) => <button onClick={fn} style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${PC.border}`, background: '#fff', cursor: 'pointer', fontSize: 18, color: PC.dark, fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{label}</button>;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {btn('−', () => set(v => Math.max(0, v - 1)))}
      <span style={{ minWidth: 24, textAlign: 'center', fontSize: 16, fontWeight: 700, fontFamily: 'Montserrat', color: PC.dark }}>{value}</span>
      {btn('+', () => set(v => v + 1))}
    </div>
  );
}

function SeatRow({ icon, bg, name, price, sub, value, set, free }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', border: `1px solid ${PC.border}`, borderRadius: 12 }}>
      <div style={{ width: 44, height: 44, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15.5, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{name}</div>
        <div style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat' }}>{free ? 'FREE' : <>{price}<br />{sub}</>}</div>
      </div>
      {free ? <span style={{ fontSize: 15, fontWeight: 700, color: '#9AA3AD', fontFamily: 'Montserrat' }}>Unlimited</span> : <SeatStepper value={value} set={set} />}
    </div>
  );
}

const seatIconFull = <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l8 4H3z" fill="#fff" /><path d="M5 9v6M9 9v6M13 9v6M17 9v6M3 17h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg>;
const seatIconDept = <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="7" r="3" stroke="#fff" strokeWidth="1.7" /><circle cx="5.5" cy="9" r="2.2" stroke="#fff" strokeWidth="1.5" /><circle cx="16.5" cy="9" r="2.2" stroke="#fff" strokeWidth="1.5" /></svg>;
const seatIconMember = <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.2" stroke="#7A7A7A" strokeWidth="1.7" /><path d="M5 17c0-3 2.7-5 6-5s6 2 6 5" stroke="#7A7A7A" strokeWidth="1.7" /></svg>;

// Dark calculation summary
function CalcSummary({ country, full, dept, annual, setAnnual, total, onUpgrade, label = 'Upgrade Now' }) {
  const iso = PLAN_COUNTRIES[country].iso;
  return (
    <div style={{ background: '#0E1726', borderRadius: 16, padding: 24, color: '#fff' }}>
      <div style={{ fontSize: 18, fontWeight: 800, fontFamily: 'Montserrat' }}>Calculation Summary</div>
      <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat', marginBottom: 18 }}>This calculation works on all type seats</div>
      <div style={{ display: 'flex', gap: 40, borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: 16, marginBottom: 16 }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Montserrat', marginBottom: 8 }}>Full seats</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.85)', fontFamily: 'Montserrat' }}><span style={{ fontSize: 15 }}>{flagEmoji(iso)}</span>{full} seats</div>
        </div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Montserrat', marginBottom: 8 }}>Dept seats</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'rgba(255,255,255,0.85)', fontFamily: 'Montserrat' }}><span style={{ fontSize: 15 }}>{flagEmoji(iso)}</span>{dept} seats</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 16 }}>
        <span style={{ fontSize: 14, fontFamily: 'Montserrat' }}>Rp</span>
        <span style={{ fontSize: 30, fontWeight: 800, fontFamily: 'Montserrat' }}>{Math.round(total).toLocaleString('id-ID')}</span>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat' }}>/mo</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: '#34D399', background: 'rgba(52,211,153,0.14)', borderRadius: 14, padding: '5px 12px', fontFamily: 'Montserrat' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#34D399" strokeWidth="1.2" /><path d="M4.5 7l1.7 1.7L9.5 5.3" stroke="#34D399" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>Save 10%
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button onClick={() => setAnnual(a => !a)} style={{ width: 42, height: 23, borderRadius: 12, border: 'none', background: annual ? PC.blue : 'rgba(255,255,255,0.25)', position: 'relative', cursor: 'pointer' }}>
            <span style={{ position: 'absolute', top: 2, left: annual ? 21 : 2, width: 19, height: 19, borderRadius: '50%', background: '#fff', transition: 'left 0.15s' }} />
          </button>
          <span style={{ fontSize: 13.5, color: '#fff', fontFamily: 'Montserrat' }}>Annual</span>
        </div>
      </div>
      <PCButton variant="primary" size="lg" fullWidth onClick={onUpgrade}>{label}</PCButton>
    </div>
  );
}

// ── Confirmation Order modal ──────────────────────────────────────────────
function ConfirmationOrderModal({ initCountry, initFull, initDept, onClose, onPay }) {
  const mobile = useMobile(820);
  const [country, setCountry] = React.useState(initCountry || 'Malaysia');
  const [full, setFull] = React.useState(initFull ?? 5);
  const [dept, setDept] = React.useState(initDept ?? 1);
  const [annual, setAnnual] = React.useState(true);
  const c = PLAN_COUNTRIES[country];
  const monthly = full * c.full + dept * c.dept;
  const total = annual ? monthly * 0.9 : monthly;
  const iso = c.iso;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1100, background: 'rgba(26,43,69,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: mobile ? 0 : 24 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: mobile ? '18px 18px 0 0' : 18, width: mobile ? '100%' : 880, maxWidth: '100%', maxHeight: mobile ? '94vh' : '90vh', overflowY: 'auto', padding: mobile ? '24px 20px' : '30px 34px', boxShadow: '0 24px 70px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: 0 }}>Confirmation Order</h2>
          <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6 6l10 10M16 6L6 16" stroke="#6B7480" strokeWidth="1.8" strokeLinecap="round" /></svg></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.2fr 1fr', gap: 24 }}>
          {/* Seats detail */}
          <div style={{ border: `1px solid ${PC.border}`, borderRadius: 14, padding: 22 }}>
            <h3 style={{ fontSize: 17, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 4px' }}>Seats Detail</h3>
            <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 18px' }}>Add or remove seats to match your hiring needs</p>
            <div style={{ marginBottom: 16 }}><PlanCountrySelect value={country} onChange={setCountry} /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <SeatRow icon={seatIconFull} bg={PC.blue} name="Full Recruiter Seats" price={rp(c.full)} sub="Per user/mo" value={full} set={setFull} />
              <SeatRow icon={seatIconDept} bg={PC.green} name="Department Head Seats" price={rp(c.dept)} sub="Per user/mo" value={dept} set={setDept} />
            </div>
          </div>
          {/* Order summary */}
          <div style={{ border: `1px solid ${PC.border}`, borderRadius: 14, padding: 22, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: 17, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 4px' }}>Order Summary</h3>
            <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 18px' }}>This is summary order based on your seats</p>
            <div style={{ display: 'flex', gap: 36, marginBottom: 16 }}>
              <div><div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 7 }}>Full seats</div><div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}><span style={{ fontSize: 15 }}>{flagEmoji(iso)}</span>{full} seats</div></div>
              <div><div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 7 }}>Dept seats</div><div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}><span style={{ fontSize: 15 }}>{flagEmoji(iso)}</span>{dept} seats</div></div>
            </div>
            <div style={{ borderTop: `1px solid ${PC.bg}`, paddingTop: 14, display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 16 }}>
              <span style={{ fontSize: 14, color: PC.dark, fontFamily: 'Montserrat' }}>Rp</span>
              <span style={{ fontSize: 28, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat' }}>{Math.round(total).toLocaleString('id-ID')}</span>
              <span style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}>/mo</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 600, color: PC.green, background: '#E7F6EC', borderRadius: 14, padding: '5px 12px', fontFamily: 'Montserrat' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke={PC.green} strokeWidth="1.2" /><path d="M4.5 7l1.7 1.7L9.5 5.3" stroke={PC.green} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>Save 10%
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button onClick={() => setAnnual(a => !a)} style={{ width: 42, height: 23, borderRadius: 12, border: 'none', background: annual ? PC.blue : '#C4CAD2', position: 'relative', cursor: 'pointer' }}>
                  <span style={{ position: 'absolute', top: 2, left: annual ? 21 : 2, width: 19, height: 19, borderRadius: '50%', background: '#fff', transition: 'left 0.15s' }} />
                </button>
                <span style={{ fontSize: 13.5, color: PC.dark, fontFamily: 'Montserrat' }}>Annual</span>
              </div>
            </div>
            <PCButton variant="primary" size="lg" fullWidth onClick={() => onPay({ country, full, dept, total })}>Pay Now</PCButton>
            <div style={{ fontSize: 12, color: PC.medGray, fontFamily: 'Montserrat', textAlign: 'center', marginTop: 10 }}>Billed every month on the 28th</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Plan page (Simple, transparent pricing) ───────────────────────────────
function PlanPage({ onUpgrade }) {
  const mobile = useMobile(900);
  const [country, setCountry] = React.useState('Malaysia');
  const [full, setFull] = React.useState(5);
  const [dept, setDept] = React.useState(1);
  const [annual, setAnnual] = React.useState(true);
  const c = PLAN_COUNTRIES[country];
  const monthly = full * c.full + dept * c.dept;
  const total = annual ? monthly * 0.9 : monthly;

  const seatCard = (bg, icon, title, roleFor, bullets) => (
    <div style={{ background: bg === PC.blue ? '#EAF1FB' : '#E9F6EE', borderRadius: 14, padding: '22px 24px', flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</div>
        <span style={{ fontSize: 18, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat' }}>{title}</span>
      </div>
      <div style={{ fontSize: 13.5, fontFamily: 'Montserrat', marginBottom: 14 }}><span style={{ fontWeight: 700, color: PC.dark }}>Role for:</span> <span style={{ color: PC.gray }}>{roleFor}</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        {bullets.map(([ok, t]) => (
          <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            {ok ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke={PC.green} strokeWidth="1.4" /><path d="M5.5 9l2.2 2.2L12.5 6.5" stroke={PC.green} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              : <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke={REG.err} strokeWidth="1.4" /><path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke={REG.err} strokeWidth="1.5" strokeLinecap="round" /></svg>}
            <span style={{ fontSize: 13.5, color: '#42505F', fontFamily: 'Montserrat' }}>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: 1080 }}>
      <h1 style={{ fontSize: mobile ? 26 : 30, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 6px' }}>Simple, transparent pricing</h1>
      <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 24px' }}>Pay only for the recruiters you need. Unlimited job postings included.</p>

      {/* Seat types */}
      <div style={{ background: '#fff', borderRadius: 16, border: `1px solid ${PC.border}`, padding: mobile ? 20 : 28, marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
          <div>
            <h2 style={{ fontSize: 19, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 5px' }}>Understand Our Seat Types</h2>
            <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: 0 }}>When you set spesifik role members, it's effect to your seats type</p>
          </div>
          <PCButton variant="secondary" size="md">Learn more</PCButton>
        </div>
        <div style={{ background: PC.bg, borderRadius: 12, padding: '18px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 18 }}>
          <div><div style={{ fontSize: 16, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat' }}>This organization plan is active</div><div onClick={() => onUpgrade({ country, full, dept })} style={{ fontSize: 13.5, fontWeight: 600, color: PC.blue, fontFamily: 'Montserrat', cursor: 'pointer' }}>Upgrade anytime →</div></div>
          <div style={{ display: 'flex', gap: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div style={{ width: 38, height: 38, borderRadius: 9, background: PC.blue, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{seatIconFull}</div><div><div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>Full seats</div><div style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat' }}>10 seats</div></div></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><div style={{ width: 38, height: 38, borderRadius: 9, background: PC.green, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{seatIconDept}</div><div><div style={{ fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>Dept seats</div><div style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat' }}>2 seats</div></div></div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, flexDirection: mobile ? 'column' : 'row' }}>
          {seatCard(PC.blue, seatIconFull, 'Full Recruiter Seat', 'HR Directors, PIC Branch, HRD Branch.', [[true, 'Post jobs for all departments'], [true, 'Full candidate database access'], [true, 'Multi-branch management']])}
          {seatCard(PC.green, seatIconDept, 'Department Head Seat', 'Dept Head HQ, Dept Head Branch.', [[true, 'Post for own department only'], [true, 'View department applicants'], [false, 'No branch-management']])}
        </div>
      </div>

      {/* Calculator */}
      <div style={{ background: '#fff', borderRadius: 16, border: `1px solid ${PC.border}`, padding: mobile ? 20 : 28 }}>
        <h2 style={{ fontSize: 19, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 4px' }}>Calculate Your Monthly Cost</h2>
        <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 20px', borderBottom: `1px solid ${PC.bg}`, paddingBottom: 18 }}>Select country first to apply seats, it's to effect to price</p>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.3fr 1fr', gap: 24 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ flex: 1 }}><PlanCountrySelect value={country} onChange={setCountry} /></div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke={PC.blue} strokeWidth="1.3" /><path d="M10 9v4.5M10 6.6v.5" stroke={PC.blue} strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <SeatRow icon={seatIconFull} bg={PC.blue} name="Full Recruiter Seats" price={rp(c.full)} sub="Per user/mo" value={full} set={setFull} />
              <SeatRow icon={seatIconDept} bg={PC.green} name="Department Head Seats" price={rp(c.dept)} sub="Per user/mo" value={dept} set={setDept} />
              <SeatRow icon={seatIconMember} bg="#E8ECF2" name="Member Company" free />
            </div>
          </div>
          <CalcSummary country={country} full={full} dept={dept} annual={annual} setAnnual={setAnnual} total={total} onUpgrade={() => onUpgrade({ country, full, dept })} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PlanPage, ConfirmationOrderModal, AccountSuccessModal, TrialBanner, PLAN_COUNTRIES });
