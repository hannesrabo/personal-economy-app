import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, Constants } from 'expo'

import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'])

import NavigationService from './routing/NavigationService'
import RootRouter from './routing/RootRouter';
import { Context, ContextConsumer } from './components/Context/Context'

import LoadingScreen from './screens/LoadingScreen/LoadingScreen'

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#000',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	chartContainer: {
		height: 300,
		width: '200%',
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

	componentDidMount() {
		Font.loadAsync({
			'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
		}).then(() => {
			this.context.updateFontsLoaded(true)
			this.context.updateLoadingStage(1)
		})

	}

	render() {
		return (
			<View style={styles.wrapper}>
				<Context ref={compRef => { this.context = compRef }}>
					<ContextConsumer>
						{context => {
							return (
								((context.state.loadingDone) ?
									<RootRouter
										ref={navigatorRef => {
											NavigationService.setTopLevelNavigator(navigatorRef);
										}}
										onNavigationStateChange={(prevState, newState) => {
											// Do some update? 
										}}
									/>
									:
									<LoadingScreen />
								)
							)
						}}
					</ContextConsumer>
				</Context>
			</View >
		);
	}

}