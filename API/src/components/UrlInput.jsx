function UrlInput({ url, setUrl }) {
  return (
    <input
      type="text"
      placeholder="Enter API URL"
      value={url}
      onChange={(e) => setUrl(e.target.value)}
      style={{ width: "100%", padding: "10px" }}
    />
  );
}

export default UrlInput;
