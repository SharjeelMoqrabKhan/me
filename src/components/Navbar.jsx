import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      ...headerStyle,
      padding: scrolled ? '10px 0' : '20px 0',
      boxShadow: scrolled ? 'var(--glass-shadow)' : 'none',
      backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
    }}>
      <nav className="container" style={navStyle}>
        <div style={logoStyle}>
          <a href="#home" style={{color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px'}}>
             <div style={logoIconStyle}>S</div>
             <span style={logoTextStyle}>Sharjeel</span>
          </a>
        </div>
        
        <div style={linksContainerStyle} className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        <button 
          onClick={toggleTheme} 
          style={toggleBtnStyle}
          aria-label="Toggle Theme"
          className="theme-toggle"
        >
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} style={{ transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(360deg)', transition: 'transform 0.5s ease' }}></i>
        </button>
      </nav>
    </header>
  );
};

// Styles
const headerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  backdropFilter: 'var(--glass-blur)',
  WebkitBackdropFilter: 'var(--glass-blur)',
  transition: 'all 0.4s ease'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px'
};

const logoStyle = {
  fontWeight: 800,
  fontSize: '1.5em',
  letterSpacing: '-0.5px'
};

const logoIconStyle = {
  width: '35px',
  height: '35px',
  background: 'linear-gradient(135deg, var(--accent-color), var(--accent-secondary))',
  color: '#000',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.8em'
};

const logoTextStyle = {
  background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

const linksContainerStyle = {
  display: 'flex',
  gap: '35px',
  alignItems: 'center'
};

const toggleBtnStyle = {
  background: 'var(--glass-bg)',
  color: 'var(--text-primary)',
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  border: '1px solid var(--glass-border)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2em',
  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
};

/* Inject CSS for Nav Hover Effects */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .nav-link {
    font-weight: 600;
    color: var(--text-primary) !important;
    font-size: 1.05em;
    position: relative;
    padding: 5px 0;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  .nav-link:hover::after {
    width: 100%;
  }
  .theme-toggle:hover {
    background: var(--accent-color) !important;
    color: #000 !important;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px var(--shadow-color) !important;
  }
  [data-theme='light'] .theme-toggle:hover { color: #fff !important; }
  
  @media (max-width: 768px) {
    .nav-links { display: none !important; } /* In a full app, we'd add a hamburger menu here */
  }
`;
document.head.appendChild(styleSheet);

export default Navbar;
