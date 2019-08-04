import React from "react";
import Social from "../Social/Social";
import IntroBg from '../../assets/images/vector.svg'

function Intro() {
  return (
    <React.Fragment>
      <section className="intro" >
        <div className="intro-bg" style={{ backgroundImage: `url(${IntroBg})` }}></div>
        <div className="container">
          <div className="intro-caption">
            <p className="subtitle">Hola</p>
            <h1 className="title"><span>Yo soy</span> Jose Santana!</h1>
            <p className="text">Freelance Web & Mobile UI/UX Designer</p>
            <a href="/" className="button button-secondary mt-3">Sobre Mi</a>
          </div>
        </div>
        <Social />
      </section>
    </React.Fragment>
  );
}

export default Intro;