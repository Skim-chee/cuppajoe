// import { cssRule } from 'typestyle/lib';
import React from 'react';
// import { style } from 'typestyle';
import OptionRadio from './optionRadio/optionRadio';

export interface Props {
	feeling: string;
	activeOption: number;
	onOptionChange: (option: number) => void;
}

const OptionButton: React.SFC<Props> = props => {
	let option;
	switch (props.feeling) {
		case 'chill':
		case 'stay':
			option = 1;
			break;
		case 'productive':
		case 'go':
			option = 2;
			break;
		default:
			option = 1;
			break;
	}

	// this.state = {
	// 	feeling: props.feeling,
	// 	option: option,
	// 	activeOption: props.activeOption
	// };

	return (
		<div>
			<OptionRadio
				feeling={props.feeling}
				option={option}
				activeOption={props.activeOption}
				onOptionChange={props.onOptionChange}
			/>
		</div>
	);
};

export default OptionButton;
