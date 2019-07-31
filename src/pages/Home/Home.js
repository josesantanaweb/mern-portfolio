import React from "react";
import Intro from "../../components/Intro/Intro";
import AboutMe from "../../components/AboutMe/AboutMe";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Reviews from "../../components/Reviews/Reviews";
import Tegnologies from "../../components/Tegnologies/Tegnologies";

function Home() {
  return (
    <React.Fragment>
      <Intro />
      <AboutMe />
      <Services />
      <Portfolio />
      <Reviews />
      <Tegnologies />
    </React.Fragment>
  );
}

export default Home;