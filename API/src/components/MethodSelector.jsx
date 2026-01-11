function MethodSelector({ method, setMethod }) {
  return (
    <select
      value={method}
      onChange={(e) => setMethod(e.target.value)}
      style={{ padding: "10px", marginTop: "10px" }}
    >
      <option value="GET">GET</option>
      <option value="POST">POST</option>
    </select>
  );
}

export default MethodSelector;
