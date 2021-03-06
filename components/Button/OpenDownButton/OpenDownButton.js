import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet, Animated, } from 'react-native'

export default class OpenDownButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            rotation: new Animated.Value(0),
        }
    }

    buttonClick = () => {
        if (this.props.onPress)
            this.props.onPress()

        if (this.state.active) {
            this.state.rotation.setValue(180)
            Animated.spring(this.state.rotation, { toValue: 0 }, { duration: 200 }).start();
        } else {
            this.state.rotation.setValue(0)
            Animated.spring(this.state.rotation, { toValue: 180 }, { duration: 200 }).start();
        }

        this.setState({
            active: !this.state.active,
        })
    }


    render() {
        const spin = this.state.rotation.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '-180deg']
        })
        return (
            <TouchableOpacity style={styles.buttonWrapper} onPress={this.buttonClick}>
                <Animated.Image
                    style={[styles.image, {
                        transform: [{ rotate: spin }]
                    }]}
                    source={require('../down-arrow.png')}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
        width: 25,
        height: 25,
        marginTop: 1,
        marginLeft: 5,
    },
    image: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
})