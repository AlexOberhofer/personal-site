import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import "../css/sdl-projects.css";
import { ReactElement } from "react";
import pinball from "../images/pinball.gif"
import tetris from "../images/tetris.png";
import mario from "../images/supermarioland.png";
import yellow from "../images/pkmnyellow.png";
import lemmings from "../images/lemmings.png";
import drMario from "../images/drmario.png";
import zelda from "../images/zelda.png";
import pac from "../images/pacman.png";
import crystal from "../images/pkmncrystal.png";
import blue from "../images/blue.png";
import ultdoom from "../images/ultdoom.png";
import chex from "../images/chex.png";
import doom2 from "../images/doom2.png";
import doomgif from "../images/doom.gif";
import styled from "styled-components";
import {Github} from "@styled-icons/bootstrap/Github";

const SubHeader = styled.div`
  flex-direction: row;
  margin-top: 12px;
`;

const SubHeaderText = styled.div`
  font-size: x-large;
  font-weight: bold;
`

const GitLogo = styled(Github)`
  margin-bottom: 4px;
  padding-right: 10px;
`

export const SdlProjects = (): ReactElement => {
  return (
    <>
      <h1 className="gnuboy-title">SDL2 Ports </h1>
      <div className="content">
          <p>
              SDL, or Simple DirectMedia Layer, is a library that gives the user access to low level hardware
              functionality, licensed under the zlib license. I first started using SDL when I created
              my first emulation project, but have gone on to use it in many of my personal projects.
              SDL is simple to use, cross platform, and is extremely useful for emulation or game projects.
          </p>

          <p>
              More of my projects than just these use SDL. However, these I feel these have been the most interesting
              of my personal projects.
          </p>

          <p>
              More information about SDL can be found at their website:
              <a href="https://www.libsdl.org/">https://www.libsdl.org/</a>
          </p>

          <div className="project-spacer">
              <hr/>
              <br/>
          </div>

          <SubHeader>
              <SubHeaderText>
                  <a
                      aria-hidden="true"
                      title="Project Repository"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/AlexOberhofer/SDL2-GNUBoy"
                  ><GitLogo height="25"/></a>
                  SDL2 GNUBoy:
              </SubHeaderText>
          </SubHeader>


          <p>
            GNUBoy is a Gameboy and GameBoy Color emulator
            developed in the early 2000s. The code base is very portable and a multitude of
               ports exist. I forked an updated version of the v1.0.3 codebase
            and ported a large amount of the existing SDL code to SDL2, and expanded the
              number of platforms SDL2 GNUBoy builds for.
          </p>

          <p>
            This fork has mainly been used as an opportunity to expand my SDL
            knowledge and C programming skills, while learning about the GameBoy
            and GBC hardware. The sound, rendering, and input/joystick support have all been
              ported to SDL2. SDL2 rumble functionality has also been added.
          </p>

          <p>
            The main emulation core is very portable and is be easy
            to fork or contribute. Makefiles have been provided for a number
              of platforms. Please also feel free to open an issue with
            any problems found on Github, or make a pull request.
          </p>

          <h2>Screenshots:</h2><br/>


            <div className="gnuboy-img" text-align="center">
                <img  src={tetris}
                      alt="gameplay"
                      loading="lazy"
                /> &nbsp; &nbsp;
                <img src={mario}
                     alt="Itsa me!"
                     loading="lazy"
                /> &nbsp; &nbsp;
                <img src={yellow}
                     alt="Pokemon Yellow"
                     loading="lazy"
                /> &nbsp; &nbsp;
                <img src={lemmings}
                     alt="gameplay"
                     loading="lazy"
                /> &nbsp;
                &nbsp;
            </div>
    
            <div className="gnuboy-img">
                <img src={drMario}
                     alt="gameplay"
                     loading="lazy"
                /> &nbsp;&nbsp;
                <img src={zelda}
                     alt="gameplay"
                     loading="lazy"
                /> &nbsp; &nbsp;
                <img src={pac}
                     alt="gameplay"
                     loading="lazy"
                /> &nbsp;&nbsp;
                <img src={crystal}
                     alt="gameplay"
                     loading="lazy"
                /> &nbsp;&nbsp;
            </div>

          <h2>Gameplay:</h2>
          <div className="gnuboy-img">
              <img src={pinball}
                   alt="gameplay"
                   loading="lazy"
              /> &nbsp; &nbsp;
          </div>

          <div className="project-spacer">
              <hr/>
              <br/>
          </div>

          <SubHeader>
              <SubHeaderText>
                  <a
                      aria-hidden="true"
                      title="Project Repository"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/AlexOberhofer/sdl2-doom"
                  ><GitLogo height="25"/></a>
                  SDL2 Doom:
              </SubHeaderText>
          </SubHeader>

          <p>Doom is awesome. This project is my exploration of the Doom source code. It aims to be
              somewhat portable, and to reimplement the game interface with SDL2. This project
              derived from Chocolate Doom.
          </p>

          <h2>Screenshots:</h2>

          <div className="gnuboy-img">
              <img src={ultdoom}
                   alt="gameplay"
                   loading="lazy"
                   width="45%"
              /> &nbsp;&nbsp;
              <img src={doom2}
                   alt="gameplay"
                   loading="lazy"
                   width="45%"
              /> &nbsp; &nbsp;
          </div>

          <div className="gnuboy-img">
              <img src={chex}
                   alt="gameplay"
                   loading="lazy"
                   width="45%"
              /> &nbsp; &nbsp;
          </div>

          <h2>Gameplay:</h2>
          <div className="gnuboy-img">
              <img src={doomgif}
                   alt="gameplay"
                   loading="lazy"
              /> &nbsp; &nbsp;
          </div>
      </div>
    </>
  );
};

export default SdlProjects;
