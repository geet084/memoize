import React, { Component } from 'react';
import './CSS/Main.scss';
import Previous from './Previous.js';

export default class Question extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      previouslyAnswered: true
    }
  }

  updateInput = (e) => {
    this.setState({ userInput: e.target.value })
  }

  submitGuess = () => {
    this.setState({ userInput: '' }, this.props.checkAnswer(this.state.userInput))
  }

  render() {
    let { showBtnText, numOfGuesses, definition, previouslyAnswered, prevAnswer } = this.props;

    return (
      <div className="question">
        <p className="num-guess">
          Number of guesses so far:
          <span className="count">  {numOfGuesses}</span>
        </p>
        <p className="definition">{definition}</p>
          {
            previouslyAnswered &&
            <Previous prevAnswer={prevAnswer} />
          }
        <input
          type="text"
          className="user-input"
          value={this.state.userInput}
          onChange={this.updateInput}
          placeholder="ENTER YOUR ANSWER HERE"
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "ENTER YOUR ANSWER HERE"} />
        <button
          onClick={this.submitGuess}
          className="user-btn">{showBtnText}
        </button>
      </div>
    )
  }
}