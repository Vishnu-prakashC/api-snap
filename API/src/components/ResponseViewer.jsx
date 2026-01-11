function ResponseViewer({ response }) {
  if (!response) return null;

  return (
    <pre style={{ background: "#f4f4f4", padding: "10px" }}>
      {JSON.stringify(response, null, 2)}
    </pre>
  );
}

export default ResponseViewer;
