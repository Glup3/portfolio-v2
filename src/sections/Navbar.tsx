import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav className="nav-wrapper custom-transparent z-depth-0">
          <div className="container">
            <a href="#home" className="brand-logo black-text">
              Glup3
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="fas fa-bars black-text"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#home" className="black-text">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="black-text">
                  About
                </a>
              </li>
              <li>
                <a href="#tech" className="black-text">
                  Tech stack
                </a>
              </li>
              <li>
                <a href="#projects" className="black-text">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="black-text">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul id="mobile-demo" className="sidenav">
        <li>
          <a href="#home" className="black-text">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="black-text">
            About
          </a>
        </li>
        <li>
          <a href="#tech" className="black-text">
            Tech stack
          </a>
        </li>
        <li>
          <a href="#projects" className="black-text">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="black-text">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
