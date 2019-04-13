import React, { Component } from 'react'
import M from 'materialize-css';

class Navbar extends Component {

  componentDidMount() {
    let sidenav = document.querySelectorAll('.sidenav');
    let options = {

    };

    M.Sidenav.init(sidenav, options);
  }

  render() {
    return (
      <header>
        <div className="sticky">
          <nav className="nav-wrapper light-blue darken-1">
            <div className="container">
              <a href="#!" className="brand-logo">Glup3</a>
              <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#home">Home</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Tech stack</a></li>
                <li><a href="#home">Projects</a></li>
                <li><a href="#home">Contact</a></li>
              </ul>
            </div>
          </nav>

          <ul id="mobile-demo" className="sidenav">
            <li><a href="#home">Home</a></li>
            <li><a href="#home">About</a></li>
            <li><a href="#home">Tech stack</a></li>
            <li><a href="#home">Projects</a></li>
            <li><a href="#home">Contact</a></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Navbar
