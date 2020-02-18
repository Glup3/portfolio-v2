import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import { primaryColor, surfaceColor } from '../styles/base-colors';

const navbarItems: NavbarItem[] = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Tech stack', link: '#tech' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

const transparentColor = theme('mode', {
  light: 'rgba(255, 255, 255, 0.9)',
  dark: '#121212cc',
});

const Nav = styled.nav`
  background-color: ${transparentColor};
`;

const BrandTitle = styled.a`
  color: ${primaryColor} !important;
`;

const BurgerMenu = styled.i`
  color: ${primaryColor};
`;

const MenuLink = styled.a`
  color: ${primaryColor} !important;
`;

const SideNav = styled.ul`
  background-color: ${surfaceColor};
`;

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-fixed">
        <Nav className="nav-wrapper z-depth-0">
          <div className="container">
            <BrandTitle href="#home" className="brand-logo">
              Phuc Tran
            </BrandTitle>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <BurgerMenu className="fas fa-bars"></BurgerMenu>
            </a>
            <ul className="right hide-on-med-and-down">
              {navbarItems.map((item, index) => (
                <li key={`navNormal-${index}`}>
                  <MenuLink href={item.link}>{item.name}</MenuLink>
                </li>
              ))}
            </ul>
          </div>
        </Nav>
      </div>
      <SideNav id="mobile-demo" className="sidenav">
        {navbarItems.map((item, index) => (
          <li key={`navNormal-${index}`}>
            <MenuLink href={item.link}>{item.name}</MenuLink>
          </li>
        ))}
      </SideNav>
    </header>
  );
};

export default Navbar;
