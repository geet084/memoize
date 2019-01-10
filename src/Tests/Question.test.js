import React from 'react';
import Question from '../Question.js';
import { shallow } from 'enzyme';

const mocknumOfGuesses = 0;
const mockDefinition = 'hello';
const mockShowPrevResult = jest.fn();
const mockShowBtnText = jest.fn();
const mockCheckAnswer = jest.fn();

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Question
        numOfGuesses={mocknumOfGuesses}
        definition={mockDefinition}
        showPrevResult={mockShowPrevResult}
        showBtnText={mockShowBtnText}
        checkAnswer={mockCheckAnswer} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update with what a user types in', () => {
    expect(wrapper.state()).toEqual({ userInput: '' })
    wrapper.find('.user-input').simulate('change', { target: { value: 'hello' } })
    expect(wrapper.state()).toEqual({ userInput: 'hello'})
    
  })

  it('should submit a guess when clicked', () => {
    wrapper.find('.user-input').simulate('change', { target: { value: 'hello' } })
    expect(wrapper.state()).toEqual({userInput: 'hello'})
    
    wrapper.find('.user-btn').simulate('click');
    
    expect(wrapper.state()).toEqual({ userInput: '' })
  })

  it.skip('should change placeholder text when clicked on/off of', () => {
    //IS THIS SOMETHING THAT I SHOULD EVEN BE TRYING TO TEST??
    wrapper.find('.user-input').simulate('change', { target: { value: 'hello' } })
    expect(wrapper.find('.user-input').text()).toEqual('?')
  })
});

