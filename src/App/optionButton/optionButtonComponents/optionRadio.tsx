import React from 'react';
import { style, classes } from 'typestyle';
const chill = require('../../../Assets/Options/Chill@2x.png');
const go = require('../../../Assets/Options/Go@2x.png');
const productive = require('../../../Assets/Options/Productive@2x.png');
const stay = require('../../../Assets/Options/Stay@2x.png');

interface Props {
	feeling: string;
	option: number;
	activeOption: number;
	onOptionChange: (option: number) => void;
}

const OptionRadio: React.SFC<Props> = props => {
	const { feeling, option, activeOption, onOptionChange } = props;
	let feelingImage;
	switch (feeling) {
		case 'chill':
			feelingImage = chill;
			break;
		case 'productive':
			feelingImage = productive;
			break;
		case 'stay':
			feelingImage = stay;
			break;
		case 'go':
			feelingImage = go;
			break;
		default:
			break;
	}

	const btnInput = style({
		display: 'none'
	});

	const btnImage = style({
		backgroundImage: `url(${feelingImage})`
	});

	const btnStyle = style({
		cursor: 'pointer',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		display: 'inline-block',
		width: '108px',
		height: '108px',
		transition: 'all 250ms ease-in',
		filter: 'brightness(1.5) grayscale(1) opacity(.5)',

		$nest: {
			'&:hover, &:active': {
				filter: 'brightness(1) grayscale(0) opacity(.5)'
			}
		}
	});

	const btnChecked = style({
		filter: 'none'
	});

	return (
		<div>
			<input
				className={btnInput}
				type="radio"
				name="1"
				id={feeling}
				checked={true}
			/>
			<label
				className={classes(
					btnImage,
					btnStyle,
					option === activeOption && btnChecked
				)}
				htmlFor={feeling}
				onClick={() => onOptionChange(option)}
			/>
		</div>
	);
};

export default OptionRadio;
