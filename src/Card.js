import React, { Component } from 'react';
import './CSS/Main.scss';
import Answer from './Answer.js'
import Question from './Question.js'
import Intro from './Intro.js'

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numOfGuesses: 0,
      question: null,
      answeredCorrectly: false,
      showNextQuestion: false,
      prevAnswer: null
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

  getPreviousAnswer = (curDef) => {
    let prevAnswer = null;
    
    this.props.answeredQuestions.forEach(answer => {
      if (answer.question.definition === curDef) {
        prevAnswer = answer.userGuess;
      } 
    })
    return prevAnswer;
  }

  lookForPrevResult = (curDef) => {
    let matchedAnswer = false;
    
    this.props.answeredQuestions.forEach(answer => {
      if (answer.question.definition === curDef) {
        matchedAnswer = true;
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
    let { showNextQuestion, numOfGuesses, answeredCorrectly } = this.state;

    if (showNextQuestion) {
      let { definition } = this.state.question;
      return (
        <div className="card">
          <Question
            numOfGuesses={numOfGuesses}
            definition={definition}
            checkAnswer={this.checkAnswer}
            previouslyAnswered={this.lookForPrevResult(definition)}
            prevAnswer={this.getPreviousAnswer(definition)}
            showBtnText={this.showBtnText()} />
          <Answer
            nextQuestion={this.nextQuestionHandler}
            answeredCorrectly={answeredCorrectly}
            numOfGuesses={numOfGuesses} />
        </div>
      )
    } else {
      return (
        <Intro nextQuestionHandler={this.nextQuestionHandler} />
      )
    }
  }
}