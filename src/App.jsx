import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./styles/main.scss";

import NavBar from "./components/NavBar";

import Home from "./components/Home";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route path = "/" component = { Home } />
            <Route path = "/about" component = { About } />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
