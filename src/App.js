import React, { Component } from 'react';
import M from 'materialize-css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactForm from './components/contact/ContactForm';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';

class App extends Component {

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Technologies />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
