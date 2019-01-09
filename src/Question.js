import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Question extends Component {

  render() {
    let { count, definition, previous, isCorrect, checkAnswer, showPrevResult, showBtnText } = this.props;
    return (
      <div className="question">
        <p className="num-guess">
          Number of guesses so far:
            <span className="count">  {count}</span>
        </p>
        <p className="definition">{definition}</p>
        <p className={previous}>
          Previous result for this question was:
            <span className={isCorrect}>
            {showPrevResult}
          </span>
        </p>
        <input type="text" className="user-input"
          placeholder="ENTER YOUR ANSWER HERE"
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "ENTER YOUR ANSWER HERE"} />
        <button onClick={checkAnswer}
          className="user-btn">{showBtnText}
        </button>
      </div>
    )
  }
}