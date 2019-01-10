import React from 'react';
import Answer from '../Answer.js';
import { shallow } from 'enzyme';

const mockNextQuestion = jest.fn();
const mockAnsweredCorrectly = true;
const mockNumOfGuesses = 1;

describe('Answer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Answer
        nextQuestion={mockNextQuestion}
        answeredCorrectly={mockAnsweredCorrectly}
        numOfGuesses={mockNumOfGuesses}
      />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click to advance to the next question', () => { 
    wrapper.find('.next-question').simulate('click')
    expect(mockNextQuestion).toBeCalled()
  })
});

