import React from 'react';
import Card from '../Card.js';
import { shallow } from 'enzyme';

const mockPrototypes = jest.fn();
const mockAnswers = jest.fn();
const mockShowQuestion = jest.fn();
const mockData = [{
  "concat": "This method is used to merge two or more arrays. This method also does not change the existing arrays, but instead returns a new array."
},
  {
    "copyWithin": "This method shallow copies part of an array to another location in the same array and returns it, without modifying its size."
  },
  {
    "entries": "This method returns a new Array Iterator object that contains the key/value pairs for each index in the array."
  }]

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
      answer: null,
      answeredCorrectly: null,
      nextQuestion: false
    })
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      count: 0,
      question: null,
      answer: null,
      answeredCorrectly: null,
      nextQuestion: false
    })
  })

  it.skip('should advance to the next question when clicked', () => {

    wrapper.instance().nextQuestion();
    expect(mockShowQuestion).toBeCalled()

    expect(wrapper.state()).toEqual({
      count: 0,
      question: null,
      answer: null,
      answeredCorrectly: null,
      nextQuestion: true
    })
  })
  
  it('should generate a random number between zero and a given max', () => {
    // RANDOM NUMBER...PASSES MOST OF THE TIME??
    let number = wrapper.instance().getRandomNumber(10)

    expect(number).not.toEqual(10)
  })

  it.skip('should show a question when prompted', () => {

    wrapper.instance().showQuestion();
    expect(wrapper.state()).toEqual({
      count: 0,
      question: 'things',
      answer: null,
      answeredCorrectly: null,
      nextQuestion: false
    })
  })

  it('should create determine a question and answer from available choices', () => {
    let mockType = 'keys';
    let mockIndex = 1;

    expect(wrapper.instance().createCard(mockType, mockData, mockIndex)).toEqual('copyWithin')
    
    mockType = 'values';
  
    expect(wrapper.instance().createCard(mockType, mockData, mockIndex)).toEqual('This method shallow copies part of an array to another location in the same array and returns it, without modifying its size.')
  })

  it('should check the answer against what was guessed', () => {
    wrapper.setState({
      question: {
        question: mockData[1],
        answer: 'copyWithin'
      }
    })

    expect(wrapper.instance().checkAnswer('hello')).toEqual(false)

    expect(wrapper.instance().checkAnswer('COPYWITHIN')).toEqual(true)
  })

  it('should handle the guess that the user puts in', () => {
    let mockClick = { target: { previousSibling: { value: 'hello' } } }
    wrapper.setState({
      question: {
        question: mockData[1],
        answer: 'copyWithin'
      }
    })
    wrapper.instance().processGuess(mockClick);

    // expect(wrapper.checkAnswer).toBeCalled()

    expect(wrapper.state()).toEqual({
      count: 1,
      "question": { "answer": "copyWithin", "question": { "copyWithin": "This method shallow copies part of an array to another location in the same array and returns it, without modifying its size." }},
      answer: null,
      answeredCorrectly: false,
      nextQuestion: false
    })
  })
});

