import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import Projects from "../pages/Projects";
import {ReactElement} from "react";
import styled from "styled-components";

const PageFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProjectPageContent = (): ReactElement => {
    return (
        <>
            <PageFlexCol>
                <Navbar/>
                    <body>
                        <Projects/>
                    </body>
                <Footer/>
            </PageFlexCol>
        </>
    );
};

export default ProjectPageContent;