import {ReactElement} from "react";
import "../css/main.css";
import me from "../images/Amoimg.jpg";
import styled from "styled-components";

const PictureBox = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  background: #cccccc;
  align-content: center;
  width: 80%;
  border-radius: 25px;
`

const MyImage = styled.img`
  align-self: center;
  height: 450px;
  padding: 3rem;
  margin-right: 15rem;
  margin-left: 5rem;
`

const ImageContainer = styled.div`
  border-radius: 20px;
`

const AboutHeader = styled.h1`
  text-align: center;
  padding: 5rem;
`

const PictureBoxText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-content: center;
`

export const About = (): ReactElement => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootswatch/3.4.1/flatly/bootstrap.min.css"
                integrity="sha384-bfWZLPtvQKHg/nZNhaO/ZW4Ba8ISud5CtEjnCTU6OR1yOq5zrrF+JP2o7om6rzLf"
                crossOrigin="anonymous"
            />
            <AboutHeader>About</AboutHeader>


            <PictureBox>
                <ImageContainer>
                    <MyImage src={me} alt="me"/>
                </ImageContainer>

                <PictureBoxText>
                    <br/>
                    <br/>
                    <h2>Alex Oberhofer</h2>
                    <h3>Charlotte, NC</h3>
                    <h4>Software Engineer</h4>
                </PictureBoxText>
            </PictureBox>

            <div>
                <div className="col-sm-4 col-sm-offset-1">

                    <h1>Current:</h1>
                    <br/>
                    <p>
                        I currently live in Charlotte, North Carolina, where I work as a
                        software engineer. My current research interests include hardware
                        emulation, Arduino, single board computers, operating systems, and
                        GNU/Linux Systems.
                    </p>
                    <br/>

                    <h1>Development Interests:</h1>
                    <br/>
                    <p>
                        I have numerous side projects I enjoy hacking on in my free time. I
                        generally devote my time to developing or porting retro gaming
                        software and emulators. You can check out some of my projects at my
                        github page on the sidebar.
                        <br/>
                        <br/>
                        All of my projects are released under open source licenses. Please
                        feel free to exercise your rights within the terms of each projects'
                        license when using the code. Enjoy!
                    </p>

                    <h1>Early Development Experience:</h1>
                    <br/>
                    <p>
                        During my Senior year at WCU I worked as Research Technician for the
                        Program for the Study of Developed Shorelines. As a research
                        technician, I worked to develop and maintaining the Beach
                        Nourishment Viewer web application in node.js. More information
                        about the{" "}
                        <a href="http://psds.wcu.edu" target="_blank" rel="noreferrer">
                            PSDS
                        </a>{" "}
                        can be found on their website.
                    </p>
                    <br/>
                    <p>
                        I was lucky enough to be offered 2 summer internships at{" "}
                        <a href="https://www.qualcomm.com/">Qualcomm</a> while I was
                        in high school. During these internships I collaborated
                        with other students to create applications for ARM devices with the
                        intent to use these programs to test development chips. These
                        experiences solidified my interests in computer science, and after
                        graduating from high school in 2013 I attended Western Carolina
                        University to study computer science and mathematics.
                    </p>
                </div>

                <div className="col-sm-4 col-sm-offset-1">
                    <h1>Employment History</h1>
                    <ul>
                        <li>
                            MIB | Software Engineer | 2021 - Present
                            <br/>
                        </li>
                        <li>
                            SCI Fusion360 | Staff Software Developer | 2021 - 2021
                            <br/>
                        </li>
                        <li>
                            SCI Fusion360 | Associate Software Developer | 2017 - 2021
                            <br/>
                        </li>
                        <li>
                            Program for the Study of Developed Shorelines | Web Developer |
                            2016 - 2017 <br/>
                        </li>
                    </ul>
                    <h1>Education</h1>
                    Sanderson High School - 2009-2013 <br/>
                    <br/>
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
                            <a href="https://github.com/AlexOberhofer/web-images/raw/master/images/poster_final_draft.pdf">
                                Senior Project - Catamount Egg Hunt
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
