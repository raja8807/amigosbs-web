export default function PdfViewer() {
  return (
    <div style={{
        height:'100dvh'
    }}>
      <iframe
        src={`https://docs.google.com/gview?url=${encodeURIComponent(
          "https://amigosbs.vercel.app/brochure.pdf",
        )}&embedded=true`}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
}
