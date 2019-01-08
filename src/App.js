import React, { Component } from 'react';
import './CSS/Main.scss';
import Display from './Display.js';
import Nav from './Nav.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      prototypes: null, 
      answered: [],
      isLoading: true
    }
  }

  componentDidMount = () => { 
    fetch('http://memoize-datasets.herokuapp.com/api/v1/aTypes')
      .then(data => data.json())
      .then(data => {
        setTimeout(() => {
          this.setState({
            prototypes: data.aTypes,
            isLoading: false
          })
        }, 200);
      })
      .catch(err => console.error(err))
  }

  answer = (guess, question) => {
    let modArr = this.state.answered
    modArr.push({ guess: guess, question: question })
    this.setState({ answered: modArr })
    localStorage.setItem('data', JSON.stringify(modArr))
  }

  tallyScore = () => { 
    let { answered } = this.state;

    if (answered.length === 0) {
      return 0;
    } else {
      return answered.filter(answer => {
        return answer.question
      }).length
    }
  }

  reset = () => {
    this.setState({answered: []})
  }

  render() {
    let { prototypes, isLoading } = this.state;
    
    if (isLoading) {
      return (
        <div>Loading</div>
      );
    } else {
      return (
        <main className="App">
          <h1>Welcome ....</h1>
          <Nav prototypes={prototypes}
              showCard={this.showCard}
              theScore={this.tallyScore()}
              reset={this.reset} />
          <Display prototypes={prototypes}
                  answer={this.answer} />
        </main>
      );
    }
  }
}

export default App;
