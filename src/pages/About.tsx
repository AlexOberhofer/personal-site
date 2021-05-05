import { ReactElement } from "react";
import "../css/main.css";
import me from "../images/Amoimg.jpg";

export const About = (): ReactElement => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/3.4.1/flatly/bootstrap.min.css"
        integrity="sha384-bfWZLPtvQKHg/nZNhaO/ZW4Ba8ISud5CtEjnCTU6OR1yOq5zrrF+JP2o7om6rzLf"
        crossOrigin="anonymous"
      />
      <h1 className="page-title-text homepage-logo">About</h1>
      <div className="jumbotron container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <img
                className="about-me-image"
                src={me}
                alt="me"
              />
            </div>

            <div className="col-sm-5">
              <br />
              <br />
              <h2>Alex Oberhofer</h2>
              <h3>Charlotte, NC</h3>
              <h4>Software Developer</h4>
            </div>

            <div className="col-sm-4 well jumbo">
              <h3>My Links:</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                  <a href="mailto:alexmoberhofer@gmail.com">Email Me</a>
                </li>

                <li>
                  <i
                    className="fa fa-github-square fa-2x"
                    aria-hidden="true"
                  ></i>
                  <a
                    href="https://github.com/AlexOberhofer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <i className="fa fa-gitlab fa-2x" aria-hidden="true"></i>
                  <a href="https://gitlab.com/AlexOberhofer">GitLab</a>
                </li>

                <li>
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                  <a href="https://www.linkedin.com/in/alex-oberhofer-5403bb143">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="col-sm-4 col-sm-offset-1">
          <h1>Projects:</h1>
          <br />
          <p>
            I have numerous side projects I enjoy hacking on in my free time. I
            generally devote my time to devloping or porting retro gaming
            software and emulators. You can check out some of my projects at my
            github page on the sidebar.
            <br />
            <br />
            All of my projects are released under open source licenses. Please
            feel free to exercise your rights within the terms of each projects'
            license when using the code. Enjoy!
          </p>

          <h1>Current Work:</h1>
          <br />
          <p>
            I currently live in Charlotte, North Carolina, where I work as a
            software developer. My current research interests include hardware
            emulation, Arduino, single board computers, operating systems, and
            GNU/Linux Systems.
          </p>
          <br />

          <h1>Previous Work:</h1>
          <br />
          <p>
            During my Senior year I worked as Research Technician for the
            Program for the Study of Developed Shorelines at WCU. As a research
            technician, I worked to develop and maintaining the Beach
            Nourishment Viewer web application in node.js. More information
            about the{" "}
            <a href="http://psds.wcu.edu" target="_blank" rel="noreferrer">
              PSDS
            </a>{" "}
            can be found on their website.
          </p>
          <br />
          <p>
            I was lucky enough to be offered 2 summer internships at{" "}
            <a href="https://www.qualcomm.com/">Qualcomm</a> while I was 
            in high school. During these internships I collaborated
            with other students to create applications for ARM devices with the
            intent to use these programs to test development chips. These
            experiences solidified my interests in computer science, and after
            graduating from high school in 2013 I moved to Western Carolina
            University to study computer science and mathematics.
          </p>
        </div>

        <div className="col-sm-4 col-sm-offset-1">
          <h1>Work</h1>
          <ul>
            <li>
              SCI Fusion360 | Associate Software Developer | 2017 - 2021{" "}
              <br />{" "}
            </li>
          </ul>
          <ul>
            <li>
              Program for the Study of Developed Shorelines | Web Developer |
              2016 - 2017 <br />
            </li>
          </ul>
          <h1>Education</h1>
          Sanderson High School - 2009-2013 <br />
          <br />
          <a href="https://www.wcu.edu" target="_blank" rel="noreferrer">
            Western Carolina University
          </a>{" "}
          - 2013 - 2017
          <ul>
            <li>
              {" "}
              <a
                href="https://www.wcu.edu/learn/programs/computer-science/index.aspx"
                target="_blank"
                rel="noreferrer"
              >
                B.S. Computer Science
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.wcu.edu/learn/departments-schools-colleges/cas/science-and-math/mathcsdept/"
                target="_blank"
                rel="noreferrer"
              >
                Mathematics Minor
              </a>
            </li>
          </ul>
          <h1>Project Links</h1>
          <ul className="list-unstyled">
            <li>
              <a href="https://github.com/AlexOberhofer/SDL2-GNUBoy">
                SDL2 GNUBoy
              </a>
            </li>
            <li>
              <a href="https://github.com/AlexOberhofer/sdl2-doom">SDL2 DOOM</a>
            </li>
            <li>
              <a href="https://github.com/AlexOberhofer/Space-Invaders">
                Space Invaders Arcade Emulator
              </a>
            </li>
            <li>
              <a href="https://github.com/AlexOberhofer/Chip-8-Emulator">
                Chip 8 Interpeter/Emulator
              </a>
            </li>
            <li>
              <a href="http://beachnourishment.wcu.edu">
                PSDS Beach Nourishment Viewer
              </a>
            </li>
            <li>
              <a href="https://github.com/AlexOberhofer/web-images/raw/master/images/poster_final_draft.pdf">
                Senior Project - Catamount Egg Hunt
              </a>
            </li>
          </ul>
          <br />
          <h4>Acknowledgements: </h4>
          <p>Github Pages</p>
          <p>HTML5</p>
          <p>Bootstrap 3 (Legacy site)</p>
          <p>Pure.css</p>
          <p>Icono Pure CSS Icons</p>
          <p>Font Awesome v4.7.0</p>
          <p>
            Web Icon:{" "}
            <a
              target="_blank"
              href="https://icons8.com/icons/set/linux-client"
              rel="noreferrer"
            >
              License
            </a>
          </p>
        </div>
      </div>
      &nbsp
    </>
  );
};
