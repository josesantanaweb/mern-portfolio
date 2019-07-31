import React from "react";
import Social from "../Social/Social";
import bg from '../../assets/images/vector.svg'

function Intro() {
  return (
    <React.Fragment>
      <section className="intro" >
        <div className="intro-bg" style={{ backgroundImage: `url(${bg})` }}>
        </div>
        <div className="container">
          <div className="intro-caption">
            <p className="subtitle">Hello</p>
            <h1 className="title"><span>I Am</span> Jose Santana!</h1>
            <p className="text">Freelance Web & Mobile UI/UX Designer</p>
            <a href="/" className="button button-secondary mt-3">Hire me</a>
          </div>
        </div>
        <Social />
      </section>
    </React.Fragment>
  );
}

export default Intro;