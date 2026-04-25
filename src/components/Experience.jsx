import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Security Engineer",
      company: "NayaPay (Private) Limited",
      location: "Karachi, Pakistan",
      duration: "Sep 2023 – Present",
      duties: [
        "Worked 24×7 SOC monitoring and detection operations using SIEM, transforming alerts into actionable intelligence.",
        "Develop and fine-tune correlation rules aligned with MITRE ATT&CK, improving detection precision and reducing noise.",
        "Perform threat analysis, incident triage, and EDR-based containment for phishing, malware, and exploitation attempts.",
        "Automate repetitive SOC tasks such as vulnerability-to-CVE mapping and Slack-based exploitability alerts using custom scripts.",
        "Conduct vulnerability assessments (Tenable Nessus) and web/mobile/API testing based on OWASP Top 10 and ASVS guidelines.",
        "Review SDK and mobile app security with Guardsquare (DexGuard, iXGuard), improving resilience against reverse engineering.",
        "Manage and monitor enterprise-grade security controls including Trend Micro Apex One, Email Security Gateway, and Web Proxy.",
        "Oversee infrastructure security by reviewing firewall rule changes, validating configurations, and monitoring Cloudflare WAF events."
      ]
    },
    {
      title: "Security Operation Centre Analyst",
      company: "BankIslami Pakistan Limited",
      location: "Karachi, Pakistan",
      duration: "Mar 2022 – Sep 2023",
      duties: [
        "Monitored enterprise infrastructure through IBM QRadar SIEM, tuning correlation rules and reducing false positives by over 30%.",
        "Investigated alerts from FireEye HX and Trend Micro Apex One (EDR), ensuring timely response and containment of malware incidents.",
        "Administered IBM Guardium for Database Activity Monitoring (DAM), maintaining integrity and visibility of critical financial databases.",
        "Enriched investigations using threat intelligence from MISP, Anomali, and AlienVault OTX, accelerating RCA and IOC validation.",
        "Analyzed phishing and malware campaigns via Trend Micro Email Security, performing detailed header and payload analysis.",
        "Collaborated with managed security providers and internal teams to enhance SOC maturity and reduce MTTD/MTTR."
      ]
    },
    {
      title: "IT Support Specialist",
      company: "The Vikor Health Care",
      location: "Karachi, Pakistan",
      duration: "Nov 2021 – Feb 2022",
      duties: [
        "Provided technical support for software, network, and endpoint issues, ensuring minimal downtime across office systems.",
        "Performed manual Software Quality Assurance (SQA) testing and assisted in troubleshooting software defects before release.",
        "Configured and maintained LAN/WAN devices, improving network stability and user connectivity."
      ]
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Experience</h2>
      <div style={timelineContainerStyle} className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} style={timelineItemStyle} className="timeline-item">
            <div style={timelineDotStyle} className="timeline-dot"></div>
            <div className="glass-panel" style={cardContentStyle}>
              <div style={cardHeaderStyle}>
                <div>
                  <h4 style={titleStyle}>{exp.title}</h4>
                  <p style={companyStyle}>
                    <i className="fas fa-building" style={{marginRight: '8px', color: 'var(--text-secondary)'}}></i>
                    {exp.company}
                    <span style={locationStyle}>
                       <i className="fas fa-map-marker-alt" style={{marginRight: '6px', marginLeft: '12px'}}></i>
                       {exp.location}
                    </span>
                  </p>
                </div>
                <span style={durationBadgeStyle}>
                  <i className="fas fa-calendar-alt" style={{marginRight: '8px'}}></i>
                  {exp.duration}
                </span>
              </div>
              <ul style={listStyle}>
                {exp.duties.map((duty, idx) => (
                  <li key={idx} style={listItemStyle}>
                    <span style={bulletPointStyle}></span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Styles
const timelineContainerStyle = {
  position: 'relative',
  paddingLeft: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px'
};

const timelineItemStyle = {
  position: 'relative'
};

const timelineDotStyle = {
  position: 'absolute',
  left: '-30px',
  top: '30px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))',
  boxShadow: '0 0 15px var(--shadow-color)',
  transform: 'translateX(-50%)',
  zIndex: 2,
  border: '4px solid var(--bg-primary)'
};

const cardContentStyle = {
  padding: '40px',
  position: 'relative'
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '20px',
  marginBottom: '25px',
  paddingBottom: '20px',
  borderBottom: '1px solid var(--glass-border)'
};

const titleStyle = {
  color: 'var(--text-primary)',
  fontSize: '1.6em',
  fontWeight: 700,
  margin: '0 0 10px 0'
};

const companyStyle = {
  fontSize: '1.1em',
  color: 'var(--accent-color)',
  fontWeight: 600,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap'
};

const locationStyle = {
  color: 'var(--text-secondary)',
  fontWeight: 400,
  fontSize: '0.9em'
};

const durationBadgeStyle = {
  fontSize: '0.9em',
  padding: '8px 16px',
  backgroundColor: 'var(--glass-bg)',
  borderRadius: '30px',
  color: 'var(--text-primary)',
  fontWeight: 600,
  border: '1px solid var(--glass-border)',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
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
  gap: '15px',
  color: 'var(--text-secondary)',
  fontSize: '1.05em',
  lineHeight: 1.7
};

const bulletPointStyle = {
  minWidth: '8px',
  height: '8px',
  backgroundColor: 'var(--accent-secondary)',
  borderRadius: '50%',
  marginTop: '10px',
  boxShadow: '0 0 8px var(--accent-secondary)'
};

/* Inject CSS for Timeline Line */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .timeline-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, var(--glass-border) 10%, var(--glass-border) 90%, transparent);
  }
  .timeline-item:hover .timeline-dot {
    transform: translateX(-50%) scale(1.3);
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
`;
document.head.appendChild(styleSheet);

export default Experience;
