import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/icono.min.css";
import "../css/main.css";
import { ReactElement } from "react";
import {
  Link
} from "react-router-dom";

export const Navbar = (): ReactElement =>  {
  return (
    <>
      <div className="custom-menu-wrapped">
        <div className="pure-menu custom-menu custom-menu-top">
          <a
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
                rel="noreferrer"
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
              <a className="pure-menu-link">
                <Link to="/projects">Projects</Link>
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
      <script>doMenuMagic(this, this.document);</script>
    </>
  );
}

export default Navbar;
