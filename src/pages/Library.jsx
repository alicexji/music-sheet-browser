
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';import { Link } from 'react-router-dom';
import sheets from '../data/sheets';
import SheetCard from './SheetCard';

import '../App.css';
import Banner from '../components/Banner';
import { PAGE_SIZE } from './Home';

function Library() {


  const [searchTerm, setSearchTerm] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const location = useLocation();

  // Filter by search
  const filteredSheets = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) return sheets;
    return sheets.filter((sheet) =>
      (sheet.title || '').toLowerCase().includes(search) ||
      (sheet.composer || '').toLowerCase().includes(search)
    );
  }, [searchTerm]);

  // Visible slice (paginate in chunks of 21)
  const visibleSheets = useMemo(
    () => filteredSheets.slice(0, visibleCount),
    [filteredSheets, visibleCount]
  );

  const hasMore = visibleCount < filteredSheets.length;
  const remaining = Math.max(0, filteredSheets.length - visibleCount);

  // Reset pagination when the search term changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchTerm]);

  // Restore scroll (your existing behavior)
  useEffect(() => {
    const yFromState = typeof location.state?.scrollY === 'number' ? location.state.scrollY : null;
    const yFromStorage = sessionStorage.getItem('prev-scroll');
    if (yFromState !== null) {
      window.scrollTo({ top: yFromState, behavior: 'instant' });
    } else if (yFromStorage) {
      window.scrollTo({ top: Number(yFromStorage), behavior: 'instant' });
      sessionStorage.removeItem('prev-scroll');
    }
  }, [location.key]);

  const handleSeeMore = () => {
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, filteredSheets.length));
  };

  return (
    <>
      
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

        {/* anchor for hash fallback */}
        <div id="all-sheets" className="grid">
          {visibleSheets.map((sheet, i) =>
            sheet?.id ? (
              <SheetCard key={sheet.id} sheet={sheet} />
            ) : (
              console.warn(`Invalid sheet at index ${i}:`, sheet) || null
            )
          )}
        </div>

        {/* See more section with a soft fade */}
        {hasMore && (
          <div
            className="see-more-wrap"
            style={{
              position: 'relative',
              marginTop: 16,
              paddingTop: 24,
              textAlign: 'center'
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                left: 0,
                right: 0,
                top: -64,
                height: 64,
                // adjust colors to match your theme if needed
                //background: 'linear-gradient(to bottom, rgba(0,0,0,0.00), rgba(0,0,0,0.08))'
              }}
            />
            <button
              className="btn see-more-btn" onClick={handleSeeMore} 
              style={{ border: 'none',borderRadius: 9999,padding: '12px 18px',marginBottom: '60px',fontWeight: 600,cursor: 'pointer',background: '#111',color: '#fff',transition: 'opacity 160ms ease, transform 160ms ease'}}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              See more {remaining > PAGE_SIZE ? `(+${PAGE_SIZE})` : `(+${remaining})`}
            </button>
          </div>
        )}
      </div>
    </>
  );

}

export default Library;
