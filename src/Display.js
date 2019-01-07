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
        <section>
          <Card questions={this.props.prototypes.aTypes}
            answer={this.props.answer} />
        </section>
      )
  }
}