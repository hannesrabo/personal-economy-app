import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet, Animated, } from 'react-native'
import NavigationService from '../../routing/NavigationService'

export default class OpenDownButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            active: false,
            rotation: new Animated.Value(0),
        }
    }
    buttonClick = () => {
        console.log("event")
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
        console.log(spin)
        return (
            <TouchableOpacity style={styles.buttonWrapper} onPress={this.buttonClick}>
                <Animated.View styles={{
                    //transform: [{ rotate: spin }]
                }}>

                    <Animated.Image
                        style={[styles.image, {
                            transform: [{ rotate: spin }]
                        }]}
                        source={require('../../res/down-arrow.png')}
                    />
                </Animated.View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonWrapper: {
        // width: 50,
        // height: 50,
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
})