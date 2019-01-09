import React from 'react';
import Display from '../Display.js';
import { shallow } from 'enzyme';
import prototypes from '../datasets/aType.js'

const mockData = prototypes;
const mockAnswer = jest.fn();
const mockAnsweredQuestions = jest.fn();


describe('Display', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Display prototypes={mockData}
               currentAnswer={mockAnswer}
               answeredQuestions={mockAnsweredQuestions} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      correctlyAnswered: null
    })
  })

});

