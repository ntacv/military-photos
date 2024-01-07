import { useState } from "react";
import { Nav, Sidenav, Tree } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite.css";
import { Link, useParams } from "react-router-dom";

import Home from "@rsuite/icons/legacy/Home";
import FileCodeO from "@rsuite/icons/legacy/FileCodeO";
import File from "@rsuite/icons/legacy/File";
import { Code } from "@rsuite/icons";

export default function Navbar(props) {
  const [expand, setExpand] = useState(true);
  const [active, setActive] = useState(null);
  const [activeKey, setActiveKey] = useState("1");

  var menu_data = props.data;

  return (
    <div>
      <br />
      <h2>Military photos</h2>

      <Nav
        activeKey={active}
        onSelect={setActive}
        vertical
        reversed
        appearance="subtle"
      >
        {menu_data.map((item) => (
          <Nav.Item eventKey={item[0]} href={item[0]}>
            {item[1]} : {item[2]}
          </Nav.Item>
        ))}
        <Nav.Menu
          placement="rightStart"
          eventKey="0"
          title="Uniformes"
          icon={<File />}
        >
          {menu_data.map((item) => (
            <Nav.Item eventKey={item[0]} href={item[0]}>
              {item[1]} : {item[2]}
            </Nav.Item>
          ))}
        </Nav.Menu>
      </Nav>

      {/* 

        <menu>
          {menu_data.map((item) => (
            <li key={item[2]}>
              <a href={item[0]}>
                {item[1]} : {item[2]}
              </a>
            </li>
          ))}
        </menu> 

        <Tree data={menu_data} defaultExpandAll />
        */}
    </div>
  );
}
