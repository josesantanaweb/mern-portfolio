import React from "react";

function Intro() {
  return (
    <React.Fragment>
      <div class="intro">
        <div class="intro-container">
          <div class="intro-caption">
            <p class="text">Hello</p>
            <h1 class="title"><span>I Am</span> Jose Santana!</h1>
            <p class="text">Freelance Web & Mobile UI/UX Designer</p>
            <a href="#" class="button button-primary mt-3">Hire me</a>
          </div>
        </div>

        <div class="social">
          <span>Follow Us</span>
          <div class="social-list">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;