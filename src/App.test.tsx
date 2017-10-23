import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// import * as Enzyme from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	shallow(<App />);
});
