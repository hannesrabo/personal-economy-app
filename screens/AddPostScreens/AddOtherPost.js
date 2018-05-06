import React from 'react'
import { Text, View } from 'react-native'
import GestureController from '../../components/GestureController/GestureController'

export default class AddOtherPost extends React.Component {
    render() {
        return (
            <GestureController swipeDownPath="Overview">
                <Text> Adding something else</Text>
            </GestureController>
        )
    }
}