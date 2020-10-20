import React from 'react';
import { shallow } from 'enzyme';
import ListBeer from './index';

import { listBeers } from '../../service/BeerService';
jest.mock('../../service/BeerService');


describe('<ListBeer /> Render', () => {
  it('Render correctly with initial state', () => {
    const wrapper = shallow(<ListBeer />);
    expect(wrapper.find('.loading')).toHaveLength(1);
  });

  it('test', async () => {
    

    const wrapper = shallow(<ListBeer />);
    await console.log(wrapper.debug());
  });


});