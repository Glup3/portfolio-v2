import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactForm from './components/contact/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
