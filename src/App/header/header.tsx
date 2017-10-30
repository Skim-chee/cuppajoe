import React from 'react';
import styles from './styles';
const logo = require('../../Assets/Logo@2x.png');
// import logo from '../../Assets/Logo@2x.png';

const Header = () => {
	return (
		<header>
			<div className={styles.container}>
				<a href="/">
					<img className={styles.logoWeb} src={logo} alt="logo" />
				</a>
			</div>
		</header>
	);
};

export default Header;
