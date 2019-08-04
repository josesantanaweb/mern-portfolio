import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

function NavBar() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="logo">
                <img src={ logo } alt={ logo }></img>
              </Link>
              <button className="navbar-toggle"></button>
            </div>
            <nav className="navbar-menu">
              <Link to="/home" className="navbar-item">Home</Link>
              <Link to="/about" className="navbar-item">Sobre Mi</Link>
              <Link to="/about" className="navbar-item">Servicios</Link>
              <Link to="/about" className="navbar-item">Portafolio</Link>
              <Link to="/about" className="navbar-item">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default NavBar;