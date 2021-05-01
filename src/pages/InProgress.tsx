import { ReactElement } from "react";

import { Navbar } from "../component/Navbar";
import { Footer } from "../component/Footer";
import "../css/main.css";

export const InProgress = (): ReactElement => {
  return (
    <>
      <Navbar />
      <body>
        <div className="content">
          <h1>Under Construction...</h1>
          <img
            className="pure-img center"
            src="https://neelysnews.files.wordpress.com/2016/02/12.jpg?w=652&h=364"
            alt="Mike Mulligan"
          />
        </div>
      </body>
      <Footer />
    </>
  );
};

export default InProgress;
