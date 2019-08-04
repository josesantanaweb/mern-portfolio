import React, { useEffect, useState } from 'react';
import { MemoryRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/main.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Loading from "./components/Loading/Loading";

import {PortfolioProvider} from './PorfolioContext';

import Home from "./pages/Home/Home";


function App(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  if (loading) {
    return <Loading  />;
  } else {
    return (
      <PortfolioProvider>
        <Router>
          <React.Fragment>
          <NavBar />
          <Switch>
            <Route path = "/"  exact component = { Home } />
            <Route path = "/about" component = { About } />
          </Switch>
          <Footer />
          </React.Fragment>
        </Router>
      </PortfolioProvider>
    );
  }
}

export default App;
