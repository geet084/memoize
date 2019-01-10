import React from 'react';
import Card from '../Card.js';
import { shallow } from 'enzyme';
import aTypes from '../datasets/aType.js'

const mockQuestions = jest.fn();
const mockUpdateAnswersHandler = jest.fn();
const mockSingleQuestion = [
  {
    "concat": "This method is used to merge two or more arrays. This method also does not change the existing arrays, but instead returns a new array."
  }]
const mockAnsweredQuestions = [{
  userGuess: false,
  question: { answer: 'push', definition: "This method adds one or more elements to the end of an array and returns the new length of the array."}
},
{
  userGuess: true,
  question: { answer: 'flat', definition: "This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth." }
}];

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        questions={mockQuestions}
        updateAnswersHandler={mockUpdateAnswersHandler}
        answeredQuestions={mockAnsweredQuestions} />
    )
    expect(wrapper.state()).toEqual({
      numOfGuesses: 0,
      question: null,
      answeredCorrectly: false,
      showNextQuestion: false,
      prevAnswer: null
    })
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.setState({ showNextQuestion: true, question: mockSingleQuestion })
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should advance to the next question when answer is submitted', () => {
    wrapper.setProps({ question: aTypes })
    wrapper.setState({ questions: mockSingleQuestion })
    wrapper.instance().nextQuestionHandler();

    // expect(wrapper.state()).toEqual({
    //   numOfGuesses: 0,
    //   question: { definition, answer },
    //   answeredCorrectly: false,
    //   showNextQuestion: true
    // })

  })
  
  it('should generate a random number between zero and a given max', () => {
    // RANDOM NUMBER...PASSES MOST OF THE TIME??
    let number = wrapper.instance().getRandomNumber(10)

    expect(number).not.toEqual(10)
  })

  it('should find a question answer or definition from a given index', () => {

    let questionDefinition = 'This method is used to merge two or more arrays. This method also does not change the existing arrays, but instead returns a new array.'
    
    wrapper.setProps({questions: mockSingleQuestion})
    expect(wrapper.instance().findQuestion('keys', 0)).toEqual('concat')

    expect(wrapper.instance().findQuestion('values', 0)).toEqual(questionDefinition)
    
  })

  it('should check the users answer to see if it is correct', () => {
    expect(wrapper.state('numOfGuesses')).toEqual(0)
    expect(wrapper.state('answeredCorrectly')).toEqual(false)

    wrapper.setState({ question: {answer: 'Hello there'} })
    
    wrapper.instance().checkAnswer('hello there');
    expect(wrapper.state('numOfGuesses')).toEqual(1)
    expect(wrapper.state('answeredCorrectly')).toEqual(true)

  })

  it('should check to see if the user has answered a particular question before', () => {

    let previouslyAnswered = "This method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth."

    wrapper.setProps({ answeredQuestions: mockAnsweredQuestions })

    expect(wrapper.instance().lookForPrevResult('wrong')).toEqual(false)
    
    expect(wrapper.instance().lookForPrevResult(previouslyAnswered)).toEqual(true)
  })

  it('should change the text on the answer button when clicked', () => {

    expect(wrapper.instance().showBtnText()).toEqual('Click to check answer')
    wrapper.setState({ numOfGuesses: 1 })
    
    expect(wrapper.instance().showBtnText()).toEqual('Click to try again')
  })  
});

