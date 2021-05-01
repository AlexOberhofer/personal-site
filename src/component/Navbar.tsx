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
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
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
          <a href="/" className="pure-menu-link back-arrow">
            &#9668;
          </a>
          <a href="/" className="custom-menu-toggle" id="toggle">
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
          </ul>
        </div>
      </div>
      <script>doMenuMagic(this, this.document);</script>
    </>
  );
};

export default Navbar;
