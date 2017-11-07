import React from 'react';
import Header from './header/header';
import Body from './body/body';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Body />
			</div>
		);
	}
}

export default App;
