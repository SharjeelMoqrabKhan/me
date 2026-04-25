import React from 'react';

const About = () => {
  return (
    <section id="about" className="container" style={{ position: 'relative' }}>
      <h2 className="section-title">About Me</h2>

      <div className="glass-panel" style={mainCardStyle}>
        <div style={decoratorStyle}></div>
        <p style={paragraphStyle}>
          From my first exposure to threat detection dashboards, I was hooked on the idea that every alert tells a story,one that can reveal risk, intent, and opportunity for defense. Over the past four years, I’ve turned that curiosity into expertise, working across SOC monitoring, incident response, and detection engineering.
        </p>
        <p style={paragraphStyle}>
          My experience in fintech and banking security operations has shaped my understanding of how to protect what matters most trust and data integrity. Over the years, I’ve worked at the intersection of SOC operations, product security, and vulnerability assessment, focusing on both detection engineering and proactive defense. Whether fine-tuning SIEM correlation rules, performing security testing, or strengthening endpoint and email security controls, my goal remains simple: <strong style={{ color: 'var(--text-primary)' }}>to turn complexity into clarity and build security that scales with confidence.</strong>
        </p>
      </div>

      <div style={gridStyle}>
        <div className="glass-panel about-card" style={cardStyle}>
          <div style={cardHeaderStyle}>
            <div style={iconWrapperStyle}><i className="fas fa-brain"></i></div>
            <h3 style={cardTitleStyle}>Core Philosophy</h3>
          </div>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <i className="fas fa-crosshairs" style={listIconStyle}></i>
              <span><strong>Proactive Defense:</strong> Focused on detection engineering and threat hunting mapped to the MITRE ATT&CK framework, transforming telemetry into context-rich insights.</span>
            </li>
            <li style={listItemStyle}>
              <i className="fas fa-code" style={listIconStyle}></i>
              <span><strong>Secure Development:</strong> Experienced in application security reviews, mobile app hardening (Guardsquare), and vulnerability management.</span>
            </li>
            <li style={listItemStyle}>
              <i className="fas fa-shield-alt" style={listIconStyle}></i>
              <span><strong>Governance & Compliance:</strong> Strong understanding of ISO 27001, PCI DSS, and GDPR practices.</span>
            </li>
            <li style={listItemStyle}>
              <i className="fas fa-chart-line" style={listIconStyle}></i>
              <span><strong>Continuous Improvement:</strong> Passionate about optimizing detection coverage and reducing false positives.</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel about-card" style={cardStyle}>
          <div style={cardHeaderStyle}>
            <div style={iconWrapperStyle}><i className="fas fa-graduation-cap"></i></div>
            <h3 style={cardTitleStyle}>Background Details</h3>
          </div>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <i className="fas fa-university" style={listIconStyle}></i>
              <span><strong>Education:</strong> Bachelor of Computer Science - Benazir Bhutto Shaheed University Lyari</span>
            </li>
            <li style={listItemStyle}>
              <i className="fas fa-passport" style={listIconStyle}></i>
              <span><strong>Nationality:</strong> Pakistani</span>
            </li>
            <li style={listItemStyle}>
              <i className="fas fa-language" style={listIconStyle}></i>
              <span><strong>Languages:</strong> Urdu (Native), English (C1/B2)</span>
            </li>
            <li style={listItemStyle}>
              <i className="fas fa-map-marker-alt" style={listIconStyle}></i>
              <span><strong>Location:</strong> Karachi, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Styles
const mainCardStyle = {
  padding: '50px',
  marginBottom: '50px',
  position: 'relative',
  overflow: 'hidden'
};

const decoratorStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '5px',
  height: '100%',
  background: 'linear-gradient(to bottom, var(--accent-color), var(--accent-secondary))'
};

const paragraphStyle = {
  fontSize: '1.2em',
  color: 'var(--text-secondary)',
  textAlign: 'justify',
  lineHeight: 1.9,
  marginBottom: '20px'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '40px'
};

const cardStyle = {
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
};

const cardHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '30px',
  borderBottom: '1px solid var(--glass-border)',
  paddingBottom: '20px'
};

const iconWrapperStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '12px',
  background: 'var(--glass-bg)',
  border: '1px solid var(--glass-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5em',
  color: 'var(--accent-color)',
  boxShadow: '0 4px 15px var(--shadow-color)'
};

const cardTitleStyle = {
  color: 'var(--text-primary)',
  fontSize: '1.5em',
  margin: 0
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '25px'
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '15px',
  color: 'var(--text-secondary)',
  lineHeight: 1.6,
  fontSize: '1.05em'
};

const listIconStyle = {
  color: 'var(--accent-color)',
  marginTop: '5px',
  fontSize: '1.2em',
  background: 'var(--glass-bg)',
  padding: '8px',
  borderRadius: '8px',
  border: '1px solid var(--glass-border)'
};

export default About;
