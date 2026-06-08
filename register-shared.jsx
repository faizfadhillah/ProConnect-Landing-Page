
// ProConnect — Registration: shared form primitives, wizard chrome, role chooser

// ── Form primitives ──────────────────────────────────────────────────────
const REG = {
  border: '#E3E6EA', borderFocus: PC.blue, text: '#1A2B45', label: '#1A2B45',
  ph: '#9AA3AD', err: '#E5484D', fieldH: 52, radius: 10,
};

function RegField({ label, required, hint, error, children, full }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, gridColumn: full ? '1 / -1' : 'auto' }}>
      {label && (
        <label style={{ fontSize: 14, fontWeight: 500, color: REG.label, fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', gap: 4 }}>
          {label}{required && <span style={{ color: REG.err }}>*</span>}
          {hint === 'info' && <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="6" stroke={PC.blue} strokeWidth="1.2" /><path d="M7.5 6.6v4M7.5 4.6v.6" stroke={PC.blue} strokeWidth="1.3" strokeLinecap="round" /></svg>}
        </label>
      )}
      {children}
      {error && <span style={{ fontSize: 12.5, color: REG.err, fontFamily: 'Montserrat' }}>{error}</span>}
      {hint && hint !== 'info' && !error && <span style={{ fontSize: 12.5, color: REG.ph, fontFamily: 'Montserrat' }}>{hint}</span>}
    </div>
  );
}

const regBaseInput = (err) => ({
  width: '100%', minHeight: REG.fieldH, height: REG.fieldH, boxSizing: 'border-box',
  borderRadius: REG.radius, border: `1px solid ${err ? REG.err : REG.border}`,
  padding: '0 16px', fontSize: 14.5, fontFamily: 'Montserrat', color: REG.text,
  outline: 'none', background: '#fff',
});

function RegInput({ error, trailing, ...props }) {
  const [foc, setFoc] = React.useState(false);
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <input {...props} onFocus={e => { setFoc(true); props.onFocus && props.onFocus(e); }} onBlur={e => { setFoc(false); props.onBlur && props.onBlur(e); }}
        style={{ ...regBaseInput(error), borderColor: error ? REG.err : (foc ? REG.borderFocus : REG.border), paddingRight: trailing ? 70 : 16 }} />
      {trailing && <div style={{ position: 'absolute', right: 16 }}>{trailing}</div>}
    </div>
  );
}

function RegSelect({ error, value, onChange, placeholder, options = [], ...props }) {
  const [foc, setFoc] = React.useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <select {...props} value={value} onChange={onChange} onFocus={() => setFoc(true)} onBlur={() => setFoc(false)}
        style={{ ...regBaseInput(error), borderColor: error ? REG.err : (foc ? REG.borderFocus : REG.border), appearance: 'none', cursor: 'pointer', color: value ? REG.text : REG.ph, paddingRight: 40 }}>
        <option value="" disabled>{placeholder}</option>
        {options.map(o => <option key={o} value={o} style={{ color: REG.text }}>{o}</option>)}
      </select>
      <span style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', color: '#7A828C', fontSize: 11, pointerEvents: 'none' }}>▼</span>
    </div>
  );
}

function RegTextarea({ error, ...props }) {
  const [foc, setFoc] = React.useState(false);
  return (
    <textarea {...props} onFocus={() => setFoc(true)} onBlur={() => setFoc(false)}
      style={{ ...regBaseInput(error), height: 'auto', minHeight: 96, padding: '12px 16px', resize: 'vertical', lineHeight: 1.5, borderColor: error ? REG.err : (foc ? REG.borderFocus : REG.border) }} />
  );
}

function RegToggle({ on, onClick, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <button onClick={onClick} aria-label={label} style={{ width: 44, height: 24, borderRadius: 12, border: 'none', background: on ? PC.blue : '#C4CAD2', position: 'relative', cursor: 'pointer', transition: 'background 0.15s', flexShrink: 0 }}>
        <span style={{ position: 'absolute', top: 2, left: on ? 22 : 2, width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left 0.15s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
      </button>
      {label && <span style={{ fontSize: 15, color: REG.text, fontFamily: 'Montserrat' }}>{label}</span>}
    </div>
  );
}

function PhoneField({ value, onChange, verify, code, onCodeChange }) {
  const [localCode, setLocalCode] = React.useState('62');
  const c = code !== undefined ? code : localCode;
  const setC = onCodeChange || setLocalCode;
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <div style={{ flex: '0 0 130px' }}>
        <CountryCodeSelect value={c} onChange={setC} />
      </div>
      <div style={{ flex: 1 }}>
        <RegInput placeholder="Input phone number" value={value} onChange={onChange}
          trailing={verify && <span style={{ fontSize: 14, fontWeight: 600, color: PC.blue, cursor: 'pointer', fontFamily: 'Montserrat' }}>Verify</span>} />
      </div>
    </div>
  );
}

function UploadAvatar({ label = 'Upload Company Photo' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
      <div style={{ width: 80, height: 80, borderRadius: 10, background: '#C9CDD3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="14" r="6" stroke="#fff" strokeWidth="2.2" /><path d="M7 31c0-5.5 5.4-9 12-9s12 3.5 12 9" stroke="#fff" strokeWidth="2.2" /></svg>
      </div>
      <div>
        <button style={{ border: `1.5px solid ${PC.blue}`, background: '#fff', color: PC.blue, fontWeight: 700, fontFamily: 'Montserrat', fontSize: 14, padding: '11px 18px', borderRadius: 8, cursor: 'pointer' }}>{label}</button>
        <div style={{ fontSize: 13, color: '#6B7480', fontFamily: 'Montserrat', marginTop: 8 }}>Size recommendation: 400 x 400px</div>
      </div>
    </div>
  );
}

// ── Modal shell ──────────────────────────────────────────────────────────
function RegModal({ title, onClose, children, footer, width = 600 }) {
  const mobile = useMobile(640);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(26,43,69,0.45)', display: 'flex', alignItems: mobile ? 'flex-end' : 'center', justifyContent: 'center', padding: mobile ? 0 : 24 }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: mobile ? '20px 20px 0 0' : 16, width: mobile ? '100%' : width, maxWidth: '100%', maxHeight: mobile ? '92vh' : '88vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 24px 70px rgba(0,0,0,0.3)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 26px', flexShrink: 0 }}>
          <h2 style={{ fontSize: 21, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: 0 }}>{title}</h2>
          <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6 6l10 10M16 6L6 16" stroke="#6B7480" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
        </div>
        <div style={{ padding: '0 26px 8px', overflowY: 'auto', flex: 1 }}>{children}</div>
        {footer && <div style={{ display: 'flex', gap: 14, padding: '18px 26px', borderTop: `1px solid ${PC.bg}`, flexShrink: 0 }}>{footer}</div>}
      </div>
    </div>
  );
}

// ── Wizard chrome ────────────────────────────────────────────────────────
function RegTopNav() {
  return (
    <div style={{ height: 76, background: '#fff', borderBottom: `1px solid ${PC.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', flexShrink: 0, position: 'sticky', top: 0, zIndex: 30 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4 7h18M4 13h18M4 19h18" stroke={PC.blue} strokeWidth="2.2" strokeLinecap="round" /></svg>
        <PCLogo height={24} />
      </div>
      <div style={{ position: 'relative' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3a6 6 0 016 6c0 7 3 8 3 8H3s3-1 3-8a6 6 0 016-6zM9.5 20a2.5 2.5 0 005 0" stroke="#1A2B45" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span style={{ position: 'absolute', top: -7, right: -10, background: REG.err, color: '#fff', fontSize: 10, fontWeight: 700, fontFamily: 'Montserrat', borderRadius: 10, padding: '1px 5px', minWidth: 16, textAlign: 'center' }}>999</span>
      </div>
    </div>
  );
}

const EMP_STEPS = ['Business Profile Details', 'Company Representative Info', 'Headquarters and Branch Information', 'Team Management'];

function EmpStepper({ current, steps = EMP_STEPS }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      {steps.map((label, i) => {
        const done = i < current, active = i === current;
        const isLast = i === steps.length - 1;
        return (
          <div key={label} style={{ display: 'flex', gap: 16, minHeight: isLast ? 'auto' : 88 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: `2px solid ${done || active ? PC.blue : '#C4CAD2'}`, background: '#fff' }}>
                {done
                  ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10l3.5 3.5L15 6.5" stroke={PC.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  : <span style={{ fontSize: 15, fontWeight: 700, color: active ? PC.blue : '#9AA3AD', fontFamily: 'Montserrat' }}>{i + 1}</span>}
              </div>
              {!isLast && <div style={{ width: 2, flex: 1, minHeight: 44, background: done ? PC.blue : '#D5D9DE', marginTop: 4, marginBottom: 4 }} />}
            </div>
            <div style={{ fontSize: 16, fontWeight: done || active ? 700 : 500, color: done || active ? PC.blue : '#9AA3AD', fontFamily: 'Montserrat', lineHeight: 1.3, paddingTop: 6, maxWidth: 200 }}>{label}</div>
          </div>
        );
      })}
    </div>
  );
}

function WizardLayout({ current, steps = EMP_STEPS, children, onBack, onNext, nextLabel = 'Next', showBack = true, toast, onToastClose }) {
  const mobile = useMobile(900);
  return (
    <div style={{ minHeight: '100vh', background: PC.bg, fontFamily: 'Montserrat, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <RegTopNav />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: mobile ? '20px 16px 110px' : '32px 40px 110px', gap: 40 }}>
        {!mobile && (
          <div style={{ flex: '0 0 280px', paddingTop: 24 }}>
            <EmpStepper current={current} steps={steps} />
          </div>
        )}
        <div style={{ flex: 1, maxWidth: 860, minWidth: 0 }}>
          {mobile && <MobileProgress current={current} steps={steps} />}
          {toast && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#1E9E54', color: '#fff', borderRadius: 10, padding: '14px 18px', marginBottom: 18 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15, fontWeight: 700, fontFamily: 'Montserrat' }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#fff" strokeWidth="1.6" /><path d="M6.5 11l3 3L15 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {toast}
              </div>
              <button onClick={onToastClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 2 }}><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5 5l8 8M13 5l-8 8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg></button>
            </div>
          )}
          {children}
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 88, background: '#fff', borderTop: `1px solid ${PC.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: mobile ? '0 16px' : '0 40px', zIndex: 30 }}>
        {showBack
          ? <PCButton variant="secondary" size="lg" onClick={onBack} style={{ minWidth: mobile ? 100 : 160 }}>Back</PCButton>
          : <div />}
        <PCButton variant="primary" size="lg" onClick={onNext} style={{ minWidth: mobile ? 120 : 160 }}>{nextLabel}</PCButton>
      </div>
    </div>
  );
}

function MobileProgress({ current, steps = EMP_STEPS }) {
  const pct = ((current + 1) / steps.length) * 100;
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ flex: 1, height: 8, borderRadius: 4, background: '#DCE0E5' }}>
          <div style={{ width: pct + '%', height: '100%', borderRadius: 4, background: PC.blue }} />
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: '#6B7480', fontFamily: 'Montserrat', whiteSpace: 'nowrap' }}>Step {current + 1} of {steps.length}</span>
      </div>
    </div>
  );
}

function RegCard({ title, subtitle, action, children }) {
  const mobile = useMobile(900);
  return (
    <div style={{ background: '#fff', borderRadius: 16, border: `1px solid ${PC.border}`, padding: mobile ? '24px 20px' : '36px 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 28, flexWrap: 'wrap' }}>
        <div>
          <h1 style={{ fontSize: mobile ? 24 : 28, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: '0 0 6px' }}>{title}</h1>
          <p style={{ fontSize: 15, color: '#6B7480', fontFamily: 'Montserrat', margin: 0, lineHeight: 1.5, maxWidth: 560 }}>{subtitle}</p>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}

// ── Choose Your Role ─────────────────────────────────────────────────────
function ChooseRolePage({ navigate }) {
  const mobile = useMobile(820);
  const card = (img, title, desc, cta, onClick, badge) => (
    <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 6px 24px rgba(4,38,72,0.07)', border: `1px solid ${PC.border}`, display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative' }}>
        <img src={img} alt={title} style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
        {badge && <span style={{ position: 'absolute', bottom: 14, right: 14, background: '#FFE7C2', color: '#C77A14', fontSize: 12.5, fontWeight: 600, fontFamily: 'Montserrat', padding: '6px 14px', borderRadius: 20 }}>{badge}</span>}
      </div>
      <div style={{ padding: '28px 30px 32px', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 24, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: '0 0 12px' }}>{title}</h3>
        <p style={{ fontSize: 15, color: '#6B7480', fontFamily: 'Montserrat', lineHeight: 1.6, margin: '0 0 26px', flex: 1 }}>{desc}</p>
        <button onClick={onClick} style={{ border: `1.5px solid ${PC.blue}`, background: '#fff', color: PC.blue, fontWeight: 700, fontFamily: 'Montserrat', fontSize: 15, padding: '14px 20px', borderRadius: 8, cursor: 'pointer', transition: 'all 0.15s' }}
          onMouseEnter={e => { e.currentTarget.style.background = PC.blue; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = PC.blue; }}>{cta}</button>
      </div>
    </div>
  );
  return (
    <div style={{ minHeight: '100vh', background: PC.bg, fontFamily: 'Montserrat, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <RegTopNav />
      <div style={{ flex: 1, padding: mobile ? '40px 20px' : '60px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: mobile ? 36 : 48 }}>
          <h1 style={{ fontSize: mobile ? 34 : 46, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: '0 0 10px' }}>Choose Your Role</h1>
          <p style={{ fontSize: 16, color: '#6B7480', fontFamily: 'Montserrat', margin: 0 }}>Please select one from below:</p>
        </div>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 28 }}>
          {card('assets/role_candidate.png', 'Candidate', 'Fresh graduate, mid-level employee, or an expert level currently looking for a new opportunity.', 'Continue as Candidate', () => navigate('register-candidate'))}
          {card('assets/role_employer.png', 'Employer', 'HR Department or Company owner who seeks professional expertise to expand their business.', 'Continue as Employer', () => navigate('register-employer'), '*subscription needed')}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  REG, RegField, RegInput, RegSelect, RegTextarea, RegToggle, PhoneField, UploadAvatar,
  RegModal, WizardLayout, RegCard, EmpStepper, ChooseRolePage, regBaseInput,
});
