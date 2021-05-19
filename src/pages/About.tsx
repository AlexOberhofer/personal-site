import {ReactElement} from "react";
import "../css/main.css";
import styled from "styled-components";
import "../css/pure-min.css";
import "../css/normalize.css";
import "../css/grids-responsive-min.css";

export const About = (): ReactElement => {
    return (
        <>
            <div className="banner-about">
                <div id="banner-img" className="banner-head">
                    <h2>About</h2>
                </div>
            </div>

            <div className="content">
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2">
                        <h1>Education</h1>
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
                    </div>
                </div>


                <div className="">

                    <h1>Current:</h1>
                    <p>
                        I currently live in Charlotte, North Carolina, where I work as a
                        software engineer. My current research interests include hardware
                        emulation, Arduino, single board computers, operating systems, and
                        GNU/Linux Systems.
                    </p>

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
