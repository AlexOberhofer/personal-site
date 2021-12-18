import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import Gnuboy from "../pages/Gnuboy";
import {ReactElement} from "react";
import styled from "styled-components";

const PageFlexCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const GnuboyPageContent = (): ReactElement => {
    return (
        <>
            <PageFlexCol>
                <Navbar/>
                    <body>
                        <Gnuboy/>
                        <Footer />
                    </body>
            </PageFlexCol>
        </>
    );
};

export default GnuboyPageContent;