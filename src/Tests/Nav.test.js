import React from 'react';
import Nav from '../Nav.js';
import { shallow } from 'enzyme';

const mockScore = 0;
const mockResetHandler = jest.fn();

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Nav
        score={mockScore}
        resetHandler={mockResetHandler} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click to reset the score', () => {
    wrapper.find('.reset-btn').simulate('click')
    expect(mockResetHandler).toBeCalled()
  })
});

