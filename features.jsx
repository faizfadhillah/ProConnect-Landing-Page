
// ProConnect — Features page

function FeaturesPage({ navigate }) {
  const mobile = useMobile(820);
  const core = [
    { tag: 'Core', img: 'feat_ats', title: 'Applicant Tracking System (ATS)',
      desc: 'Manage your entire hiring pipeline without a separate tool. Custom workflows for every hospitality role, from executive chefs to housekeeping.',
      bullets: ['Custom hiring stages per department', 'Team collaboration with notes and ratings', 'Automated candidate status notifications', 'Bulk actions for high-volume hiring', 'Interview scheduling with calendar sync'] },
    { tag: 'AI-Powered', img: 'feat_ai', title: 'Smart Candidate Matching',
      desc: 'Our AI understands hospitality-specific skills, certifications, and career paths to surface the best candidates automatically.',
      bullets: ['Match score based on skills, experience, and certifications', 'ASEAN-MRA-TP competency framework alignment', 'Cross-border qualification matching', 'Reduce time-to-hire by 60%'] },
    { tag: 'Verified', img: 'feat_passport', title: 'Skill Passport & Credential Verification',
      desc: 'The first and only ASEAN-wide portable credential system for hospitality. Verified by schools, trusted by employers, carried by professionals.',
      bullets: ['ASEAN-MRA-TP standard compliance', 'School-verified diplomas and certifications', 'Skills assessment with proficiency levels', 'Portable across all 10 ASEAN countries', 'Employer trust rating: 3-5x higher than unverified'] },
  ];
  const more = [
    { title: 'Resume Parsing', img: 'feat_resume', desc: 'Auto-extract candidate data from any resume. Multi-language support for ASEAN markets.' },
    { title: 'Communication Tools', img: 'feat_comm', desc: 'Message candidates and coordinate interviews inside the platform. Real-time chat, templates, and automated status updates replace scattered email.' },
    { title: 'Freelancing Module', img: 'feat_freelance', desc: 'Hire on-demand hospitality staff for peak season and events. Post gigs, match nearby verified talent, and rate after each shift. (Coming soon)' },
    { title: 'Analytics & Reporting', img: 'feat_analytics', desc: 'Track time-to-hire, source effectiveness, and pipeline health. Export reports for leadership.' },
    { title: 'Employee Directory', img: 'feat_directory', desc: 'Free profiles for all employees. Internal transfers, org charts, and team management at no extra cost.' },
    { title: 'Integrations', img: 'feat_integrations', desc: 'Connect to Canvas, Blackboard, Moodle (education), and major HR systems. API access for enterprise.' },
  ];
  const Illu = ({ img }) => (
    <div style={{ background: PC.lightBlue, borderRadius: 16, aspectRatio: '1.55/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img src={`assets/${img}.png`} alt="" style={{ width: '42%', maxWidth: 170, display: 'block' }} />
    </div>
  );

  return (
    <InnerPage navigate={navigate} activePage="features">
      {/* Hero */}
      <section style={{ background: '#fff', padding: mobile ? '44px 0 24px' : '64px 0 36px', textAlign: 'center' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: mobile ? 34 : 46, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 18px', lineHeight: 1.15 }}>
All the Tools You Need,<br />Without the Clutter.
          </h1>
          <p style={{ fontSize: 16, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 26px', lineHeight: 1.7 }}>
            ProConnect combines an ATS, job board, AI matching, and credential verification in one hospitality platform, so your team hires faster without paying for separate tools.
          </p>
          <PCButton variant="primary" size="xl" onClick={() => navigate('contact')}>Request Demo</PCButton>
        </div>
      </section>

      {/* Core features (alternating) */}
      <section style={{ background: '#fff', padding: mobile ? '24px 0' : '48px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: mobile ? 48 : 80 }}>
          {core.map((f, i) => {
            const imgFirst = i % 2 === 1;
            const text = (
              <div key="t">
                <PCTag color={['blue', 'green', 'orange'][i]}>{f.tag}</PCTag>
                <h2 style={{ fontSize: mobile ? 24 : 28, fontWeight: 700, fontFamily: 'Montserrat', color: PC.dark, margin: '14px 0 14px', lineHeight: 1.25 }}>{f.title}</h2>
                <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 22px', lineHeight: 1.7 }}>{f.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {f.bullets.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}><circle cx="10" cy="10" r="9" stroke={PC.green} strokeWidth="1.6" /><path d="M6 10l2.5 2.5L14 7" stroke={PC.green} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span style={{ fontSize: 14, fontWeight: 500, color: PC.dark, fontFamily: 'Montserrat' }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
            const illu = <div key="i"><Illu img={f.img} /></div>;
            return (
              <div key={f.title} style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 28 : 64, alignItems: 'center' }}>
                {mobile ? [illu, text] : (imgFirst ? [illu, text] : [text, illu])}
              </div>
            );
          })}
        </div>
      </section>

      {/* More features */}
      <section style={{ background: PC.bg, padding: mobile ? '48px 0' : '72px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 44px', textAlign: 'center' }}>More Powerful Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 24 }}>
            {more.map(f => (
              <div key={f.title} style={{ background: '#fff', borderRadius: 14, padding: 22, border: `1px solid ${PC.border}` }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 8px' }}>{f.title}</h3>
                <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 18px', lineHeight: 1.6 }}>{f.desc}</p>
                <Illu img={f.img} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#fff', padding: mobile ? '20px 0 56px' : '40px 0 80px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: PC.blue, borderRadius: 22, padding: mobile ? '44px 28px' : '64px', textAlign: 'center' }}>
            <h2 style={{ fontSize: mobile ? 28 : 36, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 14px' }}>See ProConnect in Action</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', fontFamily: 'Montserrat', margin: '0 0 28px' }}>Get a personalized demo of the platform for your team.</p>
            <PCButton variant="light" size="xl" onClick={() => navigate('contact')} style={{ background: '#fff', color: PC.blue, border: 'none' }}>Request Demo</PCButton>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}

Object.assign(window, { FeaturesPage });
