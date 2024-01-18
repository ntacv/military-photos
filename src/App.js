import "./App.css";
import HomePage from "./scripts/HomePage";
import Page from "./scripts/Page";
import Navbar from "./scripts/Navbar";
import NavbarCustom from "./scripts/NavbarCustom";
import StaticHTML from "./scripts/StaticHTML";

import menu_txt from "./scripts/menu.txt";
import menu_data_raw from "./scripts/menu.json";
import menu_data_raw_simple from "./scripts/menu_simple.json";

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
import { Footer } from "rsuite";

var menu_data = menu_data_raw.slice(1, menu_data_raw.length);
//console.log("menu_data: " + menu_data);

function toggle_nav() {
  //console.log("toggle_nav");
  var nav = document.getElementsByClassName("sidenav")[0];
  nav.classList.toggle("sidenav_open");
  var app = document.getElementsByClassName("App")[0];
  app.classList.toggle("app_full");
}

function App() {
  const [expand, setExpand] = useState(true);
  const [activeKey, setActiveKey] = useState("1");

  const base = "http://localhost:3000/";
  //const base = "http://military-photos.pages.dev/";
  var lastActiveKey;

  const { handle } = useParams();

  // Get the handle from the URL
  // 0http: 1 2localhost:3000 3handle 4
  var handle_url = window.location.href.split("/")[3];

  // Default page redirect
  // var iframe_url = "/pages/" + activeKey + ".htm";
  // if (handle_url === null || handle_url == "" || handle_url == "pages") {
  //   handle_url = "";
  // }

  // Allow iframe only for menu pages
  /*var index_page = menu_data.findIndex((item) => item[0] == handle_url);
  console.log("index_page: " + index_page + " : " + menu_data[index_page]);
  index_page = 1;
  */
  var index_page = -1;

  Object.entries(menu_data_raw_simple).map(([key, list], i) => {
    list.findIndex((item) => {
      //console.log("index_url_menu: " + item[1]);
      if (item[1] == handle_url) {
        index_page = 1;
      }
    });
  });
  //.findIndex((item) => item[1] == handle_url);
  if (index_page == -1) {
    index_page = 0;
    handle_url = "";
  }
  var iframe_url = "/pages/" + handle_url;
  //console.log("iframe_url: " + iframe_url);

  // onSelect={changeURL(activeKey)}
  function changeURL(activeKey) {
    //console.log(window.location.href + " : " + activeKey);
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
      <div className="toggle_nav" onClick={toggle_nav}>
        <button>Menu</button>
      </div>
      <div className="App">
        <div className="sidenav">
          <NavbarCustom
            data={[menu_data, menu_data_raw_simple]}
            activeKey={handle_url}
          />
          {/* <Navbar data={menu_data} activeKey={handle_url} /> */}
        </div>
        <header className="App-header">
          {/* <StaticHTML /> */}
          <iframe
            src={iframe_url}
            className="main-iframe"
            name="main_iframe"
          ></iframe>
          {/*
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* TODO if handle = filename exist then page else navigate 
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
          */}
          <footer>
            <iframe src="footer.htm" />
          </footer>
        </header>
      </div>
    </>
  );
}

export default App;
