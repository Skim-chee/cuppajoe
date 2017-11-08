import React from 'react';
import { shallow } from 'enzyme';
import OptionButton from './optionButton';
import toJson from 'enzyme-to-json';

describe('Header', () => {
	const Props = {
		feeling: 'chill',
		activeOption: 1,
		onOptionChange: () => 2
	};
	const wrapper = shallow(<OptionButton {...Props} />);

	it('render the component', () => {
		expect(wrapper.length).toEqual(1);
	});

	it('matches the snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
