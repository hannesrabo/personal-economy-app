import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet, } from 'react-native'

import { styles } from './RoundButtonStyle'

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
                    source={require('../down-arrow.png')}
                />
            </TouchableOpacity>
        )
    }
}
