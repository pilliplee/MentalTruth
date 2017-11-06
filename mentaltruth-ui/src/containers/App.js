import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Button } from 'react-bootstrap';
import AppHeader from '../components/AppHeader'
import AppSlider from '../components/Slider';
import Main from '../main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <Main />
      </div>
    );
  }
}

export default App;
