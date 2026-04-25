import React from 'react';

const Skills = () => {
  const skills = [
    { name: "SOC Monitoring & IR", icon: "fa-desktop" },
    { name: "Detection Engineering", icon: "fa-code" },
    { name: "Threat Hunting", icon: "fa-search" },
    { name: "Vulnerability Management", icon: "fa-bug" },
    { name: "Penetration Testing", icon: "fa-user-secret" },
    { name: "EDR / WAF Tuning", icon: "fa-shield-alt" },
    { name: "Security Automation", icon: "fa-robot" },
    { name: "Compliance (ISO/PCI)", icon: "fa-file-contract" },
    { name: "IBM QRadar / Sentinel", icon: "fa-chart-line" },
    { name: "Wazuh / Guardium", icon: "fa-database" },
    { name: "Trend Micro Suite", icon: "fa-server" },
    { name: "FireEye HX / Cloudflare", icon: "fa-cloud" },
    { name: "Nessus / Burp Suite", icon: "fa-tools" },
    { name: "Python / Bash", icon: "fa-terminal" },
    { name: "Windows / Linux OS", icon: "fa-laptop-code" },
    { name: "MITRE ATT&CK", icon: "fa-project-diagram" }
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Technical Expertise</h2>
      <div className="glass-panel" style={containerStyle}>
        <div style={skillGridStyle}>
          {skills.map((skill, index) => (
            <div 
              key={index} 
              style={badgeWrapperStyle} 
              className="skill-badge"
            >
              <div style={iconBoxStyle}>
                 <i className={`fas ${skill.icon}`}></i>
              </div>
              <span style={textStyle}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const containerStyle = {
  padding: '50px 30px'
};

const skillGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px'
};

const badgeWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '12px 20px',
  backgroundColor: 'var(--glass-bg)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  cursor: 'default',
  gap: '15px'
};

const iconBoxStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '10px',
  background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#000',
  fontSize: '1.1em',
  flexShrink: 0
};

const textStyle = {
  fontSize: '1em',
  fontWeight: 600,
  color: 'var(--text-primary)'
};

/* Inject CSS for Skill Hover */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .skill-badge:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 25px var(--shadow-color);
    border-color: var(--accent-secondary);
    background: rgba(255, 255, 255, 0.08);
  }
`;
document.head.appendChild(styleSheet);

export default Skills;
