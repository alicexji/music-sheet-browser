// src/pages/SheetDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import sheets from '../data/sheets';


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
    }
  }, [sheet]);

  if (!sheet) {
    return <div>Sheet not found</div>;
  }

  return (
    <div className="container">
      <h1>{sheet.title}</h1>
      <p><strong>Composer:</strong> {sheet.composer}</p>
      <a
        href={sheet.url}
        onClick={() => trackDownload(sheet.id)}
        download
        className="download-link"
      >
        ⬇️ Download PDF
      </a>
      {downloadCount !== null && (
        <p style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#555" }}>
          Downloads: {downloadCount}
        </p>
      )}
      <br />
      <Link to="/" className="back-link">← Back to all sheets</Link>
    </div>
  );
}

export default SheetDetail;