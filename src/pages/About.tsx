import {ReactElement} from "react";
import "../css/main.css";
import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import Alex from "../images/Amoimg.jpg";
import Brookie from "../images/brookie.jpg";
import styled from "styled-components";
import { Mail } from "@styled-icons/heroicons-outline/Mail";
import { Github } from "@styled-icons/bootstrap/Github";
import { Gitlab } from "@styled-icons/fa-brands/Gitlab";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";

const AlexImg = styled.img`
  width: 300px;
  border-radius: 25px;
`;

const BrookieImg = styled.img`
  border-radius: 25px;
  width: 250px;
`

const CenteredImgContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: center;
`;

const CurrentContainer = styled.div`
  margin-top: 2rem;
`;

const ImageCaption = styled.p`
  font-size: x-small;
`;

const AboutHeader = styled.h1`
  text-align: center;
`;

const LinksContainer = styled.div`
  text-align: center;
`;

const LinksRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconContainer = styled.div`
  max-width: 40px;
`;

const LinkIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  margin-left: auto;
  margin-right: auto;
  horiz-align: center;
  width: 50%;
`;

export const About = (): ReactElement => {
    return (
        <>
            <div className="banner-about">
            </div>

            <div className="content">
                <AboutHeader>About</AboutHeader>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2">
                        <h3>Employment History</h3>
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

                        <h3>Education</h3>
                        Sanderson High School - 2009-2013 <br/>
                        <a href="https://www.wcu.edu" target="_blank" rel="noreferrer">
                            Western Carolina University
                        </a>
                        - 2013 - 2017
                        <ul>
                            <li>
                                <a
                                    href="https://www.wcu.edu/learn/programs/computer-science/index.aspx"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    B.S. Computer Science
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.wcu.edu/learn/departments-schools-colleges/cas/science-and-math/mathcsdept/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Mathematics Minor
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2">
                        <CenteredImgContainer>
                            <ImageCaption>
                                Brookie the Aussie.
                            </ImageCaption>
                            <BrookieImg src={Brookie}/>
                        </CenteredImgContainer>
                    </div>
                </div>

                <LinksContainer>
                    <h3>Links</h3>
                    <LinksRow className="pure-g">
                        <LinkIconContainer className="pure-u-1 pure-u-md-1-4">
                            <IconContainer>
                                <Mail />
                            </IconContainer>

                        </LinkIconContainer>
                        <LinkIconContainer className="pure-u-1 pure-u-md-1-4">
                            <IconContainer>
                                <Github />
                            </IconContainer>

                        </LinkIconContainer>
                        <LinkIconContainer className="pure-u-1 pure-u-md-1-4">
                            <IconContainer>
                                <Gitlab />
                            </IconContainer>
                        </LinkIconContainer>
                        <LinkIconContainer className="pure-u-1 pure-u-md-1-4">
                            <IconContainer>
                                <Linkedin />
                            </IconContainer>
                        </LinkIconContainer>
                    </LinksRow>
                </LinksContainer>

                <CurrentContainer className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2">
                        <h1>Current:</h1>
                        <p>
                            I currently live in Charlotte, North Carolina, where I work as a
                            software engineer. My current research interests include hardware
                            emulation, Arduino, single board computers, operating systems, and
                            GNU/Linux Systems. In my free time you can usually find me programming a side project,
                            playing video games, fly fishing, or hanging out with my Australian Shepherd Brookie.
                        </p>
                        <p>
                            No updates to any of my projects?... Probably fly fishing!
                        </p>
                    </div>
                    <CenteredImgContainer className="pure-u-1 pure-u-md-1-2">
                        <AlexImg src={Alex}/>
                        <ImageCaption>
                            Alex and Brookie fly fishing.
                        </ImageCaption>
                    </CenteredImgContainer>
                </CurrentContainer>

                <div className="about-text">
                    <h1>Development Interests:</h1>
                    <p>
                        I have numerous side projects I enjoy hacking on in my free time. I
                        generally devote my time to developing or porting retro gaming
                        software and emulators. You can check out some of my projects at my
                        github page on the sidebar.
                        <br/>
                        All of my projects are released under open source licenses. Please
                        feel free to exercise your rights within the terms of each projects'
                        license when using the code. Enjoy!
                    </p>

                    <h1>Early Development Experience:</h1>
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
            </div>
        </>
    );
};
