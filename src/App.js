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
      answered: []
    }
  }

  answer = (guess, question) => {
    let modArr = this.state.answered
    modArr.push({ guess: guess, question: question[0] })
    this.setState({ answered: modArr })
  }

  render() {
    let { prototypes } = this.state;
    return (
      <main className="App">
        <h1>Welcome ....</h1>
        <Nav prototypes={prototypes}
             showCard={this.showCard} />
        <Display prototypes={prototypes}
                 answer={this.answer}/>
      </main>
    );
  }
}

export default App;
