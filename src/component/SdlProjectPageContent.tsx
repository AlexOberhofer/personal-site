import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import SdlProjects from "../pages/SdlProjects";
import {ReactElement} from "react";
import styled from "styled-components";

const PageFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const SdlProjectPageContent = (): ReactElement => {
    return (
        <>
            <PageFlexCol>
                <Navbar/>
                    <body>
                        <SdlProjects/>
                        <Footer />
                    </body>
            </PageFlexCol>
        </>
    );
};

export default SdlProjectPageContent;