import React, { Component } from 'react';
import Calculator from './calculator'
// import { ButtonLinkPrimary } from 'public-mobile-styleguide/src/Buttons/ButtonLinkPrimary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> Calculator</p>
        <Calculator />

      </div>
    );
  }
}

export default App;
