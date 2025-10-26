import React, { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

function PdfPreview({ fileUrl, initialPage = 1, maxWidth = 900 }) {
  const [numPages, setNumPages] = React.useState(null);
  const [page, setPage] = React.useState(initialPage);
  const containerRef = React.useRef(null);
  const [width, setWidth] = React.useState(600);

  useEffect(() => {
    const onResize = () => {
      if (!containerRef.current) return;
      const w = Math.min(containerRef.current.clientWidth, maxWidth);
      setWidth(w);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [maxWidth]);

  return (
    <div className="pdf-preview" ref={containerRef}>
      <Document
        file={fileUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div className="pdf-status">Loading preview…</div>}
        error={<div className="pdf-status">Couldn’t load preview.</div>}
      >
        {/* 👇 Here's where you put the Page component */}
        <Page
          pageNumber={page}
          width={width}
          renderMode="canvas"
          renderTextLayer={false}        // disables weird characters
          renderAnnotationLayer={false}  // disables invisible form links
        />
      </Document>

      {numPages > 1 && (
        <div className="pdf-controls">
          <button
            className="btn btn-sm"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page <= 1}
          >
            ◀ Prev
          </button>
          <span className="pdf-page-indicator">
            Page {page} / {numPages}
          </span>
          <button
            className="btn btn-sm"
            onClick={() => setPage(p => Math.min(numPages, p + 1))}
            disabled={page >= numPages}
          >
            Next ▶
          </button>
          <a className="btn btn-link" href={fileUrl} target="_blank" rel="noreferrer">
            Open full PDF
          </a>
        </div>
      )}
    </div>
  );
}

export default PdfPreview;
