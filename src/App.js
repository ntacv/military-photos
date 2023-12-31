import logo from "./logo.svg";
import "./App.css";
import HomePage from "./scripts/HomePage";
import Page from "./scripts/Page";
import Navbar from "./scripts/Navbar";

import { useState } from "react";
import "rsuite/dist/rsuite.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Link,
} from "react-router-dom";

function App() {
  const [expand, setExpand] = useState(true);
  const [activeKey, setActiveKey] = useState("1");
  const base = "http://localhost:3000/";
  var lastActiveKey;

  var { handle } = useParams();
  var handle_url = window.location.href.split("/")[3];

  // var iframe_url = "/pages/" + activeKey + ".htm";
  var iframe_url = "/pages/" + handle_url;
  console.log("handle_url: " + iframe_url);

  // onSelect={changeURL(activeKey)}
  function changeURL(activeKey) {
    console.log(window.location.href + " : " + activeKey);
    window.location.href = base + "#" + activeKey;
  }

  function iframe_link(activeKey) {
    if (activeKey == null || activeKey == "") {
      return "/pages/" + lastActiveKey + ".htm";
    }
    lastActiveKey = activeKey;
    return "/pages/" + activeKey + ".htm";
  }
  return (
    <>
      {/*
       */}

      <div className="App">
        <Navbar base={base} />

        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:handle" element={<Page url={iframe_url} />} />
          </Routes>
          <p>
            Expand: {expand},{setExpand}
          </p>
          <p>
            activeKey: {activeKey},{setActiveKey}
          </p>
          <p>handle: {handle}</p>
        </header>
      </div>
    </>
  );
}

export default App;
