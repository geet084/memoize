import React from 'react';
import Nav from '../Nav.js';
import { shallow } from 'enzyme';

const mockTally = jest.fn();
const mockReset = jest.fn();

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Nav theScore={mockTally}
           reset={mockReset} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should register a click to reset the score', () => {
    wrapper.find('.reset-btn').simulate('click')
    expect(mockReset).toBeCalled()
  })

  it.skip('should show an updated score', () => {
    // ?? is this a testable thing?
    expect('nav to test dom change').toEqual('true')
  })

});

