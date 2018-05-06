import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Color from '../../color'

import GestureController from '../../components/GestureController/GestureController'

class OverviewScreen extends Component {
    buttonAddClick = () => {
        console.log("Button pushed")
        this.props.navigation.push('AddPost')
        // this.props.navigation.push('BudgetScreen')
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <GestureController
                    swipeUpPath='AddPost'
                >
                    <View style={styles.contentWrapper}>
                        <Text>First Tab Screen</Text>
                        <Text>Click me</Text>
                    </View>
                    <Button
                        style={styles.button}
                        onPress={this.buttonAddClick}
                        title="Add Post"
                        // style={styles.button}
                        color={Color.button_highlight}
                    />
                </GestureController>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        paddingBottom: 15,
        flex: 1,
        height: '100%',
    },
    contentWrapper: {
        flex: 1,
    },
    button: {
        flex: 0,
    }
})

export default OverviewScreen