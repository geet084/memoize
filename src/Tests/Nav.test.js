import React from 'react';
import Nav from '../Nav.js';
import { shallow } from 'enzyme';

describe('Nav', () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Nav />
  //   )
  // })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

});

