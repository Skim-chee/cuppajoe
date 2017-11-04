import React from 'react';
import { shallow } from 'enzyme';
import OptionContainer from './optionContainer';
import toJson from 'enzyme-to-json';

describe('Header', () => {
	const wrapper = shallow(<OptionContainer />);

	it('render the component', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('verifies no props', () => {
		expect(wrapper.instance().props).toEqual({});
	});

	it('verifies initial state', () => {
		expect(wrapper.state('optionOne')).toEqual(1);
		expect(wrapper.state('optionTwo')).toEqual(1);
	});

	it('matches the snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
