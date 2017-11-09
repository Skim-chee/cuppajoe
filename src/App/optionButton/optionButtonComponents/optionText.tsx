import React from 'react';
import { style, classes } from 'typestyle';

interface Props {
	feeling: string;
	option: number;
	activeOption: number;
}

const OptionText: React.SFC<Props> = props => {
	const { feeling, option, activeOption } = props;

	const headerText = style({
		fontSize: '22px'
	});
	const bodyText = style({
		fontSize: '15px'
	});
	const btnChecked = style({
		color: '#123'
	});
	return (
		<div>
			<div className={headerText}>{feeling}</div>
			<div className={classes(bodyText, option === activeOption && btnChecked)}>
				{feeling}
			</div>
		</div>
	);
};

export default OptionText;
