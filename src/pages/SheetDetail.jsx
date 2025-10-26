// src/pages/SheetDetail.jsx
import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import sheets from '../data/sheets';
import '../App.css';

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


  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="card-title">{sheet.title}</h1>
        <p className="text-muted"><strong>Composer:</strong> {sheet.composer}</p>
        <p className="text-muted"><strong>Country of Origin:</strong> {sheet.countryOfOrigin}</p>
        {sheet.lyrics && sheet.lyrics.trim() !== "" && (
          <div className="lyrics">
            <h3>Lyrics</h3>
            <pre>{sheet.lyrics}</pre>
          </div>
        )}
        <Fragment>
          {sheet.historicalContext && sheet.historicalContext.trim() !== "" && (
          <p className="text-muted"><strong>Historical Background:</strong> {sheet.historicalContext}</p>
        )}
        </Fragment>
        <Fragment>
          {sheet.url && sheet.url.trim() !== "" && (
            <a
              href={sheet.url}
              onClick={() => trackDownload(sheet.id)}
              download
              className="btn btn-download mb-3"
            >
              Download PDF
            </a>
          )}
        </Fragment>
        <Fragment>
          {sheet.url && sheet.url.trim() !== "" && downloadCount !== null && (
            <p>Downloads: {downloadCount}</p>
          )}
        </Fragment>
        <Fragment>
          <p className="text-muted"><strong>Submitted by:</strong> {sheet.submitter??'anonymous'}</p>
        </Fragment>
        

        <Link to="/" className="btn btn-link mt-3" style={{ color: 'black' }}>← Back to all sheets</Link>
      </div>
    </div>
  );
}

export default SheetDetail;


