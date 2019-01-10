import React, { Component } from 'react';
import './CSS/Main.scss';
// import Answer from './Answer.js'

export default class Intro extends Component {

  render() {
    let { nextQuestionHandler } = this.props;
    return (
      <div>
        <h4
          onClick={nextQuestionHandler}
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
  }
}