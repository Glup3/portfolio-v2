import React, { useEffect } from 'react';
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

const App = () => {
  useEffect(() => {
    const scrollspies = document.querySelectorAll('.scrollspy');
    const sidenav = document.querySelectorAll('.sidenav');

    M.ScrollSpy.init(scrollspies, {
      scrollOffset: 100,
    });
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <TechnologySection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
