import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Home from "../pages/Home";
import { ReactElement } from "react";
import styled from "styled-components";

const PageFlexCol = styled.div`
    display: flex;
    flex-direction: column;
`
export const HomePageContent = (): ReactElement => {
  return (
    <>
        <PageFlexCol>
      <Navbar />
      <body>
        <Home />
      </body>
      <Footer />
        </PageFlexCol>
    </>
  );
};

export default HomePageContent;