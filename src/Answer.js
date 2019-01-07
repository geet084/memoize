import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Answer extends Component {
  
  render() {
    let { answer, nextQuestion } = this.props;
    let message = 'YOUR ANSWER IS'
    let questionAnswered = answer || answer === false;
      
    if (answer) {
      message += ' --CORRECT--!';
    } else if (answer === false) {
      message += ' --INCORRECT--!';
    }

    if (questionAnswered) {
      return (
        <div>
          <p>{message}</p>
          <button onClick={nextQuestion}>
            Click for next Question</button>
        </div>
      )
    } else {
      return null
    }
  }
}