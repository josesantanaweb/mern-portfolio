import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const NavBar = () => {

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <header className="header">
        <div className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="logo">
                <img src={ logo } alt={ logo }></img>
              </Link>
              <button className="navbar-toggle" onClick={() => setOpenMenu(!openMenu)}></button>
            </div>
            <nav className={ openMenu ? "navbar-menu open" : "navbar-menu" }>
              <Link to="/" className="navbar-item">Home</Link>
              <Link to="/" className="navbar-item">Sobre Mi</Link>
              <Link to="/" className="navbar-item">Servicios</Link>
              <Link to="/" className="navbar-item">Portafolio</Link>
              <Link to="/" className="navbar-item">Contacto</Link>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default NavBar;