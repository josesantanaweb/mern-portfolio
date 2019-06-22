import React from "react";
import introBackground from '../../../../assets/images/bg.png';
import Social from "../Social";

function Intro() {
  return (
    <React.Fragment>
      <section className="intro" style={{ backgroundImage: `url(${introBackground})` }}>
        <div className="container">
          <div className="intro-caption">
            <p className="subtitle">Hello</p>
            <h1 className="title"><span>I Am</span> Jose Santana!</h1>
            <p className="text">Freelance Web & Mobile UI/UX Designer</p>
            <a href="/" className="button button-primary mt-3">Hire me</a>
          </div>
        </div>
        <Social />
      </section>
    </React.Fragment>
  );
}

export default Intro;