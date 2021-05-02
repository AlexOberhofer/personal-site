import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ReactElement } from "react";
import { About } from "../pages/About";

export const AboutPageContent = (): ReactElement => {
  return (
    <>
      <Navbar />
      <body>
        <About />
      </body>
      <Footer />
    </>
  );
};

export default AboutPageContent;