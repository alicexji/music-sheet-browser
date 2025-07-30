
// import { Link } from 'react-router-dom';
// import '../css/Nav.css';

// const Nav = () => {
//   return (
//     <nav className="navbar">
//         <div className="navbar-logo">Vincent Ji Cello</div>
//         <div className="navbar-menu">
//           <Link to="/">Home</Link>
//           <Link to="/library">Library</Link>
//           <Link to="/upload">Upload</Link>
//           <Link to="/about">About</Link>
//         </div>
//     </nav>
//   );
// };

// export default Nav;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Vincent Ji Cello</div>

      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {/* Hamburger icon (3 bars) */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/library" onClick={() => setMenuOpen(false)}>Library</Link>
        <Link to="/upload" onClick={() => setMenuOpen(false)}>Upload</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
      </div>
    </nav>
  );
};

export default Nav;
