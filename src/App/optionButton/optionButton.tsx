// import { cssRule } from 'typestyle/lib';
import React from 'react';
// import { style } from 'typestyle';
import OptionRadio from './optionRadio/optionRadio';

export interface Props {
	feeling: string;
	option: number;
	activeOption: number;
}

interface State {
	feeling: string;
	option: number;
	activeOption: number;
}

class OptionButton extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			feeling: props.feeling,
			option: props.option,
			activeOption: props.activeOption
		};
	}

	render() {
		return (
			<div>
				<OptionRadio
					feeling={this.state.feeling}
					option={this.state.option}
					activeOption={this.state.activeOption}
				/>
				<p>HI</p>
			</div>
		);
	}
}

export default OptionButton;
