import React from 'react';
import Card from '../Card.js';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;

  // beforeEach(() => {
  //   wrapper = shallow(
  //     <Card />
  //   )
  // })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

});

