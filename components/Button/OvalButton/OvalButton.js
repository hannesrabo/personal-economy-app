import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { styles } from './OvalButtonStyle'

export default class OvalButton extends React.Component {
    buttonClick = () => {
        if (this.props.onPress)
            this.props.onPress()
    }


    render() {
        return (
            <View elevation={2}>
                <TouchableOpacity style={[styles.buttonWrapper, this.props.style]} onPress={this.buttonClick}>
                    <Text style={styles.text}>{this.props.value}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
