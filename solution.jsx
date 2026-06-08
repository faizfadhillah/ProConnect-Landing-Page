
// ProConnect — Solution page (Employers / Schools / Job Seekers)

function SolStepCards({ steps, cols }) {
  const mobile = useMobile(820);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : `repeat(${cols},1fr)`, gap: 18 }}>
      {steps.map((s, i) => (
        <div key={i} style={{ border: `1px solid ${PC.border}`, borderRadius: 14, padding: '22px 20px', background: '#fff' }}>
          {s.icon && <div style={{ width: 40, height: 40, borderRadius: '50%', background: PC.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>{s.icon}</div>}
          <h3 style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px', lineHeight: 1.3 }}>{s.title}</h3>
          <p style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
        </div>
      ))}
    </div>
  );
}

function CTABand({ title, desc, bg, btns }) {
  const mobile = useMobile(820);
  return (
    <section style={{ background: '#fff', padding: mobile ? '8px 0 56px' : '24px 0 80px' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ background: bg, borderRadius: 22, padding: mobile ? '48px 28px' : '72px', textAlign: 'center' }}>
          <h2 style={{ fontSize: mobile ? 28 : 36, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 14px' }}>{title}</h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.88)', fontFamily: 'Montserrat', margin: '0 0 28px' }}>{desc}</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>{btns}</div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────── EMPLOYERS ─────────────────────────
function SolEmployers({ navigate }) {
  const mobile = useMobile(820);
  const bars = [
    { label: 'Recruiting Agents (3 hires)', val: '$28,000', w: '85%', color: PC.red },
    { label: 'LinkedIn Recruiter (2 seats)', val: '$33,230', w: '100%', color: '#F5A623' },
    { label: 'Hosco (Professional)', val: '$7,400', w: '24%', color: '#F5A623' },
    { label: 'ProConnect (2 seats)', val: '$1,298', w: '6%', color: PC.green },
  ];
  const ic = (p) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{p}</svg>;
  const why = [
    { title: 'Transparent, Published Pricing', desc: 'No "contact us for pricing" games. See exactly what you pay from day one. From $23/month depending on your country.', icon: ic(<><circle cx="11" cy="11" r="3" stroke={PC.blue} strokeWidth="1.8" /><path d="M2 11s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z" stroke={PC.blue} strokeWidth="1.8" /></>) },
    { title: 'Built-in ATS Included', desc: 'Stop paying separately for Workable or Greenhouse. Our ATS is built into every recruiter seat at no extra charge.', icon: ic(<><path d="M4 16l8-8 2 2-8 8H4z" stroke={PC.blue} strokeWidth="1.8" strokeLinejoin="round" /><path d="M14 6l2-2 2 2-2 2z" stroke={PC.blue} strokeWidth="1.8" strokeLinejoin="round" /></>) },
    { title: 'Unlimited Job Postings', desc: 'Post as many jobs as you need. No per-post fees, no credit packs, no upsell traps. Unlimited means unlimited.', icon: ic(<path d="M7 11a3 3 0 100-2 3 3 0 100 2zm8 0a3 3 0 100-2 3 3 0 100 2z" stroke={PC.blue} strokeWidth="1.8" />) },
    { title: 'Verified Candidates', desc: 'Accredited skill verification ensures every candidate is qualified before you interview.', icon: ic(<><circle cx="11" cy="11" r="8" stroke={PC.blue} strokeWidth="1.8" /><path d="M7 11l2.5 2.5L15 8" stroke={PC.blue} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></>) },
  ];
  const stepIcon = (t) => <span style={{ fontSize: 14, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat' }}>{t}</span>;
  const steps2 = [
    { icon: stepIcon('1'), title: 'Sign Up', desc: 'Create your company profile in under 5 minutes. Free employee profiles included.' },
    { icon: stepIcon('2'), title: 'Post Jobs', desc: 'Unlimited job postings with custom application workflows tailored to hospitality roles.' },
    { icon: stepIcon('3'), title: 'Review', desc: 'AI displays the best candidates. Verified Skill gives you confidence hire' },
    { icon: stepIcon('4'), title: 'Hire', desc: 'Manage interviews, offers, and onboarding from one platform.' },
  ];
  const works = [
    { title: '1 Post Jobs in Minutes', desc: 'Create and publish job openings across your organization with no posting limits.' },
    { title: 'Get Matched with Verified Talent', desc: 'Receive candidates with verified skills and credentials from trusted institutions.' },
    { title: 'Manage Hiring in One Platform', desc: 'Track applicants, schedule interviews, and collaborate with your team using built-in ATS tools.' },
    { title: 'Hire Faster, with Confidence', desc: 'Reduce time-to-hire and eliminate reliance on costly intermediaries.' },
  ];
  const comp = [
    ['Cost', 'Low monthly', 'High per hire', 'High per hire'],
    ['ATS', true, false, false],
    ['Hospitality Focus', 'ASEAN Hospitality', 'Varies', 'General'],
    ['Credential Verification', true, false, false],
    ['Jobs Posting', 'Unlimited', 'Limited', 'Limited'],
  ];
  const compCell = (v, hi) => {
    if (v === true) return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke={PC.green} strokeWidth="1.5" /><path d="M5.5 9l2.2 2.2L12.5 6.5" stroke={PC.green} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
    if (v === false) return <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" stroke={PC.red} strokeWidth="1.5" /><path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke={PC.red} strokeWidth="1.5" strokeLinecap="round" /></svg>;
    return <span style={{ fontSize: 13.5, fontWeight: hi ? 700 : 500, color: hi ? PC.dark : PC.gray, fontFamily: 'Montserrat' }}>{v}</span>;
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', padding: mobile ? '36px 0' : '56px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 44, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: mobile ? 32 : 44, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 18px', lineHeight: 1.15 }}>Replace Recruiting Agents. Keep $7,000+ Per Hire.</h1>
            <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 26px', lineHeight: 1.7 }}>ProConnect gives hotels, resorts, and F&B businesses a complete hiring platform with verified candidates, built-in ATS, and AI matching, all for less than one agent placement fee per year.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <PCButton variant="primary" size="xl" onClick={() => navigate('contact')}>Contact Us</PCButton>
              <PCButton variant="secondary" size="xl" onClick={() => navigate('pricing')}>See Pricing</PCButton>
            </div>
          </div>
          <div style={{ background: PC.lightBlue, borderRadius: 18, padding: mobile ? 20 : 28 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>Annual Cost Comparison (2 Recruiter Seats)</div>
            <div style={{ fontSize: 12, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 18 }}>Based on 3 hires per year</div>
            {bars.map(b => (
              <div key={b.label} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 12.5, color: PC.dark, fontFamily: 'Montserrat' }}>{b.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: b.color, fontFamily: 'Montserrat' }}>{b.val}</span>
                </div>
                <div style={{ height: 10, borderRadius: 5, background: 'rgba(0,0,0,0.06)' }}><div style={{ width: b.w, height: '100%', borderRadius: 5, background: b.color }} /></div>
              </div>
            ))}
            <div style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill={PC.green} /><path d="M5.5 9l2.2 2.2L12.5 6.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ fontSize: 13, color: PC.dark, fontFamily: 'Montserrat' }}>Save <b>$26,700+</b> per year vs. recruiting agents</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: '#fff', padding: mobile ? '32px 0' : '48px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>How ProConnect Works</h2>
          <SolStepCards steps={works} cols={4} />
        </div>
      </section>

      {/* Why (blue band) */}
      <section style={{ background: PC.blue, padding: mobile ? '48px 0' : '64px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>Why Employers Choose ProConnect</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 22 }}>
            {why.map(w => (
              <div key={w.title} style={{ background: '#fff', borderRadius: 14, padding: '26px 24px' }}>
                <div style={{ width: 46, height: 46, borderRadius: 11, background: PC.lightBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>{w.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>{w.title}</h3>
                <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 steps */}
      <section style={{ background: '#fff', padding: mobile ? '48px 0' : '64px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>Get Hiring in 4 Simple Steps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4,1fr)', gap: 18 }}>
            {steps2.map((s, i) => (
              <div key={i} style={{ background: PC.bg, borderRadius: 14, padding: '22px 20px' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: PC.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ background: '#fff', padding: mobile ? '24px 0 48px' : '24px 0 64px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 24 : 32, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 32px', textAlign: 'center' }}>Stop Overpaying for Hospitality Recruitment</h2>
          <div style={{ border: `1px solid ${PC.border}`, borderRadius: 14, overflow: 'hidden', overflowX: 'auto' }}>
            <div style={{ minWidth: 620 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', background: PC.blue }}>
                {['Feature', 'ProConnect', 'Recruiting Agent', 'Others Platform'].map((h, i) => (
                  <div key={h} style={{ padding: '14px 18px', fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', textAlign: i === 0 ? 'left' : 'center' }}>{h}</div>
                ))}
              </div>
              {comp.map(([feat, a, b, c], i) => (
                <div key={feat} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', borderBottom: i < comp.length - 1 ? `1px solid ${PC.border}` : 'none' }}>
                  <div style={{ padding: '13px 18px', fontSize: 14, color: PC.dark, fontFamily: 'Montserrat' }}>{feat}</div>
                  {[[a, true], [b, false], [c, false]].map(([v, hi], vi) => <div key={vi} style={{ padding: '13px 18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{compCell(v, hi)}</div>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Start Hiring Smarter Today" desc="Get a personalized demo and see how much you could save." bg={PC.blue}
        btns={<><PCButton variant="secondary" size="xl" onClick={() => navigate('contact')} style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.7)' }}>Contact Us</PCButton><PCButton variant="light" size="xl" onClick={() => navigate('jobs')} style={{ background: '#fff', color: PC.blue, border: 'none' }}>Start Free Trial</PCButton></>} />
    </div>
  );
}

// ───────────────────────── SCHOOLS ─────────────────────────
function SolSchools({ navigate }) {
  const mobile = useMobile(820);
  const rows = [
    ['Current agent cost (75 placements)', '-$520,000', PC.red],
    ['ProConnect subscription', '-$3,600', PC.dark],
    ['Profit share earned (38 placements)', '+$4,940', PC.green],
  ];
  const works = [
    { title: 'Verify Graduates', desc: '5 minutes per student. Confirm enrollment, diplomas, skills assessments, and references.' },
    { title: 'Graduates Get Hired', desc: 'Employers trust "Verified by [Your School]" badges. Verified candidates get 3-5x more interest.' },
    { title: 'You Earn Revenue', desc: "Receive 15-25% of the hiring employer's subscription fee. Automatic monthly or quarterly payments." },
    { title: 'Track Everything', desc: 'Real-time placement dashboards, employer relationship management, and accreditation-ready reports.' },
  ];
  const tiers = [
    { name: 'Starter', sub: 'Best for small schools (<200 students)', price: '$1,200', earn: 'Earn up to 25% per placement', bullets: ['Start generating revenue from placements', 'No upfront complexity'] },
    { name: 'Professional', sub: 'For growing institutions (200-1,000 students)', price: '$3,600', earn: 'Earn up to 20% per placement', bullets: ['Scale placement volume', 'Better ROI as you grow'] },
    { name: 'Enterprise', sub: 'For large institutions (1,000-3,000 students)', price: '$7,200', earn: 'Earn up to 18% per placement', bullets: ['Priority support', 'Strong ROI at scale'] },
    { name: 'Flagship', sub: 'Maximum revenue potential (3,000+ students)', price: '$9,600', earn: 'Earn 15% + exclusive benefits', bullets: ['Premium exposure to employers', 'Custom partnership opportunities'] },
  ];
  return (
    <div>
      <section style={{ background: '#fff', padding: mobile ? '36px 0' : '56px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 44, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: mobile ? 32 : 44, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 18px', lineHeight: 1.15 }}>Stop Paying Agents. Start Earning From Graduate Placements.</h1>
            <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 26px', lineHeight: 1.7 }}>Replace $250K–$2.5M in annual agent fees with a platform that costs 74–84% less, and actually pays you back through profit sharing.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <PCButton size="xl" onClick={() => navigate('contact')} style={{ background: PC.green, color: '#fff', border: 'none' }}>Become a Partner</PCButton>
            </div>
          </div>
          <div style={{ background: '#E6F6EC', borderRadius: 18, padding: mobile ? 20 : 28 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', textAlign: 'center', marginBottom: 18 }}>Example: Medium School (150 graduates/year)</div>
            {rows.map(([l, v, col]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', borderRadius: 10, padding: '14px 16px', marginBottom: 10 }}>
                <span style={{ fontSize: 13, color: PC.dark, fontFamily: 'Montserrat' }}>{l}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: col, fontFamily: 'Montserrat' }}>{v}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0E1726', borderRadius: 10, padding: '14px 16px', marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: '#fff', fontFamily: 'Montserrat', fontWeight: 600 }}>Net position with ProConnect</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: '#4ADE80', fontFamily: 'Montserrat' }}>+$715 PROFIT</span>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill={PC.green} /><path d="M5.5 9l2.2 2.2L12.5 6.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ fontSize: 13, color: PC.dark, fontFamily: 'Montserrat' }}>Total savings vs agents: <b>$264,665 AUD per year</b></span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: PC.green, padding: mobile ? '48px 0' : '64px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>How the Partnership Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4,1fr)', gap: 18 }}>
            {works.map((s, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 14, padding: '24px 20px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: mobile ? '48px 0' : '64px 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 24 : 32, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 32px', textAlign: 'center' }}>Schools That Trust ProConnect</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
            {Array.from({ length: 11 }).map((_, i) => <div key={i} style={{ width: mobile ? 'calc(33% - 12px)' : 130, height: 60, borderRadius: 10, background: '#EFF1F2', border: `1px solid ${PC.border}` }} />)}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: mobile ? '24px 0 48px' : '24px 0 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 8px', textAlign: 'center' }}>Education Partner Pricing</h2>
          <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', textAlign: 'center', margin: '0 0 36px', maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>Replace $250K–$2.5M in annual agent fees with a platform that costs 74–84% less, and actually pays you back through profit sharing.</p>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(4,1fr)', gap: 18 }}>
            {tiers.map(t => (
              <div key={t.name} style={{ border: `1px solid ${PC.border}`, borderRadius: 14, padding: 22 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{t.name}</div>
                <div style={{ fontSize: 11.5, color: PC.gray, fontFamily: 'Montserrat', margin: '4px 0 14px', minHeight: 30 }}>{t.sub}</div>
                <div style={{ marginBottom: 6 }}><span style={{ fontSize: 26, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat' }}>{t.price}</span><span style={{ fontSize: 12, color: PC.gray }}>/yr</span></div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: PC.green, fontFamily: 'Montserrat', marginBottom: 16 }}>{t.earn}</div>
                <PCButton variant="secondary" size="md" fullWidth onClick={() => navigate('contact')} style={{ marginBottom: 16 }}>Contact Sales</PCButton>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {t.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}><circle cx="8" cy="8" r="7" stroke={PC.gray} strokeWidth="1.3" /><path d="M5 8l2 2 4-4" stroke={PC.gray} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span style={{ fontSize: 12.5, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.4 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Join 250+ Hospitality Schools Across ASEAN" desc="Schedule a call to see how the partnership works for your institution." bg={PC.green}
        btns={<PCButton variant="light" size="xl" onClick={() => navigate('contact')} style={{ background: '#fff', color: PC.green, border: 'none' }}>Become a Partner</PCButton>} />
    </div>
  );
}

// ───────────────────────── JOB SEEKERS ─────────────────────────
function SolJobSeekers({ navigate }) {
  const mobile = useMobile(820);
  const cats = ['Front Office', 'Food & Beverage', 'Room Service', 'Hotel Management', 'Sales & Marketing', 'Housekeeping', 'Human Resources', 'Procurement'];
  const ic = (p) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{p}</svg>;
  const why = [
    { title: 'Anywhere in ASEAN', desc: 'Your Skill Passport is recognized by employers in all 10 ASEAN countries. No more re-proving your qualifications at every border.', icon: ic(<path d="M5 11a3 3 0 100-2 3 3 0 100 2zm8 0a3 3 0 100-2 3 3 0 100 2z" stroke={PC.orange} strokeWidth="1.8" />) },
    { title: 'Get Matched, Not Lost', desc: 'Our AI matches you to relevant hospitality jobs based on your actual skills, not just keywords. Stop scrolling, start interviewing.', icon: ic(<><circle cx="9" cy="9" r="6" stroke={PC.orange} strokeWidth="1.8" /><path d="M13.5 13.5L18 18" stroke={PC.orange} strokeWidth="1.8" strokeLinecap="round" /></>) },
    { title: 'Track Your Applications', desc: 'See the status of every application in real-time. No more "application black holes." You know exactly where you stand.', icon: ic(<><path d="M11 3a8 8 0 108 8" stroke={PC.orange} strokeWidth="1.8" strokeLinecap="round" /><circle cx="11" cy="11" r="2.4" stroke={PC.orange} strokeWidth="1.8" /></>) },
  ];
  const flags = [['🇧🇳', 'Brunei'], ['🇲🇲', 'Myanmar'], ['🇱🇦', 'Laos'], ['🇰🇭', 'Cambodia'], ['🇻🇳', 'Vietnam'], ['🇵🇭', 'Philippines'], ['🇹🇭', 'Thailand'], ['🇲🇾', 'Malaysia'], ['🇸🇬', 'Singapore'], ['🇮🇩', 'Indonesia']];
  return (
    <div>
      <section style={{ background: '#fff', padding: mobile ? '36px 0' : '56px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 44, alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: mobile ? 32 : 44, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 18px', lineHeight: 1.15 }}>Your Skills. Verified. Portable Across ASEAN.</h1>
            <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 26px', lineHeight: 1.7 }}>Build a Skill Passport that proves your qualifications to employers in all 10 ASEAN countries. Get matched to the best hospitality jobs, for free.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <PCButton size="xl" onClick={() => navigate('jobs')} style={{ background: PC.blue, color: '#fff', border: 'none' }}>Create Free Profile</PCButton>
              <PCButton variant="secondary" size="xl" onClick={() => navigate('jobs')}>Browse Jobs</PCButton>
            </div>
          </div>
          {/* Skill passport card */}
          <div style={{ background: '#FFF3DE', borderRadius: 18, padding: mobile ? 18 : 26 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', textAlign: 'center', marginBottom: 16 }}>Your Skill Passport</div>
            <div style={{ background: '#fff', borderRadius: 14, padding: 22 }}>
              <div style={{ textAlign: 'center', marginBottom: 14 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: PC.lightBlue, margin: '0 auto 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none"><circle cx="17" cy="13" r="5" fill="#9DB4CE" /><path d="M6 29c0-5 5-8 11-8s11 3 11 8" fill="#9DB4CE" /></svg>
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>Maria Santos</div>
                <div style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 8 }}>Executive Chef • Manila, Philippines</div>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: PC.green, background: '#DCFCE7', padding: '4px 9px', borderRadius: 6, fontFamily: 'Montserrat' }}>✓ SCHOOL VERIFIED</span>
                  <span style={{ fontSize: 10.5, fontWeight: 700, color: PC.blue, background: '#DDEAFB', padding: '4px 9px', borderRadius: 6, fontFamily: 'Montserrat' }}>MRA-TP CERTIFIED</span>
                </div>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 10 }}>Verified skills:</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Kitchen Management', 'Menu Planning', 'Food Safety', 'Team Leadership', '+12 more'].map(s => (
                  <span key={s} style={{ fontSize: 12, fontWeight: 500, color: PC.dark, background: PC.bg, border: `1px solid ${PC.border}`, padding: '6px 11px', borderRadius: 8, fontFamily: 'Montserrat' }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ background: '#fff', padding: mobile ? '32px 0' : '48px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 32px', textAlign: 'center' }}>Explore ProConnect Top Jobs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 16 }}>
            {cats.map(c => (
              <button key={c} onClick={() => navigate('jobs')} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px', borderRadius: 10, border: `1px solid ${PC.border}`, background: '#fff', cursor: 'pointer', fontFamily: 'Montserrat' }}>
                <span style={{ width: 34, height: 34, borderRadius: 8, background: '#FFE9D6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="5" width="12" height="9" rx="1.5" stroke={PC.orange} strokeWidth="1.5" /><path d="M6 5V4a1.5 1.5 0 013 0v1" stroke={PC.orange} strokeWidth="1.5" /></svg>
                </span>
                <span style={{ flex: 1, textAlign: 'left', fontSize: 13.5, fontWeight: 600, color: PC.dark }}>{c}</span>
                <span style={{ color: PC.medGray }}>›</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why (orange band) */}
      <section style={{ background: PC.orange, padding: mobile ? '48px 0' : '64px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>Why Hospitality Professionals Love ProConnect</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 22 }}>
            {why.map(w => (
              <div key={w.title} style={{ background: '#fff', borderRadius: 14, padding: '28px 24px' }}>
                <div style={{ width: 46, height: 46, borderRadius: 11, background: '#FFE9D6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>{w.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>{w.title}</h3>
                <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.6 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies (flags) */}
      <section style={{ background: '#fff', padding: mobile ? '48px 0' : '64px 0' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 24 : 32, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 32px', textAlign: 'center' }}>Companies That Trust ProConnect</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(6,1fr)', gap: 12 }}>
            {flags.map(([f, n]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', borderRadius: 10, background: '#fff', border: `1px solid ${PC.border}` }}>
                <span style={{ fontSize: 20 }}>{f}</span><span style={{ fontSize: 13, fontWeight: 600, color: PC.dark, fontFamily: 'Montserrat' }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Your Next Hospitality Career Starts Here" desc="Create your free Skill Passport in under 10 minutes." bg={PC.orange}
        btns={<><PCButton variant="light" size="xl" onClick={() => navigate('jobs')} style={{ background: '#fff', color: PC.orange, border: 'none' }}>Create Free Profile</PCButton><PCButton size="xl" onClick={() => navigate('jobs')} style={{ background: PC.blue, color: '#fff', border: 'none' }}>Browse Jobs First</PCButton></>} />
    </div>
  );
}

function SolutionPage({ navigate }) {
  const mobile = useMobile(820);
  const [tab, setTab] = React.useState(window.__solutionTab || 'employers');
  React.useEffect(() => { if (window.__solutionTab) window.__solutionTab = null; }, []);
  const tabs = [['employers', 'For Employers'], ['schools', 'For Schools'], ['jobseekers', 'For Job Seekers']];
  return (
    <InnerPage navigate={navigate} activePage="solution">
      <div style={{ background: '#fff', borderBottom: `1px solid ${PC.border}`, position: 'sticky', top: 72, zIndex: 50 }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'flex', gap: mobile ? 4 : 8, justifyContent: 'center', overflowX: 'auto' }}>
          {tabs.map(([id, label]) => (
            <button key={id} onClick={() => { setTab(id); window.scrollTo(0, 0); }}
              style={{ padding: mobile ? '14px 12px' : '16px 22px', border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'Montserrat', fontSize: 14, fontWeight: tab === id ? 700 : 500, color: tab === id ? PC.blue : PC.gray, borderBottom: tab === id ? `2.5px solid ${PC.blue}` : '2.5px solid transparent', whiteSpace: 'nowrap' }}>{label}</button>
          ))}
        </div>
      </div>
      {tab === 'employers' && <SolEmployers navigate={navigate} />}
      {tab === 'schools' && <SolSchools navigate={navigate} />}
      {tab === 'jobseekers' && <SolJobSeekers navigate={navigate} />}
    </InnerPage>
  );
}

Object.assign(window, { SolutionPage });
