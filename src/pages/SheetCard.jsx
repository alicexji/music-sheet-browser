// src/components/SheetCard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/SheetCard.css';

const API_URL = "https://98o7or2p30.execute-api.us-east-1.amazonaws.com/increment";

const fetchDownloadCount = async (pdfId) => {
  try {
    const response = await fetch(`${API_URL}?pdfId=${pdfId}`);
    const data = await response.json();
    return data.count ?? 0;
  } catch (error) {
    console.error("Error fetching download count:", error);
    return 0;
  }
};

function SheetCard({ sheet }) {
  const [downloadCount, setDownloadCount] = useState(null);

  useEffect(() => {
    // only fetch if there’s a valid URL
    if (sheet.url && sheet.url.trim() !== '') {
      fetchDownloadCount(sheet.id).then(setDownloadCount);
    }
  }, [sheet.id, sheet.url]);

  // when navigating to detail, stash current scroll as a fallback
  const handleClick = () => {
    sessionStorage.setItem('prev-scroll', String(window.scrollY));
  };

  return (
    <Link
      to={`/sheet/${sheet.id}`}
      state={{ from: 'home', scrollY: window.scrollY, anchor: '#all-sheets' }}
      onClick={handleClick}
      className="card sheet-card"
    >
      <div className="card-body">
        <div className="card-header">
          <span className="badge tag">{sheet.period || 'period: unknown'}</span>
          <span className="badge tag">{sheet.countryOfOrigin || 'origin: unknown'}</span>

          <span className="badge tag">
            Genre:
            {(sheet.genre ? sheet.genre.slice(0, 2) : ['Classical']).map((g, index) => (
              <span key={index} className="badge tag">{g}</span>
            ))}
          </span>
        </div>

        <h2 className="card-title">{sheet.title}</h2>
        <p className="card-composer">{sheet.composer}</p>

        <div className="card-meta">
          {/* Only show downloads if there’s a valid URL */}
          {sheet.url && sheet.url.trim() !== '' && (
            <span className="downloads">⬇ {downloadCount !== null ? downloadCount : '...'}</span>
          )}
        </div>

        <div className="card-buttons">
          <button className="btn preview-btn" type="button">▶ Preview</button>
          <button className="btn download-btn" type="button">Free</button>
        </div>
      </div>
    </Link>
  );
}

export default SheetCard;
