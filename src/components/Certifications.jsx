import React from 'react';

const Certifications = () => {
  const certs = [
    { title: "Certified in Cybersecurity (CC)", issuer: "(ISC)²", date: "07/2023", link: "https://drive.google.com/file/d/13CSxSvzS2axZTz4iv06v5X1SqRgusyMX/view" },
    { title: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", date: "06/2023", link: "https://www.credly.com/badges/51f90cbb-0b19-4902-a05a-ef9df2fd3126/linked_in_profile" },
    { title: "IBM QRadar SIEM Foundation", issuer: "IBM", date: "04/2023", link: "https://www.credly.com/badges/b57cf301-35e2-4ebc-b01f-32617d18679a/linked_in_profile" },
    { title: "Practical Web Application Security and Testing", issuer: "TCM Security", date: "05/2023", link: "https://drive.google.com/file/d/1aX9DHVc2t363IjeD9xGM2RVmOVEbJLIi/view" },
    { title: "Ethical Hacking Essentials (EHE)", issuer: "TCM Security", date: "02/2022", link: "https://eccommonstorage.blob.core.windows.net/codered/certificates/7a2d8bfa-b7cb-495c-8fab-158e2148dc5f.png" },
    { title: "Google IT Support Certificate", issuer: "TCM Security", date: "05/2023", link: "https://www.credly.com/badges/45def224-8619-42e4-a7b3-121e63298597?source=linked_in_profile" },
    { title: "JavaScript Algorithms and Data Structures", issuer: "TCM Security", date: "10/2020", link: "https://www.freecodecamp.org/certification/fcccf40f295-3dd3-4b79-a803-8f67251feaa8/javascript-algorithms-and-data-structures" },
    { title: "Responsive Web Design", issuer: "TCM Security", date: "04/2019", link: "https://www.freecodecamp.org/certification/fcccf40f295-3dd3-4b79-a803-8f67251feaa8/responsive-web-design" },
    { title: "IELTS - Academic (Band: 6.5)", issuer: "IDP Pakistan", date: "12/2024" }
  ];

  return (
    <section className="container">
      <h2 className="section-title">Certifications</h2>
      <div style={gridStyle}>
        {certs.map((cert, index) => (
          <div key={index} className="glass-panel" style={cardStyle}>
            <h4 style={titleStyle}>{cert.title}</h4>
            <p style={detailStyle}>{cert.issuer} - {cert.date}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noreferrer" style={linkStyle}>
                <i className="fas fa-external-link-alt" style={{ marginRight: '5px' }}></i> View Credential
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '25px'
};

const cardStyle = {
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  borderLeft: '4px solid var(--accent-color)'
};

const titleStyle = {
  color: 'var(--text-primary)',
  fontSize: '1.15em',
  marginBottom: '10px'
};

const detailStyle = {
  color: 'var(--text-secondary)',
  fontSize: '0.9em',
  marginBottom: '15px',
  flexGrow: 1
};

const linkStyle = {
  display: 'inline-block',
  fontSize: '0.9em',
  fontWeight: 'bold',
  color: 'var(--accent-color)'
};

export default Certifications;
