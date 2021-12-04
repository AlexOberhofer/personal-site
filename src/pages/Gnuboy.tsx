import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import "../css/main.css";
import "../css/gnuboy.css";
import { ReactElement } from "react";

export const Gnuboy = (): ReactElement => {
  return (
    <>
      <h1 className="gnuboy-title">SDL2 GNUBoy Port </h1>
      <div className="content">
          <h1>GNUBoy </h1>

          <p>
            GNUBoy is historically a Gameboy and GameBoy Color emulator
            developed in the early 2000s. The system could run on many systems
            and was very fast. I forked an updated version of the old codebase
            and ported a large amount of the existing SDL code to SDL2. I have
            also now been able to expand the codebase to build on Windows and
            Macintosh.
          </p>

          <p>
            This fork has mainly been used as an opportunity to expand my SDL
            knowledge and C programming skills, while learning about the GameBoy
            and GBC hardware.
          </p>

          <p>
            The main emulation core however is very portable and should be easy
            to fork or contribute. Please also feel free to open an issue with
            any problems found on Github
          </p>

          <h2>About SDL2 GNUBoy</h2>
          <p>
            Visit me on Github! -{" "}
            <a href="https://github.com/AlexOberhofer/SDL2-GNUBoy">
              SDL2 GNUBoy
            </a>
          </p>
        </div>

        <h3 className="gnuboy-title">Screenshots:</h3><br/>
            <div className="gnuboy-img" text-align="center">
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/pkmnyellow.PNG"
                    alt="Pokemon Yellow"  /> &nbsp; &nbsp;
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/supermarioland.PNG"
                    alt="Itsa me!"/> &nbsp; &nbsp;
                <img  src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/tetris.PNG"
                alt="gameplay"/> &nbsp; &nbsp;
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/lemmings.PNG" alt="gameplay"/> &nbsp;
                &nbsp;
            </div>
    
            <div className="gnuboy-img">
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/drmario.PNG" alt="gameplay"/> &nbsp;
                &nbsp;
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/mspacman.PNG"alt="gameplay"/> &nbsp;
                &nbsp;
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/zelda.PNG" alt="gameplay" /> &nbsp; &nbsp;
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/pkmncrystal.PNG" alt="gameplay"/> &nbsp;
                &nbsp;
            </div>
    
            <div className="gnuboy-img">
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/pacman.PNG"alt="gameplay"/> &nbsp; &nbsp;
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/supermariodeluxe.PNG"alt="gameplay"/>
                &nbsp; &nbsp;
            </div>
    
            <div className="gnuboy-img">
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/blargg.PNG"alt="gameplay"/> &nbsp; &nbsp;
                <img src="https://raw.githubusercontent.com/AlexOberhofer/SDL2-GNUBoy/master/docs/blue.PNG" height="315"alt="gameplay"/> &nbsp; &nbsp;
            </div>

    </>
  );
};

export default Gnuboy;
