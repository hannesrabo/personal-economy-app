import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation'

import AddBudgetPost from '../screens/AddPostScreens/AddBudgetPost'
import AddReceipt from '../screens/AddPostScreens/AddReceipt'

import Color from '../color'

const AddPostRouter = createMaterialTopTabNavigator(
    {
        Receipt: {
            screen: AddReceipt,
        },
        Budget: {
            screen: AddBudgetPost,
        }
    },
    {
        swipeEnabled: true,
        initialRouteName: 'Receipt',
        tabBarOptions: {
            style: {
                backgroundColor: 'darkgray',
            },
            indicatorStyle: {
                backgroundColor: 'lightgray',
            }
        },
    }
)

export default AddPostRouter 