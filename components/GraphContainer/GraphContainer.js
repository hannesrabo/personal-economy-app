import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class GraphContainer extends React.Component {

    render() {
        return (
            <View style={styles.graphWrapper}>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    graphWrapper: {
        backgroundColor: 'gray',
        height: 500,
    }
})