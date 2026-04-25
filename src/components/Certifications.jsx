import React from 'react';

const Certifications = () => {
  const certs = [
    { title: "Certified in Cybersecurity (CC)", issuer: "(ISC)²", date: "07/2023", link: "https://drive.google.com/file/d/13CSxSvzS2axZTz4iv06v5X1SqRgusyMX/view" },
    { title: "Azure Fundamentals", issuer: "Microsoft", date: "06/2023", link: "https://www.credly.com/badges/51f90cbb-0b19-4902-a05a-ef9df2fd3126/linked_in_profile" },
    { title: "QRadar SIEM Foundation", issuer: "IBM", date: "04/2023", link: "https://www.credly.com/badges/b57cf301-35e2-4ebc-b01f-32617d18679a/linked_in_profile" },
    { title: "Practical Web App Security", issuer: "TCM Security", date: "05/2023", link: "https://drive.google.com/file/d/1aX9DHVc2t363IjeD9xGM2RVmOVEbJLIi/view" },
    { title: "Ethical Hacking Essentials", issuer: "TCM Security", date: "02/2022", link: "https://eccommonstorage.blob.core.windows.net/codered/certificates/7a2d8bfa-b7cb-495c-8fab-158e2148dc5f.png" },
    { title: "Google IT Support Certificate", issuer: "Coursera", date: "05/2023", link: "https://www.credly.com/badges/45def224-8619-42e4-a7b3-121e63298597?source=linked_in_profile" },
    { title: "JS Algorithms & Data Structures", issuer: "FreeCodeCamp", date: "10/2020", link: "https://www.freecodecamp.org/certification/fcccf40f295-3dd3-4b79-a803-8f67251feaa8/javascript-algorithms-and-data-structures" },
    { title: "Responsive Web Design", issuer: "FreeCodeCamp", date: "04/2019", link: "https://www.freecodecamp.org/certification/fcccf40f295-3dd3-4b79-a803-8f67251feaa8/responsive-web-design" },
    { title: "IELTS - Academic (Band: 6.5)", issuer: "IDP Pakistan", date: "12/2024" }
  ];

  return (
    <section className="container">
      <h2 className="section-title">Certifications</h2>
      <div style={gridStyle}>
        {certs.map((cert, index) => (
          <div key={index} className="glass-panel cert-card" style={cardStyle}>
            <div style={cardTopStyle}>
               <div style={iconCircleStyle}>
                 <i className="fas fa-certificate"></i>
               </div>
               <span style={dateBadgeStyle}>{cert.date}</span>
            </div>
            
            <h4 style={titleStyle}>{cert.title}</h4>
            <p style={detailStyle}>
              <i className="fas fa-building" style={{marginRight: '8px', color: 'var(--text-secondary)'}}></i>
              {cert.issuer}
            </p>
            
            {cert.link && (
              <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                <a href={cert.link} target="_blank" rel="noreferrer" style={linkStyle} className="cert-link">
                  View Credential <i className="fas fa-arrow-right" style={{ marginLeft: '5px', fontSize: '0.8em' }}></i>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Styles
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '30px'
};

const cardStyle = {
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  position: 'relative'
};

const cardTopStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '20px'
};

const iconCircleStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'var(--glass-bg)',
  border: '1px solid var(--glass-border)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'var(--accent-color)',
  fontSize: '1.4em'
};

const dateBadgeStyle = {
  fontSize: '0.85em',
  padding: '6px 12px',
  backgroundColor: 'rgba(255,255,255,0.05)',
  borderRadius: '20px',
  color: 'var(--text-secondary)',
  border: '1px solid var(--glass-border)'
};

const titleStyle = {
  color: 'var(--text-primary)',
  fontSize: '1.3em',
  marginBottom: '12px',
  lineHeight: 1.4
};

const detailStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1em',
  margin: 0
};

const linkStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  fontSize: '0.95em',
  fontWeight: 700,
  color: 'var(--accent-color)',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

/* Inject CSS for Certifications Hover */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .cert-card:hover .fa-certificate {
    transform: scale(1.2) rotate(15deg);
    transition: transform 0.3s ease;
  }
  .cert-link:hover .fa-arrow-right {
    transform: translateX(5px);
    transition: transform 0.3s ease;
  }
`;
document.head.appendChild(styleSheet);

export default Certifications;
