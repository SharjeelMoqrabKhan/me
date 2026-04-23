import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="section-title">About Sharjeel</h2>
      <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px' }}>
        <p style={{ fontSize: '1.1em', color: 'var(--text-primary)', textAlign: 'justify', lineHeight: 1.8 }}>
          From my first exposure to threat detection dashboards, I was hooked on the idea that every alert tells a story—one that can reveal risk, intent, and opportunity for defense. Over the past four years, I’ve turned that curiosity into expertise, working across SOC monitoring, incident response, and detection engineering.
          <br /><br />
          My experience in fintech and banking security operations has shaped my understanding of how to protect what matters most—trust and data integrity. Over the years, I’ve worked at the intersection of SOC operations, product security, and vulnerability assessment, focusing on both detection engineering and proactive defense. Whether fine-tuning SIEM correlation rules, performing security testing, or strengthening endpoint and email security controls, my goal remains simple: to turn complexity into clarity and build security that scales with confidence.
        </p>
      </div>

      <div style={gridStyle}>
        <div className="glass-panel" style={cardStyle}>
          <h3 style={cardTitleStyle}><i className="fas fa-brain" style={iconStyle}></i> Core Philosophy</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><i className="fas fa-check-circle" style={listIconStyle}></i> <span><strong>Proactive Defense:</strong> Focused on detection engineering and threat hunting mapped to the MITRE ATT&CK framework, transforming telemetry into context-rich insights.</span></li>
            <li style={listItemStyle}><i className="fas fa-check-circle" style={listIconStyle}></i> <span><strong>Secure Development:</strong> Experienced in application security reviews, mobile app hardening (Guardsquare), and vulnerability management.</span></li>
            <li style={listItemStyle}><i className="fas fa-check-circle" style={listIconStyle}></i> <span><strong>Governance & Compliance:</strong> Strong understanding of ISO 27001, PCI DSS, and GDPR practices.</span></li>
            <li style={listItemStyle}><i className="fas fa-check-circle" style={listIconStyle}></i> <span><strong>Continuous Improvement:</strong> Passionate about optimizing detection coverage and reducing false positives.</span></li>
          </ul>
        </div>

        <div className="glass-panel" style={cardStyle}>
          <h3 style={cardTitleStyle}><i className="fas fa-graduation-cap" style={iconStyle}></i> Academic Background</h3>
          <ul style={listStyle}>
            <li style={listItemStyle}><i className="fas fa-university" style={listIconStyle}></i> <span>Bachelor of Computer Science - Benazir Bhutto Shaheed University Lyari</span></li>
            <li style={listItemStyle}><i className="fas fa-calendar" style={listIconStyle}></i> <span>Year of Birth: 1995 | Nationality: Pakistani</span></li>
            <li style={listItemStyle}><i className="fas fa-language" style={listIconStyle}></i> <span>Languages: Urdu (Native), English (C1/B2)</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px'
};

const cardStyle = {
  padding: '30px',
  display: 'flex',
  flexDirection: 'column'
};

const cardTitleStyle = {
  color: 'var(--accent-color)',
  borderBottom: '1px solid var(--glass-border)',
  paddingBottom: '15px',
  marginBottom: '20px',
  fontSize: '1.4em'
};

const iconStyle = {
  marginRight: '10px'
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
  color: 'var(--text-secondary)',
  lineHeight: 1.6
};

const listIconStyle = {
  color: 'var(--accent-color)',
  marginTop: '4px',
  fontSize: '1.1em'
};

export default About;
