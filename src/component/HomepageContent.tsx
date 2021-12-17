import { Navbar } from "./Navbar";
import footer, { Footer } from "./Footer";
import Home from "../pages/Home";
import { ReactElement } from "react";
import styled from "styled-components";

const PageFlexCol = styled.div`
    display: flex;
    flex-direction: column;
`;

const HomeFooter = styled(footer)`
  position: absolute;
  bottom: 0;
`;

export const HomePageContent = (): ReactElement => {
  return (
    <>
        <PageFlexCol>
      <Navbar />
      <body>
        <Home />
      </body>
      <HomeFooter />
        </PageFlexCol>
    </>
  );
};

export default HomePageContent;