import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Home from "../pages/Home";
import { ReactElement } from "react";
import styled from "styled-components";

const PageFlexCol = styled.div`
    display: flex;
    flex-direction: column;
`;

const HomeFooter = styled(Footer)`
  display: flex;
  bottom: 0;
  width: 100%;
  height: 25px;
  background: #2d3e50;
  padding: 10px 0;
  color: #fff;
  font-size: 75%;
  flex-direction: column;
  position: absolute;
`;

export const HomePageContent = (): ReactElement => {
  return (
      <PageFlexCol>
          <Navbar />
            <body>
                <Home />
            </body>
          <HomeFooter />
        </PageFlexCol>
  );
};

export default HomePageContent;