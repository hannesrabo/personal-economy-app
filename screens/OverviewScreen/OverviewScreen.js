import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Color from '../../color'

class OverviewScreen extends Component {
    buttonAddClick = () => {
        console.log("Button Clicked")
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.contentWrapper}>
                    <Text>First Tab Screen</Text>
                    <Text>Click me</Text>
                </View>
                <Button
                    style={styles.button}
                    onPress={() => {
                        console.log('You tapped the button!');

                    }}
                    title="Add Post"
                    // style={styles.button}
                    color={Color.button_highlight}
                />
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