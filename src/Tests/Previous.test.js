import React from 'react';
import Previous from '../Previous.js';
import { shallow } from 'enzyme';

const mockPrevAnswer = true;

describe('Previous', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Previous prevAnswer={mockPrevAnswer} />
    )
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ prevAnswer: false })
    
    expect(wrapper).toMatchSnapshot();
  })

});

