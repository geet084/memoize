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
      showNextQuestion: false
    }
  }

  nextQuestion = () => {
    let { question, answeredCorrectly } = this.state;
    this.setState({
      showNextQuestion: true,
      count: 0,
      answeredCorrectly: null
    })
    
    if (question !== null) {
      this.props.currentAnswer(question, answeredCorrectly)
    }
    this.showQuestion();
  }

  showQuestion = () => {
    let { questions } = this.props
    
    let randomIndex = this.getRandomNumber(questions.length)
    let rightAnswer = this.findQuestion('keys', randomIndex)
    let definition = this.findQuestion('values', randomIndex)

    this.setState({
      question: { definition: definition, answer: rightAnswer }
    });
  }

  getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

  findQuestion = (type, index) => {
    return Object[type](this.props.questions[index]).shift()
  }

  checkAnswer = (e) => {
    
    let target = e.target.previousSibling.value;
    let { answer } = this.state.question;

    let guessIsCorrect = target.toLowerCase() === answer.toLowerCase()
    let isCorrect;

    if (guessIsCorrect) isCorrect = true;
    else isCorrect = false;

    this.setState({
      count: this.state.count + 1,
      answeredCorrectly: isCorrect
    })
    e.target.previousSibling.value = '';
  }

  showPrevResult = (question) => {
    let matchedAnswer;
    this.props.answeredQuestions.forEach(answer => {
      if (answer.guess.definition === question) {
        matchedAnswer = answer.question;
      }
    })

    if (matchedAnswer === undefined) return 'undefined';
    else if (matchedAnswer) return 'correct!'
    else return 'incorrect...';
  }

  showBtnText = () => {
    if (this.state.count > 0) return 'Click to try again';
    else return 'Click to check answer';
  }

  render() {
    if (!this.state.showNextQuestion) {
      return (
        <div>
          <h4 onClick={this.nextQuestion}
              className="begin">Click to begin</h4>
          <p className="intro">
            Welcome to Study Time, a web-based 
            flashcard app to practice how well 
            you know your Javascript Array Prototypes!
          </p>
        </div>
      )
    } else {
      let { definition} = this.state.question;
      let { count, answeredCorrectly } = this.state;
      let isCorrect, previous;
      
      let result = this.showPrevResult(definition).includes('incorrect');
      result ? isCorrect = 'no' : isCorrect = 'yes';
      let showPrevious = this.showPrevResult(definition).includes('undefined');
      showPrevious ? previous = 'undefined' : previous = 'show-previous';

      return (
        <div className="card">
          <p className="num-guess">
            Number of guesses so far:
            <span className="count">  {count}</span>
          </p>
          <p className="definition">{definition}</p>
          <p className={previous}>
            Previous result for this question was:
            <span className={isCorrect}>
              {this.showPrevResult(definition)}
            </span>
          </p>
          <input type="text" className="user-input"
            placeholder="ENTER YOUR ANSWER HERE"
            onFocus={(e) => e.target.placeholder = ""}
            onBlur={(e) => e.target.placeholder = "ENTER YOUR ANSWER HERE"} />
          <button onClick={this.checkAnswer}
                  className="user-btn">{this.showBtnText()}
          </button>
          <Answer
            nextQuestion={this.nextQuestion}
            answer={answeredCorrectly}
            count={count} />
        </div>
      )
    }
  }
}