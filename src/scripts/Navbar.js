import { useState } from "react";
import { Nav, Sidenav } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite.css";
import { Link, useParams } from "react-router-dom";

import Home from "@rsuite/icons/legacy/Home";
import FileCodeO from "@rsuite/icons/legacy/FileCodeO";
import File from "@rsuite/icons/legacy/File";
import { Code } from "@rsuite/icons";

export default function Navbar(props) {
  const [expand, setExpand] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  var menu_data = props.data;

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
        </Nav>
        <Nav vertical appearance="subtle">
          {menu_data.map((item) => (
            <Nav.Item href={item[0]}>
              {item[1]} : {item[2]}
            </Nav.Item>
          ))}
        </Nav>
      </Sidenav.Body>

      <menu>
        {menu_data.map((item) => (
          <li key={item[2]}>
            <a href={item[0]}>
              {item[1]} : {item[2]}
            </a>
          </li>
        ))}
      </menu>
    </Sidenav>
  );
}
