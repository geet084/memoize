import React, { Component } from 'react';
import './CSS/Main.scss';
import Card from './Card.js'

export default class Display extends Component {

  findCategory = (choice) => { 
    let types = ['all', 'aTypes', 'sTypes']

    return types.find(type => {
      return type === choice;
    })
  }

  validateInput = (index) => {
    if (index === -1) return false
    else return true
  }

  getIndex = (prototypes, selection) => {
    return prototypes.all.findIndex(i => {
      return Object.keys(i)[0].includes(selection)
    })
  }

  checkAnswer = (guess) => {
    console.log(guess)
  }
  
  render() {
    let { prototypes, selection } = this.props;
    let categoryChosen = this.findCategory(selection);

    if (categoryChosen) {
      return (
        <section>
          <p>PROTOTYPES SELECTED</p>
          <Card deets={this.props}
                checkAnswer={this.checkAnswer}/>
        </section>
      )
    } else {
      let index = this.getIndex(prototypes, selection)
      return (
        <section>
          <Card deets={this.props}
                searchFound={this.validateInput(index)}
                index={index} />
        </section>
      )
    }
  }
}