import React from 'react';
import OptionButton from '../optionButton/optionButton';
import SubmitButton from '../submitButton/submitButton';

interface State {
	optionOne: number;
	optionTwo: number;
}

class OptionContainer extends React.Component<{}, State> {
	constructor() {
		super();

		this.state = {
			optionOne: 1,
			optionTwo: 1
		};

		this.optionOneSelect = this.optionOneSelect.bind(this);
		this.optionTwoSelect = this.optionTwoSelect.bind(this);
	}

	optionOneSelect(optionOne: number) {
		this.setState({ optionOne });
	}

	optionTwoSelect(optionTwo: number) {
		this.setState({ optionTwo });
	}

	render() {
		const { optionOne, optionTwo } = this.state;
		return (
			<div>
				<div>
					<OptionButton
						feeling="chill"
						activeOption={optionOne}
						onOptionChange={this.optionOneSelect}
					/>
					<OptionButton
						feeling="productive"
						activeOption={optionOne}
						onOptionChange={this.optionOneSelect}
					/>
				</div>
				<div>
					<OptionButton
						feeling="stay"
						activeOption={optionTwo}
						onOptionChange={this.optionTwoSelect}
					/>
					<OptionButton
						feeling="go"
						activeOption={optionTwo}
						onOptionChange={this.optionTwoSelect}
					/>
				</div>
				<SubmitButton primary={true} />
			</div>
		);
	}
}

export default OptionContainer;
