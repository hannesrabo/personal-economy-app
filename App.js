import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import ChartExample from './components/ExampleComponent/ExampleComponent'
// import TestComp from './components/TestComponent/TestComponent'

import StackNavigator from './components/Navigation/Navigation'
import NavigationService from './components/Navigation/NavigationService';

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

import Color from './color'

// import GestureRecognizer from 'react-native-swipe-gestures'
// import handleSwipe from './components/Navigation/SwipeControl'

export default class App extends React.Component {
	componentDidMount = () => {

	}

	render() {
		const config = {
			velocityThreshold: 0.25,
			directionalOffsetThreshold: 80
		};

		console.log("Renderer app")
		return (
			<View style={styles.wrapper}>
				<StackNavigator
					ref={navigatorRef => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
					onNavigationStateChange={(prevState, newState) => {
						//this._getCurrentRouteName(newState)
						//console.log("State")
						//console.log(newState)
					}}
				/>
			</View >
		);
	}

}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
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
