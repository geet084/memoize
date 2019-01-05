import React from 'react';
import Display from '../Display.js';
import { shallow } from 'enzyme';

describe('Display', () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Display />
  //   )
  // })

  it('should match the snapshot with all data ', () => {
    expect(wrapper).toMatchSnapshot();
  })

});

