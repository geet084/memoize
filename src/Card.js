import React, { Component } from 'react';
import './CSS/Main.scss';

export default class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0,
      question: null,
      answeredCorrectly: null,
      newStart: true
    }
  }

  componentDidMount = () => {
    this.showQuestion();
  }
  
  begin = () => {
    this.setState({newStart: false})
  }

  getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
  }

  showQuestion = () => {
    let { prototypes, selection } = this.props.deets;
    let category = prototypes[selection];
    let randomIndex = this.getRandomNumber(category.length)

    let rightAnswer = this.buildCard('keys', category, randomIndex).shift()
    let definition = this.buildCard('values', category, randomIndex).shift()
    // let wrongAnswers = this.generateWrongAnswers(category, randomIndex)

    this.setState({ question: {question: definition, answer: rightAnswer} });
    // this.setState({ question: [definition, [rightAnswer, ...wrongAnswers].sort()] });
  }

  buildCard = (type, category, index) => {
    if (type === 'keys') {
      return Object.keys(category[index])
    } else if (type === 'values') {
      return Object.values(category[index])
    }
  }

  // generateWrongAnswers = (category, random) => {
  //   let i = 0
  //   let arr = []
 
  //   while (i < 3) {
  //     let j = this.getRandomNumber(category.length);
  //     if (j !== random) {
  //       arr.push(Object.keys(category[j]).shift());
  //       i++;
  //     } 
  //   };

  //   return arr;
  // }
  
  // checkAnswer = (event) => {
  //   let guess = event.target.innerText;
  //   let correct = false;
    
  //   if (guess === this.state.question[1][0]) correct = true;
  //   this.props.answer(correct, this.state.question)
  //   this.setState({
  //     count: this.state.count + 1,
  //     answeredCorrectly: correct
  //   })
  //   this.showQuestion();
  // }

  checkAnswer = (e) => {
    let guess = e.target.innerText.toLowerCase();
    let { rightAnswer } = this.state.question.answer;
    let correct = false;

    if (guess === rightAnswer.toLowerCase()) {
      correct = true;
    }

    this.props.answer(correct, this.state.question)
    this.setState({
      count: this.state.count + 1,
      answeredCorrectly: correct
    })
    this.showQuestion();
  }
  
  render() {
    // let { index, searchFound } = this.props;  
    // let { prototypes } = this.props.deets;
    // let { all } = this.props.deets.prototypes;
    // <p>{this.buildCard('keys', all, index).shift() + '()'}</p>
    // <p>{this.buildCard('values', all, index).shift()}</p>

   if (this.state.newStart) {
      return (
        <div>
          <h4 onClick={this.begin}>Click to begin</h4>
        </div>
      )
   } else {
     let { question, answer } = this.state.question;
     console.log(this.state.question)
      return (
        <div>
          <p>Questions answered so far: {this.state.count}</p>
          <p>{question} //{answer}</p>
          {/* <ul>
            {
              answers.map((answer, index) => {
                return <li onClick={this.checkAnswer}
                           key={index}>{answer}</li>
              })
            }
          </ul> */}
          <input type="text" onClick={this.checkAnswer}/>
        </div>
      )
    }
  }
}