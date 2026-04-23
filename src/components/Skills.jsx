import React from 'react';

const Skills = () => {
  const skills = [
    "SOC Monitoring & Incident Response", "Detection Engineering", "Threat Hunting & IOC Analysis",
    "Vulnerability Assessment & Management", "Penetration Testing & Web Security", "EDR / WAF Monitoring & Tuning",
    "Security Automation (Bash, Python)", "Compliance (ISO 27001, PCI-DSS)", "IBM QRadar (SIEM)",
    "Microsoft Sentinel", "Wazuh (SIEM)", "IBM Guardium (DAM)", "Trend Micro Suite (Apex One, Email, Web Security)",
    "FireEye HX (EDR)", "Cloudflare WAF", "ModSecurity CRS (WAF)", "Nessus (Vulnerability Scanner)",
    "Burp Suite (Web PenTesting)", "Nmap, Wireshark", "MITRE ATT&CK Framework", "Cyber Kill Chain Model",
    "OWASP Top 10 / ASVS", "IDS / IPS", "Python", "Bash", "JavaScript", "HTML / CSS", "Java", "Dart",
    "Windows (Server & Endpoint)", "Linux (Kali, Ubuntu)", "VMware ESXi / Workstation"
  ];

  return (
    <section id="skills" className="container">
      <h2 className="section-title">Core Skills</h2>
      <div className="glass-panel" style={containerStyle}>
        <div style={skillListStyle}>
          {skills.map((skill, index) => (
            <span 
              key={index} 
              style={badgeStyle} 
              className="skill-badge"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                e.currentTarget.style.color = 'var(--accent-color)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const containerStyle = {
  padding: '40px'
};

const skillListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '15px',
  justifyContent: 'center'
};

const badgeStyle = {
  backgroundColor: 'var(--bg-secondary)',
  color: 'var(--accent-color)',
  padding: '10px 20px',
  borderRadius: '8px',
  fontSize: '0.95em',
  fontWeight: 600,
  border: '1px solid var(--accent-color)',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease',
  cursor: 'default',
  display: 'inline-block'
};

export default Skills;
