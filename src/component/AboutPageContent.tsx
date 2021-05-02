import { Navbar } from "./Navbar";
import { ReactElement } from "react";
import { About } from "../pages/About";

export const AboutPageContent = (): ReactElement => {
  return (
    <>
      <Navbar />
      <body>
        <About />
      </body>
    </>
  );
};

export default AboutPageContent;