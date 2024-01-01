import logo from "./logo.svg";
import "./App.css";
import HomePage from "./scripts/HomePage";
import Page from "./scripts/Page";
import Navbar from "./scripts/Navbar";

import menu_txt from "./scripts/menu.txt";
import menu_data from "./scripts/menu.json";

import { useState } from "react";
import "rsuite/dist/rsuite.min.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
  Navigate,
  Link,
} from "react-router-dom";

console.log("App.js");
console.log("menu_data: " + menu_data);

function App() {
  const [expand, setExpand] = useState(true);
  const [activeKey, setActiveKey] = useState("1");
  const base = "http://localhost:3000/";
  //const base = "http://military-photos.pages.dev/";
  var lastActiveKey;

  const { handle } = useParams();

  // 0http: 1 2localhost:3000 3handle 4
  var handle_url = window.location.href.split("/")[3];

  // var iframe_url = "/pages/" + activeKey + ".htm";
  if (handle_url === null || handle_url == "" || handle_url == "pages") {
    handle_url = "";
  }
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
      <div className="App">
        <Navbar data={menu_data} />

        <header className="App-header">
          <iframe src={iframe_url}></iframe>
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* TODO if handle = filename exist then page else navigate */}
            <Route path="/:handle" element={<Page url={iframe_url} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <p>Expand: {expand}</p>
          <p>activeKey: {activeKey}</p>
          <p>handle: {handle}</p>
          <p>handle_url: {handle_url}</p>
          <div className="sitetree">
            <ul>
              {menu_data.map((item) => (
                <li key={item[2]}>
                  <a href={item[0]}>
                    {item[1]} : {item[2]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
