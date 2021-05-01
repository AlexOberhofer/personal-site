import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Gnuboy from "../pages/Gnuboy";
import { ReactElement } from "react";

export const GnuboyPageContent = (): ReactElement => {
  return (
    <>
      <Navbar />
      <body>
        <Gnuboy />
      </body>
      <Footer />
    </>
  );
};

export default GnuboyPageContent;