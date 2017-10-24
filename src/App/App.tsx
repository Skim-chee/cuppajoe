import * as React from 'react';
// import styles from './app.css';
let styles = require('./appstyle.css');

class App extends React.Component {
	render() {
		return (
			<div className={styles.app}>
				<div className={styles.appHeader}>
					<img className={styles.appLogo} alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className={styles.appIntro}>
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
