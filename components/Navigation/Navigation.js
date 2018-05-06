import React from 'react'
import { Easing, Animated } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import OverviewScreen from '../../screens/OverviewScreen/OverviewScreen'
import BudgetScreen from '../../screens/BudgetScreen/BudgetScreen'
// import DetailsScreen from '../../screens/DetailsScreen/DetailsScreen'
import AddPostRouter from './PostScreenNavigation'

const StackNavigator = createStackNavigator(
    {
        Overview: {
            screen: OverviewScreen,
        },
        AddPost: AddPostRouter,
        // BudgetScreen: BudgetScreen,
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
        // navigatorStyle: {
        //     enabledBackGestureFullScreen: true,
        // },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
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

export default StackNavigator