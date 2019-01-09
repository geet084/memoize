import React from 'react';
import Answer from '../Answer.js';
import { shallow } from 'enzyme';

const mockQuestion = jest.fn();
const mockAnswer = true;
const mockCount = 1;

describe('Answer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Answer nextQuestion={mockQuestion}
              answer={mockAnswer}
              count={mockCount} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click to advance to the next question', () => { 
    wrapper.find('.next-question').simulate('click')
    expect(mockQuestion).toBeCalled()
  })

  it('should not render if the user has not tried to answer a question', () => { 
    wrapper = shallow(
      <Answer nextQuestion={mockQuestion}
        answer={undefined}
        count={0} />
    )

    expect(wrapper.html()).toBeNull();
  })

  it('should show whether or not you guessed right', () => {
    
    let result = wrapper.instance().showGuessResult(true, mockCount)
    expect(result).toEqual("THAT'S CORRECT!")

    result = wrapper.instance().showGuessResult(false, mockCount)
    expect(result).toEqual("THAT'S INCORRECT!")
  })
});

