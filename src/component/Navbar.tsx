import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

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
    />

      <div className="custom-menu-wrapped">
        <div className="pure-menu custom-menu custom-menu-top">
          <a href="/"
             className="pure-menu-link back-arrow">&#9668;</a>
          <a href="/" className="custom-menu-toggle" id="toggle"><s className="bar"></s><s className="bar"></s></a>
        </div>

        <div
            className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed pure-menu-scrollable
            custom-menu custom-menu-bottom">
        <ul className="pure-menu-list">
            <li className="pure-menu-item">
                <Link className="pure-menu-link" to="/">Home</Link>
            </li>
            <li className="pure-menu-item">
                <Link className="pure-menu-link" to="/sdl-projects">SDL 2 Ports</Link>
            </li>
            <li className="pure-menu-item">
                <Link className="pure-menu-link" to="/projects">Projects</Link>
            </li>
            <li className="pure-menu-item">
                <Link className="pure-menu-link" to="/about">About</Link>
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
