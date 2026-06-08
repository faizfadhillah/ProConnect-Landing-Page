
// ProConnect — Auth pages (Sign In, Sign Up, OTP, Forgot Password)

// ── Shared chrome ────────────────────────────────────────────────────────
function AuthShell({ children, align = 'right', width = 440, solid = false, onBack }) {
  const mobile = useMobile(820);
  const centered = align === 'center';
  return (
    <div style={{
      minHeight: '100vh', maxHeight: '100vh', overflowY: 'auto', fontFamily: 'Montserrat, sans-serif',
      backgroundImage: "url('assets/login_bg2.jpg')", backgroundSize: 'cover',
      backgroundPosition: 'center 32%', backgroundAttachment: 'fixed',
      display: 'flex',
      justifyContent: mobile ? 'center' : (centered ? 'center' : 'flex-end'),
      padding: mobile ? 20 : (centered ? 24 : 0),
    }}>
      <style>{`
        .auth-card input::placeholder { color: rgba(255,255,255,0.6); }
        .auth-card select { color: #fff; }
        .auth-card select option { color: #111; }
      `}</style>
      <div className="auth-card" style={{
        width: mobile ? '100%' : width, maxWidth: centered ? width : 480,
        minHeight: (mobile || centered) ? 'auto' : '100vh',
        marginTop: 'auto', marginBottom: 'auto',
        background: solid ? 'rgba(11,15,22,0.86)' : 'rgba(15,23,38,0.55)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderRadius: (centered || mobile) ? 22 : 0,
        border: (centered || mobile) ? '1px solid rgba(255,255,255,0.12)' : 'none',
        padding: mobile ? '34px 26px' : (centered ? '44px 40px' : '48px 52px'),
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        boxShadow: (centered || mobile) ? '0 24px 70px rgba(0,0,0,0.4)' : 'none',
        position: 'relative',
      }}>
        <div style={{ width: '100%', maxWidth: 360, margin: '0 auto' }}>
          {onBack && <AuthBack onBack={onBack} />}
          {children}
        </div>
      </div>
    </div>
  );
}

function AuthBack({ onBack }) {
  return (
    <button onClick={onBack} aria-label="Go back" style={{
      display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: 'none',
      color: 'rgba(255,255,255,0.85)', fontFamily: 'Montserrat', fontSize: 13.5, fontWeight: 600,
      cursor: 'pointer', padding: 0, marginBottom: 22,
    }}
      onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      Back
    </button>
  );
}

function AuthLogo({ mb = 32 }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: mb }}>
      <img src="proconnect-logo.svg" alt="ProConnect" style={{ width: '100%', maxWidth: 210, height: 'auto', filter: 'brightness(0) invert(1)' }} />
    </div>
  );
}

const eyeBtn = (shown) => shown
  ? <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" /><circle cx="11" cy="11" r="2.6" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" /></svg>
  : <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" /><circle cx="11" cy="11" r="2.6" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" /><path d="M3 3l16 16" stroke="rgba(255,255,255,0.85)" strokeWidth="1.5" strokeLinecap="round" /></svg>;

const GoogleBtn = ({ label, onClick }) => (
  <button onClick={onClick} style={{
    width: '100%', height: 50, borderRadius: 8, border: 'none', background: '#fff', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
  }}>
    <svg width="20" height="20" viewBox="0 0 20 20"><path d="M19.6 10.2c0-.7-.1-1.4-.2-2H10v3.8h5.4a4.6 4.6 0 01-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3z" fill="#4285F4" /><path d="M10 20c2.7 0 5-.9 6.6-2.5l-3.2-2.5c-.9.6-2 .9-3.4.9-2.6 0-4.8-1.7-5.6-4.1H1.1v2.6A10 10 0 0010 20z" fill="#34A853" /><path d="M4.4 11.8a6 6 0 010-3.6V5.6H1.1a10 10 0 000 8.8l3.3-2.6z" fill="#FBBC05" /><path d="M10 4c1.5 0 2.8.5 3.8 1.5l2.8-2.8A10 10 0 001.1 5.6l3.3 2.6C5.2 5.8 7.4 4 10 4z" fill="#EA4335" /></svg>
    <span style={{ fontSize: 14, fontWeight: 700, color: '#3C4043', fontFamily: 'Montserrat', letterSpacing: '0.5px' }}>{label}</span>
  </button>
);

const blueBtn = { width: '100%', height: 50, borderRadius: 8, border: 'none', background: PC.blue, color: '#fff', fontSize: 15, fontWeight: 700, letterSpacing: '0.5px', fontFamily: 'Montserrat', cursor: 'pointer' };

// Boxed dark input with leading icon + optional trailing
function IconField({ icon, trailing, ...props }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 50, borderRadius: 8, border: '1px solid rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.06)', padding: '0 14px' }}>
      {icon && <span style={{ flexShrink: 0, display: 'flex' }}>{icon}</span>}
      <input {...props} style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fff', fontSize: 14.5, fontFamily: 'Montserrat', minWidth: 0 }} />
      {trailing}
    </div>
  );
}
const personIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="6" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" /><path d="M3.5 15c0-2.8 2.5-4.5 5.5-4.5s5.5 1.7 5.5 4.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" /></svg>;
const lockIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3.5" y="7.5" width="11" height="7.5" rx="1.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" /><path d="M5.5 7.5V5.5a3.5 3.5 0 017 0v2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" /></svg>;

// ── SIGN IN ────────────────────────────────────────────────────────────────
function LoginPage({ navigate }) {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [showPw, setShowPw] = React.useState(false);
  const [remember, setRemember] = React.useState(true);
  const go = (p) => { (navigate || (() => {}))(p); window.scrollTo(0, 0); };
  const underline = (props) => <input {...props} style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.45)', padding: '8px 0', fontSize: 15, fontFamily: 'Montserrat', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />;
  const link = { color: '#7FB3FF', textDecoration: 'underline', cursor: 'pointer' };
  return (
    <AuthShell align="right" onBack={() => (navigate.back ? navigate.back('home') : go('home'))}>
      <AuthLogo mb={36} />
      <h1 style={{ fontSize: 26, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 8px' }}>Sign In</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', fontFamily: 'Montserrat', margin: '0 0 30px' }}>Please Sign in to your account to continue</p>
      <div style={{ marginBottom: 24 }}>{underline({ type: 'email', placeholder: 'Insert Email Address', value: email, onChange: e => setEmail(e.target.value) })}</div>
      <div style={{ marginBottom: 28, position: 'relative' }}>
        {underline({ type: showPw ? 'text' : 'password', placeholder: 'Insert Password', value: pw, onChange: e => setPw(e.target.value) })}
        <button onClick={() => setShowPw(s => !s)} aria-label="Toggle password" style={{ position: 'absolute', right: 0, top: 4, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>{eyeBtn(showPw)}</button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <button onClick={() => setRemember(r => !r)} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          <span style={{ width: 40, height: 22, borderRadius: 11, background: remember ? PC.blue : 'rgba(255,255,255,0.28)', position: 'relative', transition: 'background 0.15s', flexShrink: 0, display: 'inline-block' }}>
            <span style={{ position: 'absolute', top: 2, left: remember ? 20 : 2, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left 0.15s', boxShadow: '0 1px 3px rgba(0,0,0,0.25)' }} />
          </span>
          <span style={{ fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.9)', fontFamily: 'Montserrat' }}>Remember Me</span>
        </button>
        <a href="#" onClick={e => { e.preventDefault(); go('forgot'); }} style={{ fontSize: 13.5, fontWeight: 600, color: '#7FB3FF', fontFamily: 'Montserrat', textDecoration: 'none' }}>Forgot Password?</a>
      </div>
      <button onClick={() => go('candidate')} style={{ ...blueBtn, marginBottom: 22 }} onMouseEnter={e => e.currentTarget.style.background = PC.blueDark} onMouseLeave={e => e.currentTarget.style.background = PC.blue}>SIGN IN</button>
      <div style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.78)', fontFamily: 'Montserrat', marginBottom: 16 }}>Or sign in via :</div>
      <div style={{ marginBottom: 18 }}><GoogleBtn label="GOOGLE" onClick={() => go('candidate')} /></div>
      <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.78)', fontFamily: 'Montserrat', textAlign: 'center', lineHeight: 1.6, margin: '0 0 26px' }}>
        By continuing sign in, you agree to ProConnect <span style={link} onClick={() => go('tos')}>Term of Service</span> and acknowledge our <span style={link} onClick={() => go('privacy')}>Privacy Policy</span>
      </p>
      <a href="#" onClick={e => { e.preventDefault(); go('register'); }} style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#3B82F6', fontFamily: 'Montserrat', textDecoration: 'none' }}>Create an account</a>
    </AuthShell>
  );
}

// ── SIGN UP (→ OTP) ──────────────────────────────────────────────────────────
function RegisterPage({ navigate }) {
  const go = (p) => { (navigate || (() => {}))(p); window.scrollTo(0, 0); };
  const [step, setStep] = React.useState('form');
  const [form, setForm] = React.useState({ email: '', phone: '', pw: '', pw2: '', code: '62' });
  const [showPw, setShowPw] = React.useState(false);
  const [showPw2, setShowPw2] = React.useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  if (step === 'otp') return <OtpVerify navigate={navigate} email={form.email} onBack={() => setStep('form')} />;

  return (
    <AuthShell align="right" solid onBack={() => (navigate.back ? navigate.back('login') : go('login'))}>
      <AuthLogo mb={30} />
      <h1 style={{ fontSize: 26, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 6px' }}>Sign Up</h1>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.78)', fontFamily: 'Montserrat', margin: '0 0 22px' }}>Please register your account to continue</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <IconField icon={personIcon} type="email" placeholder="Email" value={form.email} onChange={set('email')} />
        <div style={{ display: 'flex', gap: 10 }}>
          <div style={{ flex: '0 0 128px' }}>
            <CountryCodeSelect value={form.code} onChange={c => setForm(f => ({ ...f, code: c }))} dark />
          </div>
          <div style={{ flex: 1 }}><IconField type="tel" placeholder="Phone" value={form.phone} onChange={set('phone')} /></div>
        </div>
        <IconField icon={lockIcon} type={showPw ? 'text' : 'password'} placeholder="Password" value={form.pw} onChange={set('pw')}
          trailing={<button onClick={() => setShowPw(s => !s)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>{eyeBtn(showPw)}</button>} />
        <IconField icon={lockIcon} type={showPw2 ? 'text' : 'password'} placeholder="Password Confirmation" value={form.pw2} onChange={set('pw2')}
          trailing={<button onClick={() => setShowPw2(s => !s)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>{eyeBtn(showPw2)}</button>} />
      </div>

      <button onClick={() => setStep('otp')} style={{ ...blueBtn, margin: '22px 0 16px' }} onMouseEnter={e => e.currentTarget.style.background = PC.blueDark} onMouseLeave={e => e.currentTarget.style.background = PC.blue}>SIGN UP</button>
      <div style={{ textAlign: 'center', fontSize: 13, color: 'rgba(255,255,255,0.78)', fontFamily: 'Montserrat', marginBottom: 14 }}>Or sign up via:</div>
      <div style={{ marginBottom: 18 }}><GoogleBtn label="GOOGLE" onClick={() => setStep('otp')} /></div>
      <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.78)', fontFamily: 'Montserrat', textAlign: 'center', lineHeight: 1.6, margin: '0 0 22px' }}>
        By continuing sign up, you agree to ProConnect <span onClick={() => go('tos')} style={{ color: '#7FB3FF', textDecoration: 'underline', cursor: 'pointer' }}>Term of Service</span> and acknowledge our <span onClick={() => go('privacy')} style={{ color: '#7FB3FF', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>.
      </p>
      <a href="#" onClick={e => { e.preventDefault(); go('login'); }} style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#3B82F6', fontFamily: 'Montserrat', textDecoration: 'none' }}>Already have an account?</a>
    </AuthShell>
  );
}

// ── OTP VERIFICATION ─────────────────────────────────────────────────────────
function OtpVerify({ navigate, email, onBack }) {
  const go = (p) => { (navigate || (() => {}))(p); window.scrollTo(0, 0); };
  const [code, setCode] = React.useState(['', '', '', '', '', '']);
  const [agreeTos, setAgreeTos] = React.useState(false);
  const [agreePrivacy, setAgreePrivacy] = React.useState(false);
  const [secs, setSecs] = React.useState(290);
  const refs = React.useRef([]);

  React.useEffect(() => {
    if (secs <= 0) return;
    const t = setTimeout(() => setSecs(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [secs]);
  const mmss = `${String(Math.floor(secs / 60)).padStart(1, '0')}:${String(secs % 60).padStart(2, '0')}`;

  const onCh = (i, v) => {
    v = v.replace(/[^0-9]/g, '').slice(-1);
    setCode(c => { const n = [...c]; n[i] = v; return n; });
    if (v && i < 5) refs.current[i + 1] && refs.current[i + 1].focus();
  };
  const onKey = (i, e) => { if (e.key === 'Backspace' && !code[i] && i > 0) refs.current[i - 1] && refs.current[i - 1].focus(); };

  const ready = agreeTos && agreePrivacy && code.every(Boolean);
  const Check = ({ on, set }) => (
    <button onClick={() => set(v => !v)} style={{ width: 18, height: 18, borderRadius: 4, border: `1.5px solid ${on ? PC.blue : 'rgba(255,255,255,0.6)'}`, background: on ? PC.blue : 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, padding: 0 }}>
      {on && <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 5.5l2.2 2.2L9 3" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
    </button>
  );

  return (
    <AuthShell align="center" width={420}>
      <AuthLogo mb={28} />
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 28 }}>
        {code.map((d, i) => (
          <input key={i} ref={el => refs.current[i] = el} value={d} onChange={e => onCh(i, e.target.value)} onKeyDown={e => onKey(i, e)}
            inputMode="numeric" maxLength={1}
            style={{ width: 44, height: 50, borderRadius: 8, border: `1.5px solid ${d ? PC.blue : 'rgba(255,255,255,0.5)'}`, background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 20, fontWeight: 700, textAlign: 'center', fontFamily: 'Montserrat', outline: 'none' }} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 22, paddingLeft: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Check on={agreeTos} set={setAgreeTos} />
          <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.9)', fontFamily: 'Montserrat' }}>Agree to the <span onClick={() => go('tos')} style={{ color: '#7FB3FF', textDecoration: 'underline', cursor: 'pointer' }}>Term of Use</span></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Check on={agreePrivacy} set={setAgreePrivacy} />
          <span style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.9)', fontFamily: 'Montserrat' }}>Agree to the <span onClick={() => go('privacy')} style={{ color: '#7FB3FF', textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span></span>
        </div>
      </div>
      <button disabled={!ready} onClick={() => ready && go('choose-role')} style={{ ...blueBtn, background: ready ? PC.blue : '#9DC0EE', cursor: ready ? 'pointer' : 'not-allowed', marginBottom: 22 }}>Continue</button>
      <div style={{ textAlign: 'center', fontSize: 13, color: '#fff', fontFamily: 'Montserrat', fontWeight: 600 }}>
        Not receive verification code ? {secs > 0
          ? <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>Resend Code</span>
          : <span onClick={() => setSecs(290)} style={{ color: '#7FB3FF', cursor: 'pointer' }}>Resend Code</span>}
        <div style={{ fontWeight: 500, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>({mmss})</div>
      </div>
    </AuthShell>
  );
}

// ── FORGOT PASSWORD ──────────────────────────────────────────────────────────
function ForgotPasswordPage({ navigate }) {
  const go = (p) => { (navigate || (() => {}))(p); window.scrollTo(0, 0); };
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const underline = (props) => <input {...props} style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.45)', padding: '8px 0', fontSize: 15, fontFamily: 'Montserrat', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />;
  return (
    <AuthShell align="center" width={420}>
      <AuthLogo mb={28} />
      <h1 style={{ fontSize: 24, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 8px', textAlign: 'center' }}>Forgot Password</h1>
      <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.78)', fontFamily: 'Montserrat', margin: '0 0 28px', textAlign: 'center', lineHeight: 1.6 }}>
        {sent ? 'We\'ve sent a password reset link to your email. Check your inbox to continue.' : 'Enter the email linked to your account and we\'ll send you a reset link.'}
      </p>
      {!sent ? (
        <>
          <div style={{ marginBottom: 28 }}>
            <IconField icon={personIcon} type="email" placeholder="Insert Email Address" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <button onClick={() => setSent(true)} style={{ ...blueBtn, marginBottom: 22 }} onMouseEnter={e => e.currentTarget.style.background = PC.blueDark} onMouseLeave={e => e.currentTarget.style.background = PC.blue}>Send Reset Link</button>
        </>
      ) : (
        <button onClick={() => go('login')} style={{ ...blueBtn, marginBottom: 22 }}>Back to Sign In</button>
      )}
      <a href="#" onClick={e => { e.preventDefault(); go('login'); }} style={{ display: 'block', fontSize: 14, fontWeight: 700, color: '#3B82F6', fontFamily: 'Montserrat', textDecoration: 'none', textAlign: 'center' }}>← Back to Sign In</a>
    </AuthShell>
  );
}

Object.assign(window, { LoginPage, RegisterPage, OtpVerify, ForgotPasswordPage });
