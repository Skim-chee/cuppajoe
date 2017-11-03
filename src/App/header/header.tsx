import React from 'react';
import { pure } from 'recompose';
import styles from './styles';
const logo = require('../../Assets/Logo@2x.png');

const Header: React.ComponentType = pure(() => {
	return (
		<header>
			<div className={styles.container}>
				<a className={styles.logoLink} href="/">
					<img className={styles.logoImg} src={logo} alt="logo" />
				</a>
			</div>
		</header>
	);
});

export default Header;
