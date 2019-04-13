import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
