import React from 'react';
import OptionButton from '../optionButton/optionButton';

interface State {
	optionOne: number;
	optionTwo: number;
}

class OptionContainer extends React.Component<{}, State> {
	public state: State = {
		optionOne: 1,
		optionTwo: 1
	};

	render() {
		const { optionOne, optionTwo } = this.state;
		return (
			<div>
				<div>
					<OptionButton feeling="chill" option={optionOne} />
					<OptionButton feeling="productive" option={optionOne} />
				</div>
				<div>
					<OptionButton feeling="stay" option={optionTwo} />
					<OptionButton feeling="go" option={optionTwo} />
				</div>
			</div>
		);
	}
}

export default OptionContainer;
