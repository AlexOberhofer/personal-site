import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Home from "../pages/Home";
import { ReactElement } from "react";

export const HomePageContent = (): ReactElement => {
  return (
    <>
      <Navbar />
      <body>
        <Home />
      </body>
      <Footer />
    </>
  );
};

export default HomePageContent;