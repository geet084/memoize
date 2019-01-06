import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Card extends Component {

  getRandom = (max) => {
    return Math.floor(Math.random() * max)
  }

  showQuestion = (prototypes, selection) => {
    let max = prototypes[selection].length
    let random = this.getRandom(max)

    let arr = [];
    let right = Object.keys(prototypes[selection][random]).shift()
    let definition = Object.values(prototypes[selection][random]).shift()
    let wrong = this.generateWrongAnswers(max, random, prototypes, selection)
    let answers = [right, ...wrong];
    
    arr.push(definition, answers)
    return arr;
  }

  generateWrongAnswers = (max, random, prototypes, selection) => {
    let i = 0;
    let arr = [];
    while (i < 3) {
      let j = this.getRandom(max)
      if (j !== random) {
        arr.push(Object.keys(prototypes[selection][j]).shift())
        i++;
      }
    };
    return arr;
  }
  
  render() {
    let { index, searchFound, checkAnswer } = this.props;  
    let { prototypes, selection } = this.props.deets;
    let { all } = this.props.deets.prototypes;

    if (searchFound) {
      return (
        <div>
          <p>{Object.keys(all[index]).shift()+ '()'}</p>
          <p>{Object.values(all[index]).shift()}</p>
        </div>
      )
    } else if (!searchFound && !all){
      return (
        <div>
          <p>NO RESULTS</p>
        </div>
      )
    } else {
      let question = this.showQuestion(prototypes, selection);
      return (
        <div>
          <p>--{selection}</p>
          <p>{question.shift()}</p>
          <ul>
            {
             question.shift().map(answer => {
               return <li onClick={checkAnswer}>{answer}</li>
             })
            }
          </ul>
        </div>
      )
    }
  }
}