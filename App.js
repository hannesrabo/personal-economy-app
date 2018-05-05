import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import Expo from 'expo'

// import ChartExample from './components/ExampleComponent/ExampleComponent'
// import TestComp from './components/TestComponent/TestComponent'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import OverviewScreen from './screens/OverviewScreen/OverviewScreen'
import BudgetScreen from './screens/BudgetScreen/BudgetScreen'
import DetailsScreen from './screens/DetailsScreen/DetailsScreen'

import Color from './color'

const NavigationRouter = new createMaterialTopTabNavigator(
	{
		Details: {
			screen: DetailsScreen
		},
		Overview: {
			screen: OverviewScreen,
		},
		Budget: {
			screen: BudgetScreen,
		},
	}
	,
	{
		swipeEnabled: true,
		initialRouteName: 'Overview',
		tabBarOptions: {
			style: {
				backgroundColor: Color.highlight,
			},
			indicatorStyle: {
				backgroundColor: Color.highlight_light,
			}
		},
	}
)

export default class App extends React.Component {
	render() {
		console.log("Rerendered app")
		return (
			<View style={styles.wrapper}>
				<NavigationRouter />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		// paddingTop: Expo.Constants.statusBarHeight,
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
	// chart: {
	//   width: 1080,
	//   height: 800,
	// }
});
