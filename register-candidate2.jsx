
// ProConnect — Candidate Registration Wizard (Part 2: steps 6-10 + orchestrator)

// ════════════════ STEP 6 — Work Preferences ════════════════
function CandWorkPrefs({ data, set }) {
  const toggle = (key, opt) => { const arr = data[key] || []; set(key, arr.includes(opt) ? arr.filter(x => x !== opt) : [...arr, opt]); };
  return (
    <RegCard title="Work Preferences" subtitle="Tell us about your working arrangements preference, employment types and when you're available to start.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <RegField label="Availbility" hint="Let us know when you're available to start.">
          <RegSelect placeholder="Select availbility" options={AVAILABILITY} value={data.availability} onChange={e => set('availability', e.target.value)} />
        </RegField>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: '0 0 2px' }}>Employment Type</div>
          <div style={{ fontSize: 13, color: '#6B7480', fontFamily: 'Montserrat', marginBottom: 12 }}>Choose the types of work you're open to.</div>
          {['Full-Time', 'Part-Time', 'Contract', 'Internship', 'Freelance'].map(o => <CheckRow key={o} label={o} checked={(data.empTypes || []).includes(o)} onChange={() => toggle('empTypes', o)} />)}
        </div>
        <div>
          <div style={{ fontSize: 17, fontWeight: 800, color: REG.text, fontFamily: 'Montserrat', margin: '0 0 2px' }}>Working Arrangement Preference</div>
          <div style={{ fontSize: 13, color: '#6B7480', fontFamily: 'Montserrat', marginBottom: 12 }}>Choose your preferred work setup.</div>
          {['On Site', 'Remote', 'Hybrid'].map(o => <CheckRow key={o} label={o} checked={(data.arrangements || []).includes(o)} onChange={() => toggle('arrangements', o)} />)}
        </div>
      </div>
    </RegCard>
  );
}

// ════════════════ STEP 7 — Right to Work ════════════════
function RightToWorkEntry({ d, set, onDelete, canDelete }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <RegField label="Country"><RegSelect placeholder="Select country" options={COUNTRIES} value={d.country} onChange={e => set('country', e.target.value)} /></RegField>
      <RegField label="Type of Working Rights"><RegSelect placeholder="Select type of work" options={WORK_RIGHTS} value={d.type} onChange={e => set('type', e.target.value)} /></RegField>
      {canDelete && <DeleteRowButton onClick={onDelete} />}
    </div>
  );
}

function CandRightToWork({ items, setItems }) {
  const blank = { country: '', type: '' };
  const setItem = (i, k, v) => setItems(items.map((it, j) => j === i ? { ...it, [k]: v } : it));
  return (
    <RegCard title="Right to Work" subtitle="Tell us about your work permit or legal status.">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <SectionDivider />}
          <RightToWorkEntry d={it} set={(k, v) => setItem(i, k, v)} canDelete={items.length > 1} onDelete={() => setItems(items.filter((_, j) => j !== i))} />
        </React.Fragment>
      ))}
      <div style={{ marginTop: 24 }}><AddRowButton label="Add Right to Work" onClick={() => setItems([...items, { ...blank }])} /></div>
    </RegCard>
  );
}

// ════════════════ STEP 8 — Interest ════════════════
function CandInterest({ data, set }) {
  return (
    <RegCard title="Interest" subtitle="Let us know what you're interested in professionally.  (Optional)">
      <RegField label="Interest">
        <ChipMultiSelect placeholder="Select interest" options={INTERESTS} value={data.interests || []} onChange={v => set('interests', v)} />
      </RegField>
    </RegCard>
  );
}

// ════════════════ STEP 9 — Salary Expectation ════════════════
function SalaryEntry({ d, set, onDelete, canDelete }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <RegField label="Country"><RegSelect placeholder="Select country" options={COUNTRIES} value={d.country} onChange={e => set('country', e.target.value)} /></RegField>
      <RegField label="Pay Interval"><RegSelect placeholder="Select pay interval" options={PAY_INTERVALS} value={d.interval} onChange={e => set('interval', e.target.value)} /></RegField>
      <RegField label="Minimum"><RegInput placeholder="E.g 20.000" value={d.min} onChange={e => set('min', e.target.value)} /></RegField>
      <RegField label="Maximum"><RegInput placeholder="E.g 40.000" value={d.max} onChange={e => set('max', e.target.value)} /></RegField>
      {canDelete && <DeleteRowButton onClick={onDelete} />}
    </div>
  );
}

function CandSalary({ items, setItems }) {
  const blank = { country: '', interval: '', min: '', max: '' };
  const setItem = (i, k, v) => setItems(items.map((it, j) => j === i ? { ...it, [k]: v } : it));
  return (
    <RegCard title="Salary Expectation" subtitle="Let us know your desired compensation from specific country.">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <SectionDivider />}
          <SalaryEntry d={it} set={(k, v) => setItem(i, k, v)} canDelete={items.length > 1} onDelete={() => setItems(items.filter((_, j) => j !== i))} />
        </React.Fragment>
      ))}
      <div style={{ marginTop: 24 }}><AddRowButton label="Add Salary Expectation" onClick={() => setItems([...items, { ...blank }])} /></div>
    </RegCard>
  );
}

// ════════════════ STEP 10 — Skill Passport (MRA-TP) ════════════════
function CandSkillPassport({ data, set }) {
  return (
    <RegCard title="Skill Passport (MRA-TP Standard)" subtitle="Provide your official ASEAN MRA-TP skill passport to speed up verification. Otherwise you can skip this step. You can add it later from your profile.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <RegField label="Skill Passport (MRA-TP Standard) Number"><RegInput placeholder="Input your ID number for Skill Passport" value={data.passportNo} onChange={e => set('passportNo', e.target.value)} /></RegField>
        <RegField label="Upload Document"><UploadField placeholder="Upload your skill passport (in PDF or jpg format)" label="Upload" /></RegField>
        <RegField label="Status"><div style={{ ...regBaseInput(false), background: PC.bg, display: 'flex', alignItems: 'center', fontWeight: 700, color: REG.text }}>Unverified</div></RegField>
      </div>
    </RegCard>
  );
}

// ════════════════ Orchestrator ════════════════
function CandidateRegister({ navigate }) {
  const [step, setStep] = React.useState(0);
  const [modal, setModal] = React.useState(false);
  const upd = (setter) => (k, v) => setter(p => ({ ...p, [k]: v }));

  const [personal, setPersonal] = React.useState({});
  const [career, setCareer] = React.useState([{ title: '', company: '', start: '', end: '', current: false, desc: '', achievements: [] }]);
  const [education, setEducation] = React.useState([{ degree: '', school: '', outside: false, city: '', start: '', end: '', enrolling: false }]);
  const [licenses, setLicenses] = React.useState([{ number: '', name: '', org: '', issue: '', expiryType: '', expiry: '', desc: '' }]);
  const [skills, setSkills] = React.useState({ skills: [], languages: [] });
  const [workPrefs, setWorkPrefs] = React.useState({ empTypes: [], arrangements: [] });
  const [rights, setRights] = React.useState([{ country: '', type: '' }]);
  const [interest, setInterest] = React.useState({ interests: [] });
  const [salary, setSalary] = React.useState([{ country: '', interval: '', min: '', max: '' }]);
  const [passport, setPassport] = React.useState({});

  const last = CAND_STEPS.length - 1;
  const next = () => { if (step < last) { window.scrollTo(0, 0); setStep(step + 1); } else setModal(true); };
  const back = () => { if (step > 0) { window.scrollTo(0, 0); setStep(step - 1); } else navigate('choose-role'); };

  return (
    <>
      <WizardLayout current={step} steps={CAND_STEPS} onBack={back} onNext={next} nextLabel={step === last ? 'Submit' : 'Next'}>
        {step === 0 && <CandPersonal data={personal} set={upd(setPersonal)} />}
        {step === 1 && <CandCareer items={career} setItems={setCareer} />}
        {step === 2 && <CandEducation items={education} setItems={setEducation} />}
        {step === 3 && <CandLicenses items={licenses} setItems={setLicenses} />}
        {step === 4 && <CandSkills data={skills} set={upd(setSkills)} />}
        {step === 5 && <CandWorkPrefs data={workPrefs} set={upd(setWorkPrefs)} />}
        {step === 6 && <CandRightToWork items={rights} setItems={setRights} />}
        {step === 7 && <CandInterest data={interest} set={upd(setInterest)} />}
        {step === 8 && <CandSalary items={salary} setItems={setSalary} />}
        {step === 9 && <CandSkillPassport data={passport} set={upd(setPassport)} />}
      </WizardLayout>
      {modal && <SuccessModal title="Profile Complete" body="Your candidate profile has been created. Welcome to ProConnect. Let's find your next opportunity!" onClose={() => { setModal(false); navigate('candidate'); }} />}
    </>
  );
}

Object.assign(window, {
  CandWorkPrefs, CandRightToWork, CandInterest, CandSalary, CandSkillPassport, CandidateRegister,
});
