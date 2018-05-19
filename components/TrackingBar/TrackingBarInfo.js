import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './TrackingBarStyle'
import { ContextConsumer } from '../Context/Context'

export default class TrackingBarInfo extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <ContextConsumer>
                {context => {
                    let data = context.state.budgetPosts[this.props.id]
                    let left = data.percentage * 100 + '%'

                    return (
                        <View>
                            <View style={styles.triangleContainer}>
                                <View style={[styles.triangle, { left: (left) }]} />
                            </View>
                            <View style={[styles.barInfoWrapper]}>
                                {this.props.children}
                            </View>
                        </View>
                    )
                }}
            </ContextConsumer>
        )
    }
}