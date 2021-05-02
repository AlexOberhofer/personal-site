import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import pure from "../images/logo_pure.png";
import react from "../images/logo512.png";
import tsLogo from "../images/ts-logo-128.png";
import { ReactElement } from "react";

export const Home = (): ReactElement => {
  return (
    <>
    <div className="App">

      <div className="banner">
        <div id="banner-img" className="banner-head">
          <p>Alex Oberhofer</p>
          <p>Charlotte NC, Software Engineer</p>
        </div>
      </div>

      <div className="content">
        <h2 className="content-subhead">Welcome!</h2>
        <p>
          Welcome to my personal web page. This page hosts information on my
          software development projects and interests. Please check out my
          GitHub page for my latest activity or my LinkedIn for professional
          inquiries.
        </p>
        <div className="home-well-heading">
          <p>Click an icon below to be taken my profile:</p>
        </div>
        <div className="pure-g home-well">
          <div className="pure-u-1-2 home-half">
            <a
              className="fa fa-github-square fa-5x"
              aria-hidden="true"
              title="Github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AlexOberhofer"
            ><br/></a>
          </div>

          <div className="pure-u-1-2 home-half">
            <a
              className="fa fa-linkedin-square fa-5x"
              aria-hidden="true"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/alex-oberhofer-5403bb143/"
            ><br/></a>
          </div>
        </div>{" "}
        <br />
        <div className="home-well-heading">
          <p>
            Click a button below to be taken to one of my code repositories:
          </p>
        </div>
        <div className="pure-g home-well">
          <div className="pure-u-1 pure-u-md-1-5">
            <a
              className="pure-button repo-button repo-button"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AlexOberhofer/SDL2-GNUBoy"
            >
              SDL2 GNUBoy
            </a>
          </div>
          <div className="pure-u-1 pure-u-md-1-5">
            <a
              className="pure-button repo-button"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AlexOberhofer/Space-Invaders"
            >
              Space Invaders
            </a>
          </div>
          <div className="pure-u-1 pure-u-md-1-5">
            <a
              className="pure-button repo-button"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AlexOberhofer/Chip-8-Emulator"
            >
              Chip 8
            </a>
          </div>
          <div className="pure-u-1 pure-u-md-1-5">
            <a
              className="pure-button repo-button"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AlexOberhofer/sdl2-doom"
            >
              SDL2 DOOM
            </a>
          </div>
          <div className="pure-u-1 pure-u-md-1-5">
            <a
              className="pure-button repo-button"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AlexOberhofer/bytepusher"
            >
              Bytepusher
            </a>
          </div>
        </div>

        <p>Thanks for checking out my page!</p>
    
        <h5>This website is built with:</h5>

        <div className="pure-g"> 
        <div className="pure-u-1-3 home-quarter">
            <a target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">
                <img className="homepage-logo pure-img" alt="Typescript" 
                width="55"
                src={tsLogo} />
            </a>
        </div>
        <div className="pure-u-1-3 home-quarter">
            <a title="Pure CSS" target="_blank" rel="noreferrer" href="https://purecss.io/">
                <img className="homepage-logo pure-img" alt="pure" 
                width="140"
                src={pure} />
            </a>
        </div>
        <div className="pure-u-1-3 home-quarter">
            <a title="Go" target="_blank" rel="noreferrer" href="https://reactjs.org/">
                <img className="homepage-logo pure-img" 
                width="60"
                src={react} 
                alt="react"/>
            </a>
        </div>
    </div>
      <p>&nbsp&nbsp</p>
      </div>
    </div>
    </>
  );
  
}

export default Home;
