import React from 'react';
import { shallow, mount } from 'enzyme';
import { Tag } from './index';

describe('<Tag /> Render', () => {

    it('Render correctly', () => {
        shallow(<Tag />);
    });

    it('Render with default values when props was empty', () => {
        const wrapper = shallow(<Tag />);
        expect(wrapper.prop('className')).toEqual('tag-component');
        expect(wrapper.prop('color')).toEqual('Grey');
    });

    it('Render with correct prop values', () => {
        const wrapper = shallow(<Tag className="test" color="Red" />);
        expect(wrapper.prop('className')).toEqual('test');
        expect(wrapper.prop('color')).toEqual('Red');
    });

  });