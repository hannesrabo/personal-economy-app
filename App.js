import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

import Color from './color'
import NavigationService from './routing/NavigationService'
import RootRouter from './routing/RootRouter';
import { Context, ContextConsumer } from './components/Context/Context'


export default class App extends React.Component {
	constructor(props) {
		super(props)
		let context = null

		this.state = {
		}
	}

	componentDidMount() {
		Font.loadAsync({
			'nunito': require('./assets/fonts/Nunito-Light.ttf'),
		}).then(() => {
			this.context.updateFontsLoaded(true);
		})

	}

	render() {
		return (
			<View style={{ backgroundColor: '#000000', flex: 1 }}>
				<Context ref={compRef => { this.context = compRef }}>
					<View style={styles.wrapper}>
						<RootRouter
							ref={navigatorRef => {
								NavigationService.setTopLevelNavigator(navigatorRef);
							}}
							onNavigationStateChange={(prevState, newState) => {
								// Do some update?
							}}
						/>
					</View>
				</Context>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		borderTopLeftRadius: 7,
		borderTopRightRadius: 7,
		backgroundColor: '#000',
		overflow: 'hidden',
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
