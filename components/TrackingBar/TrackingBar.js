import React from 'react'
import { View, Animated } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './TrackingBarStyle'

export default class TrackingBar extends React.Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            value: new Animated.Value(this.props.value),
        }
    }

    setValue = (newValue) => {
        // Max 1
        this.setState({
            value: ((newValue > 1) ? 1 : newValue),
        })
    }

    componentWillReceiveProps = (nextProps) => {
        if (this.props.value != nextProps.value) {
            this.state.value.setValue(nextProps.value)
        }
    }

    render() {
        let dimensions = {
            width: this.state.value.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%']
            }),
            height: this.props.barHeight,
        }

        let barBackground = {
            backgroundColor: (this.props.barBackground ? this.props.barBackground : 'gray')
        }

        let barColor = {
            backgroundColor: (this.props.barColor ? this.props.barColor : 'lightgray')
        }

        return (
            <View style={[styles.wrapper, barBackground]}>
                <Animated.View style={[styles.bar, dimensions, barColor]} />
            </View>
        )
    }
}