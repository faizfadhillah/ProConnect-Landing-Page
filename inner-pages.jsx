// ProConnect — Inner page wrapper + Contact page

// ── Shared inner page wrapper ──────────────────────────────────────────────
function InnerPage({ navigate, activePage, children }) {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HPNav navigate={navigate} activePage={activePage} />
      <div style={{ flex: 1 }}>{children}</div>
      <HPFooter navigate={navigate} />
    </div>
  );
}

// ── CONTACT US PAGE ────────────────────────────────────────────────────────
function ContactPage({ navigate }) {
  const mobile = useMobile(820);
  const [form, setForm] = React.useState({ firstName: '', lastName: '', email: '', company: '', role: '', country: '', message: '' });
  const [sent, setSent] = React.useState(false);
  const update = k => e => setForm(f => ({ ...f, [k]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  const Field = ({ label, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 13, fontWeight: 500, fontFamily: 'Montserrat', color: PC.dark }}>{label}</label>
      {children}
    </div>
  );
  const inputStyle = { width: '100%', height: 46, borderRadius: 8, border: `1px solid ${PC.border}`, padding: '0 14px', fontSize: 14, fontFamily: 'Montserrat', color: PC.dark, outline: 'none', boxSizing: 'border-box', background: '#fff' };
  const selStyle = { ...inputStyle, appearance: 'none', cursor: 'pointer' };

  const scrollToForm = () => { const el = document.getElementById('demo-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' }); };
  const ContactCard = ({ img, title, desc, onAsk }) => (
    <div style={{ flex: 1, background: '#fff', borderRadius: 16, padding: mobile ? '22px 20px' : '28px', border: `1px solid ${PC.border}` }}>
      <img src={`assets/${img}.png`} alt="" style={{ width: 56, height: 56, display: 'block', marginBottom: 18 }} />
      <h3 style={{ fontSize: 22, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 14px' }}>{title}</h3>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <span style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.5 }}>{desc}</span>
        <PCButton variant="secondary" size="md" onClick={onAsk || scrollToForm}>Ask</PCButton>
      </div>
    </div>
  );

  return (
    <InnerPage navigate={navigate} activePage="contact">
      <section style={{ background: '#fff', padding: mobile ? '40px 0 56px' : '60px 0 80px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 24px' }}>
          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: mobile ? 36 : 56 }}>
            <h1 style={{ fontSize: mobile ? 34 : 48, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 16px' }}>Let's Talk</h1>
            <p style={{ fontSize: 16, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 26px', lineHeight: 1.7, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
              Whether you're an employer, school, or just curious, we'd love to hear from you.
            </p>
            <PCButton variant="primary" size="xl" onClick={() => { const el = document.getElementById('demo-form'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' }); }}>Request Demo</PCButton>
          </div>

          {/* Contact channel cards */}
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 24, marginBottom: 28 }}>
            <ContactCard img="contact_email" title="Email" desc="Submit your questions via email" onAsk={() => { window.location.href = 'mailto:cs@proconnectcareer.com'; }} />
            <ContactCard img="contact_whatsapp" title="WhatsApp (chat)" desc="Submit your questions via WhatsApp" />
          </div>

          {/* Request a Demo container */}
          <div id="demo-form" style={{ border: `1px solid ${PC.border}`, borderRadius: 20, padding: mobile ? '28px 20px' : '40px' }}>
            <h2 style={{ fontSize: mobile ? 24 : 28, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 28px' }}>Request a Demo</h2>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>Request Sent!</h3>
                <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', margin: '0 0 24px' }}>We'll get back to you within 24 hours.</p>
                <PCButton variant="primary" size="md" onClick={() => setSent(false)}>Send Another</PCButton>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1.1fr', gap: mobile ? 28 : 48, alignItems: mobile ? 'stretch' : 'flex-start' }}>
                <div style={{ background: PC.lightBlue, borderRadius: 16, aspectRatio: mobile ? '1.6/1' : '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="assets/contact_demo.png" alt="Demo" style={{ width: '52%', maxWidth: 220, display: 'block' }} />
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Field label="First Name"><input style={inputStyle} placeholder="Input first name" value={form.firstName} onChange={update('firstName')} /></Field>
                    <Field label="Last Name"><input style={inputStyle} placeholder="Input last name" value={form.lastName} onChange={update('lastName')} /></Field>
                  </div>
                  <Field label="Work Email"><input style={inputStyle} type="email" placeholder="Input email" value={form.email} onChange={update('email')} /></Field>
                  <Field label="Company / Institution"><input style={inputStyle} placeholder="Input organization name" value={form.company} onChange={update('company')} /></Field>
                  <Field label="I am a...">
                    <div style={{ position: 'relative' }}>
                      <select value={form.role} onChange={update('role')} style={{ ...selStyle, color: form.role ? PC.dark : PC.gray }}>
                        <option value="">Select your position</option>
                        {['Employer / HR', 'School / Institution', 'Job Seeker', 'Investor', 'Other'].map(r => <option key={r}>{r}</option>)}
                      </select>
                      <span style={{ position: 'absolute', right: 14, top: 17, color: PC.gray, fontSize: 11, pointerEvents: 'none' }}>▼</span>
                    </div>
                  </Field>
                  <Field label="Country">
                    <div style={{ position: 'relative' }}>
                      <select value={form.country} onChange={update('country')} style={{ ...selStyle, color: form.country ? PC.dark : PC.gray }}>
                        <option value="">Select country</option>
                        {['Indonesia', 'Singapore', 'Malaysia', 'Thailand', 'Philippines', 'Vietnam', 'Cambodia', 'Brunei', 'Laos', 'Myanmar'].map(c => <option key={c}>{c}</option>)}
                      </select>
                      <span style={{ position: 'absolute', right: 14, top: 17, color: PC.gray, fontSize: 11, pointerEvents: 'none' }}>▼</span>
                    </div>
                  </Field>
                  <Field label="Message (optional)">
                    <textarea placeholder="Tell's about your needs" value={form.message} onChange={update('message')}
                      style={{ ...inputStyle, height: 'auto', minHeight: 104, padding: '12px 14px', resize: 'vertical' }} />
                  </Field>
                  <PCButton variant="primary" size="lg" fullWidth>Send Request</PCButton>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </InnerPage>
  );
}

Object.assign(window, { InnerPage, ContactPage });
