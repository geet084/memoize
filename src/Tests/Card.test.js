import React from 'react';
import Card from '../Card.js';
import { shallow } from 'enzyme';
import aTypes from '../datasets/aType.js'

const mockPrototypes = jest.fn();
const mockAnswers = jest.fn();
const mockShowQuestion = jest.fn();
const mockSingleQuestion = [
  {
    "concat": "This method is used to merge two or more arrays. This method also does not change the existing arrays, but instead returns a new array."
  }]
const mockAnsweredQuestions = [{
  question: false,
  guess: { answer: 'push', definition: "This method adds one or more elements to the end of an array and returns the new length of the array."}
}];

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card questions={mockPrototypes}
        answer={mockAnswers} />
    )
    expect(wrapper.state()).toEqual({
      count: 0,
      question: null,
      answeredCorrectly: null,
      showNextQuestion: false
    })
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      count: 0,
      question: null,
      answeredCorrectly: null,
      showNextQuestion: false
    })
  })

  it.skip('should advance to the next question when clicked', () => {
    wrapper.setState({
      showNextQuestion: false,
      question: {
        definition: aTypes.aTypes[6].find,
        answer: 'find'
      }, 
      count: 1,
      answeredCorrectly: true
    })
    wrapper.setProps({answeredQuestions: mockAnsweredQuestions})
    wrapper.instance().nextQuestion();
    // expect(mockShowQuestion).toBeCalled()

    expect(wrapper.state()).toEqual({
      showNextQuestion: true,
      count: 0,
      answeredCorrectly: null
    })
  })
  
  it('should generate a random number between zero and a given max', () => {
    // RANDOM NUMBER...PASSES MOST OF THE TIME??
    let number = wrapper.instance().getRandomNumber(10)

    expect(number).not.toEqual(10)
  })

  it('should show a question when prompted', () => {
  /*SPECIFIC TO NOT HAVE TO DEAL WITH THE RANDOM GENERATED PART!!*/
    
    wrapper.setProps({questions: mockSingleQuestion})
    wrapper.instance().showQuestion();
    expect(wrapper.state()).toEqual({
      count: 0,
      question: {
        answer: 'concat',
        definition: 'This method is used to merge two or more arrays. This method also does not change the existing arrays, but instead returns a new array.'
      },
      answeredCorrectly: null,
      showNextQuestion: false
    })
  })

  it.skip('should find a question and answer from available choices', () => {
    let mockType = 'keys';
    let mockIndex = 1;
    wrapper.setProps({ questions: mockSingleQuestion })
    expect(wrapper.instance().findQuestion(mockType, mockIndex)).toEqual('copyWithin')
    
    mockType = 'values';
  
    expect(wrapper.instance().findQuestion(mockType, mockIndex)).toEqual('This method shallow copies part of an array to another location in the same array and returns it, without modifying its size.')
  })

  it('should check the answer that the user puts in', () => {

    expect(wrapper.state()).toEqual({
      count: 0,
      question: null,
      answeredCorrectly: null,
      showNextQuestion: false
    })
    
    wrapper.setState({
      question: {
        definition: aTypes.aTypes[6].find,
        answer: 'find'
      }
    })
    let mockClick = { target: { previousSibling: { value: 'hello' } } }
    wrapper.instance().checkAnswer(mockClick);

    expect(wrapper.state()).toEqual({
      count: 1,
      question: {
        definition: aTypes.aTypes[6].find,
        answer: 'find'
      },
      answeredCorrectly: false,
      showNextQuestion: false
    })
  })

  it.skip('should so the results of previous correctly answered questions', () => {
    expect(wrapper.state()).toEqual({
      count: 0,
      question: null,
      answeredCorrectly: null,
      showNextQuestion: false
    })
    wrapper.setProps({ answeredQuestions: mockSingleQuestion })
    let result = wrapper.instance().showPrevResult();
    expect(result).toEqual('undefined')
  })

  it('should toggle the check answer button text', () => {
    let result = wrapper.instance().showBtnText();
    expect(result).toEqual('Click to check answer')
    wrapper.setState({ count: 9 })
    result = wrapper.instance().showBtnText();
    expect(result).toEqual('Click to try again')
  })
});

