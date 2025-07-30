
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
        <div className="navbar-logo">Vincent Ji Cello</div>
        <div className="navbar-menu">
          {/* <a href="#home">Home</a>
          <a href="#gallery">Library</a>
          <a href="#poetry">Upload</a>
          <a href="#about">About</a> */}
          <Link to="/">Home</Link>
          <Link to="/library">Library</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/about">About</Link>
        </div>
    </nav>
  );
};

export default Nav;
