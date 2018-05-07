import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'

// import Color from '../../color'

// Routes
import BudgetScreen from '../screens/BudgetScreen/BudgetScreen'
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen'
import OverviewScreen from '../screens/OverviewScreen/OverviewScreen'

const StartScreenRouter = createMaterialTopTabNavigator(
    {
        // Commented out to change start view
        // Category: {
        //     screen: CategoryScreen,
        // },
        // Overview: {
        //     screen: OverviewScreen,
        // },
        Budget: {
            screen: BudgetScreen,
        },
    }
    ,
    {
        swipeEnabled: true,
        initialRouteName: 'Budget',
        // tabBarOptions: {
        //     style: {
        //         backgroundColor: Color.highlight,
        //     },
        //     indicatorStyle: {
        //         backgroundColor: Color.highlight_light,
        //     }
        // },
        // Don't show the tab bar.
        tabBarComponent: () => { return (<View></View>) },
    }
)

export default StartScreenRouter