import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import linuxBadge from "../images/badges/linux.png";
import firefoxBadge from "../images/badges/get_firefox.png";
import { ReactElement } from "react";
import styled from "styled-components";

export const Footer = (props: any): ReactElement => {

    const {...rProps } = props;

  const getYear = (): number => {
    let d = new Date();
    return d.getFullYear();
  }

  const FooterWrapper = styled.div`
    margin-top: 8px;
  `;

  return (
    <FooterWrapper>
      <div id="footer" className="footer" {...rProps }>
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
    </FooterWrapper>
  );
}

export default Footer;
