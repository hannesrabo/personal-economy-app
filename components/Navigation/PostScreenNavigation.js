import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'

import AddBudgetPost from '../../screens/AddPostScreens/AddBudgetPost'
import AddOtherPost from '../../screens/AddPostScreens/AddOtherPost'
import AddReceipt from '../../screens/AddPostScreens/AddReceipt'

import Color from '../../color'

const AddPostRouter = createMaterialTopTabNavigator(
    {
        Other: {
            screen: AddOtherPost,
        },
        Receipt: {
            screen: AddReceipt,
        },
        Budget: {
            screen: AddOtherPost,
        }
    }
    ,
    {
        swipeEnabled: true,
        initialRouteName: 'Receipt',
        tabBarOptions: {
            style: {
                backgroundColor: Color.highlight,
            },
            indicatorStyle: {
                backgroundColor: Color.highlight_light,
            }
        },
        // Don't show the tab bar.
        // tabBarComponent: () => { return (<View></View>) },
    }
)

export default AddPostRouter