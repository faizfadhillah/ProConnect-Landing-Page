
// ProConnect — Legal pages (Terms of Service, Privacy Policy)

function LegalBlock({ text }) {
  const subRe = /^\d+(\.\d+)*\.?\s/;
  if (!text.includes('\n')) {
    return <p style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.75, margin: '0 0 14px' }}>{text}</p>;
  }
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const out = [];
  let bullets = [];
  const flush = () => {
    if (bullets.length) {
      out.push(<ul key={out.length} style={{ margin: '0 0 14px', paddingLeft: 22, display: 'flex', flexDirection: 'column', gap: 7 }}>
        {bullets.map((b, i) => <li key={i} style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.7 }}>{b}</li>)}
      </ul>);
      bullets = [];
    }
  };
  lines.forEach(l => {
    if (subRe.test(l)) { flush(); out.push(<div key={out.length} style={{ fontSize: 15, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '8px 0 8px' }}>{l}</div>); }
    else if (l.endsWith(':')) { flush(); out.push(<p key={out.length} style={{ fontSize: 15, color: PC.gray, fontFamily: 'Montserrat', lineHeight: 1.75, margin: '0 0 8px' }}>{l}</p>); }
    else bullets.push(l);
  });
  flush();
  return <div>{out}</div>;
}

function LegalLayout({ navigate, activePage, title, date, intro, sections }) {
  const mobile = useMobile(820);
  return (
    <InnerPage navigate={navigate} activePage={activePage}>
      <section style={{ background: '#fff', padding: mobile ? '36px 0 56px' : '56px 0 80px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px' }}>
          <button onClick={() => (navigate.back ? navigate.back('home') : navigate('home'))} aria-label="Go back" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, background: 'none', border: 'none',
            color: PC.gray, fontFamily: 'Montserrat', fontSize: 14, fontWeight: 600, cursor: 'pointer',
            padding: 0, marginBottom: mobile ? 20 : 28,
          }}
            onMouseEnter={e => e.currentTarget.style.color = PC.blue} onMouseLeave={e => e.currentTarget.style.color = PC.gray}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4l-5 5 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back
          </button>
          <h1 style={{ fontSize: mobile ? 30 : 44, fontWeight: 800, color: PC.dark, fontFamily: 'Montserrat', textAlign: 'center', margin: '0 0 12px' }}>{title}</h1>
          <p style={{ fontSize: 16, color: PC.gray, fontFamily: 'Montserrat', textAlign: 'center', margin: '0 0 48px' }}>{date}</p>

          <div style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: mobile ? 20 : 24, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 16px' }}>INTRODUCTION</h2>
            {intro.map((t, i) => <LegalBlock key={i} text={t} />)}
          </div>

          {sections.map((s, i) => (
            <div key={i} style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: mobile ? 20 : 24, fontWeight: 700, color: PC.dark, fontFamily: 'Montserrat', margin: '0 0 16px' }}>{s.n}. {s.title}</h2>
              {s.body.map((t, j) => <LegalBlock key={j} text={t} />)}
            </div>
          ))}
        </div>
      </section>
    </InnerPage>
  );
}

// ── TERMS OF SERVICE ──────────────────────────────────────────────────────
function TermsPage({ navigate }) {
  const intro = [
    'PLEASE READ THE ENTIRE TERMS OF SERVICE CAREFULLY AND CAREFULLY BEFORE USING THE SERVICES AVAILABLE ON ProConnect.',
    'The following Service Terms applies to Advertisers, Registered Users, and the terms herein may be updated, revised, varied and/or changed from time to time. By registering and/or using our services, you agree to the terms of this document.',
  ];
  const sections = [
    { n: '1', title: 'DEFINITION', body: [
      'Advertiser means a user or company that places job vacancy advertisements or promotes job-related activities on the ProConnect Electronic Platform.',
      'Registered User means every user as a prospective employee who has registered on the ProConnect Electronic Platform.',
      "ProConnect means the company that operates the relevant ProConnect Electronic Platform for the country in which the User resides or the country in which the User's business or the User's head office is located.",
      'ProConnect Electronic Platform refers to all ProConnect websites and mobile applications',
    ] },
    { n: '2', title: 'ACCEPTANCE OF TERMS', body: ['By downloading, installing, or using ProConnect Electronic Platform, you agree to abide by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use the App.'] },
    { n: '3', title: 'USER REGISTRATION', body: [
      'To use the ProConnect Electronic Platform, you must create an account by providing accurate and up-to-date information. You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account.',
      'You agree to:\nProvide accurate, current, and complete information during the registration process.\nUpdate your account information as necessary.\nProtect your login credentials and ensure they are not shared with others.',
    ] },
    { n: '4', title: 'USE OF THE ProConnect ELECTRONIC PLATFORM', body: [
      'You may use ProConnect Electronic Platform solely for personal, non-commercial purposes in accordance with these Terms of Service. You agree not to use the App for any unlawful or prohibited activities, including but not limited to:\nUsing the App for fraudulent purposes.\nPosting or transmitting offensive or inappropriate content.\nViolating any applicable local, state, or international law.',
    ] },
    { n: '5', title: 'USER RESPONSIBILITIES', body: [
      'You are responsible for all actions performed through your account. You agree to:\nNot impersonate another person or entity.\nNot engage in any activity that interferes with or disrupts the functioning of the App.\nEnsure the information you provide is accurate, truthful, and up to date.\nNot to use the App to violate the rights of others, including their privacy or intellectual property.',
    ] },
    { n: '6', title: 'ACCOUNT TERMINATION', body: [
      'You may terminate your account at any time by deleting your profile or contacting customer support. If you violate these Terms of Service, we may suspend or terminate your account without prior notice.',
      'Upon termination, you lose access to all features of the ProConnect Electronic Platform, and we may delete your data in accordance with our Privacy Policy.',
    ] },
    { n: '7', title: 'DATA COLLECTION AND PRIVACY', body: ['By using the App, you consent to the collection and use of your personal data in accordance with our Privacy Policy. We respect your privacy and take reasonable steps to protect your data, but you acknowledge that no security system is 100% secure.'] },
    { n: '8', title: 'THIRD-PARTY SERVICES', body: ['ProConnect Electronic Platform may contain links or connections to third-party services, including social media platforms (Google Login, Apple Login, Including linked profile information). These third parties have their own terms and privacy policies, and we do not assume any responsibility or liability for their practices.'] },
    { n: '9', title: 'INTELLECTUAL PROPERTY', body: ['All content and materials available through the App, including but not limited to text, logos, graphics, images, and software, are the property of ProConnect or its licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the App or its contents without prior written permission.'] },
    { n: '10', title: 'LIMITATION OF LIABILITY', body: ['To the fullest extent permitted by law, ProConnect will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or related to your use of ProConnect Electronic Platform, including but not limited to loss of data, loss of profits, or any other damages resulting from the use or inability to use the ProConnect Electronic Platform.'] },
    { n: '11', title: 'WARRANTY INFORMATION', body: ['ProConnect Electronic Platform is provided "as is" and "as available," without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that ProConnect Electronic Platform will be error-free, secure, or continuously available.'] },
    { n: '12', title: 'MODIFICATIONS TO THE TERMS OF SERVICE', body: ['ProConnect reserve the right to change these Terms of Service at any time, by notification via announcement on the ProConnect Electronic Platform or other means deemed reasonable to reflect new features, legal requirements, or changes in business practices'] },
    { n: '13', title: 'CHOICE OF LAW AND DISPUTE RESOLUTION', body: [
      'These terms of service are subject to and therefore must be interpreted based on the provisions of the laws of the Republic of Indonesia.',
      'If a dispute arises regarding the interpretation and/or implementation of the Terms of Service, it will be resolved by deliberation to reach a consensus.',
      'If the above dispute cannot be resolved amicably and/or by deliberation to reach consensus, then the dispute will be resolved through the District Court (based on ProConnect’s domicile)',
    ] },
    { n: '14', title: 'CONTACT INFORMATION', body: ['If you have any questions, concerns, or feedback about these Terms of Service, please contact us at:\nEmail: Send email to “cs@ProConnectcareer.com”\nIn-App Contact/Feedback Form: Available under the "Profile" section in the app and click on “Feedback”.'] },
    { n: '15', title: 'WAIVER OF INDEMNIFICATION', body: ['You declare that ProConnect, its directors, commissioners, employees, partners, affiliates, and/or representatives are not responsible and/or cannot be held liable for claims, demands, lawsuits, losses (whether direct or indirect, material or immaterial) and obligations in any form. by you and/or any party resulting from or in connection with:\nMaterial\nServices\nYour failure to comply with the Terms of Service,\ninformation, statements and others provided by you are assessed or found to be incorrect,\nuse of your Account by other parties,\ndisruption and/or operational failure of the ProConnect Electronic Platform,\nyour visit and/or use of the ProConnect Electronic Platform, or\nyour actions that are not in accordance with laws and regulations.'] },
    { n: '16', title: 'SEVERABILITY', body: ['If any part of these Terms of Service is deemed legally invalid and/or invalid and/or unenforceable, the remaining parts will remain valid and enforceable.'] },
    { n: '17', title: 'FORCE MAJEURE', body: [
      'Each Party will not be deemed to have violated these Terms of Service if there is a total or partial failure of duties and obligations under these Terms of Service caused by fire, government or state action, war, riot, rebellion, earthquake, tsunami, embargo, labor dispute, terrorism, strikes, computer failures, unlawful security breaches (hacking), occurring now or in the future which are beyond the control of such Party.',
      'Each Party is not responsible for any losses incurred in connection with a Force Majeure Event by the other Party.',
    ] },
    { n: '18', title: 'ENTIRE AGREEMENT', body: ['These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and ProConnect with respect to your use of the App. If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.'] },
  ];
  return <LegalLayout navigate={navigate} activePage="tos" title="ProConnect Terms of Service" date="Effective Date: 16 January 2025" intro={intro} sections={sections} />;
}

// ── PRIVACY POLICY ────────────────────────────────────────────────────────
function PrivacyPage({ navigate }) {
  const intro = [
    'PLEASE READ THE ENTIRE PRIVACY POLICY CAREFULLY AND CAREFULLY BEFORE USING THE SERVICES AVAILABLE ON ProConnect.',
    'At ProConnect, we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and protect your information when you use our mobile application, ProConnect Job Matching & Employment. This Policy applies to Advertisers, Registered Users, and the terms herein may be updated, revised, varied and/or changed from time to time.',
    'By registering and/or using our services, you:\nAcknowledge that you have read and understand this Policy and agree to its provisions,\nGives its consent to ProConnect to collect, use and/or process your data for the purposes as described below,\nGives its consent to ProConnect to transfer your personal data in the situations mentioned below, as well as to any transfer of your personal data outside your country, and\nGives its consent to ProConnect to share your data internally and between Electronic Platforms and disclose your data to service providers or third parties for the purposes described below.',
  ];
  const sections = [
    { n: '1', title: 'DEFINITION', body: [
      'Advertiser means a user or company that places job vacancy advertisements or promotes job-related activities on the ProConnect Electronic Platform.',
      'Registered User means every user as a prospective employee who has registered on the ProConnect Electronic Platform.',
      "ProConnect means the company that operates the relevant ProConnect Electronic Platform for the country in which the User resides or the country in which the User's business or the User's head office is located.",
      'ProConnect Electronic Platform refers to all ProConnect websites and mobile applications',
    ] },
    { n: '2', title: 'INFORMATION WE COLLECT', body: ['We collect information to provide, personalist, and improve our services.'] },
    { n: '3', title: 'HOW WE USE YOUR DATA', body: ['We process your personal data for the following:\nAccount Management: To create and maintain your user profile.\nJob Matching: To recommend job opportunities aligned with your preferences and qualifications.\nService Improvement: To enhance app functionality, fix bugs, and improve user experiences.\nPersonalisations: To tailor job recommendations, notifications, and app content based on your preferences.\nAnalytics and Research: To analyst usage trends and develop insights to improve the app.\nSecurity and Compliance: To detect fraud, enforce policies, and comply with legal obligations.'] },
    { n: '4', title: 'HOW WE SHARE INFORMATION', body: ['We share your data only in limited circumstances:\nWith Service Providers: Trusted third parties that provide services like data hosting, analytics, and customer support. These providers are bound by confidentiality obligations.\nWith Employers or Partners: With your consent, relevant profile information may be shared with potential employers or recruitment partners.\nFor Legal and Security Reasons: When required by law, court orders, or to protect our users and systems.\nBusiness Transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.\nWe do not sell your personal data to third parties for advertising or marketing purposes.'] },
    { n: '5', title: 'DATA RETENTION', body: [
      'We retain personal data based on its purpose and applicable legal requirements:',
      `5.1. Active Account Retention
Personal data is retained for as long as your account is active, enabling you to use the app effectively.
Job application history and activity logs are stored for reference and personalised recommendations.
5.2. Suspicious Activity on User Account
If the User sees suspicious activity on the User's account, or accidentally does the following:
Receive and/or reply to suspicious emails.
Clicking on suspicious links.
Receive and open attachments you didn't expect.
Visiting suspicious websites.
5.2.1. Prevention Measures
Several steps that Users can take to help protect themselves:
Run a virus scan on your computer.
Change your ProConnect account password.
If you have used this password on other websites, please change this password as well (do not reuse the same password when doing so).
Change the password for the email address that User uses to log in to User's ProConnect account.
5.2.2. Change Password Precaution
As an additional precaution, we recommend changing the password for each account that the User uses with the same email address that you use to log in to the User's ProConnect account.
Please contact our Customer Service if User believes User's ProConnect account has been compromised, so that we can investigate further.
5.2.3. Responding to Suspicious Activity and Protecting Your Information
If ProConnect has contacted a User regarding our concerns regarding suspicious activity, please immediately cease communications with that party. If personal details have been provided, in addition to the steps above that Users can take, see the information below:
Bank details: if the User has provided the User's bank details, please contact the User's financial institution immediately.
Fraud and identity theft: If the User feels that the User's identity has been compromised, please contact the local police station. ProConnect will cooperate with the police if they request any details.
5.3. Account Deletion
User-Initiated Deletion: When you delete your account, we deactivate it and begin the data removal process.
Retention Period:
Basic account data is retained for 30 days to allow recovery if requested.
Data that must comply with legal or contractual obligations may be retained for up to 7 years (e.g., tax records or legal disputes).
5.4. Aggregated or Anonymized Data
Even after the account has been deleted by the User and after the User's personal data is no longer needed, we will securely delete or anonymize it. We may retain such anonymous data for research, analytics and application improvement purposes, ensuring it cannot identify individual users.`,
    ] },
    { n: '6', title: 'DATA SECURITY', body: [`We implement industry-standard practices to safeguard your personal data:
6.1 Encryption
Sensitive data, such as login credentials, is encrypted during transmission and storage using secure protocols (e.g., HTTPS and AES encryption).
6.2 Access Controls
Access to personal data is restricted to authorised personnel who need it for app functionality or compliance purposes.
6.3 Monitoring and Incident Response
Systems are regularly monitored for vulnerabilities, unauthorised access, or breaches.
In the event of a data breach, affected users will be notified within 72 hours or 3 x 24 hours (three times twenty-four hours), as required by applicable laws.
We cannot fully guarantee that Personal Data will not be intercepted, accessed, disclosed, altered or destroyed by unauthorized third parties, due to factors beyond our control.
ProConnect will notify the User in writing in the event of a Personal Information Protection failure within 72 hours or 3 x 24 hours (three times twenty-four hours).
Notification will be provided to User via electronic mail (e-mail).
6.4 User Responsibility
Users are encouraged to use strong passwords and enable additional security features like two-factor authentication if available.
Users are responsible for maintaining the confidentiality of User account details and Users are obliged not to share User account details, including your password and One Time Password (OTP) with anyone, and Users must always maintain and be responsible for the security of the device that Users use.
Users are advised that Users always update the ProConnect application and/or User software.`] },
    { n: '7', title: 'COOKIES AND TRACKING TECHNOLOGIES', body: [`We use cookies and similar technologies for functionality and personalisation:
7.1 Types of Cookies Used
Essential Cookies: Necessary for the app to function, such as maintaining your session.
Performance Cookies: Collect data on app usage to help us improve functionality.
Targeting Cookies: Personalize job recommendations and advertisements based on user behaviour.
7.2 Managing Cookies
You can manage cookie preferences through your app settings or device settings.
Disabling cookies may impact certain features of the app.
7.3 Third-Party Tracking
We work with analytics providers (e.g., Google Analytics) to track app performance and user interactions.`] },
    { n: '8', title: 'CROSS-BORDER DATA TRANSFERS', body: [`As a global platform, your data may be processed in countries outside of your residence. When we transfer a User's personal data from a User's home country, or city to another country, or another city, we will comply with our legal and regulatory obligations with respect to the User's personal data, including having a lawful basis for transferring the User's personal data and implementing appropriate safeguards to ensure an adequate level of protection for Users' personal data. We will also ensure that the recipient of the information is obliged to protect the User's personal data with a standard of protection that is comparable to protection under applicable law.
8.1 Data Transfer Standards
Transfers comply with data protection laws within Indonesia.
Standard Contractual Clauses (SCCs) are used to ensure data protection during international transfers.
8.2 User Choices
You can request more details about data transfer mechanisms or object to specific cross-border data processing activities by contacting our support team.`] },
    { n: '9', title: 'CHILDREN’S PRIVACY', body: ['ProConnect is not intended for users under the age of 17:\nIf we discover that a user under 17 has provided personal data, we will delete it immediately.'] },
    { n: '10', title: 'UPDATES TO THIS PRIVACY POLICY', body: [`We reserve the right to change the Privacy Policy at any time, by notification via announcement on the ProConnect Electronic Platform or other means deemed reasonable to reflect new features, legal requirements, or changes in business practices:
10.1 Notification of Changes
Significant updates will be communicated via email or in-app notifications at least 30 days before implementation.
Minor updates may be reflected in the policy immediately, with the new effective date displayed at the top.
10.2 User Acknowledgment
Continued use of the app after updates constitutes acceptance of the revised policy.
Users are deemed to agree to the changes made to the Privacy Policy by continuing to access and use the Service.`] },
    { n: '11', title: 'PROTECTION FROM JOB VACANCY FRAUD', body: [
      "Be wary of advertisers or employers who ask for the following:\nUpfront costs (e.g. for things like ‘processing’ job applications). Genuine advertisers or employers WILL NOT ask for money or bank or credit card details.\nReceipt of money transfers that you can save some of as 'payment'.\nBank or credit card details.\nCopy of driver's license or passport information as part of the job application process.\nTaxpayer number. This information should only be provided after you have received a genuine job offer.\nPersonal information that is not work-related, such as appearance or marital status.\nProConnect username and password.\nOther personally identifiable information.",
      'Always check the legitimacy of any job advertisements, email, or company that seems suspicious before you respond. For example, large, well-known companies typically do not include Hotmail or other free email addresses in their advertising. If you have any problems, contact the company directly to verify.',
    ] },
    { n: '12', title: 'CONTACT INFORMATION', body: [`If you have questions, concerns, or complaints regarding this privacy policy, please contact us through any of the following:
Email: Send email to “cs@ProConnectcareer.com”
In-App Contact/Feedback Form: Available under the "Profile" section in the app and click on “Feedback”.
12.1 Complaints Handling
If we cannot resolve your complaint, you may file a complaint with the Personal Data Protection Authority of Indonesia or other relevant authorities.`] },
    { n: '13', title: 'COMPLIANCE WITH LAW AND REGULATIONS', body: [`This Privacy Policy is governed by and complies with Indonesian laws and regulations, including but not limited to:
Law No. 27 of 2022 on Personal Data Protection (PDP Law):
Ensuring the lawful collection, use, and sharing of personal data.
Granting users the right to access, update, and delete their personal data.
Electronic Information and Transactions Law (EIT Law):
Regulating the use of electronic systems for data storage and transactions.
Government Regulation No. 71 of 2019:
Governing the operation of electronic systems and ensuring data protection.
ProConnect is committed to adhering to these regulations and ensuring that your personal data is handled securely and transparently.`] },
  ];
  return <LegalLayout navigate={navigate} activePage="privacy" title="ProConnect Privacy Policy" date="Effective Date: 16 January 2025" intro={intro} sections={sections} />;
}

Object.assign(window, { TermsPage, PrivacyPage });
