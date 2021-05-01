import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Home from "../pages/Home";
import { ReactElement } from "react";

export const HomePageContent = (): ReactElement => {
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <Navbar />
      <body>
        <Home />
      </body>
      <Footer />
    </>
  );
};

export default HomePageContent;