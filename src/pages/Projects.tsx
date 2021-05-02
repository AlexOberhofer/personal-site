import { ReactElement } from "react";

import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";

export const Projects = (): ReactElement => {
  return (
    <>
      <div className="banner-proj">
        <div id="banner-img" className="banner-head"></div>
      </div>

      <div className="content">
        <h1> Projects </h1>
        <p>
          These are projects I work on or have worked on in my free time. They
          are all released under open source licenses. Please respect the terms
          of each project license, and feel free to contribute or fork the code.
          I have tried to supply some ideas on how each project could be
          improved.
        </p>

        <p>
          More information about software licenses can be found here:{" "}
          <a href="https://choosealicense.com/licenses/">Choose a License</a>
        </p>
        <hr/>

        <div className="chip-8-div">
          <h2>
            SDL2-GNUBoy
          </h2>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <h4>Summary:</h4>
              <p>
                A modern port of the classic gnuboy emulator. For Windows and *nix.
              </p>

              <h4>Links:</h4>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                  <a href="https://choosealicense.com/licenses/gpl-2.0/">
                    <img alt="GPL" src="../images/badges/buttongnugpl.png" />
                  </a>
                </div>
                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                  <a
                    className="fa fa-github-square fa-2x"
                    aria-hidden="true"
                    title="Github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/AlexOberhofer/SDL2-GNUBoy"
                  ><br/></a>
                </div>
              </div>

              <h4>Project Ideas:</h4>
              <ul>
                <li>Port it to your favorite OS</li>
                <li>Port it to a different rendering backend</li>
                <li>Port it to the web with emscripten</li>
              </ul>
            </div>

            <div className="pure-u-1 pure-u-md-1-2 project-img">
              <br />
              <b />
              <br />
              <img
                src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/blue.PNG"
                width="300"
                alt="sdl2gnuboy"
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="project-spacer">
          <hr />
          <br />
        </div>

        <div className="chip-8-div">
          <h2>
            Chip 8
          </h2>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <h4>Summary:</h4>
              <p>
                Chip 8 was my first emulation project. I would love to go back
                and touch up this project as I have a refactored branch that
                will be merged into master and released as a new version when
                the windows cross build is completed.
              </p>

              <h4>Links:</h4>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                  <a href="https://choosealicense.com/licenses/gpl-3.0/">
                    <img alt="GPL" src="../images/badges/buttongnugpl.png" />
                  </a>
                </div>
                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                  <a
                    className="fa fa-github-square fa-2x"
                    aria-hidden="true"
                    title="Github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/AlexOberhofer/Chip-8-Emulator"
                  ><br/></a>
                </div>
              </div>

              <h4>Project Ideas:</h4>
              <ul>
                <li>Add Super Chip 8 functionality</li>
                <li>Port it to your favorite OS</li>
                <li>Port it to a different rendering backend</li>
              </ul>
            </div>

            <div className="pure-u-1 pure-u-md-1-2 project-img">
              <br />
              <b />
              <br />
              <img
                src="https://raw.githubusercontent.com/AlexOberhofer/Chip-8-Emulator/master/doc/screenshot.png"
                width="300"
                alt="Chip 8"
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="project-spacer">
          <hr />
          <br />
        </div>

        <div className="invaders-div">
          <h2>Space Invaders
          </h2>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <h4>Summary:</h4>
              <p>
                Space Invaders is a software recreation of the origial Space
                Invaders hardware. It emulates the intel 8080 microprocessor and
                any specialized arcade hardware. Written in C.
              </p>

              <h4>Links:</h4>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                  <a href="https://choosealicense.com/licenses/mit/">MIT</a>
                </div>
                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                  <a
                    className="fa fa-github-square fa-2x"
                    aria-hidden="true"
                    title="Github"
                    target="_blank"
                    rel="noreferrer"
                    
                    href="https://github.com/AlexOberhofer/Space-Invaders"
                  ><br/></a>
                </div>
              </div>

              <h4>Project Ideas:</h4>
              <ul>
                <li>Emulate the entire Intel 8080</li>
                <li>Port it to your favorite OS</li>
                <li>Port it to a different rendering backend</li>
              </ul>
            </div>

            <div className="pure-u-1 pure-u-md-1-2 project-img">
              <br />
              <br />
              <br />
              <img
                src="https://raw.githubusercontent.com/AlexOberhofer/Space-Invaders/master/doc/attract.PNG"
                alt="Space Invaders"
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="project-spacer">
          <hr />
          <br />
        </div>

        <div className="doom-div">
          <h2>
            DOOM
          </h2>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <h4>DOOM</h4>

              <h4>Summary:</h4>
              <p>
                An Exporation of the DOOM Linux port source code using SDL2 and
                the original open source release of DOOM by Id Software.
              </p>

              <h4>Links:</h4>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                  <a href="https://opensource.org/licenses/gpl-2.0.php">
                    <img alt="GPL" src="../images/badges/buttongnugpl.png" />
                  </a>
                </div>
                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                  <a
                    className="fa fa-github-square fa-2x"
                    aria-hidden="true"
                    title="Github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/AlexOberhofer/sdl2-doom"
                  ><br/></a>
                </div>
              </div>

              <h4>Project Ideas:</h4>
              <ul>
                <li>Fix Performance Issues</li>
                <li>Add new engine features</li>
                <li>Port it to your favorite OS</li>
                <li>See the ideas list inside the original DOOM repository</li>
              </ul>
            </div>

            <div className="pure-u-1 pure-u-md-1-2 project-img">
              <br />
              <br />
              <br />
              <img
                src="https://raw.githubusercontent.com/AlexOberhofer/sdl2-doom/master/docs/ultimatedoom.PNG"
                alt="Ultimate DOOM"
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="project-spacer">
          <hr />
          <br />
        </div>

        <div className="pylife-class">
          <h2>
            Pylife
          </h2>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <h4>License:</h4>
              <p>TBD</p>

              <h4>Summary:</h4>
              <p>Conway's Game of Life in Python 3</p>

              <h4>Project Ideas:</h4>
              <ul>
                <li>Simulate more automata</li>
              </ul>
            </div>

            <div className="pure-u-1 pure-u-md-1-2 project-img">
              <br />
              <br />
              <br />
              <img
                src="https://raw.githubusercontent.com/AlexOberhofer/pylife/master/doc/conway.gif"
                alt="Conway's Game of Life"
                width="300"
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="project-spacer">
          <hr/>
          <br />
        </div>

        <div className="bytepusher-div">
          <h2>
            Bytepusher
          </h2>
          <div className="pure-g">
            <div className="pure-u-1 pure-u-md-1-2">
              <h4>Summary:</h4>
              <p>
                A simple BytePusher implementation.<br/>
                <a href="https://esolangs.org/wiki/BytePusher">BytePusher</a>
              </p>

              <h4>Links:</h4>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                  <a href="https://choosealicense.com/licenses/gpl-3.0/">
                    <img alt="GPL" src="../images/badges/buttongnugpl.png" />
                  </a>
                </div>
                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                  <a
                    className="fa fa-github-square fa-2x"
                    aria-hidden="true"
                    title="Github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/AlexOberhofer/bytepusher"
                  ><br/></a>
                  
                </div>
                
              </div>
              <h4>Project Ideas:</h4>
              <ul>
                <li>Port it</li>
                <li>Rewrite it in another language</li>
              </ul>
            </div>
            

            <div className="pure-u-1 pure-u-md-1-2 project-img">
              <br />
              <b />
              <br />
              <img
                src="https://raw.githubusercontent.com/AlexOberhofer/Bytepusher/master/doc/sprites.gif"
                alt="bytepusher"
              />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="project-spacer">
          <hr />
          <br />
        </div>

      </div>
    </>
  );
};

export default Projects;
