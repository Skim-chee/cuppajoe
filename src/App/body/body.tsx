import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../loadingComponent';
// import OptionContainer from '../optionContainer/optionContainer';

// TEMP, set up later to only be async on second component
const AsyncOptions = Loadable({
	loader: () => import('../optionContainer/optionContainer'),
	loading: Loading
});

const Body = () => (
	<main>
		<Switch>
			<Route exact={true} path="/" component={AsyncOptions} />
		</Switch>
	</main>
);

export default Body;
