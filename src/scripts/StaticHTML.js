import React from "react";
import DOMPurify from "dompurify";
import { useState, useEffect } from "react";

function StaticHTML() {
  // var html_raw = require("./pages/index.html");

  let [htmlFileString, setHtmlFileString] = useState();

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`pages/index.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  // const sanitizedString = DOMPurify.sanitize(htmlString, {
  //   ALLOWED_TAGS: ["p", "h2"],
  // });

  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>
    </div>
  );
}

export default StaticHTML;
