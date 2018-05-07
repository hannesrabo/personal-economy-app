import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DistributionBar extends React.Component {

    render() {
        return (
            <View style={styles.barWrapper}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    barWrapper: {
        backgroundColor: 'white',
        height: 75,
    }
})