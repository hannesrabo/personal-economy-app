import React from 'react'
import { Text, TouchableOpacity, } from 'react-native'

import { styles } from './OvalButtonStyle'

export default class OvalButton extends React.Component {
    buttonClick = () => {
        if (this.props.onPress)
            this.props.onPress()
    }


    render() {
        return (
            <TouchableOpacity style={[styles.buttonWrapper, this.props.style]} onPress={this.buttonClick}>
                <Text style={styles.text}>{this.props.value}</Text>
            </TouchableOpacity>
        )
    }
}
