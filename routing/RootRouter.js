import React from 'react'
import { Easing, Animated } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import AddPostRouter from './AddReceiptRouter'
import StartScreenRouter from './StartScreenRouter'

import TransactionOverviewScreen from '../screens/TransactionOverviewScreen/TransactionOverviewScreen'

const RootRouter = createStackNavigator(
    {
        Overview: {
            screen: StartScreenRouter,
            navigationOptions: {
                header: null, // Hiding the top bar for start pages
            }
        },
        AddPost: AddPostRouter,
        TransactionOverview: {
            screen: TransactionOverviewScreen
        }
    },
    {
        headerMode: 'screen',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: true,
            // header: null, // Here is where we are to update the header
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 400,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

export default RootRouter