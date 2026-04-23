import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Security Engineer",
      company: "NayaPay (Private) Limited | Karachi, Pakistan",
      duration: "Sep 2023 – Present",
      duties: [
        "Worked 24×7 SOC monitoring and detection operations using SIEM, transforming alerts into actionable intelligence.",
        "Develop and fine-tune correlation rules aligned with MITRE ATT&CK, improving detection precision and reducing noise.",
        "Perform threat analysis, incident triage, and EDR-based containment for phishing, malware, and exploitation attempts.",
        "Automate repetitive SOC tasks such as vulnerability-to-CVE mapping and Slack-based exploitability alerts using custom scripts.",
        "Conduct vulnerability assessments (Tenable Nessus) and web/mobile/API testing based on OWASP Top 10 and ASVS guidelines.",
        "Review SDK and mobile app security with Guardsquare (DexGuard, iXGuard), improving resilience against reverse engineering.",
        "Manage and monitor enterprise-grade security controls including Trend Micro Apex One (EDR/AV), Email Security Gateway, and Web Proxy.",
        "Oversee infrastructure security by reviewing firewall rule changes, validating configurations, and monitoring Cloudflare WAF events.",
        "Collaborate with development, infrastructure, and compliance teams to align detections and responses with business risk and audit standards."
      ]
    },
    {
      title: "Security Operation Centre Analyst",
      company: "BankIslami Pakistan Limited | Karachi, Pakistan",
      duration: "Mar 2022 – Sep 2023",
      duties: [
        "Monitored enterprise infrastructure through IBM QRadar SIEM, tuning correlation rules and reducing false positives by over 30%.",
        "Investigated alerts from FireEye HX and Trend Micro Apex One (EDR), ensuring timely response and containment of malware incidents.",
        "Administered IBM Guardium for Database Activity Monitoring (DAM), maintaining integrity and visibility of critical financial databases.",
        "Enriched investigations using threat intelligence from MISP, Anomali, and AlienVault OTX, accelerating RCA and IOC validation.",
        "Analyzed phishing and malware campaigns via Trend Micro Email Security, performing detailed header and payload analysis for IOC extraction.",
        "Collaborated with managed security providers and internal teams to enhance SOC maturity and reduce MTTD/MTTR across incident workflows."
      ]
    },
    {
      title: "IT Support Specialist",
      company: "The Vikor Health Care | Karachi, Pakistan",
      duration: "Nov 2021 – Feb 2022",
      duties: [
        "Provided technical support for software, network, and endpoint issues, ensuring minimal downtime across office systems.",
        "Performed manual Software Quality Assurance (SQA) testing and assisted in troubleshooting software defects before release.",
        "Configured and maintained LAN/WAN devices, improving network stability and user connectivity.",
        "Collaborated with development and IT teams to ensure smooth deployment and system updates across departments."
      ]
    }
  ];

  return (
    <section id="experience" className="container">
      <h2 className="section-title">Professional Experience</h2>
      <div style={timelineStyle}>
        {experiences.map((exp, index) => (
          <div key={index} className="glass-panel" style={itemStyle}>
            <div style={headerStyle}>
              <h4 style={titleStyle}>{exp.title}</h4>
              <span style={durationStyle}>{exp.duration}</span>
            </div>
            <p style={companyStyle}>{exp.company}</p>
            <ul style={listStyle}>
              {exp.duties.map((duty, idx) => (
                <li key={idx} style={listItemStyle}>
                  <i className="fas fa-angle-right" style={listIconStyle}></i>
                  <span>{duty}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const timelineStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  position: 'relative'
};

const itemStyle = {
  padding: '30px',
  borderLeft: '4px solid var(--accent-color)'
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px',
  marginBottom: '5px'
};

const titleStyle = {
  color: 'var(--accent-color)',
  fontSize: '1.4em',
  margin: 0
};

const durationStyle = {
  fontSize: '0.9em',
  padding: '4px 12px',
  backgroundColor: 'var(--bg-secondary)',
  borderRadius: '20px',
  color: 'var(--text-secondary)',
  fontWeight: 600,
  border: '1px solid var(--glass-border)'
};

const companyStyle = {
  fontSize: '1.1em',
  color: 'var(--text-primary)',
  marginBottom: '20px',
  fontWeight: 600
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const listItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  color: 'var(--text-secondary)',
  fontSize: '0.95em',
  lineHeight: 1.6
};

const listIconStyle = {
  color: 'var(--accent-color)',
  marginTop: '5px',
  fontSize: '0.9em'
};

export default Experience;
