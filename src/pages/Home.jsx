// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sheets from '../data/sheets';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSheets = sheets.filter((sheet) => {
    const search = searchTerm.toLowerCase();
    return (
      sheet.title.toLowerCase().includes(search) ||
      sheet.composer.toLowerCase().includes(search)
    );
  });

  return (
    <div className="container">
      <h1>🎼 Vincent's Music Sheet Library</h1>

      <input
        type="text"
        placeholder="Search by title or composer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="grid">
        {filteredSheets.map((sheet) => (
          <Link to={`/sheet/${sheet.id}`} className="card" key={sheet.id}>
            <img src={sheet.image} alt={sheet.title} className="preview" />
            <div className="card-info">
              <h2>{sheet.title}</h2>
              <p>{sheet.composer}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
