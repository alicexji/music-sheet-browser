

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
  console.log('sheet',sheet);
  useEffect(() => {
    fetchDownloadCount(sheet.id).then(setDownloadCount);
  }, [sheet.id]);
 

  return (
    <Link to={`/sheet/${sheet.id}`} className="card sheet-card">
      <div className="card-body">
        <div className="card-header">
          <span className="badge tag">{sheet.level || 'Intermediate'}</span>
          {(sheet.genre ? sheet.genre : ['Classical']).map((g, index) => (
                <span key={index} className="badge tag">{g}</span>
                ))}
        </div>

        <h2 className="card-title">{sheet.title}</h2>
        <p className="card-composer">{sheet.composer}</p>

        <div className="card-meta">
          <span className="downloads">
            ⬇ {downloadCount !== null ? downloadCount : '...'}
          </span>
        </div>

        <div className="card-buttons">
          <button className="btn preview-btn">▶ Preview</button>
          <button className="btn download-btn">Free</button>
        </div>
      </div>
    </Link>
  );
}

export default SheetCard;
