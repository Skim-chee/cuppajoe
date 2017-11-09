// import { cssRule } from 'typestyle/lib';
import React from 'react';
// import { style } from 'typestyle';
import OptionRadio from './optionButtonComponents/optionRadio';
import OptionText from './optionButtonComponents/optionText';

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

	return (
		<div>
			<OptionRadio
				feeling={props.feeling}
				option={option}
				activeOption={props.activeOption}
				onOptionChange={props.onOptionChange}
			/>
			<OptionText
				feeling={props.feeling}
				option={option}
				activeOption={props.activeOption}
			/>
		</div>
	);
};

export default OptionButton;
