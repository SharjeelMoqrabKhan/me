import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ position: 'relative' }}>
      <div style={glowBgStyle}></div>
      <h2 className="section-title">Get In Touch</h2>
      <p style={subtitleStyle}>
        I am currently open for new opportunities. Whether you have a question, a proposal, or just want to say hi, I'll try my best to get back to you!
      </p>

      <div style={gridStyle}>
        <a href="mailto:Sharjeelkh1995@gmail.com" className="glass-panel contact-card" style={cardStyle}>
          <div style={iconBoxStyle}>
            <i className="fas fa-envelope"></i>
          </div>
          <h4 style={titleStyle}>Email Me</h4>
          <span style={detailStyle}>Sharjeelkh1995@gmail.com</span>
          <div style={actionBtnStyle}>Send a Message</div>
        </a>

        <a href="https://www.linkedin.com/in/sharjeel-moqrab-787614195/" target="_blank" rel="noreferrer" className="glass-panel contact-card" style={cardStyle}>
          <div style={iconBoxStyle}>
            <i className="fab fa-linkedin"></i>
          </div>
          <h4 style={titleStyle}>Connect on LinkedIn</h4>
          <span style={detailStyle}>Sharjeel Moqrab</span>
          <div style={actionBtnStyle}>View Profile</div>
        </a>

        <a href="https://wa.me/923042358898" target="_blank" rel="noreferrer" className="glass-panel contact-card" style={cardStyle}>
          <div style={iconBoxStyle}>
            <i className="fab fa-whatsapp"></i>
          </div>
          <h4 style={titleStyle}>WhatsApp</h4>
          <span style={detailStyle}>(+92) 3042358898</span>
          <div style={actionBtnStyle}>Chat Now</div>
        </a>
      </div>
    </section>
  );
};

// Styles
const glowBgStyle = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '60%',
  height: '60%',
  background: 'radial-gradient(ellipse at center, var(--accent-color) 0%, transparent 70%)',
  opacity: 0.1,
  filter: 'blur(100px)',
  zIndex: -1
};

const subtitleStyle = {
  textAlign: 'center', 
  color: 'var(--text-secondary)', 
  marginBottom: '60px', 
  fontSize: '1.2em',
  maxWidth: '700px',
  margin: '0 auto 60px auto',
  lineHeight: 1.8
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '35px'
};

const cardStyle = {
  padding: '40px 30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  textDecoration: 'none',
  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
};

const iconBoxStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  background: 'var(--glass-bg)',
  border: '1px solid var(--glass-border)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '2.5em',
  color: 'var(--accent-color)',
  marginBottom: '25px',
  boxShadow: '0 10px 30px var(--shadow-color)',
  transition: 'all 0.3s ease'
};

const titleStyle = {
  fontSize: '1.3em',
  color: 'var(--text-primary)',
  marginBottom: '10px'
};

const detailStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1.05em',
  marginBottom: '25px'
};

const actionBtnStyle = {
  padding: '10px 24px',
  borderRadius: '30px',
  border: '1px solid var(--accent-color)',
  color: 'var(--accent-color)',
  fontSize: '0.9em',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};

/* Inject CSS for Contact Hover */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .contact-card:hover .fa-envelope, 
  .contact-card:hover .fa-linkedin, 
  .contact-card:hover .fa-whatsapp {
    transform: scale(1.1);
  }
  .contact-card:hover > div:last-child {
    background: var(--accent-color);
    color: #000;
    box-shadow: 0 4px 15px var(--shadow-color);
  }
`;
document.head.appendChild(styleSheet);

export default Contact;
