import React from 'react';
import Display from '../Display.js';
import { shallow } from 'enzyme';
import prototypes from '../datasets/aType.js'

const mockData = prototypes;
const mockAnswer = jest.fn()

describe('Display', () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Display prototypes={mockData}
  //              answer={mockAnswer} />
  //   )
  // })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

});

