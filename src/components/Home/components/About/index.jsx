import React from "react";

function About() {
  return (
    <React.Fragment>
      <section className="about">
        <div className="container">
          <div className="about-caption">
            <p className="subtitle">About me</p>
            <h3 className="title mb-2"><span>Bit</span> About me</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit, at maecenas mus sapien torquent elementum ac litora, volutpat dapibus habitasse ridiculus hac est. Mattis fusce cum sem montes congue vestibulum morbi class.</p>
            <a href="/" className="button button-primary mt-3">Donwload CV</a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default About;