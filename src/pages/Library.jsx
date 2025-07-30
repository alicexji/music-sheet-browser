
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sheets from '../data/sheets';
import SheetCard from './SheetCard';
import Header from '../components/Header';
import Web_Card from '../components/Web_Card';
import '../App.css';
import Banner from '../components/Banner';

function Library() {
  const [searchTerm, setSearchTerm] = useState('');
  console.log('sheets',sheets);
  const filteredSheets = sheets.filter((sheet) => {
    const search = searchTerm.toLowerCase();
    return (
      sheet.title.toLowerCase().includes(search) ||
      sheet.composer.toLowerCase().includes(search)
    );
  });
  console.log('filtered',filteredSheets);

  return (
    <>
      {/* <Header/> */}
      <Banner Title="Library"/>
    

      <div style={{marginTop: 120}} className="content-wrapper">
        <section className="hero">
          
          <div className="hero-content">
            <h1 className="warm-accent-text">Music Sheet Library</h1>
            <p>Your cozy digital collection of music scores, thoughtfully curated for passionate musicians and composers.</p>
          </div>
        </section>

        <input
          type="text"
          placeholder="Search by title or composer..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="grid">
          {filteredSheets.map((sheet, i) =>
            sheet?.id ? (
              <SheetCard key={sheet.id} sheet={sheet} />
            ) : (
              console.warn(`Invalid sheet at index ${i}:`, sheet) || null
            )
          )}
        </div>
      </div>
    </>
  );

}

export default Library;
