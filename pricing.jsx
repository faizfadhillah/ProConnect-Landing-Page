
// ProConnect — Pricing page (with cost calculator + FAQ)

const PRICING_COUNTRIES = {
  Indonesia: { cur: 'Rp', full: 350000, dept: 150000, fmt: (n) => 'Rp ' + n.toLocaleString('id-ID') },
  Philippines: { cur: '₱', full: 1500, dept: 650, fmt: (n) => '₱ ' + n.toLocaleString('en-US') },
  Vietnam: { cur: '₫', full: 650000, dept: 280000, fmt: (n) => '₫ ' + n.toLocaleString('en-US') },
  Thailand: { cur: '฿', full: 1300, dept: 560, fmt: (n) => '฿ ' + n.toLocaleString('en-US') },
  Malaysia: { cur: 'RM', full: 180, dept: 78, fmt: (n) => 'RM ' + n.toLocaleString('en-US') },
  Singapore: { cur: 'S$', full: 72, dept: 41, fmt: (n) => 'S$ ' + n.toLocaleString('en-US') }
};

function SeatChecklist({ items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map(([ok, t]) =>
      <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {ok ?
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke={PC.green} strokeWidth="1.6" /><path d="M6 10l2.5 2.5L14 7" stroke={PC.green} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg> :
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke={PC.red} strokeWidth="1.6" /><path d="M7 7l6 6M13 7l-6 6" stroke={PC.red} strokeWidth="1.6" strokeLinecap="round" /></svg>}
          <span style={{ fontSize: 14, fontWeight: 500, color: PC.dark, fontFamily: 'Montserrat' }}>{t}</span>
        </div>
      )}
    </div>);

}

function Stepper({ value, set }) {
  const btn = (label, fn) =>
  <button onClick={fn} style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${PC.border}`, background: '#fff', cursor: 'pointer', fontSize: 18, color: PC.dark, fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{label}</button>;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      {btn('−', () => set((v) => Math.max(0, v - 1)))}
      <span style={{ minWidth: 22, textAlign: 'center', fontSize: 15, fontWeight: 700, fontFamily: 'Montserrat', color: PC.dark }}>{value}</span>
      {btn('+', () => set((v) => v + 1))}
    </div>);

}

function CostCalculator() {
  const mobile = useMobile(820);
  const [country, setCountry] = React.useState('Indonesia');
  const [full, setFull] = React.useState(0);
  const [dept, setDept] = React.useState(0);
  const [annual, setAnnual] = React.useState(false);
  const c = PRICING_COUNTRIES[country];
  const monthly = full * c.full + dept * c.dept;
  const total = annual ? monthly * 12 : monthly;

  const SeatRow = ({ icon, bg, name, price, value, set, free }) =>
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', border: `1px solid ${PC.border}`, borderRadius: 12, marginBottom: 12 }}>
      <div style={{ width: 40, height: 40, borderRadius: 9, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14.5, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{name}</div>
        <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat' }}>{free ? 'FREE' : c.fmt(price)}<span style={{ fontSize: 11 }}>{free ? '' : ' Per user/mo'}</span></div>
      </div>
      {free ? <span style={{ fontSize: 13, fontWeight: 600, color: PC.medGray, fontFamily: 'Montserrat' }}>Unlimited</span> : <Stepper value={value} set={set} />}
    </div>;

  const bankIcon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3l8 4H3z" fill="#fff" /><path d="M5 9v6M9 9v6M13 9v6M17 9v6M3 17h16" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg>;
  const grpIcon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="7" r="3" stroke="#fff" strokeWidth="1.7" /><circle cx="5.5" cy="9" r="2.2" stroke="#fff" strokeWidth="1.5" /><circle cx="16.5" cy="9" r="2.2" stroke="#fff" strokeWidth="1.5" /></svg>;
  const perIcon = <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="8" r="3.2" stroke="#7A7A7A" strokeWidth="1.7" /><path d="M5 18c0-3 2.7-5 6-5s6 2 6 5" stroke="#7A7A7A" strokeWidth="1.7" /></svg>;

  return (
    <section style={{ background: '#fff', padding: mobile ? '48px 0' : '72px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 26 : 32, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 8px', textAlign: 'center' }}>Calculate Your Monthly Cost</h2>
        <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', textAlign: 'center', margin: '0 0 36px' }}>Select your country first. Seat prices are set for each market.</p>
        <div style={{ background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 16, padding: mobile ? 20 : 28, display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1.3fr 1fr', gap: 24, boxShadow: '0 10px 40px rgba(4,38,72,0.06)' }}>
          <div>
            <div style={{ position: 'relative', marginBottom: 16 }}>
              <select value={country} onChange={(e) => setCountry(e.target.value)} style={{ width: '100%', height: 46, borderRadius: 10, border: `1.5px solid ${PC.blue}`, padding: '0 14px', fontSize: 14, fontWeight: 600, fontFamily: 'Montserrat', color: PC.dark, outline: 'none', appearance: 'none', background: '#fff' }}>
                {Object.keys(PRICING_COUNTRIES).map((k) => <option key={k}>{k}</option>)}
              </select>
              <span style={{ position: 'absolute', right: 16, top: 17, color: PC.blue, fontSize: 11, pointerEvents: 'none' }}>▼</span>
            </div>
            <SeatRow icon={bankIcon} bg={PC.blue} name="Full Recruiter Seats" price={c.full} value={full} set={setFull} />
            <SeatRow icon={grpIcon} bg={PC.green} name="Department Seats" price={c.dept} value={dept} set={setDept} />
            <SeatRow icon={perIcon} bg="#E8ECF2" name="Member Seats" free />
          </div>
          <div style={{ background: '#0E1726', borderRadius: 14, padding: 24, color: '#fff', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Montserrat', marginBottom: 4 }}>Calculation Summary</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat', marginBottom: 18 }}>This calculation works on all type seats</div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 16, display: 'flex', gap: 24, marginBottom: 14 }}>
              <div><div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Montserrat' }}>Full seats</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat' }}>{full} seats</div></div>
              <div><div style={{ fontSize: 14, fontWeight: 700, fontFamily: 'Montserrat' }}>Dept seats</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat' }}>{dept} seats</div></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 18 }}>
              <span style={{ fontSize: 14, fontFamily: 'Montserrat' }}>{c.cur}</span>
              <span style={{ fontSize: 30, fontWeight: 800, fontFamily: 'Montserrat' }}>{total.toLocaleString('id-ID')}</span>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', fontFamily: 'Montserrat' }}>/{annual ? 'yr' : 'mo'}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontFamily: 'Montserrat' }}>Annual</span>
              <button onClick={() => setAnnual((a) => !a)} style={{ width: 40, height: 22, borderRadius: 11, border: 'none', background: annual ? PC.blue : 'rgba(255,255,255,0.25)', position: 'relative', cursor: 'pointer', transition: 'background 0.15s' }}>
                <span style={{ position: 'absolute', top: 2, left: annual ? 20 : 2, width: 18, height: 18, borderRadius: '50%', background: '#fff', transition: 'left 0.15s' }} />
              </button>
            </div>
            <PCButton variant="primary" size="md" fullWidth style={{ marginTop: 'auto' }}>Upgrade Now</PCButton>
          </div>
        </div>
      </div>
    </section>);

}

function FAQ() {
  const mobile = useMobile(820);
  const [open, setOpen] = React.useState(0);
  const items = [
  { q: 'What exactly is a "seat"?', a: 'A seat is a paid license for one person who needs to post jobs and manage hiring. Everyone else in your company can be invited as a Member Profile for FREE to view the directory and apply for internal jobs.' },
  { q: 'Can I mix Full Recruiter and Department Head seats?', a: 'Yes. Buy any combination of Full Recruiter and Department Head seats. Add or remove seats anytime, and billing adjusts automatically.' },
  { q: 'Why are prices different in each country?', a: 'Pricing is purchasing-power adjusted so every ASEAN market pays a fair local rate rather than a single global price.' },
  { q: 'Do I get charged per branch or location?', a: 'No. You are only charged per recruiter seat. Branches and locations are unlimited and included on every paid plan.' },
  { q: 'Is it free for job seekers and schools?', a: 'Yes. Job seekers always use ProConnect for free, including search, profile, Skill Passport, and applications. Education partners also join free to verify their graduates. We charge employers, not candidates or schools.' }];

  return (
    <section style={{ background: '#fff', padding: mobile ? '20px 0 48px' : '24px 0 72px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: mobile ? 26 : 32, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 32px', textAlign: 'center' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {items.map((it, i) =>
          <div key={i} style={{ border: `1px solid ${PC.border}`, borderRadius: 12, overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '18px 20px', background: '#fff', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{it.q}</span>
                <span style={{ fontSize: 12, color: PC.gray, transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>▼</span>
              </button>
              {open === i && <div style={{ padding: '0 20px 20px', fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.65 }}>{it.a}</div>}
            </div>
          )}
        </div>
      </div>
    </section>);

}

function PricingPage({ navigate }) {
  const mobile = useMobile(820);
  const features = [
  ['HQ & Branch Management', false, false, true],
  ['Team Management', 'Self', 'Same Department Only', 'All Departments'],
  ['Manage Jobs', false, true, true],
  ['Find Candidate', false, true, true],
  ['Manage Profile', true, true, true],
  ['Job Posting', false, 'Unlimited', 'Unlimited'],
  ['Type Profile', false, 'Department Profile', 'All Profile'],
  ['Type Branch', false, 'Dept List', 'HQ & Branch List'],
  ['Support Level', 'Email', 'Email', 'Priority 24/7']];

  const cell = (v) => {
    if (v === true) return <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke={PC.green} strokeWidth="1.5" /><path d="M6 10l2.5 2.5L14 7" stroke={PC.green} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    if (v === false) return <span style={{ color: PC.medGray }}>-</span>;
    return <span style={{ fontSize: 13.5, fontWeight: 600, color: PC.dark, fontFamily: 'Montserrat' }}>{v}</span>;
  };
  const bankIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4l8 4H4z" fill="#fff" /><path d="M6 10v6M10 10v6M14 10v6M18 10v6M4 18h16" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" /></svg>;
  const grpIcon = <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.2" stroke="#fff" strokeWidth="1.8" /><circle cx="6" cy="10" r="2.4" stroke="#fff" strokeWidth="1.6" /><circle cx="18" cy="10" r="2.4" stroke="#fff" strokeWidth="1.6" /></svg>;

  return (
    <InnerPage navigate={navigate} activePage="pricing">
      {/* Hero */}
      <section style={{ background: '#fff', padding: mobile ? '44px 0 24px' : '64px 0 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: mobile ? 32 : 46, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 16px' }}>Simple, Seat-Based Pricing.</h1>
          <p style={{ fontSize: 16, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 28px', lineHeight: 1.7 }}>Only hiring managers pay. Regular employees get free profiles, and job seekers and education partners always join free. Job postings require a Department Head or Full Recruiter Seat.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <PCButton variant="secondary" size="xl" onClick={() => navigate('contact')}>Contact Sales</PCButton>
            <PCButton variant="primary" size="xl" onClick={() => navigate('contact')}>Request Demo</PCButton>
          </div>
        </div>
      </section>

      {/* Seat cards on blue band */}
      <section style={{ background: PC.blue, padding: mobile ? '40px 0' : '56px 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 24 }} data-comment-anchor="b1dc4a70a7-div-176-9">
          {[
          { name: 'Department Head Seat', role: 'Dept Head HQ, Dept Head Branch.', icon: grpIcon, bg: PC.green, items: [[true, 'Post for own department only'], [true, 'View department applicants'], [false, 'No branch-management']] },
          { name: 'Full Recruiter Seat', role: 'HR Directors, PIC Branch, HRD Branch.', icon: bankIcon, bg: PC.blue, items: [[true, 'Post jobs for all departments'], [true, 'Full candidate database access'], [true, 'Multi-branch management']] }].
          map((s) =>
          <div key={s.name} style={{ background: '#fff', borderRadius: 16, padding: mobile ? 24 : 30 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>{s.icon}</div>
              <h3 style={{ fontSize: 21, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 6px' }}>{s.name}</h3>
              <div style={{ fontSize: 13, fontFamily: 'Montserrat', marginBottom: 20 }}><span style={{ fontWeight: 700, color: PC.dark }}>Role for:</span> <span style={{ color: PC.gray }}>{s.role}</span></div>
              <SeatChecklist items={s.items} />
            </div>
          )}
        </div>
      </section>

      {/* Feature comparison */}
      <section style={{ background: '#fff', padding: mobile ? '40px 0' : '64px 0' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px', overflowX: 'auto' }}>
          <div style={{ border: `1px solid ${PC.border}`, borderRadius: 14, overflow: 'hidden', minWidth: 640 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1.2fr 1fr', background: PC.bg, borderBottom: `1px solid ${PC.border}` }}>
              {[['Feature', null], ['Free Seats', perIconHead()], ['Dept Seat', cloudIconHead()], ['Full Seat', bankIconHead()]].map(([h, ic], i) =>
              <div key={h} style={{ padding: '16px 18px', fontSize: 14, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', display: 'flex', alignItems: 'center', gap: 7, justifyContent: i === 0 ? 'flex-start' : 'center' }}>{ic}{h}</div>
              )}
            </div>
            {features.map(([feat, ...vals], i) =>
            <div key={feat} style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr 1.2fr 1fr', borderBottom: i < features.length - 1 ? `1px solid ${PC.border}` : 'none' }}>
                <div style={{ padding: '13px 18px', fontSize: 14, color: PC.dark, fontFamily: 'Montserrat' }}>{feat}</div>
                {vals.map((v, vi) => <div key={vi} style={{ padding: '13px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cell(v)}</div>)}
              </div>
            )}
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA */}
      <section style={{ background: '#fff', padding: mobile ? '0 0 56px' : '20px 0 80px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: PC.blue, borderRadius: 22, padding: mobile ? '44px 28px' : '64px', textAlign: 'center' }}>
            <h2 style={{ fontSize: mobile ? 28 : 36, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 14px' }}>Ready to Save 95% on Recruitment?</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', fontFamily: 'Montserrat', margin: '0 0 28px' }}>Start your free trial today. No credit card required.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <PCButton variant="secondary" size="xl" onClick={() => navigate('contact')} style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.7)' }}>Contact Us</PCButton>
              <PCButton variant="light" size="xl" onClick={() => navigate('jobs')} style={{ background: '#fff', color: PC.blue, border: 'none' }}>Start Free Trial</PCButton>
            </div>
          </div>
        </div>
      </section>
    </InnerPage>);

}

function perIconHead() {return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="6" r="2.4" stroke={PC.gray} strokeWidth="1.4" /><path d="M3.5 13c0-2.2 2-3.5 4.5-3.5s4.5 1.3 4.5 3.5" stroke={PC.gray} strokeWidth="1.4" /></svg>;}
function cloudIconHead() {return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 12h6a2.5 2.5 0 000-5 3.5 3.5 0 00-6.8 1A2 2 0 005 12z" stroke={PC.gray} strokeWidth="1.3" /></svg>;}
function bankIconHead() {return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2l6 3H2z" stroke={PC.gray} strokeWidth="1.3" strokeLinejoin="round" /><path d="M4 7v4M8 7v4M12 7v4M2 13h12" stroke={PC.gray} strokeWidth="1.3" strokeLinecap="round" /></svg>;}

Object.assign(window, { PricingPage });