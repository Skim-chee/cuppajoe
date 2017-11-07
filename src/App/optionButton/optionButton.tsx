import React from 'react';
import { style } from 'typestyle';
const chill = require('../../Assets/Options/Chill@2x.png');
const go = require('../../Assets/Options/Go@2x.png');
const productive = require('../../Assets/Options/Productive@2x.png');
const stay = require('../../Assets/Options/Stay@2x.png');

export interface Props {
	feeling: string;
	option: number;
}

const OptionButton: React.SFC<Props> = props => {
	const { feeling, option } = props;
	let feelingImage;
	switch (props.feeling) {
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

	const buttonStyle = style({
		backgroundImage: `url(${feelingImage})`
	});

	const btnImage = style({
		cursor: 'pointer',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		display: 'inline-block',
		width: '108px',
		height: '108px',
		transition: 'all 250ms ease-in',
		filter: 'brightness(1.5) grayscale(1) opacity(.5)'
	});

	return (
		<div>
			<input type="radio" value={feeling} />
			<label className={[btnImage, buttonStyle].join(' ')} />
			{option}
		</div>
	);
};

export default OptionButton;
