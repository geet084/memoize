import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Previous extends Component {

  render() {
    let {prevAnswer } = this.props;
    let answer;
    prevAnswer ? answer = 'correct' : answer = 'incorrect'

    return (
      <div>
        <p className="previous">
          Previous result for this question was:
          <span className={prevAnswer.toString()}> {answer}</span>
        </p>
      </div>
    )
  }
}