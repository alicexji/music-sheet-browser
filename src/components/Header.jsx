import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header" >
      <div className="overlay">
        <h1>Preserve Your Culture.</h1>
        <h2>Play Your Roots.</h2>
        <p>
          A global sanctuary for traditional music, where ancient melodies find new life through digital preservation.
        </p>
        {/* <button>Explore Library</button> */}
                <Link to="/library" className="button-link">Explore Library</Link> {/* ✅ Updated */}

      </div>
    </header>
  );
};

export default Header;
