// src/pages/SheetDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import sheets from '../data/sheets';

const trackDownload = async (pdfId) => {
  await fetch("https://98o7or2p30.execute-api.us-east-1.amazonaws.com/increment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pdfId }),
  });
};

function SheetDetail() {
  const { id } = useParams();
  const sheet = sheets.find((s) => s.id === id);

  if (!sheet) {
    return <div>Sheet not found</div>;
  }

  return (
    <div className="container">
      <h1>{sheet.title}</h1>
      <p><strong>Composer:</strong> {sheet.composer}</p>
      <a href={sheet.url} onClick={() => trackDownload(sheet.id)} download className="download-link">
        ⬇️ Download PDF
      </a>
      <br />
      <Link to="/" className="back-link">← Back to all sheets</Link>
    </div>
  );
}

export default SheetDetail;
