import {ReactElement} from "react";

import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import gplLogo from "../images/badges/buttongnugpl.png";
import bytePusher from "../images/sprites.gif";
import pyLife from "../images/conway.gif";
import doom from "../images/ultimatedoom.png";
import invaders from "../images/attract.png";
import chip8 from "../images/screenshot.png";
import gb from "../images/blue.png";
import {Github} from "@styled-icons/bootstrap/Github";

export const Projects = (): ReactElement => {
    return (
        <>
            <div className="banner-proj">
                <div id="banner-img" className="banner-head" />
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
                    These projects below are just a sample of what's publicly available on my Github. There are many
                    other
                    tools / side projects with their source code available on my profile. The emulation projects are
                    generally the more intriguing of what is available, but feel free to play around with
                    any of my open source projects.
                </p>

                <p>
                    More information about software licenses can be found here:{" "}
                    <a href="https://choosealicense.com/licenses/">Choose a License</a>
                </p>

                <p>
                    Click the Github icon to be taken to the corresponding project's Github page.
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
                                A modern port of the classic gnuboy emulator. For Windows, Mac and *nix.
                            </p>

                            <h4>Links:</h4>
                            <div className="pure-g">
                                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                                    <a href="https://choosealicense.com/licenses/gpl-2.0/">
                                        <img alt="GPL" src={gplLogo}/>
                                    </a>
                                </div>
                                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                                    <a
                                        aria-hidden="true"
                                        title="Github"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/AlexOberhofer/SDL2-GNUBoy"
                                    ><Github height="25"/></a>
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
                            <br/>
                            <b/>
                            <br/>
                            <img
                                src={gb}
                                width="300"
                                alt="sdl2gnuboy"
                            />
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="project-spacer">
                    <hr/>
                    <br/>
                </div>

                <div className="chip-8-div">
                    <h2>
                        Chip 8
                    </h2>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2">
                            <h4>Summary:</h4>
                            <p>
                                A Chip 8 implementation in C using SDL2.
                            </p>

                            <h4>Links:</h4>
                            <div className="pure-g">
                                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                                    <a href="https://choosealicense.com/licenses/gpl-3.0/">
                                        <img alt="GPL" src={gplLogo}/>
                                    </a>
                                </div>
                                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                                    <a
                                        aria-hidden="true"
                                        title="Github"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/AlexOberhofer/Chip-8-Emulator"
                                    ><Github height="25"/></a>
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
                            <br/>
                            <b/>
                            <br/>
                            <img
                                src={chip8}
                                width="300"
                                alt="Chip 8"
                            />
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="project-spacer">
                    <hr/>
                    <br/>
                </div>

                <div className="invaders-div">
                    <h2>Space Invaders
                    </h2>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2">
                            <h4>Summary:</h4>
                            <p>
                                Space Invaders is an emulation of the original Space
                                Invaders arcade hardware. It emulates the Intel 8080 microprocessor.
                            </p>

                            <h4>Links:</h4>
                            <div className="pure-g">
                                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                                    <a href="https://choosealicense.com/licenses/mit/">MIT</a>
                                </div>
                                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                                    <a
                                        aria-hidden="true"
                                        title="Github"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/AlexOberhofer/Space-Invaders"
                                    ><Github height="25"/></a>
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
                            <br/>
                            <br/>
                            <br/>
                            <img
                                src={invaders}
                                alt="Space Invaders"
                            />
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="project-spacer">
                    <hr/>
                    <br/>
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
                                A multiplatform DOOM source port source using SDL2 and derived from
                                the open source release of DOOM by Id Software.
                            </p>

                            <h4>Links:</h4>
                            <div className="pure-g">
                                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                                    <a href="https://opensource.org/licenses/gpl-2.0.php">
                                        <img alt="GPL" src={gplLogo}/>
                                    </a>
                                </div>
                                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                                    <a
                                        aria-hidden="true"
                                        title="Github"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/AlexOberhofer/sdl2-doom"
                                    ><Github height="25"/></a>
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
                            <br/>
                            <br/>
                            <br/>
                            <img
                                src={doom}
                                alt="Ultimate DOOM"
                            />
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="project-spacer">
                    <hr/>
                    <br/>
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
                            <br/>
                            <br/>
                            <br/>
                            <img
                                src={pyLife}
                                alt="Conway's Game of Life"
                                width="300"
                            />
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

                <div className="project-spacer">
                    <hr/>
                    <br/>
                </div>

                <div className="bytepusher-div">
                    <h2>
                        Bytepusher
                    </h2>
                    <div className="pure-g">
                        <div className="pure-u-1 pure-u-md-1-2">
                            <h4>Summary:</h4>
                            <p>
                                A Bytepusher implementation in C.<br/>
                                <a href="https://esolangs.org/wiki/BytePusher">BytePusher</a>
                            </p>

                            <h4>Links:</h4>
                            <div className="pure-g">
                                <div className="pure-u-1 pure-u-md-1-2 proj-license">
                                    <a href="https://choosealicense.com/licenses/gpl-3.0/">
                                        <img alt="GPL" src={gplLogo}/>
                                    </a>
                                </div>
                                <div className="pure-u-1 pure-u-md-1-2 proj-repo">
                                    <a
                                        aria-hidden="true"
                                        title="Github"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://github.com/AlexOberhofer/bytepusher"
                                    ><Github height="25"/></a>
                                </div>

                            </div>
                            <h4>Project Ideas:</h4>
                            <ul>
                                <li>Port it</li>
                                <li>Rewrite it in another language</li>
                            </ul>
                        </div>


                        <div className="pure-u-1 pure-u-md-1-2 project-img">
                            <br/>
                            <b/>
                            <br/>
                            <img
                                src={bytePusher}
                                alt="bytepusher"
                            />
                            <br/>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Projects;
