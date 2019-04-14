import React from 'react'

function Navbar() {
  return (
    <header>
      <div className="navbar-fixed">
        <nav className="nav-wrapper custom-transparent z-depth-0">
          <div className="container">
            <a href="#!" className="brand-logo black-text">Glup3</a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#home" className="black-text">Home</a></li>
              <li><a href="#home" className="black-text">About</a></li>
              <li><a href="#home" className="black-text">Tech stack</a></li>
              <li><a href="#home" className="black-text">Projects</a></li>
              <li><a href="#home" className="black-text">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <ul id="mobile-demo" className="sidenav">
        <li><a href="#home">Home</a></li>
        <li><a href="#home">About</a></li>
        <li><a href="#home">Tech stack</a></li>
        <li><a href="#home">Projects</a></li>
        <li><a href="#home">Contact</a></li>
      </ul>
    </header>
  )
}

export default Navbar
