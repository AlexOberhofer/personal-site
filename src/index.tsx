import React from "react";
import ReactDOM from "react-dom";
import HomepageContent from "./component/HomepageContent";
import { ReactElement } from "react";
import "./index.css";

const App = (): ReactElement => {
    return (
      <HomepageContent />
    )
}

ReactDOM.render(<App />,document.getElementById("root"));
