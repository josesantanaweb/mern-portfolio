import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./styles/main.scss";
import {PortfolioProvider} from './PorfolioContext';

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";

class App extends Component {
  render() {
    return (
      <PortfolioProvider>
        <BrowserRouter>
          <React.Fragment>
            <NavBar />
            <Switch>
              <Route path = "/" component = { Home } />
              <Route path = "/about" component = { About } />
            </Switch>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </PortfolioProvider>
    );
  }
}

export default App;
