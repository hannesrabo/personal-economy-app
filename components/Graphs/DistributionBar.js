import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    barWrapper: {
        backgroundColor: 'darkgray',
        height: 60,
    }
})

export default class DistributionBar extends React.Component {

    render() {
        return (
            <View style={styles.barWrapper}>

            </View>
        )
    }
}