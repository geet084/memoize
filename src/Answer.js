import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Answer extends Component {

  render() {
    let { answeredCorrectly, numOfGuesses, nextQuestion } = this.props;
    let showResult = answeredCorrectly ? "THAT'S CORRECT!" : "THAT'S INCORRECT!";
    let displayResultClass = answeredCorrectly ? 'correct' : 'incorrect';
    
    return (
      <div className="answer">
        {
          numOfGuesses > 0 &&
          <button
          onClick={nextQuestion}
          className="next-question">
          Submit answer & show next Question
          </button>
        }
        {numOfGuesses > 0 && <p className={displayResultClass}>{showResult}</p>}
      </div>
    )
  }
}


