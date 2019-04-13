import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactForm from './components/contact/ContactForm';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
