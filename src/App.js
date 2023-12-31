import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Nav, Sidenav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";

import Home from "@rsuite/icons/legacy/Home";
import FileCodeO from "@rsuite/icons/legacy/FileCodeO";
import File from "@rsuite/icons/legacy/File";
import { Code } from "@rsuite/icons";

import { useParams } from "react-router-dom";

function App() {
  const [expand, setExpand] = useState(true);
  const [activeKey, setActiveKey] = useState("1");
  const base = "http://localhost:3000/";
  var lastActiveKey;

  const { handle } = useParams();

  var iframe_url = "/pages/" + activeKey + ".htm";

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
    <div className="App">
      <Sidenav
        expanded={expand}
        defaultOpenKeys={["0", "1"]}
        className="sidenav"
        appearance="subtle"
      >
        <Sidenav.Body>
          <Sidenav.Toggle
            expanded={expand}
            onToggle={(expanded) => setExpand(expanded)}
          />
          <Nav
            vertical
            appearance="subtle"
            activeKey={activeKey}
            onSelect={setActiveKey}
          >
            <Nav.Item eventKey="0" icon={<Home />}>
              Home
            </Nav.Item>
            <Nav.Menu
              placement="rightStart"
              eventKey="0"
              title="Uniformes"
              icon={<File />}
            >
              <Nav.Item eventKey="couleur" onSelect={changeURL(activeKey)}>
                Couleur
              </Nav.Item>
              <Nav.Item eventKey="infanterie" onSelect={changeURL(activeKey)}>
                Infanterie
              </Nav.Item>
            </Nav.Menu>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
      <header className="App-header">
        <iframe src={iframe_url}></iframe>
        <p>
          Expand: {expand},{setExpand}
        </p>
        <p>
          activeKey: {activeKey},{setActiveKey}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
