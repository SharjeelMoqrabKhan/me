import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container">
      <h2 className="section-title">Get In Touch</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1em' }}>
        I am available for new opportunities and collaborations. Feel free to connect via any of the channels below.
      </p>

      <div style={gridStyle}>
        <a href="mailto:Sharjeelkh1995@gmail.com" className="glass-panel" style={cardStyle}>
          <i className="fas fa-envelope" style={iconStyle}></i>
          <h4 style={titleStyle}>Email Address</h4>
          <span style={detailStyle}>Sharjeelkh1995@gmail.com</span>
        </a>

        <a href="https://www.linkedin.com/in/sharjeel-moqrab-787614195/" target="_blank" rel="noreferrer" className="glass-panel" style={cardStyle}>
          <i className="fab fa-linkedin" style={iconStyle}></i>
          <h4 style={titleStyle}>LinkedIn Profile</h4>
          <span style={detailStyle}>Sharjeel Moqrab</span>
        </a>

        <a href="https://wa.me/923042358898" target="_blank" rel="noreferrer" className="glass-panel" style={cardStyle}>
          <i className="fas fa-phone" style={iconStyle}></i>
          <h4 style={titleStyle}>Phone / WhatsApp</h4>
          <span style={detailStyle}>(+92) 3042358898</span>
        </a>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  marginTop: '40px'
};

const cardStyle = {
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  textDecoration: 'none'
};

const iconStyle = {
  fontSize: '2.5em',
  color: 'var(--accent-color)',
  marginBottom: '15px'
};

const titleStyle = {
  fontSize: '1.2em',
  color: 'var(--text-primary)',
  marginBottom: '10px'
};

const detailStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1em'
};

export default Contact;
