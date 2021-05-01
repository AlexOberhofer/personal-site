import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Projects from "../pages/Projects";
import { ReactElement } from "react";

export const ProjectPageContent = (): ReactElement => {
  return (
    <>
      <Navbar />
      <body>
        <Projects />
      </body>
      <Footer />
    </>
  );
};

export default ProjectPageContent;