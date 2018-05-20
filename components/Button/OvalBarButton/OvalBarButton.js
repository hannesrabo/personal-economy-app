import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './OvalBarButtonStyle'
import { Color } from '../../../config/Color';

export default class OvalBarButton extends React.Component {
    static propTypes = {
        values: PropTypes.arrayOf(PropTypes.string).isRequired
    }

    constructor(props) {
        super(props)

        this.state = {
            activeIndex: 0
        }
    }

    buttonClick = (index) => {
        if (this.props.onPress)
            this.props.onPress(index)

        this.setState({
            activeIndex: index,
        })
    }

    render() {
        let borderStyle = {
            borderRightWidth: 1,
            borderColor: '#ffffff99',
        }

        let activeElementStyle = {
            backgroundColor: Color.highlight_3_dark,
        }

        return (
            <View style={[styles.buttonWrapper, this.props.style]} elevation={2}>
                {this.props.values.map((value, index) => {
                    let opacityBorderStyle = (index != (this.props.values.length - 1)) ? borderStyle : {}
                    let pressedStyle = (index == (this.state.activeIndex)) ? activeElementStyle : {}

                    return (
                        <TouchableOpacity key={value} style={[styles.pressableArea, opacityBorderStyle, pressedStyle]} onPress={() => { this.buttonClick(index) }}>
                            <Text style={[styles.text]}>{value}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
}
