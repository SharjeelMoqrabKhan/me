import React from 'react';
import sharjeelImg from '../assets/sharjeel.jpg';

const Hero = () => {
  return (
    <section id="home" className="container" style={heroSectionStyle}>
      <div style={heroGridStyle}>
        <div style={heroContentStyle}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1em', marginBottom: '10px' }}>Hello, I'm</p>
          <h1 style={{ fontSize: 'clamp(2.5em, 5vw, 4em)', marginBottom: '5px', color: 'var(--text-primary)', lineHeight: 1.2 }}>Sharjeel Moqrab Khan</h1>
          <p style={jobTitleStyle}>
            <i className="fas fa-shield-halved" style={{ marginRight: '10px' }}></i>
            Senior Security Engineer | Cybersecurity Analyst
          </p>
          <p style={summaryStyle}>
            I’m a cybersecurity professional with 4+ years of experience in SOC operations, SIEM management, and detection engineering focused on turning visibility into actionable defense and effective incident response.
            I specialize in SOC process maturity, MITRE ATT&CK aligned detections, and threat analysis to enhance response and resilience.
          </p>
          <div style={{ marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href="https://drive.google.com/file/d/1oKHz6JlY6baxybGDmd2YrA4vLeOloKnt/view?usp=sharing" className="btn-primary" target="_blank" rel="noreferrer">
              <i className="fas fa-download" style={{ marginRight: '8px' }}></i> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              <i className="fas fa-comment" style={{ marginRight: '8px' }}></i> Hire Me
            </a>
          </div>
          <div style={socialLinksStyle}>
            <a href="https://www.linkedin.com/in/sharjeel-moqrab-787614195/" target="_blank" rel="noreferrer" style={socialIconStyle}><i className="fab fa-linkedin"></i></a>
            <a href="mailto:Sharjeelkh1995@gmail.com" style={socialIconStyle}><i className="fas fa-envelope"></i></a>
            <a href="https://wa.me/923042358898" target="_blank" rel="noreferrer" style={socialIconStyle}><i className="fab fa-whatsapp"></i></a>
            <a href="https://x.com/sharjeel_MK" target="_blank" rel="noreferrer" style={socialIconStyle}><i className="fab fa-x-twitter"></i></a>
            <a href="https://medium.com/@sharjeelkh1995" target="_blank" rel="noreferrer" style={socialIconStyle}><i className="fab fa-medium"></i></a>
          </div>
        </div>

        <div style={heroImageContainerStyle}>
          <img src={sharjeelImg} alt="Sharjeel Moqrab Khan" style={heroImageStyle} />
          <div style={glowEffectStyle}></div>
        </div>
      </div>
    </section>
  );
};

// Styles
const heroSectionStyle = {
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '60px'
};

const heroGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '50px',
  alignItems: 'center',
  width: '100%'
};

const heroContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const jobTitleStyle = {
  fontSize: '1.5em',
  color: 'var(--accent-color)',
  marginBottom: '25px',
  fontWeight: 300
};

const summaryStyle = {
  fontSize: '1.1em',
  color: 'var(--text-secondary)',
  lineHeight: 1.8,
  textAlign: 'justify'
};

const socialLinksStyle = {
  marginTop: '40px',
  display: 'flex',
  gap: '20px'
};

const socialIconStyle = {
  fontSize: '1.8em',
  color: 'var(--text-secondary)',
  transition: 'color 0.3s, transform 0.3s',
  display: 'inline-block'
};

const heroImageContainerStyle = {
  position: 'relative',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center'
};

const heroImageStyle = {
  width: 'min(320px, 100%)',
  aspectRatio: '1/1',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '4px solid var(--glass-border)',
  boxShadow: '0 0 30px var(--shadow-color)',
  position: 'relative',
  zIndex: 2
};

const glowEffectStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(340px, 100%)',
  aspectRatio: '1/1',
  borderRadius: '50%',
  background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 70%)',
  opacity: 0.3,
  zIndex: 1,
  filter: 'blur(20px)'
};

export default Hero;
