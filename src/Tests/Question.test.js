import React from 'react';
import Question from '../Question.js';
import { shallow } from 'enzyme';

const mockCount = 0;
const mockDefinition = undefined;
const mockPrevious = 'show-previous';
const mockIsCorrect = 'yes';
const mockShowPrevResult = jest.fn();
const mockShowBtnText = jest.fn();
const mockCheckAnswer = jest.fn();

describe('Question', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Question
        count={mockCount}
        definition={mockDefinition}
        previous={mockPrevious}
        isCorrect={mockIsCorrect}
        showPrevResult={mockShowPrevResult}
        showBtnText={mockShowBtnText}
        checkAnswer={mockCheckAnswer} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register when clicked for checking the answer', () => {

    wrapper.find('.user-btn').simulate('click');
    expect(mockCheckAnswer).toBeCalled();
  })
});

