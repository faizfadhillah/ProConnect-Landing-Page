
// ProConnect — About Us page

function AboutPage({ navigate }) {
  const mobile = useMobile(820);
  const countries = [
    ['🇧🇳', 'Brunei'], ['🇲🇲', 'Myanmar'], ['🇱🇦', 'Laos'], ['🇰🇭', 'Cambodia'], ['🇻🇳', 'Vietnam'], ['🇵🇭', 'Philippines'],
    ['🇹🇭', 'Thailand'], ['🇲🇾', 'Malaysia'], ['🇸🇬', 'Singapore'], ['🇮🇩', 'Indonesia'],
  ];
  const partners = [
    { img: 'about_p1', name: 'ASEANTA', desc: 'ASEAN Tourism Association official partner' },
    { img: 'kemenparekraf', name: 'Min. of Tourism', desc: 'Indonesian Ministry of Tourism backing' },
    { img: 'about_p3', name: '250+ Schools', desc: 'Hospitality schools across ASEAN' },
    { img: 'about_p4', name: '85K+ SMEs', desc: 'Hospitality businesses across the ASEAN market' },
  ];
  const principles = [
    { tag: 'PROBLEM SOLVING', title: 'No Problem is Too Hard', desc: 'We take on tough challenges and solve them with clear, logical thinking.' },
    { tag: 'FOCUS', title: 'People First', desc: 'We focus on what matters most and make intentional decisions to move forward.' },
    { tag: 'COMMITMENT', title: 'Design with Purpose', desc: 'We stay committed to our mission and build solutions that create real impact.' },
    { tag: 'FEEDBACK', title: 'Fast Frequent Feedback', desc: 'We share honest feedback openly to learn faster and improve together.' },
  ];

  return (
    <InnerPage navigate={navigate} activePage="about">
      {/* Hero */}
      <section style={{ background: '#fff', padding: mobile ? '44px 0 24px' : '64px 0 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <h1 style={{ fontSize: mobile ? 32 : 46, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 18px', lineHeight: 1.15 }}>
            Building the Future of<br />Hospitality Hiring in ASEAN
          </h1>
          <p style={{ fontSize: 16, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.7, margin: 0 }}>
            In partnership with ASEANTA and the Indonesian Ministry of Tourism, we're standardizing and simplifying how hospitality talent connects with opportunity across Southeast Asia.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ background: '#fff', padding: mobile ? '12px 0 40px' : '24px 0 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: PC.bg, borderRadius: 20, padding: mobile ? 20 : 36 }}>
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 24 : 44, alignItems: 'center', marginBottom: 28 }}>
              <img src="assets/about_map.png" alt="ASEAN map" style={{ width: '100%', borderRadius: 14, display: 'block', aspectRatio: '690/400', objectFit: 'cover' }} />
              <div>
                <PCTag color="blue">Mission</PCTag>
                <h2 style={{ fontSize: mobile ? 26 : 32, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '14px 0 16px' }}>Our Mission</h2>
                <p style={{ fontSize: 14.5, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.75, margin: 0 }}>
                  To improve workforce mobility and hiring quality across ASEAN's hospitality sector by making skills verifiable and portable. Built on the ASEAN MRA-TP standard, our Skill Passport lets professionals prove their qualifications once and carry them across all 10 ASEAN countries. This benefits candidates, employers, and education partners alike.
                  <br /><br />
                  Across ASEAN, the hospitality sector employs more than 15 million people. Yet hiring remains fragmented, expensive, and exposed to credential fraud. Recruiting agents charge $7,000 to $12,000 per hire, while schools spend heavily on placement services. ProConnect was built to fix this, with a built-in ATS, AI matching, and verified credentials in one platform.
                </p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: mobile ? 'repeat(2,1fr)' : 'repeat(5,1fr)', gap: 12 }}>
              {countries.map(([flag, name]) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px', borderRadius: 10, background: '#fff', border: `1px solid ${PC.border}` }}>
                  <span style={{ fontSize: 20 }}>{flag}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, fontFamily: 'Montserrat', color: PC.dark }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section style={{ background: '#fff', padding: mobile ? '40px 0' : '56px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 40px', textAlign: 'center' }}>Our Partners & Backers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 22 }}>
            {partners.map(p => (
              <div key={p.name} style={{ border: `1px solid ${PC.border}`, borderRadius: 16, padding: mobile ? '20px 14px' : '26px 20px', textAlign: 'center' }}>
                <div style={{ background: PC.bg, borderRadius: 14, padding: 18, marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={`assets/${p.img}.png`} alt="" style={{ width: '64%', maxWidth: 110, display: 'block' }} />
                </div>
                <div style={{ fontSize: 18, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 6 }}>{p.name}</div>
                <div style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.5 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ background: '#fff', padding: mobile ? '32px 0 48px' : '40px 0 72px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{ fontSize: mobile ? 26 : 34, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 44px', textAlign: 'center' }}>Our Principles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: 28 }}>
            {principles.map(p => (
              <div key={p.title}>
                <div style={{ fontSize: 11.5, fontWeight: 700, color: PC.blue, fontFamily: 'Montserrat', letterSpacing: '0.6px', marginBottom: 12 }}>{p.tag}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 12px', lineHeight: 1.25 }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat', margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#fff', padding: mobile ? '0 0 56px' : '20px 0 80px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ background: PC.blue, borderRadius: 22, padding: mobile ? '48px 28px' : '72px', textAlign: 'center' }}>
            <h2 style={{ fontSize: mobile ? 28 : 38, fontWeight: 800, color: '#fff', fontFamily: 'Montserrat', margin: '0 0 14px' }}>Join the Movement</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', fontFamily: 'Montserrat', margin: '0 0 28px' }}>Help us transform hospitality hiring across Southeast Asia.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <PCButton variant="secondary" size="xl" onClick={() => navigate('contact')} style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.7)' }}>Contact Us</PCButton>
              <PCButton variant="light" size="xl" onClick={() => navigate('jobs')} style={{ background: '#fff', color: PC.blue, border: 'none' }}>Start Free Trial</PCButton>
            </div>
          </div>
        </div>
      </section>
    </InnerPage>
  );
}

Object.assign(window, { AboutPage });
