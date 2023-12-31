import { useState } from "react";
import { Nav, Sidenav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import { Link, useParams } from "react-router-dom";

import Home from "@rsuite/icons/legacy/Home";
import FileCodeO from "@rsuite/icons/legacy/FileCodeO";
import File from "@rsuite/icons/legacy/File";
import { Code } from "@rsuite/icons";

export default function Navbar({ base }) {
  const [expand, setExpand] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  return (
    <Sidenav
      expanded={expand}
      defaultOpenKeys={["0", "1"]}
      className="sidenav"
      appearance="subtle"
    >
      <Sidenav.Body>
        <Sidenav.Toggle onToggle={(expanded) => setExpand(expanded)} />
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
            <Nav.Item eventKey="couleur">Couleur</Nav.Item>
            <Nav.Item eventKey="infanterie">Infanterie</Nav.Item>
          </Nav.Menu>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/couleur.htm">couleur</Link>
          <br></br>
          <Link to="/infanterie.htm">infanterie</Link>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
}
