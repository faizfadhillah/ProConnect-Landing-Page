
// ProConnect — Browse Jobs (job board, fully interactive)

// Logo generator: colored rounded square with initials
function jobLogo(bg, fg, initials) {
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><rect width="48" height="48" rx="9" fill="${bg}"/><text x="24" y="24" font-family="Arial" font-size="18" fill="${fg}" text-anchor="middle" dominant-baseline="central" font-weight="bold">${initials}</text></svg>`
  );
}

const JOBS = [
  {
    id: 1, title: 'Operation Training Manager - (F&B)', company: 'Amaris Hotel Kupang', legal: 'PT Santika Indonesia Hotels',
    loc: 'Bandung', pay: 'IDR 9.000.000 - IDR 13.000.000 per month', ago: '2 days ago', posted: '2 days ago',
    logo: jobLogo('#1B1B4B', '#FF5C8A', 'A'), arrangement: 'Onsite', type: 'Full-Time', verified: true,
    summary: [
      'Design and deliver F&B operational training programs across all hotel outlets.',
      'Ensure every team member meets ASEAN hospitality service standards.',
      'Evaluate service quality and coach supervisors on guest experience.',
      'Maintain training records and report monthly progress to management.',
    ],
    skills_req: [
      'Minimum Diploma/Bachelor in Hospitality or F&B Management.',
      'At least 3 years experience in hotel F&B operations.',
      'Strong leadership and coaching ability.',
      'Excellent communication in Bahasa and English.',
    ],
    rtw: ['Indonesia - Require Indonesian Sponsorship or A Job Offer to Work for A New Employer', 'Indonesia - Indonesian ABTC (APEC Business Travel Card)'],
    location: 'Jl. Cihampelas No. 121, Bandung, West Java 40131, Indonesia',
    jobSkills: ['F&B Operations', 'Training', 'Coaching', 'Service Standards'], interests: ['Culinary', 'Hospitality'], languages: ['Bahasa', 'English'],
  },
  {
    id: 2, title: 'Front Office Manager', company: 'Marina Bay Sands', legal: 'Marina Bay Sands Pte Ltd',
    loc: 'Singapore', pay: 'SGD 4,500 - SGD 6,000 per month', ago: '3 days ago', posted: '3 days ago',
    logo: jobLogo('#0B3D7B', '#fff', 'MB'), arrangement: 'Onsite', type: 'Full-Time', verified: true,
    summary: [
      'Lead the front office team to deliver a seamless five-star guest arrival and departure experience.',
      'Manage room inventory, upgrades and VIP arrangements.',
      'Resolve escalated guest concerns with professionalism and speed.',
      'Drive upselling targets and front-desk revenue performance.',
    ],
    skills_req: [
      'Bachelor degree in Hospitality Management preferred.',
      'Minimum 4 years front office experience, 2 in a supervisory role.',
      'Proficiency with Opera PMS.',
      'Outstanding English communication; a second ASEAN language is a plus.',
    ],
    rtw: ['Singapore - Singapore Citizen or PR', 'Singapore - Employment Pass / S Pass holder'],
    location: '10 Bayfront Avenue, Singapore 018956',
    jobSkills: ['Opera PMS', 'Guest Relations', 'Team Leadership', 'Revenue Management'], interests: ['Luxury Service', 'Travel'], languages: ['English', 'Mandarin'],
  },
  {
    id: 3, title: 'Executive Chef', company: 'The Mulia Resort', legal: 'PT Mulia Bali Resort',
    loc: 'Bali', pay: 'IDR 18.000.000 - IDR 25.000.000 per month', ago: '5 days ago', posted: '5 days ago',
    logo: jobLogo('#1E2A38', '#C9A24B', 'M'), arrangement: 'Onsite', type: 'Full-Time', verified: true,
    summary: [
      'Lead the culinary operation across multiple fine-dining and banquet outlets.',
      'Develop seasonal menus showcasing local Indonesian and international cuisine.',
      'Control food cost, quality and kitchen hygiene to HACCP standards.',
      'Mentor and build a high-performing brigade of chefs.',
    ],
    skills_req: [
      'Culinary diploma from a recognized institution.',
      'Minimum 8 years experience, 3 as Executive/Head Chef in a 5-star property.',
      'Deep knowledge of HACCP and food safety.',
      'Proven menu engineering and cost-control skills.',
    ],
    rtw: ['Indonesia - Require Indonesian Sponsorship or A Job Offer to Work for A New Employer'],
    location: 'Jl. Raya Nusa Dua Selatan, Kawasan Sawangan, Nusa Dua, Bali 80363',
    jobSkills: ['Menu Development', 'HACCP', 'Kitchen Management', 'Cost Control'], interests: ['Fine Dining', 'Culinary Arts'], languages: ['Bahasa', 'English'],
  },
  {
    id: 4, title: 'Housekeeping Supervisor', company: 'Anantara Riverside', legal: 'Anantara Hotels & Resorts',
    loc: 'Bangkok', pay: 'THB 28,000 - THB 35,000 per month', ago: '1 week ago', posted: '1 week ago',
    logo: jobLogo('#3B2A1A', '#E8C98A', 'AN'), arrangement: 'Onsite', type: 'Full-Time', verified: false,
    summary: [
      'Supervise daily housekeeping operations for guest rooms and public areas.',
      'Inspect rooms to ensure they meet brand cleanliness standards.',
      'Manage linen, amenities and cleaning supply inventory.',
      'Train and schedule room attendants for optimal coverage.',
    ],
    skills_req: [
      'Vocational certificate in Hospitality or related field.',
      'At least 2 years housekeeping experience in a hotel.',
      'Attention to detail and strong organizational skills.',
      'Working English; Thai language required.',
    ],
    rtw: ['Thailand - Thai Citizen', 'Thailand - Valid Work Permit holder'],
    location: '257/1-3 Charoennakorn Road, Thonburi, Bangkok 10600, Thailand',
    jobSkills: ['Room Inspection', 'Inventory', 'Scheduling', 'Team Supervision'], interests: ['Hospitality'], languages: ['Thai', 'English'],
  },
  {
    id: 5, title: 'Guest Relations Officer', company: 'Shangri-La Hotel', legal: 'Shangri-La International',
    loc: 'Kuala Lumpur', pay: 'MYR 3,200 - MYR 4,500 per month', ago: '1 week ago', posted: '1 week ago',
    logo: jobLogo('#6A1B2A', '#F0D9A8', 'S'), arrangement: 'Onsite', type: 'Full-Time', verified: true,
    summary: [
      'Be the first point of contact for VIP and loyalty guests.',
      'Coordinate personalised welcome amenities and special requests.',
      'Gather and act on guest feedback to elevate satisfaction scores.',
      'Liaise across departments to resolve guest needs promptly.',
    ],
    skills_req: [
      'Diploma in Hospitality, Tourism or related field.',
      'Minimum 2 years guest-facing experience.',
      'Warm, polished interpersonal manner.',
      'Fluent English and Bahasa Malaysia.',
    ],
    rtw: ['Malaysia - Malaysian Citizen or PR', 'Malaysia - Valid Employment Pass'],
    location: '11 Jalan Sultan Ismail, 50250 Kuala Lumpur, Malaysia',
    jobSkills: ['Guest Relations', 'CRM', 'Problem Solving', 'Hospitality'], interests: ['Luxury Service'], languages: ['English', 'Bahasa Malaysia'],
  },
  {
    id: 6, title: 'Food & Beverage Attendant', company: 'Sofitel Saigon Plaza', legal: 'Accor Vietnam',
    loc: 'Ho Chi Minh City', pay: 'VND 9,000,000 - VND 12,000,000 per month', ago: '2 weeks ago', posted: '2 weeks ago',
    logo: jobLogo('#1A2E5A', '#D4AF6A', 'SF'), arrangement: 'Onsite', type: 'Part-Time', verified: false,
    summary: [
      'Provide attentive table service in restaurants and banquets.',
      'Take orders accurately and recommend menu items.',
      'Maintain cleanliness and setup of service areas.',
      'Support beverage preparation and stock replenishment.',
    ],
    skills_req: [
      'High school diploma; hospitality training is a plus.',
      'Previous F&B service experience preferred.',
      'Friendly, energetic and team-oriented.',
      'Conversational English; Vietnamese required.',
    ],
    rtw: ['Vietnam - Vietnamese Citizen', 'Vietnam - Valid Work Permit holder'],
    location: '17 Le Duan Blvd, District 1, Ho Chi Minh City, Vietnam',
    jobSkills: ['Table Service', 'POS', 'Upselling', 'Beverage'], interests: ['Hospitality', 'F&B'], languages: ['Vietnamese', 'English'],
  },
  {
    id: 7, title: 'Sales & Marketing Manager', company: 'Ayana Resort', legal: 'PT Ayana Hospitality',
    loc: 'Jakarta', pay: 'IDR 15.000.000 - IDR 20.000.000 per month', ago: '2 weeks ago', posted: '2 weeks ago',
    logo: jobLogo('#0E4D45', '#EBD9A0', 'AY'), arrangement: 'Hybrid', type: 'Full-Time', verified: true,
    summary: [
      'Develop and execute the property sales and marketing strategy.',
      'Build relationships with corporate accounts and travel partners.',
      'Drive MICE and leisure revenue across all market segments.',
      'Analyse market trends and competitor positioning.',
    ],
    skills_req: [
      'Bachelor in Marketing, Business or Hospitality.',
      'Minimum 5 years hotel sales experience.',
      'Strong network within the ASEAN travel trade.',
      'Excellent presentation and negotiation skills.',
    ],
    rtw: ['Indonesia - Require Indonesian Sponsorship or A Job Offer to Work for A New Employer'],
    location: 'Jl. Karet Pasar Baru Barat, Central Jakarta 10220, Indonesia',
    jobSkills: ['Sales Strategy', 'MICE', 'Account Management', 'Negotiation'], interests: ['Marketing', 'Travel Trade'], languages: ['Bahasa', 'English'],
  },
  {
    id: 8, title: 'Concierge', company: 'The Peninsula Manila', legal: 'The Peninsula Hotels',
    loc: 'Manila', pay: 'PHP 28,000 - PHP 38,000 per month', ago: '3 weeks ago', posted: '3 weeks ago',
    logo: jobLogo('#1C1C1C', '#C8A45C', 'P'), arrangement: 'Onsite', type: 'Full-Time', verified: true,
    summary: [
      'Anticipate and fulfil guest requests from reservations to transport.',
      'Curate local experiences, dining and entertainment recommendations.',
      'Maintain a trusted network of city service providers.',
      'Uphold the highest standards of discreet, personalised service.',
    ],
    skills_req: [
      'Diploma in Hospitality or Tourism.',
      'Minimum 3 years concierge or guest-services experience.',
      'Extensive knowledge of Metro Manila attractions.',
      'Impeccable English communication.',
    ],
    rtw: ['Philippines - Filipino Citizen', 'Philippines - Valid Work Visa holder'],
    location: 'Cor. Ayala & Makati Avenues, Makati City 1226, Philippines',
    jobSkills: ['Concierge', 'Local Knowledge', 'Guest Service', 'Networking'], interests: ['Travel', 'Hospitality'], languages: ['Filipino', 'English'],
  },
  {
    id: 9, title: 'Revenue Analyst', company: 'Banyan Tree', legal: 'Banyan Tree Holdings',
    loc: 'Phuket', pay: 'THB 45,000 - THB 60,000 per month', ago: '3 weeks ago', posted: '3 weeks ago',
    logo: jobLogo('#14463C', '#CBB37A', 'BT'), arrangement: 'Remote', type: 'Contract', verified: false,
    summary: [
      'Analyse booking patterns and recommend optimal room pricing.',
      'Maintain forecasts and budgets across the resort portfolio.',
      'Manage rates and inventory across OTA and direct channels.',
      'Produce weekly revenue performance reports for leadership.',
    ],
    skills_req: [
      'Bachelor in Finance, Economics, Hospitality or related field.',
      'Minimum 2 years revenue management or analytics experience.',
      'Advanced Excel and familiarity with an RMS.',
      'Strong analytical and communication skills.',
    ],
    rtw: ['Thailand - Thai Citizen', 'Thailand - Valid Work Permit holder'],
    location: '33, 33/27 Moo 4, Cherngtalay, Thalang, Phuket 83110, Thailand',
    jobSkills: ['Revenue Management', 'Excel', 'Forecasting', 'OTA Channels'], interests: ['Analytics', 'Finance'], languages: ['Thai', 'English'],
  },
  {
    id: 10, title: 'Spa Therapist', company: 'Six Senses Ninh Van Bay', legal: 'Six Senses Hotels Resorts Spas',
    loc: 'Nha Trang', pay: 'VND 11,000,000 - VND 15,000,000 per month', ago: '1 month ago', posted: '1 month ago',
    logo: jobLogo('#2E3B2E', '#D8C79A', 'SS'), arrangement: 'Onsite', type: 'Full-Time', verified: true,
    summary: [
      'Deliver a range of spa treatments and wellness therapies.',
      'Personalise sessions to each guest’s wellbeing goals.',
      'Maintain a serene, hygienic and well-stocked treatment space.',
      'Recommend wellness products and follow-up rituals.',
    ],
    skills_req: [
      'Certified in massage therapy or spa treatments.',
      'Minimum 2 years spa experience in a resort setting.',
      'Knowledge of holistic and wellness practices.',
      'Calm, attentive and guest-focused manner.',
    ],
    rtw: ['Vietnam - Vietnamese Citizen', 'Vietnam - Valid Work Permit holder'],
    location: 'Ninh Van Bay, Ninh Hoa, Khanh Hoa Province, Vietnam',
    jobSkills: ['Massage Therapy', 'Wellness', 'Guest Care', 'Product Knowledge'], interests: ['Wellness', 'Spa'], languages: ['Vietnamese', 'English'],
  },
];

const COUNTRY_OF = {
  Bandung: 'Indonesia', Bali: 'Indonesia', Jakarta: 'Indonesia', Singapore: 'Singapore',
  Bangkok: 'Thailand', Phuket: 'Thailand', 'Kuala Lumpur': 'Malaysia',
  'Ho Chi Minh City': 'Vietnam', 'Nha Trang': 'Vietnam', Manila: 'Philippines',
};

// ── Live API (real job data) ─────────────────────────────────────────────────
// Public, no-auth endpoint. Returns PUBLISHED jobs. Falls back to sample data
// above if the request fails (e.g. before the API change is deployed).
const API_BASE = 'https://api.proconnectcareer.com';

function relativeTime(iso) {
  if (!iso) return '';
  const d = new Date(iso); if (isNaN(d.getTime())) return '';
  const days = Math.floor((Date.now() - d.getTime()) / 86400000);
  if (days <= 0) return 'Today';
  if (days === 1) return '1 day ago';
  if (days < 7) return days + ' days ago';
  const weeks = Math.floor(days / 7);
  if (days < 30) return weeks + ' week' + (weeks > 1 ? 's' : '') + ' ago';
  const months = Math.floor(days / 30);
  return months + ' month' + (months > 1 ? 's' : '') + ' ago';
}
const cap = s => (s || '').split(/[-_\s]+/).filter(Boolean).map(w => w[0].toUpperCase() + w.slice(1)).join('-');
const ARR_MAP = { 'on-site': 'Onsite', 'onsite': 'Onsite', 'remote': 'Remote', 'hybrid': 'Hybrid' };
const TYPE_MAP = { 'full-time': 'Full-Time', 'part-time': 'Part-Time', 'contract': 'Contract', 'internship': 'Internship', 'freelance': 'Freelance' };
const INTERVAL_WORD = { monthly: 'month', yearly: 'year', weekly: 'week', daily: 'day', hourly: 'hour' };
function buildPay(j) {
  if (j.min_salary == null && j.max_salary == null) return '';
  const cur = j.salary_currency ? j.salary_currency + ' ' : '';
  const fmt = n => Number(n).toLocaleString('id-ID');
  const lo = j.min_salary != null ? cur + fmt(j.min_salary) : '';
  const hi = j.max_salary != null ? cur + fmt(j.max_salary) : '';
  const range = lo && hi ? lo + ' - ' + hi : (lo || hi);
  const interval = j.salary_pay_interval ? ' per ' + (INTERVAL_WORD[j.salary_pay_interval] || j.salary_pay_interval) : '';
  return range + interval;
}
function resolveLogo(url) {
  if (!url) return '';
  return /^https?:\/\//.test(url) ? url : API_BASE + '/' + url.replace(/^\//, '');
}
function initialsOf(name) {
  const w = (name || '?').trim().split(/\s+/);
  return ((w[0] && w[0][0] || '') + (w[1] && w[1][0] || '')).toUpperCase() || '?';
}
function mapApiJob(j) {
  const arr = Array.isArray(j.domicile_status) ? j.domicile_status : [];
  const emp = Array.isArray(j.employment_status) ? j.employment_status : [];
  return {
    id: j.id,
    title: j.title || 'Untitled role',
    company: j.company_name || '',
    legal: j.company_name || '',
    loc: j.location || j.country || '',
    country: j.country || '',
    pay: buildPay(j),
    ago: relativeTime(j.created_at),
    posted: relativeTime(j.created_at),
    logo: resolveLogo(j.company_logo_url),
    logoFallback: jobLogo('#1B1B4B', '#FF5C8A', initialsOf(j.company_name)),
    arrangement: ARR_MAP[(arr[0] || '').toLowerCase()] || (arr[0] ? cap(arr[0]) : ''),
    type: TYPE_MAP[(emp[0] || '').toLowerCase()] || (emp[0] ? cap(emp[0]) : ''),
    verified: false,
    description: j.description || '',
    location: j.location || '',
    slug: j.slug || null,
  };
}

const CATEGORIES = ['All Categories', 'Front Office', 'Food & Beverage', 'Housekeeping', 'Culinary', 'Sales & Marketing', 'Spa & Wellness', 'Revenue'];
const WORK_TYPES = ['All Types', 'Full-Time', 'Part-Time', 'Contract', 'Internship'];
const ARRANGEMENTS = ['All Arrangements', 'Onsite', 'Hybrid', 'Remote'];
const SORTS = ['Most Recent', 'Oldest', 'Title A-Z'];

function FilterPill({ label, value, options, onChange }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', h); return () => document.removeEventListener('mousedown', h);
  }, [open]);
  const active = value && !value.startsWith('All') && value !== SORTS[0];
  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button onClick={() => setOpen(o => !o)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 18px', borderRadius: 24, border: `1px solid ${active ? '#fff' : 'rgba(255,255,255,0.45)'}`, background: active ? '#fff' : 'transparent', color: active ? PC.navy : '#fff', fontFamily: 'Montserrat', fontSize: 14, fontWeight: active ? 700 : 500, cursor: 'pointer', whiteSpace: 'nowrap' }}>
        {active ? value : label}<span style={{ fontSize: 9, opacity: 0.8 }}>▼</span>
      </button>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, zIndex: 40, background: '#fff', border: `1px solid ${PC.border}`, borderRadius: 12, boxShadow: '0 12px 32px rgba(0,0,0,0.18)', overflow: 'hidden', minWidth: 200 }}>
          {options.map(o => (
            <div key={o} onClick={() => { onChange(o); setOpen(false); }} style={{ padding: '11px 16px', fontSize: 14, fontFamily: 'Montserrat', color: o === value ? PC.blue : PC.dark, fontWeight: o === value ? 700 : 500, cursor: 'pointer', background: o === value ? PC.lightBlue : '#fff' }}
              onMouseEnter={e => { if (o !== value) e.currentTarget.style.background = PC.bg; }} onMouseLeave={e => { if (o !== value) e.currentTarget.style.background = '#fff'; }}>{o}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function JobRow({ job, active, onClick }) {
  return (
    <div onClick={onClick} style={{ display: 'flex', gap: 14, padding: '16px 16px', borderRadius: 10, cursor: 'pointer', background: active ? PC.lightBlue : 'transparent', borderBottom: `1px solid ${PC.border}`, alignItems: 'flex-start', transition: 'background 0.12s' }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = PC.bg; }} onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 5 }}>{job.title}</div>
        <div style={{ fontSize: 13, fontFamily: 'Montserrat', marginBottom: 4 }}>
          <span style={{ color: PC.blue, fontWeight: 600 }}>{job.company}</span>
          <span style={{ color: PC.gray }}> · {job.loc}</span>
        </div>
        {job.pay && <div style={{ fontSize: 12.5, color: PC.gray, fontFamily: 'Montserrat', marginBottom: 4 }}>{job.pay}</div>}
        <div style={{ fontSize: 12, color: PC.medGray, fontFamily: 'Montserrat' }}>{job.ago}</div>
      </div>
      <img src={job.logo} alt="" onError={e => { if (job.logoFallback && e.currentTarget.src !== job.logoFallback) e.currentTarget.src = job.logoFallback; }} style={{ width: 44, height: 44, borderRadius: 8, flexShrink: 0 }} />
    </div>
  );
}

function Chips({ items }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {items.map(i => <span key={i} style={{ padding: '6px 14px', borderRadius: 20, background: PC.bg, border: `1px solid ${PC.border}`, fontSize: 12.5, fontWeight: 500, color: PC.dark, fontFamily: 'Montserrat' }}>{i}</span>)}
    </div>
  );
}

function JobDetail({ job, onApply }) {
  const Section = ({ title, children }) => (
    <div style={{ marginBottom: 22 }}>
      <h3 style={{ fontSize: 17, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 12px' }}>{title}</h3>
      {children}
    </div>
  );
  const Bullets = ({ items }) => (
    <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {items.map((t, i) => <li key={i} style={{ fontSize: 14, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.6 }}>{t}</li>)}
    </ul>
  );
  const Sub = ({ children }) => <div style={{ fontSize: 14.5, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 10px' }}>{children}</div>;
  const Paragraphs = ({ text }) => {
    const parts = String(text || '').split(/\n+/).map(s => s.trim()).filter(Boolean);
    if (parts.length === 0) return <p style={{ fontSize: 14, color: PC.gray, fontFamily: 'Montserrat', margin: 0 }}>No description provided.</p>;
    return <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{parts.map((p, i) => <p key={i} style={{ fontSize: 14, color: PC.dark, fontFamily: 'Montserrat', lineHeight: 1.6, margin: 0 }}>{p}</p>)}</div>;
  };
  return (
    <div style={{ flex: 1, border: `1px solid ${PC.border}`, borderRadius: 14, padding: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, marginBottom: 18 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>{job.title}</span>
            {job.verified && <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="8" fill="#1560BD" /><path d="M5.5 9l2.2 2.2L12.5 6.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          </div>
          <div style={{ fontSize: 14, fontFamily: 'Montserrat', marginBottom: 4 }}><span style={{ color: PC.blue, fontWeight: 600 }}>{job.legal}</span><span style={{ color: PC.gray }}> · {job.loc}</span></div>
          {job.pay && <div style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat' }}>{job.pay}</div>}
          <div style={{ fontSize: 12.5, color: PC.medGray, fontFamily: 'Montserrat', marginTop: 4 }}>{job.posted}</div>
        </div>
        <img src={job.logo} alt="" onError={e => { if (job.logoFallback && e.currentTarget.src !== job.logoFallback) e.currentTarget.src = job.logoFallback; }} style={{ width: 48, height: 48, borderRadius: 8, flexShrink: 0 }} />
      </div>
      <div style={{ marginBottom: 18 }}><Chips items={[job.arrangement, job.type].filter(Boolean)} /></div>
      <PCButton variant="primary" size="lg" fullWidth style={{ marginBottom: 26 }} onClick={onApply}>Apply</PCButton>

      <Section title="Job description">
        {job.summary ? (
          <>
            <Sub>Job summary :</Sub>
            <Bullets items={job.summary} />
            {job.skills_req && job.skills_req.length > 0 && (
              <>
                <div style={{ height: 14 }} />
                <Sub>Required skills :</Sub>
                <Bullets items={job.skills_req} />
              </>
            )}
          </>
        ) : (
          <Paragraphs text={job.description} />
        )}
      </Section>
      {job.rtw && job.rtw.length > 0 && <Section title="Right To Work"><Bullets items={job.rtw} /></Section>}
      {job.location && <Section title="Location"><p style={{ fontSize: 14, color: PC.dark, fontFamily: 'Montserrat', margin: 0 }}>{job.location}</p></Section>}
      {job.jobSkills && job.jobSkills.length > 0 && <Section title="Job Skills"><Chips items={job.jobSkills} /></Section>}
      {job.interests && job.interests.length > 0 && <Section title="Interest"><Chips items={job.interests} /></Section>}
      {job.languages && job.languages.length > 0 && <Section title="Language"><Chips items={job.languages} /></Section>}
    </div>
  );
}

function Pagination({ page, setPage, totalPages }) {
  if (totalPages <= 1) return null;
  const btn = (label, target, isActive, disabled) => (
    <button key={label + target} disabled={disabled} onClick={() => !disabled && setPage(target)}
      style={{ minWidth: 38, height: 38, borderRadius: 8, border: `1px solid ${isActive ? PC.blue : PC.border}`, background: isActive ? PC.blue : '#fff', color: isActive ? '#fff' : (disabled ? PC.medGray : PC.dark), fontFamily: 'Montserrat', fontSize: 13, fontWeight: 600, cursor: disabled ? 'default' : 'pointer', opacity: disabled ? 0.5 : 1 }}>{label}</button>
  );
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '24px 0', flexWrap: 'wrap' }}>
      {btn('‹', Math.max(1, page - 1), false, page === 1)}
      {pages.map(p => btn(String(p), p, p === page, false))}
      {btn('›', Math.min(totalPages, page + 1), false, page === totalPages)}
    </div>
  );
}

const PAGE_SIZE = 6;

function JobsPage({ navigate }) {
  const mobile = useMobile(900);
  const [jobs, setJobs] = React.useState(JOBS);
  const [activeId, setActiveId] = React.useState(JOBS[0].id);
  const [showDetail, setShowDetail] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [category, setCategory] = React.useState('All Categories');
  const [workType, setWorkType] = React.useState('All Types');
  const [arrangement, setArrangement] = React.useState('All Arrangements');
  const [sort, setSort] = React.useState('Most Recent');
  const [page, setPage] = React.useState(1);

  // Fetch real jobs from the public API; keep the sample list as a fallback
  // (e.g. before the public all-jobs API change is deployed, or if offline).
  React.useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/jobs/public?page=1&limit=50`, { headers: { Accept: 'application/json' } });
        if (!res.ok) return;
        const data = await res.json();
        const items = Array.isArray(data && data.items) ? data.items : (Array.isArray(data) ? data : []);
        if (cancelled || items.length === 0) return;
        const mapped = items.map(mapApiJob);
        setJobs(mapped);
        setActiveId(mapped[0].id);
      } catch (e) { /* keep sample fallback */ }
    })();
    return () => { cancelled = true; };
  }, []);

  const catMatch = (job) => {
    if (category === 'All Categories') return true;
    const map = {
      'Front Office': ['Front Office', 'Concierge', 'Guest Relations'],
      'Food & Beverage': ['Food & Beverage', 'F&B', 'Operation Training'],
      'Housekeeping': ['Housekeeping'],
      'Culinary': ['Chef', 'Culinary'],
      'Sales & Marketing': ['Sales', 'Marketing'],
      'Spa & Wellness': ['Spa', 'Therapist'],
      'Revenue': ['Revenue'],
    };
    return (map[category] || []).some(k => job.title.includes(k));
  };

  const filtered = React.useMemo(() => {
    let list = jobs.filter(j => {
      const q = search.trim().toLowerCase();
      const qMatch = !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.loc.toLowerCase().includes(q);
      const cMatch = !country || (j.country || COUNTRY_OF[j.loc]) === country;
      const tMatch = workType === 'All Types' || j.type === workType;
      const aMatch = arrangement === 'All Arrangements' || j.arrangement === arrangement;
      return qMatch && cMatch && tMatch && aMatch && catMatch(j);
    });
    if (sort === 'Title A-Z') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'Oldest') list = [...list].reverse();
    return list;
  }, [jobs, search, country, category, workType, arrangement, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const curPage = Math.min(page, totalPages);
  const pageJobs = filtered.slice((curPage - 1) * PAGE_SIZE, curPage * PAGE_SIZE);

  // Keep selection valid
  React.useEffect(() => {
    if (filtered.length && !filtered.some(j => j.id === activeId)) setActiveId(filtered[0].id);
  }, [filtered, activeId]);
  React.useEffect(() => { setPage(1); }, [search, country, category, workType, arrangement, sort]);

  const activeJob = jobs.find(j => j.id === activeId) || filtered[0] || jobs[0];
  const runSearch = () => setSearch(query);

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HPNav navigate={navigate} activePage="jobs" />

      {/* Search header */}
      <div style={{ background: PC.navy, padding: mobile ? '24px 0' : '28px 0' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: 16, alignItems: mobile ? 'stretch' : 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', marginBottom: 10 }}>Search jobs</label>
              <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && runSearch()} placeholder="Search what you're looking for" style={{ width: '100%', height: 50, borderRadius: 10, border: 'none', padding: '0 18px', fontSize: 14, fontFamily: 'Montserrat', boxSizing: 'border-box', outline: 'none' }} />
            </div>
            <div style={{ flex: mobile ? 'none' : '0 0 320px' }}>
              <label style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#fff', fontFamily: 'Montserrat', marginBottom: 10 }}>Country</label>
              <div style={{ position: 'relative' }}>
                <select value={country} onChange={e => setCountry(e.target.value)} style={{ width: '100%', height: 50, borderRadius: 10, border: 'none', padding: '0 18px', fontSize: 14, fontFamily: 'Montserrat', color: country ? PC.dark : PC.gray, boxSizing: 'border-box', outline: 'none', appearance: 'none', background: '#fff' }}>
                  <option value="">Select country</option>
                  {['Indonesia', 'Singapore', 'Malaysia', 'Thailand', 'Philippines', 'Vietnam'].map(c => <option key={c}>{c}</option>)}
                </select>
                <span style={{ position: 'absolute', right: 16, top: 18, color: PC.gray, fontSize: 11, pointerEvents: 'none' }}>▼</span>
              </div>
            </div>
            <PCButton variant="orange" size="xl" style={{ height: 50, minWidth: 150 }} onClick={runSearch}>Search</PCButton>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: mobile ? 'nowrap' : 'wrap', overflowX: mobile ? 'auto' : 'visible', paddingBottom: mobile ? 4 : 0 }}>
            <FilterPill label="Category" value={category} options={CATEGORIES} onChange={setCategory} />
            <FilterPill label="Work type" value={workType} options={WORK_TYPES} onChange={setWorkType} />
            <FilterPill label="Work Arrangement" value={arrangement} options={ARRANGEMENTS} onChange={setArrangement} />
            <FilterPill label="Sort by" value={sort} options={SORTS} onChange={setSort} />
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ flex: 1, background: '#fff', padding: mobile ? '24px 0 40px' : '40px 0 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 28, alignItems: 'flex-start' }}>
          {(!mobile || !showDetail) && (
            <div style={{ flex: mobile ? 1 : '0 0 420px', border: mobile ? 'none' : `1px solid ${PC.border}`, borderRadius: 14, padding: mobile ? 0 : 20 }}>
              {!mobile && (
                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat' }}>Recommended</div>
                  <div style={{ fontSize: 13, color: PC.gray, fontFamily: 'Montserrat', marginTop: 2 }}>Showing {filtered.length} job{filtered.length !== 1 ? 's' : ''}</div>
                </div>
              )}
              {pageJobs.length === 0 && (
                <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                  <div style={{ fontSize: 36, marginBottom: 10 }}>🔍</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', marginBottom: 4 }}>No jobs found</div>
                  <div style={{ fontSize: 13.5, color: PC.gray, fontFamily: 'Montserrat' }}>Try adjusting your search or filters.</div>
                </div>
              )}
              {pageJobs.map(j => <JobRow key={j.id} job={j} active={!mobile && activeId === j.id} onClick={() => { setActiveId(j.id); if (mobile) setShowDetail(true); }} />)}
              <Pagination page={curPage} setPage={setPage} totalPages={totalPages} />
            </div>
          )}
          {(!mobile || showDetail) && (
            <div style={{ flex: 1, width: '100%' }}>
              {mobile && <button onClick={() => setShowDetail(false)} style={{ background: 'none', border: 'none', color: PC.blue, fontFamily: 'Montserrat', fontSize: 14, fontWeight: 600, cursor: 'pointer', marginBottom: 12, padding: 0 }}>‹ Back to list</button>}
              <JobDetail job={activeJob} onApply={() => { navigate('register'); window.scrollTo(0, 0); }} />
            </div>
          )}
        </div>
      </div>

      <HPFooter navigate={navigate} />
    </div>
  );
}

Object.assign(window, { JobsPage });
