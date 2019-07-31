import React from "react";
import logo from "../../assets/images/logo-white.png"

function NavBar() {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <ul>
            <img src={logo} alt={logo} />
          </ul>
          <ul>
            <h4>Services</h4>
            <li>UI/UX</li>
            <li>Web Development</li>
          </ul>
          <ul>
            <h4>Menu</h4>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
          <ul>
            <h4>Services</h4>
            <li>UI/UX</li>
            <li>Web Development</li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default NavBar;