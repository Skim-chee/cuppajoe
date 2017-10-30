import React from 'react';
import { style } from 'typestyle';
const logo = require('../../Assets/Logo@2x.png');

const container = style({
	display: 'flex',
	flexDirection: 'column',
	width: '100%'
});
const logoWeb = style({
	alignSelf: 'center',
	height: '148px'
});

const Header = () => {
	return (
		<div className={container}>
			<img className={logoWeb} src={logo} />
		</div>
	);
};

export default Header;
