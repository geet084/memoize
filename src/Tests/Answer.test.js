import React from 'react';
import Answer from '../Answer.js';
import { shallow } from 'enzyme';

const mockClick = jest.fn();
const mockQuestion = jest.fn();
const mockAnswer = jest.fn();


describe('Answer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Answer nextQuestion={mockQuestion}
              answer={mockAnswer}/>
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click to advance to the next question', () => { 
    wrapper.find('.next-question').simulate('click')
    expect(mockQuestion).toBeCalled()
  })

});

