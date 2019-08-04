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
            <h4>Servicios</h4>
            <li>UI/UX</li>
            <li>Desarrollo Web</li>
          </ul>
          <ul>
            <h4>Menu</h4>
            <li>Sobre Mi</li>
            <li>Servicios</li>
            <li>Portafolio</li>
            <li>Contacto</li>
          </ul>
          <ul>
            <h4>Contacto</h4>
            <li><i className="fa fa-map-marker mr-2" />Valencia, Venezuela</li>
            <li><i className="fa fa-phone mr-2" />0412 6948692</li>
            <li><i className="fa fa fa-envelope mr-2" />josesantana.web@gmail.com</li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default NavBar;