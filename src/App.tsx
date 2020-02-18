import React, { useEffect, useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import M from 'materialize-css';

import {
  Navbar,
  HomeSection,
  AboutSection,
  TechnologySection,
  ProjectsSection,
  Footer,
  ContactSection,
} from './sections';
import ThemeSwitch from './components/ThemeSwitch';
import { surfaceColor, primaryColor } from './styles/base-colors';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${surfaceColor};
    color: ${primaryColor};
  }
`;

const App = () => {
  const stored = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(stored === 'true');

  useEffect(() => {
    const scrollspies = document.querySelectorAll('.scrollspy');
    const sidenav = document.querySelectorAll('.sidenav');

    M.ScrollSpy.init(scrollspies, {
      scrollOffset: 100,
    });
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <ThemeProvider theme={{ mode: isDarkMode ? 'dark' : 'light' }}>
      <GlobalStyle />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <TechnologySection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ThemeSwitch
        changeTheme={() => {
          localStorage.setItem('isDarkMode', isDarkMode ? 'false' : 'true');
          setIsDarkMode(!isDarkMode);
        }}
        isDarkMode={isDarkMode}
      />
    </ThemeProvider>
  );
};

export default App;
