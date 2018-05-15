import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, Constants } from 'expo'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

import Color from './color'
import NavigationService from './routing/NavigationService'
import RootRouter from './routing/RootRouter';
import { Context, ContextConsumer } from './components/Context/Context'

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#000',
		paddingTop: Constants.statusBarHeight,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		// flexDirection: 'row',
	},
	chartContainer: {
		// alignSelf: 'stretch',
		height: 300,
		width: '200%',
		// flex: 1,
		// alignItems: 'flex-end',
		backgroundColor: '#eeeeee',
	},
});


export default class App extends React.Component {
	constructor(props) {
		super(props)
		let context = null

		this.state = {
		}
	}
	// componentDidMount() {
	// 	Font.loadAsync({
	// 		'nunito': require('./assets/fonts/Nunito-Light.ttf'),
	// 	}).then(() => {
	// 		this.context.updateFontsLoaded(true);
	// 	})

	// }

	render() {
		return (
			<View style={styles.wrapper}>
				<Context ref={compRef => { this.context = compRef }}>
					<RootRouter
						ref={navigatorRef => {
							NavigationService.setTopLevelNavigator(navigatorRef);
						}}
						onNavigationStateChange={(prevState, newState) => {
							// Do some update? 
						}}
					/>
				</Context>
			</View>
		);
	}

}