import React, { Component } from 'react';
import './CSS/Main.scss';
import Display from './Display.js';
import Nav from './Nav.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      prototypes: null, 
      answeredQuestions: [],
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
            answeredQuestions: this.getFromStorage(),
            isLoading: false
          })
        }, 200);
      })
      .catch(err => console.error(err))
  }

  getFromStorage = () => {
    if (localStorage.length === 0) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('data'))
    }
  }

  updateAnsweredQuestions = (guess, question) => {
    let modArr = this.state.answeredQuestions
    modArr.push({ guess: guess, question: question })
    this.setState({ answeredQuestions: modArr })
    localStorage.setItem('data', JSON.stringify(modArr))
  }

  tallyScore = () => { 
    let { answeredQuestions } = this.state;

    if (answeredQuestions.length === 0) {
      return 0;
    } else {
      return answeredQuestions.filter(answer => {
        return answer.question
      }).length
    }
  }

  reset = () => {
    this.setState({ answeredQuestions: [] })
    localStorage.removeItem('data');
  }

  render() {
    let { prototypes, isLoading } = this.state;
    
    if (isLoading) {
      return (
        <div>Loading</div>
      );
    } else {
      let { answeredQuestions } = this.state;
      return (
        <main className="App">
          <h1 className="header">Welcome to Study Time</h1>
          <Nav theScore={this.tallyScore()}
               reset={this.reset} />
          <Display prototypes={prototypes}
                   currentAnswer={this.updateAnsweredQuestions}
                   answeredQuestions={answeredQuestions} />
        </main>
      );
    }
  }
}

export default App;
