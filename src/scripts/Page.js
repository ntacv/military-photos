export default function Page(iframe_url) {
  return (
    <div>
      <h1>Page</h1>
      <p>url {window.location.href}</p>
      <p>url {}</p>
      <iframe src={iframe_url}></iframe>
    </div>
  );
}
