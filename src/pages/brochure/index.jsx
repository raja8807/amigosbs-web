"use client";
import { useState } from "react";

export default function PdfViewer() {
  const [loading, setLoading] = useState(false);
  const url = "https://amigosbs.vercel.app/brochure.pdf";

  return (
    <div style={{ height: "100dvh", position: "relative", paddingTop:'80px', backgroundColor:'black' }}>
      {loading && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff",
          }}
        >
          Loading.
        </div>
      )}

      <iframe
        
        src={`https://docs.google.com/gview?url=${encodeURIComponent(url)}&embedded=true`}
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
}