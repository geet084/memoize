import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Answer extends Component {
  
  render() {
    let { answer, count, nextQuestion } = this.props;
    let message = '';
    let questionAnswered = answer || answer === false;
      
    if (answer && count > 0) {
      message = 'YOUR ANSWER IS --CORRECT--!';
    } else if (answer === false && count > 0) {
      message = 'YOUR ANSWER IS --INCORRECT--!';
    }

    if (questionAnswered) {
      return (
        <div>
          <button onClick={nextQuestion}
                  className="next-question">
            Click to Submit answer and change to next Question</button>
          <p>{message}</p>
        </div>
      )
    } else {
      return null
    }
  }
}