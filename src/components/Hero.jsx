import React from 'react';
import sharjeelImg from '../assets/sharjeel.jpg';

const Hero = () => {
  return (
    <section id="home" className="container" style={heroSectionStyle}>
      {/* Background ambient glows */}
      <div style={glowBlob1}></div>
      <div style={glowBlob2}></div>
      
      <div style={heroGridStyle}>
        <div style={heroContentStyle}>
          <div style={badgeStyle}>
            <span style={pulsingDot}></span>
            Open to New Opportunities
          </div>
          <h1 style={titleStyle}>
            Hi, I'm <span style={highlightStyle}>Sharjeel Moqrab</span>
          </h1>
          <p style={jobTitleStyle}>
            <i className="fas fa-shield-halved" style={{ marginRight: '12px' }}></i>
            Senior Security Engineer & Analyst
          </p>
          <p style={summaryStyle}>
            I’m a cybersecurity professional with 4+ years of experience in SOC operations, SIEM management, and detection engineering focused on turning visibility into actionable defense and effective incident response. I specialize in SOC process maturity, MITRE ATT&CK aligned detections, and threat analysis to enhance response and resilience.
          </p>
          <div style={actionButtonsStyle}>
            <a href="https://drive.google.com/file/d/1oKHz6JlY6baxybGDmd2YrA4vLeOloKnt/view?usp=sharing" className="btn-primary" target="_blank" rel="noreferrer">
              <i className="fas fa-download" style={{ marginRight: '10px' }}></i> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              <i className="fas fa-paper-plane" style={{ marginRight: '10px' }}></i> Let's Connect
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

        <div style={heroImageWrapperStyle}>
          <div style={heroImageContainerStyle}>
            <img src={sharjeelImg} alt="Sharjeel Moqrab Khan" style={heroImageStyle} />
            <div style={imageGlowEffectStyle}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles
const heroSectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '80px',
  position: 'relative',
  overflow: 'hidden' // contain the blobs
};

const glowBlob1 = {
  position: 'absolute',
  top: '10%',
  left: '-10%',
  width: '500px',
  height: '500px',
  background: 'radial-gradient(circle, var(--accent-color) 0%, transparent 60%)',
  opacity: 0.15,
  filter: 'blur(80px)',
  zIndex: -1,
  animation: 'float 10s ease-in-out infinite'
};

const glowBlob2 = {
  position: 'absolute',
  bottom: '-10%',
  right: '-10%',
  width: '600px',
  height: '600px',
  background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 60%)',
  opacity: 0.1,
  filter: 'blur(100px)',
  zIndex: -1,
  animation: 'float 12s ease-in-out infinite reverse'
};

const badgeStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  padding: '8px 16px',
  backgroundColor: 'var(--glass-bg)',
  border: '1px solid var(--glass-border)',
  borderRadius: '30px',
  fontSize: '0.9em',
  color: 'var(--text-secondary)',
  marginBottom: '20px',
  width: 'fit-content',
  backdropFilter: 'blur(10px)'
};

const pulsingDot = {
  width: '8px',
  height: '8px',
  backgroundColor: '#10b981', // green for available
  borderRadius: '50%',
  marginRight: '10px',
  boxShadow: '0 0 10px #10b981',
  animation: 'pulseGlow 2s infinite'
};

const heroGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  alignItems: 'center',
  width: '100%',
  zIndex: 1
};

const heroContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const titleStyle = {
  fontSize: 'clamp(3em, 6vw, 5em)',
  marginBottom: '10px',
  color: 'var(--text-primary)',
  lineHeight: 1.1,
  fontWeight: 800,
  letterSpacing: '-1px'
};

const highlightStyle = {
  background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
};

const jobTitleStyle = {
  fontSize: '1.4em',
  color: 'var(--text-primary)',
  marginBottom: '25px',
  fontWeight: 500,
  letterSpacing: '0.5px'
};

const summaryStyle = {
  fontSize: '1.15em',
  color: 'var(--text-secondary)',
  lineHeight: 1.8,
  textAlign: 'justify',
  maxWidth: '90%'
};

const actionButtonsStyle = {
  marginTop: '40px',
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap'
};

const socialLinksStyle = {
  marginTop: '40px',
  display: 'flex',
  gap: '25px'
};

const socialIconStyle = {
  fontSize: '1.8em',
  color: 'var(--text-secondary)',
  transition: 'color 0.3s, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  display: 'inline-block'
};

const heroImageWrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: 'float 6s ease-in-out infinite'
};

const heroImageContainerStyle = {
  position: 'relative',
  width: 'min(450px, 100%)',
  aspectRatio: '1/1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const heroImageStyle = {
  width: '90%',
  height: '90%',
  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', /* Organic shape */
  objectFit: 'cover',
  border: '6px solid var(--glass-bg)',
  boxShadow: '0 20px 50px var(--shadow-color)',
  position: 'relative',
  zIndex: 2,
  transition: 'border-radius 1s ease-in-out',
  animation: 'morph 8s ease-in-out infinite'
};

const imageGlowEffectStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  background: 'linear-gradient(45deg, var(--accent-color), var(--accent-secondary))',
  opacity: 0.4,
  zIndex: 1,
  filter: 'blur(30px)',
  animation: 'pulseGlow 4s infinite alternate'
};

/* Add this to index.css or inject here */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  @keyframes morph {
    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  }
  @media (max-width: 900px) {
    #home > div { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
    #home h1 { font-size: 2.8em !important; }
    #home p { max-width: 100% !important; text-align: center !important; }
    #home .btn-primary, #home .btn-outline { width: 100%; justify-content: center; }
    #home > div > div:first-child > div:last-child { justify-content: center; } /* Social Links */
    #home > div > div:first-child > div:first-child { margin: 0 auto 20px auto; } /* Badge */
  }
`;
document.head.appendChild(styleSheet);

export default Hero;
