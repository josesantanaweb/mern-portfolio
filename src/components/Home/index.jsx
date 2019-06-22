import React from "react";
import introBackground from '../../assets/images/bg.png';

function Home() {
  return (
    <React.Fragment>
      <div className="intro" style={{ backgroundImage: `url(${introBackground})` }}>
        <div className="container">
          <div className="intro-caption">
            <p className="text">Hello</p>
            <h1 className="title"><span>I Am</span> Jose Santana!</h1>
            <p className="text">Freelance Web & Mobile UI/UX Designer</p>
            <a href="/" className="button button-primary mt-3">Hire me</a>
          </div>
        </div>
        <div className="social">
          <span>Follow Us</span>
          <div className="social-list">
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa fa-github"></i>
            </a>
            <a href="/">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;