import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet, } from 'react-native'


const styles = StyleSheet.create({
    buttonWrapper: {
        // width: 50,
        // height: 50, 
        borderRadius: 35,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
})

export default class RoundButton extends React.Component {
    buttonClick = () => {
        if (this.props.onPress)
            this.props.onPress()
    }


    render() {
        return (
            <TouchableOpacity style={styles.buttonWrapper} onPress={this.buttonClick}>
                <Image
                    style={styles.image}
                    source={require('../../res/down-arrow.png')}
                />
            </TouchableOpacity>
        )
    }
}
