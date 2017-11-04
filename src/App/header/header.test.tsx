import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import toJson from 'enzyme-to-json';

describe('Header', () => {
	const wrapper = shallow(<Header />);

	it('render the component', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('render the image', () => {
		expect(wrapper.dive().find('img').length).toEqual(1);
	});

	it('matches the snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('verifies no props', () => {
		expect(wrapper.instance().props).toEqual({});
	});
});
