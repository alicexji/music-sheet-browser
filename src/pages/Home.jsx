
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import sheets from '../data/sheets';
import SheetCard from './SheetCard';
import Header from '../components/Header';
import Web_Card from '../components/Web_Card';
import '../App.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  console.log('sheets',sheets);
  const filteredSheets = sheets.filter((sheet) => {
    const search = searchTerm.toLowerCase();
    return (
      sheet.title.toLowerCase().includes(search) ||
      sheet.composer.toLowerCase().includes(search)
    );
  });
  console.log('filtered',filteredSheets);

  useEffect(() => {
    // Try to restore exact scroll
    const yFromState = typeof location.state?.scrollY === 'number' ? location.state.scrollY : null;
    const yFromStorage = sessionStorage.getItem('prev-scroll');
    if (yFromState !== null) {
      window.scrollTo({ top: yFromState, behavior: 'instant' });
    } else if (yFromStorage) {
      window.scrollTo({ top: Number(yFromStorage), behavior: 'instant' });
      sessionStorage.removeItem('prev-scroll');
    }
    // If the URL has a hash (e.g. /#all-sheets) and no stored scroll, native browser will also handle.
  }, [location.key]); // run on navigation into Home

  return (
    <>
      <Header/>
      <div style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:120, marginBottom: 120}}>
        <Web_Card/>
      </div>

      <div className="content-wrapper">
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

        {/* anchor for hash fallback */}
        <div id="all-sheets" className="grid">
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

export default Home;
