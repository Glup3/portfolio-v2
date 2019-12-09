import React from 'react';

const navbarItems: NavbarItem[] = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Tech stack', link: '#tech' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-fixed">
        <nav className="nav-wrapper custom-transparent z-depth-0">
          <div className="container">
            <a href="#home" className="brand-logo black-text">
              Phuc Tran
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="fas fa-bars black-text"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              {navbarItems.map((item, index) => (
                <li key={`navNormal-${index}`}>
                  <a href={item.link} className="black-text">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <ul id="mobile-demo" className="sidenav">
        {navbarItems.map((item, index) => (
          <li key={`navNormal-${index}`}>
            <a href={item.link} className="black-text">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
