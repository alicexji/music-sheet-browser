import React from 'react';
import '../css/Banner.css';
import { Link } from 'react-router-dom';

const Banner = ({ Title }) => {
  return (
    <header className="banner-header" >
      <div className="banner-overlay">
        <h1>{Title}</h1>
      </div>
    </header>
  );
};


export default Banner;
