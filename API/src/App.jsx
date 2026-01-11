import { useState } from "react";
import UrlInput from "./components/UrlInput";
import MethodSelector from "./components/MethodSelector";
import ResponseViewer from "./components/ResponseViewer";


function App() {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState(null);

  async function sendRequest() {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      setResponse({ error: "Failed to fetch API" });
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>API Snap</h1>

      <UrlInput url={url} setUrl={setUrl} />
      <MethodSelector method={method} setMethod={setMethod} />

      <button onClick={sendRequest} style={{ marginTop: "10px" }}>
        Send Request
      </button>

      <pre style={{ marginTop: "20px" }}>
        {response && JSON.stringify(response, null, 2)}
        <ResponseViewer response={response} />

      </pre>
    </div>
  );
}

export default App;
