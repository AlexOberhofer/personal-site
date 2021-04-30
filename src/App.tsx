import "./css/pure-min.css";
import "./css/normalize.css";
import "./css/grids-responsive-min.css";
import "./css/icono.min.css";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/purecss@2.0.3/build/pure-min.css"
        integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ"
      ></link>
      <script src="../public/javascript/scripts.js"></script>

      <div className="banner">
        <div id="banner-img" className="banner-head">
          <p>Alex Oberhofer</p>
          <p>Charlotte, NC Software Developer</p>
        </div>
      </div>

      <div className="content">
        <h2 className="content-subhead">Welcome!</h2>

        <p>
          Welcome to my personal web page. This page hosts information on my
          software development projects and interests. Please check out my
          GitHub page for my latest activity or my Linkedin for professional
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
              href="https://github.com/AlexOberhofer"
            ></a>
          </div>

          <div className="pure-u-1-2 home-half">
            <a
              className="fa fa-linkedin-square fa-5x"
              aria-hidden="true"
              title="LinkedIn"
              target="_blank"
              href="https://linkedin.com/in/alex-oberhofer-5403bb143/"
            ></a>
          </div>

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
                href="https://github.com/AlexOberhofer/SDL2-GNUBoy"
              >
                SDL2 GNUBoy
              </a>
            </div>
            <br />
            <div className="pure-u-1 pure-u-md-1-5">
              <a
                className="pure-button repo-button"
                target="_blank"
                href="https://github.com/AlexOberhofer/Space-Invaders"
              >
                Space Invaders
              </a>
            </div>
            <br />
            <div className="pure-u-1 pure-u-md-1-5">
              <a
                className="pure-button repo-button"
                target="_blank"
                href="https://github.com/AlexOberhofer/Chip-8-Emulator"
              >
                Chip 8
              </a>
            </div>
            <br />
            <div className="pure-u-1 pure-u-md-1-5">
              <a
                className="pure-button repo-button"
                target="_blank"
                href="https://github.com/AlexOberhofer/sdl2-doom"
              >
                SDL2 DOOM
              </a>
            </div>
            <br />
            <div className="pure-u-1 pure-u-md-1-5">
              <a
                className="pure-button repo-button"
                target="_blank"
                href="https://github.com/AlexOberhofer/pylife"
              >
                Pylife
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
