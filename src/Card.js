import React, { Component } from 'react';
import './CSS/Main.scss';
import Answer from './Answer.js'
import Question from './Question.js'

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfGuesses: 0,
      question: null,
      answeredCorrectly: false,
      showNextQuestion: false
    }
  }

  nextQuestionHandler = () => {
    let { question, answeredCorrectly } = this.state;
    let { questions, updateAnswersHandler } = this.props
    let randomIndex = this.getRandomNumber(questions.length)
    let answer = this.findQuestion('keys', randomIndex)
    let definition = this.findQuestion('values', randomIndex)

    if (question) updateAnswersHandler(question, answeredCorrectly)

    this.setState({
      numOfGuesses: 0,
      question: { definition, answer },
      answeredCorrectly: false,
      showNextQuestion: true
    })
    console.log(answer)
  }

  getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

  findQuestion = (type, index) => {
    return Object[type](this.props.questions[index]).shift()
  }

  checkAnswer = (userGuess) => {
    let { answer } = this.state.question;

    let guessIsCorrect = userGuess.toLowerCase() === answer.toLowerCase()

    this.setState({
      numOfGuesses: this.state.numOfGuesses + 1,
      answeredCorrectly: guessIsCorrect
    })
  }

  showPrevResult = (curDef) => {
    let matchedAnswer = false;
    this.props.answeredQuestions.forEach(answer => {
      if (answer.question.definition === curDef) {
        matchedAnswer = answer.question;
      } 
    })
    if (matchedAnswer) return true
    else return false;
  }

  showBtnText = () => {
    if (this.state.numOfGuesses > 0) return 'Click to try again';
    else return 'Click to check answer';
  }

  render() {
    if (!this.state.showNextQuestion) {
      return (
        <div>
          <h4
            onClick={this.nextQuestionHandler}
            className="begin">
            Click to begin
          </h4>
          <p className="intro">
            Welcome to Study Time, a web-based
            flashcard app to practice how well
            you know your Javascript Array Prototypes!
          </p>
        </div>
      )
    } else {
      let { definition } = this.state.question;
      let { numOfGuesses, answeredCorrectly } = this.state;
      
      // let previous; TODO: FOR SHOWING QUESTION RESULTS FROM LAST ATTEMPT!!
      // this.showPrevResult(definition) ? previous = 'yes' : previous = 'no';
      return (
        <div className="card">
          <Question
            numOfGuesses={numOfGuesses}
            definition={definition}
            checkAnswer={this.checkAnswer}
            showPrevResult={this.showPrevResult(definition)}
            showBtnText={this.showBtnText()} />
          <Answer
            nextQuestion={this.nextQuestionHandler}
            answeredCorrectly={answeredCorrectly}
            numOfGuesses={numOfGuesses} />
        </div>
      )
    }
  }
}