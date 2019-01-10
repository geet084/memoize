import React, { Component } from 'react';
import './CSS/Main.scss';
import Card from './Card.js'

export default class Display extends Component {
  constructor() {
    super();

    this.state = {
      correctlyAnswered: null
    }
  }

  render() {
    let { prototypes, updateAnswersHandler, answeredQuestions } = this.props;

    return (
      <section className="display">
        <Card
          questions={prototypes}
          updateAnswersHandler={updateAnswersHandler}
          answeredQuestions={answeredQuestions} />
      </section>
    )
  }
}