import React from 'react';

export interface Props {
	feeling: string;
	option: number;
}

const OptionButton: React.SFC<Props> = props => {
	const { feeling, option } = props;

	return (
		<div>
			{feeling} AND {option}
		</div>
	);
};

export default OptionButton;
