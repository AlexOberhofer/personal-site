import { ReactElement } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomepageContent from "./component/HomepageContent";
import ProjectsPageContent from "./component/ProjectPageContent";
import GnuboyPageContent from "./component/GnuboyPageContent";
import { AboutPageContent } from "./component/AboutPageContent";

const App = (): ReactElement => {
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Alex Oberhofer</title>
      </Helmet>

      <Router>
        <Switch>

          <Route path="/projects">
            <ProjectsPageContent />
          </Route>

          <Route path="/gnuboy">
            <GnuboyPageContent />
          </Route>

          <Route path="/about">
            <AboutPageContent />
          </Route>

          <Route path="/">
            <HomepageContent />
          </Route>

        </Switch>
        
      </Router>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
