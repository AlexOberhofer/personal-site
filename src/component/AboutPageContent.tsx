import {Navbar} from "./Navbar";
import {ReactElement} from "react";
import {About} from "../pages/About";
import styled from "styled-components";
import Footer from "./Footer";

const PageFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const AboutPageContent = (): ReactElement => {
    return (
        <>
            <PageFlexCol>
                <Navbar/>
                    <body>
                        <About/>
                        <Footer />
                    </body>
            </PageFlexCol>
        </>
    );
};

export default AboutPageContent;