import React from 'react';
import Header from './header/header';
import OptionContainer from './optionContainer/optionContainer';

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<OptionContainer />
			</div>
		);
	}
}

export default App;
