import React, { Component } from 'react';
import './CSS/Main.scss';
import Display from './Display.js';
import Nav from './Nav.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      prototypes: [], 
      answeredQuestions: [],
      score: 0
    }
  }

  componentDidMount = () => { 
    fetch('https://memoize-datasets.herokuapp.com/api/v1/aTypes')
      .then(data => data.json())
      .then(data => {
        setTimeout(() => {
          this.setState({
            prototypes: data.aTypes,
            answeredQuestions: this.getFromStorage()
          }, this.tallyScore)
        }, 200);
      })
      .catch(err => console.error(err))
  }

  getFromStorage = () => {
    if (localStorage.length === 0) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('userAnsweredQuestions'))
    }
  }

  updateAnsweredQuestions = (question, guess) => {
    let modArr = this.state.answeredQuestions
    modArr.push({ userGuess: guess, question: question })

    this.setState({ answeredQuestions: modArr }, this.tallyScore())
    localStorage.setItem('userAnsweredQuestions', JSON.stringify(modArr))    
  }

  tallyScore = () => { 
    let { answeredQuestions } = this.state;
    let score = 0;

    if (answeredQuestions.length) {
      score = answeredQuestions.filter(answer => {
        return answer.userGuess
      }).length;
    }

    this.setState({ score })
  }

  resetAnsweredQuestions = () => {
    this.setState({ answeredQuestions: [], score: 0 })
    localStorage.removeItem('userAnsweredQuestions');
  }

  render() {
    let { prototypes, answeredQuestions, score } = this.state;

    return (
      <main className="App">
        <h1 className="header">Welcome to Study Time</h1>
        <Nav
          score={score}
          resetHandler={this.resetAnsweredQuestions} />
        <Display
          prototypes={prototypes}
          updateAnswersHandler={this.updateAnsweredQuestions}
          answeredQuestions={answeredQuestions} />
      </main>
    );
  }
}

export default App;
