import React, { Fragment } from "react";
import Footer from "./componets/publics/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import All from "./componets/publics/All";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="">
          <Switch>
            <All></All>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
