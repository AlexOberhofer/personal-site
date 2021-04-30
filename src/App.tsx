import logo from "./logo.svg";
import "./App.css";
import "./css/pure-min.css";
import "./css/normalize.css";
import "./css/grids-responsive-min.css";

function App() {
  return (
    <div className="App">
      <script src="../public/javascript/scripts.js"></script>

      <div className="header">
        <div className="custom-menu-wrapped">
          <div className="pure-menu custom-menu custom-menu-top">
            <a
              href="javascript:history.back()"
              className="pure-menu-link back-arrow"
            >
              &#9668;
            </a>
            <a href="#" className="custom-menu-toggle" id="toggle">
              <s className="bar"></s>
              <s className="bar"></s>
            </a>
          </div>
          <div
            className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked"
            id="tuckedMenu"
          >
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="/">
                  Home
                </a>
              </li>
              <li className="pure-menu-item">
                <a
                  className="pure-menu-link"
                  target="_blank"
                  href="https://github.com/AlexOberhofer"
                >
                  GitHub
                </a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="public/html/gnuboy.html">
                  GNUBoy
                </a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="public/html/projects.html">
                  Other Projects
                </a>
              </li>
              <li className="pure-menu-item">
                <a className="pure-menu-link" href="public/html/about.html">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="banner">
          <div id="banner-img" className="banner-head">
            <p>Alex Oberhofer</p>
            <p>Charlotte, NC Software Developer</p>
          </div>
        </div>

        <div className="content">
            <h2 className="content-subhead">Welcome!</h2>
        </div>

        <script>doMenuMagic(this, this.document);</script>
      </div>
    </div>
  );
}

export default App;
