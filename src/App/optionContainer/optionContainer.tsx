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
					<OptionButton feeling="chill" option={1} activeOption={optionOne} />
					<OptionButton
						feeling="productive"
						option={2}
						activeOption={optionOne}
					/>
				</div>
				<div>
					<OptionButton feeling="stay" option={1} activeOption={optionTwo} />
					<OptionButton feeling="go" option={2} activeOption={optionTwo} />
				</div>
			</div>
		);
	}
}

export default OptionContainer;
