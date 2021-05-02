import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import linuxBadge from "../images/badges/linux.png";
import firefoxBadge from "../images/badges/get_firefox.png";
import vimBadge from "../images/badges/vim_the_editor.png";
import { ReactElement } from "react";

export const Footer = (): ReactElement => {

  const getYear = (): number => {
    let d = new Date();
    return d.getFullYear();
  }

  return (
    <>
      <div id="footer" className="footer">
        <div className="footer-container">
          <div className="pure-g">

          <div className="pure-u-1 pure-u-md-1-3">
                <div className="footer-left">
                    View this website on <a target="_blank" rel="noreferrer" href="https://github.com/AlexOberhofer/personal-site">GitHub</a><br />
                </div>
            </div><br/><br/><br/>

            <div className="pure-u-1 pure-u-md-1-3">
                <div className="footer-center">
                    &nbsp;&nbsp;<a href="https://www.kernel.org/"><img alt="Linux" src={linuxBadge} /></a>
                    &nbsp;&nbsp;<a href="https://www.vim.org/"><img alt="Vim" src={vimBadge} /></a>
                    &nbsp;&nbsp;<a href="https://www.mozilla.org/en-US/firefox/developer/"><img alt="Firefox" src={firefoxBadge} /></a>
                </div>

            </div> <br/><br/><br/>

            <div className="pure-u-1 pure-u-md-1-3">
                <div className="footer-right">
                    &copy; 2016-{getYear()} Alex Oberhofer<br/>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
