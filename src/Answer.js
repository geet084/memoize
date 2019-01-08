import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Answer extends Component {
  
  showGuessResult = (answer, count) => {  
    if (answer && count > 0) {
      return "THAT'S CORRECT!";
    } else if (answer === false && count > 0) {
      return "THAT'S INCORRECT!";
    }
  }
  
  render() {
    let { answer, count } = this.props;
    let questionAnswered = answer || answer === false;

    if (questionAnswered) {
      let result = this.showGuessResult(answer, count).includes('INCORRECT');
      let isCorrect;
      result ? isCorrect = 'incorrect' : isCorrect = 'correct'; 
      
      return (
        <div className="answer">
          <button onClick={this.props.nextQuestion}
                  className="next-question">
            Submit answer & show next Question
          </button>
          <p className={isCorrect}>
            {this.showGuessResult(answer, count)}
          </p>
        </div>
      )
    } else {
      return null
    }
  }
}


