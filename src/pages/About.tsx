import {ReactElement} from "react";
import "../css/main.css";
import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";
import Alex from '../images/Amoimg.jpg';
import Brookie from '../images/brookie.jpg';
import styled from "styled-components";
import { Mail } from "@styled-icons/heroicons-outline/Mail";
import { Github } from "@styled-icons/bootstrap/Github";
import { Gitlab } from "@styled-icons/fa-brands/Gitlab";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import tsLogo from "../images/ts-logo-128.png";
import pure from "../images/logo_pure.png";
import react from "../images/logo512.png";

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
  border: solid;
  color: #2d3e50;
`;

const LinksRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconContainer = styled.div`
  max-width: 45px;
  justify-content: center;
  padding-left: 5rem;
  padding-bottom: 2rem;
  margin-right: 5rem;
`;

const LinkIconContainer = styled.div`
  width: 50%;
`;

export const About = (): ReactElement => {
    return (
        <>
            <div className="banner-about">
                <div id="banner-img" className="banner-head" />
            </div>

            <div className="content">
                <AboutHeader>About Me</AboutHeader>
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
                        <CenteredImgContainer className="pure-u-1 pure-u-md-1-2">
                            <AlexImg src={Alex}/>
                            <ImageCaption>
                                Alex and Brookie fly fishing.
                            </ImageCaption>
                        </CenteredImgContainer>
                </div>

                <LinksContainer>
                    <h3>My Links</h3>
                    <LinksRow className="pure-g">
                        <LinkIconContainer className="pure-u-1 pure-u-md-1-4">
                            <IconContainer>
                                <a href="mailto:alexmoberhofer@gmail.com"><Mail /></a>
                            </IconContainer>
                        </LinkIconContainer>
                        <LinkIconContainer className="pure-u-1 pure-u-md-1-4">
                            <IconContainer>
                                <a href="https://github.com/AlexOberhofer/"><Github /></a>
                            </IconContainer>

                        </LinkIconContainer>
                        <LinkIconContainer className="pure-u-1 pure-u-md-1-4">
                            <IconContainer>
                                <a href="https://gitlab.com/AlexOberhofer"><Gitlab /></a>
                            </IconContainer>
                        </LinkIconContainer>
                        <LinkIconContainer className="pure-u-1 pure-u-md-1-4">
                            <IconContainer>
                                <a href="https://linkedin.com/in/alex-oberhofer-5403bb143/"><Linkedin /></a>
                            </IconContainer>
                        </LinkIconContainer>
                    </LinksRow>
                </LinksContainer>
                <br/>

                <AboutHeader>My Interests</AboutHeader>
                <CurrentContainer className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2">
                        <h1>Current:</h1>
                        <p>
                            I currently live in Arden, North Carolina, where I work as a
                            software engineer. My current research interests include hardware
                            emulation, Arduino, single board computers, operating systems, and
                            GNU/Linux Systems. As of late my interests have also grown to include modern JavaScript
                            / web development tools such as React, Typescript, and other web frameworks.
                            I am also interested in Docker and it's possible uses to aid my development.
                            In my free time you can usually find me programming a side project, playing video games,
                            fly fishing, or hanging out with my Australian Shepherd, Brookie.
                        </p>
                        <p>You can find my latest development experiments /
                            projects <a href="https://github.com/AlexOberhofer/">here</a>.
                        </p>
                        <p>
                            No updates to any of my projects?... Probably fly fishing...
                        </p>
                    </div>

                    <CenteredImgContainer className="pure-u-1 pure-u-md-1-2">
                        <ImageCaption>
                            Brookie the Aussie.
                        </ImageCaption>
                        <BrookieImg src={Brookie}/>
                    </CenteredImgContainer>

                </CurrentContainer>

                <div className="about-text">
                    <h1>Development Interests:</h1>
                    <p>
                        I have numerous side projects I enjoy hacking on in my free time. I
                        generally devote my time to developing or porting retro gaming
                        software and emulators. You can check out some of my projects at my
                        github page on the sidebar.
                    </p>

                    <h1>Early Development Experience:</h1>
                    <p>
                        During my Senior year at WCU I worked as Research Technician for the
                        Program for the Study of Developed Shorelines. As a research
                        technician, I worked to develop and maintaining the Beach
                        Nourishment Viewer web application in node.js. More information
                        about the{" "}
                        <a href="http://psds.wcu.edu" target="_blank" rel="noreferrer">
                            PSDS{" "}
                        </a>
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

                <br />
                <div className="about-text">
                    <h1>About this Website:</h1>

                    <h3>This website is built with:</h3>

                    <div className="pure-g">
                        <div className="pure-u-1-3 home-quarter">
                            <a target="_blank" rel="noreferrer" href="https://www.typescriptlang.org/">
                                <img className="homepage-logo pure-img" alt="Typescript"
                                     width="55"
                                     src={tsLogo}/>
                            </a>
                        </div>
                        <div className="pure-u-1-3 home-quarter">
                            <a title="Pure CSS" target="_blank" rel="noreferrer" href="https://purecss.io/">
                                <img className="homepage-logo pure-img" alt="pure"
                                     width="140"
                                     src={pure}/>
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
                </div>

            </div>

        </>
    );
};
