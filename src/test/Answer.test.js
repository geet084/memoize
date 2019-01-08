import React from 'react';
import Answer from '../Answer.js';
import { shallow } from 'enzyme';

describe('Answer', () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Answer />
  //   )
  // })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

});

