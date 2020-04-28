import React, { Component } from "react";
import "../CSS/App.css";
import Home from "../publics/Home";
import About from "../publics/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default class All extends Component {
  state = {
    users: [],
    products: [],
  };
  getProducts = async () => {
  };
  render() {
    return (
      <Router>
        <div className="">
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route path={"/About"} component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
