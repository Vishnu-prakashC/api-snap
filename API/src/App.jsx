import { useState } from "react";
import UrlInput from "./components/UrlInput";

function App() {
  const [url, setUrl] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>API Snap</h1>

      <UrlInput url={url} setUrl={setUrl} />

      <p>Entered URL: {url}</p>
    </div>
  );
}

export default App;
