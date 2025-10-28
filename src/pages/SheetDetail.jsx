// src/pages/SheetDetail.jsx
import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import sheets from '../data/sheets';
import '../App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/SheetDetail.css';
import PdfPreview from '../components/PdfPreview';

const API_URL = "https://98o7or2p30.execute-api.us-east-1.amazonaws.com/increment";

// Increment download count
const trackDownload = async (pdfId) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pdfId }),
  });
};

// Fetch live download count
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

function SheetDetail() {
  const { id } = useParams();
  const sheet = sheets.find((s) => s.id === id);
  const [downloadCount, setDownloadCount] = useState(null);

  useEffect(() => {
    if (sheet) {
      fetchDownloadCount(sheet.id).then(setDownloadCount);
      console.log(`---------sheet url ${sheet.url}`);
    }
  }, [sheet]);

  if (!sheet) {
    return <div>Sheet not found</div>;
  }

  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    // If we have real history, go back (this restores the exact scroll position)
    if (location.key && location.key !== 'default') {
      navigate(-1);
    } else {
      // Direct entry/bookmark fallback: send them to the section anchor
      // Change '#all-sheets' to whatever your list section id is.
      navigate('/#all-sheets');
    }
  };

  return (
    <main className="sheet-detail">
      <div className="sheet-detail__inner">
        <h1 className="sheet-detail__title">{sheet.title}</h1>
        <p className="meta"><strong>Composer:</strong> {sheet.composer}</p>
        <p className="meta"><strong>Country of Origin:</strong> {sheet.countryOfOrigin}</p>

    

        {sheet.lyrics?.trim() && (
          <section className="block">
            <h3>Lyrics</h3>
            <pre className="lyrics">{sheet.lyrics}</pre>
          </section>
        )}

        {sheet.historicalContext?.trim() && (
          <section className="sheet-section">
            <h3>Historical Background</h3>
            <p>{sheet.historicalContext}</p>
          </section>
        )}

        {sheet.url?.trim() && (
          <>
            <a
              href={sheet.url}
              onClick={() => trackDownload(sheet.id)}
              download
              className="btn btn-download"
            >
              Download PDF
            </a>
            {downloadCount !== null && (
              <p className="meta">Downloads: {downloadCount}</p>
            )}
          </>
        )}

        {sheet.audio?.trim() && (
          <section className="sheet-section">
            <h3>Audio Preview</h3>
            <audio controls preload="none" src={sheet.audio} style={{ width: '100%' }}>
              Your browser does not support the audio element.
            </audio>
            <p className="meta">
              <a href={sheet.audio} target="_blank" rel="noreferrer">Open audio in new tab</a>
            </p>
          </section>
        )}


        {sheet.url?.trim() && (
          <section className="sheet-preview">
            <h3>Preview</h3>
            <PdfPreview fileUrl={sheet.url} initialPage={1} />
          </section>
        )}

        <p className="meta"><strong>Submitted by:</strong> {sheet.submitter ?? 'anonymous'}</p>

        <button onClick={handleBack} className="btn btn-link back-btn" aria-label="Back to all sheets">
          ← Back to all sheets
        </button>
      </div>
    </main>
  );
}

export default SheetDetail;


