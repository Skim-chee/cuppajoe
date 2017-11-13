import React from 'react';
import { style, classes } from 'typestyle';

interface Props {
	primary: boolean;
}

const SubmitButton: React.SFC<Props> = props => {
	const { primary } = props;

	const btn = style({
		color: 'blue'
	});
	const secondary = style({
		color: 'red'
	});

	return (
		<div>
			<button
				className={classes(!primary && secondary, btn)}
				type="submit"
				value="FIND CAFE"
			>
				<p> FIND CAFE </p>
			</button>
		</div>
	);
};

export default SubmitButton;
