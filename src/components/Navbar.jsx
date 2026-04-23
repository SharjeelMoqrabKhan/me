import React from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <header style={headerStyle}>
      <nav className="container" style={navStyle}>
        <div style={linksContainerStyle}>
          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#experience" style={linkStyle}>Experience</a>
          <a href="#skills" style={linkStyle}>Skills & Certs</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>
        <button 
          onClick={toggleTheme} 
          style={toggleBtnStyle}
          aria-label="Toggle Theme"
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <i className={theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>
      </nav>
    </header>
  );
};

// Styles
const headerStyle = {
  backgroundColor: 'var(--glass-bg)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  borderBottom: '1px solid var(--glass-border)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 20px',
  flexWrap: 'wrap',
  gap: '15px'
};

const linksContainerStyle = {
  display: 'flex',
  gap: '20px',
  flexWrap: 'wrap',
  justifyContent: 'center',
  flex: 1
};

const linkStyle = {
  fontWeight: 600,
  color: 'var(--text-primary)',
  textTransform: 'capitalize',
  transition: 'color 0.3s'
};

const toggleBtnStyle = {
  background: 'var(--accent-color)',
  color: '#fff',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2em',
  transition: 'transform 0.3s',
  boxShadow: '0 4px 10px var(--shadow-color)'
};

export default Navbar;
