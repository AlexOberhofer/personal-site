import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import { ReactElement } from "react";

export const Footer = (): ReactElement => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="footer-container">
          <div className="pure-g">

          <div className="pure-u-1 pure-u-md-1-3">
                <div className="footer-left">
                    View this website on <a target="_blank" rel="noreferrer" href="https://github.com/AlexOberhofer/AlexOberhofer.github.io">GitHub</a><br />
                </div>
            </div><br/><br/><br/>

            <div className="pure-u-1 pure-u-md-1-3">
                <div className="footer-center">
                    &nbsp;&nbsp;<a href="https://www.kernel.org/"><img alt="Linux" src="https://raw.githubusercontent.com/AlexOberhofer/web-images/master/images/badges/linux.png" /></a>
                    &nbsp;&nbsp;<a href="https://www.vim.org/"><img alt="Vim" src="https://raw.githubusercontent.com/AlexOberhofer/web-images/master/images/badges/vim_the_editor.png" /></a>
                    &nbsp;&nbsp;<a href="https://www.mozilla.org/en-US/firefox/developer/"><img alt="Firefox" src="https://raw.githubusercontent.com/AlexOberhofer/web-images/master/images/badges/get_firefox.png" /></a>
                </div>

            </div> <br/><br/><br/>

            <div className="pure-u-1 pure-u-md-1-3">
                <div className="footer-right">
                    Built with <a target="_blank" rel="noreferrer" href="https://purecss.io/">Pure.css</a> v2.0.3<br/>
                    &copy; 2016-2021 Alex Oberhofer<br/>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
