import React, { Component } from 'react';
import './CSS/Main.scss';
import Answer from './Answer.js'

export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      question: null,
      answeredCorrectly: null,
      nextQuestion: false
    }
  }

  nextQuestion = () => {
    let { question, answeredCorrectly } = this.state;
    this.setState({ nextQuestion: true, count: 0 })
    
    if (question !== null) {
      this.props.answer(question, answeredCorrectly)
    }
    this.showQuestion();
  }

  getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

  showQuestion = () => {
    let { questions } = this.props
    
    let randomIndex = this.getRandomNumber(questions.length)
    
    let rightAnswer = this.createCard('keys', questions, randomIndex)
    let definition = this.createCard('values', questions, randomIndex)

    this.setState({
      question: { question: definition, answer: rightAnswer }
    });
  }

  createCard = (type, singleQuestion, index) => {
    if (type === 'keys') {
      return Object.keys(singleQuestion[index]).shift()
    } else if (type === 'values') {
      return Object.values(singleQuestion[index]).shift()
    }
  }

  checkAnswer = (guess) => {
    let { answer } = this.state.question;

    if (guess.toLowerCase() === answer.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }

  processGuess = (e) => {
    let correct = this.checkAnswer(e.target.previousSibling.value);

    this.setState({
      count: this.state.count + 1,
      answeredCorrectly: correct
    })
    e.target.previousSibling.value = '';
  }

  render() {
    if (!this.state.nextQuestion) {
      return (
        <div>
          <h4 onClick={this.nextQuestion}>Click to begin</h4>
        </div>
      )
    } else {
      let { question, answer } = this.state.question;
      let { count, answeredCorrectly } = this.state;
      return (
        <div>
          <p>Number of guesses so far: {count}</p>
          <p>{question} ......{answer}.....</p>
          <input type="text" />
          <button onClick={this.processGuess}>
            Click to check answer
          </button>
          <Answer nextQuestion={this.nextQuestion}
                  answer={answeredCorrectly} />
        </div>
      )
    }
  }
}