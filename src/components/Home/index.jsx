import React from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";

function Home() {
  return (
    <React.Fragment>
      <Intro />
      <About />
      <Services />
    </React.Fragment>
  );
}

export default Home;