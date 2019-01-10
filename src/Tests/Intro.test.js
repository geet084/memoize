import React from 'react';
import Intro from '../Intro.js';
import { shallow } from 'enzyme';

const mockNextQuestionHandler = jest.fn();

describe('Intro', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Intro
        nextQuestionHandler={mockNextQuestionHandler}
      />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click to advance to the next question', () => {
    wrapper.find('.begin').simulate('click')
    expect(mockNextQuestionHandler).toBeCalled()
  })
});

