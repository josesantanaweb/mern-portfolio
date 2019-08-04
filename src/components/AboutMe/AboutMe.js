import React from "react";

function About() {
  return (
    <React.Fragment>
      <section className="about">
        <div className="container">
          <div className="about-caption">
            <p className="subtitle">Sobre Mi</p>
            <h3 className="title mb-2"><span>Un poco</span> Sobre Mi</h3>
            <p className="text">¡Hola! Me llamo Jose Santana y soy un Freelance MERN Developer especializado en Frontend. Me considero Diseñador Web, Programador Web y Programador de Apps (React Native).</p>
            <a href="https://drive.google.com/open?id=0B30sioZLuu_FUWpQWHkwOS1mb1k1cVhFYnhaS0tGVnh1RElz" className="button button-secondary mt-3">Descargar CV</a>
          </div>
          <div className="about-image">
            <img src="https://i.ibb.co/LSS4MVd/u.png" alt="about"/>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;