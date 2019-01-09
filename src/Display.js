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
    return (
      <section className="display">
        <Card
          questions={this.props.prototypes}
          currentAnswer={this.props.currentAnswer}
          answeredQuestions={this.props.answeredQuestions} />
      </section>
    )
  }
}