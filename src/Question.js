import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Question extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }
  }

  updateInput = (e) => {
    this.setState({ userInput: e.target.value })
  }

  submitGuess = () => {
    this.setState({ userInput: '' }, this.props.checkAnswer(this.state.userInput))
  }

  render() {
    let { showBtnText, numOfGuesses, definition } = this.props;
    
    return (
      <div className="question">
        <p className="num-guess">
          Number of guesses so far:
          <span className="count">  {numOfGuesses}</span>
        </p>
        <p className="definition">{definition}</p>
        {/* { TODO: FOR SHOWING QUESTION RESULTS FROM LAST ATTEMPT!!
          isCorrect &&
          <p className={previous}>
            Previous result for this question was:
            <span className={isCorrect.toString()}>{showPrevResult}</span>
          </p>
        } */}
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