import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

  showQuestion = (category) => {
    let randomIndex = this.getRandomNumber(category.length)

    let rightAnswer = this.buildCard('keys', category, randomIndex).shift()
    let definition = this.buildCard('values', category, randomIndex).shift()
    let wrongAnswers = this.generateWrongAnswers(category, randomIndex)

    return [definition, [rightAnswer, ...wrongAnswers]];
  }

  buildCard = (type, category, index) => {
    if (type === 'keys') {
      return Object.keys(category[index])
    } else if (type === 'values') {
      return Object.values(category[index])
    }
  }

  generateWrongAnswers = (category, random) => {
    let i = 0, numOfWrong = 3;
    let arr = [];
    
    while (i < numOfWrong) {
      let j = this.getRandomNumber(category.length);
      if (j !== random) {
        arr.push(Object.keys(category[j]).shift());
        i++;
      }
    };

    return arr;
  }
  
  checkAnswer = (event) => {
    let guess = event.target.innerText;
    this.setState({ count: this.state.count + 1 })

    this.props.checkAnswer(guess);
  }
  
  render() {
    let { index, searchFound } = this.props;  
    let { prototypes, selection } = this.props.deets;
    let { all } = this.props.deets.prototypes;

    if (searchFound) {
      return (
        <div>
          <p>{this.buildCard('keys', all, index).shift() + '()'}</p>
          <p>{this.buildCard('values', all, index).shift()}</p>
        </div>
      )
    } else if (!searchFound && !prototypes.all){
      return (
        <div>
          <p>NO RESULTS</p>
        </div>
      )
    } else {
      let question = this.showQuestion(prototypes[selection]);
      return (
        <div>
          <p>--{selection}</p>
          <p>{question.shift()}</p>
          <ul>
            {
             question.shift().map(answer => {
               return <li onClick={this.checkAnswer}>{answer}</li>
             })
            }
          </ul>
        </div>
      )
    }
  }
}