import React from "react";
import ReactDOM from "react-dom";
import HomepageContent from "./component/HomepageContent";
import { ReactElement } from "react";
import "./index.css";
import { Helmet } from "react-helmet";

const App = (): ReactElement => {
  return (
    <div>
      <Helmet>
        <meta
          charSet="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Alex Oberhofer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <HomepageContent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
