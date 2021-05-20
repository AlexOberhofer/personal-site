import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import { ReactElement } from "react";

export const Navbar = (): ReactElement => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@2.0.6/build/grids-responsive-min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"
        integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ"
      ></link>
      <script src="../public/javascript/scripts.js"></script>

      <div className="custom-menu-wrapped">
        <div className="pure-menu custom-menu custom-menu-top">
        </div>
        <div
          className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed custom-menu custom-menu-bottom"
          id="tuckedMenu"
        >
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <a className="pure-menu-link" href="/">
                Home
              </a>
            </li>
            <li className="pure-menu-item">
              <a className="pure-menu-link" href="/gnuboy">
                GNUBoy
              </a>
            </li>
            <li className="pure-menu-item">
              <a className="pure-menu-link" href="/projects">
                Projects
              </a>
            </li>
            <li className="pure-menu-item">
              <a className="pure-menu-link" href="about">
                About
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
              <a
                className="pure-menu-link"
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/alex-oberhofer-5403bb143/"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
