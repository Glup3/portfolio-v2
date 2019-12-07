import React, { Component } from 'react';
import M from 'materialize-css';

import { Navbar, HomeSection, AboutSection, TechnologySection, ProjectsSection, Footer } from './sections';
import ContactForm from './components/contact/ContactForm';

class App extends Component {
  componentDidMount() {
    var scrollspies = document.querySelectorAll('.scrollspy');
    var sidenav = document.querySelectorAll('.sidenav');

    M.ScrollSpy.init(scrollspies, {
      scrollOffset: 100
    });
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <TechnologySection />
        <ProjectsSection />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
