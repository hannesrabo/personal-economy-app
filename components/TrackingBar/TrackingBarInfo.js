import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './TrackingBarStyle'
import { ContextConsumer } from '../Context/Context'

export default class TrackingBarInfo extends React.Component {
    static propTypes = {
        barValue: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let colorThemeBox = {}
        let colorThemeTriangle = {}
        if (this.props.color) {
            colorThemeBox.backgroundColor = this.props.color
            colorThemeTriangle.borderBottomColor = this.props.color
        }

        return (
            <ContextConsumer>
                {context => {
                    let left = this.props.barValue * 100 + '%'

                    return (
                        <View>
                            <View style={styles.triangleContainer}>
                                <View style={[styles.triangle, { left: (left) }, colorThemeTriangle]} />
                            </View>
                            <View style={[styles.barInfoWrapper, colorThemeBox]}>
                                {this.props.children}
                            </View>
                        </View>
                    )
                }}
            </ContextConsumer>
        )
    }
}