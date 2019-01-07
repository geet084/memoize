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
  
  render() {

    let { prototypes, selection } = this.props;
    let categoryChosen = this.findCategory(selection);

    if (categoryChosen) {
      return (
        <section>
          <p>--{selection}-- PROTOTYPES SELECTED</p>
          <Card deets={this.props}
            answer={this.props.answer} />
        </section>
      )
    }
    // else {
    //   let index = this.getIndex(prototypes, selection)
    //   return (
    //     <section>
    //       <Card deets={this.props}
    //             searchFound={this.validateInput(index)}
    //             index={index} />
    //     </section>
    //   )
    // }
  }
}