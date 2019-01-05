import React, { Component } from 'react';
import './CSS/Main.scss';
import Display from './Display.js';
import Nav from './Nav.js';
import prototypes from './datasets/aType.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      prototypes: prototypes,
      selection: 'all'
    }
  }

  updateType = (e) => {
    if (e.target.value !== undefined) {
      this.setState({ selection: e.target.value })
    }
    if (e.target.value === 0) {
      this.setState({ selection: e.target.className })
    }
  }

  render() {
    let { prototypes, selection } = this.state;
    return (
      <main className="App">
        <h1>Welcome ....</h1>
        <Nav prototypes={prototypes}
             showCard={this.showCard}
             updateSelection={this.updateType} />
        {/* <Display prototypes={prototypes[selection]} /> */}
        <Display prototypes={prototypes}
                 selection={selection} />
      </main>
    );
  }
}

export default App;
