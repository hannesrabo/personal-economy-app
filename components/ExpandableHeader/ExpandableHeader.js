import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Animated } from 'react-native'
import PropType from 'prop-types'

import { ScrollView } from 'react-native-gesture-handler';

const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60

export default class ExpandableHeader extends Component {
    static propTypes = {
        largeHeaderContent: PropType.any.isRequired,
        smallHeaderContent: PropType.any.isRequired,
    }

    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }

    render() {

        // Calculation of visibility props
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
            extrapolate: 'clamp'
        })
        const headerTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        })
        const heroTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })

        // Rendering stuff
        return (
            <View style={styles.wrapper}>
                <Animated.View style={{
                    height: headerHeight, backgroundColor: 'black', width: '100%', position: 'absolute', top: 0, left: 0, justifyContent: 'center',
                    alignItems: 'center', zIndex: 9999
                }}>
                    <Animated.View style={{ opacity: headerTitleOpacity, width: '100%' }}>
                        {this.props.smallHeaderContent}
                    </Animated.View>
                    <Animated.View style={{ opacity: heroTitleOpacity }}>
                        {this.props.largeHeaderContent}
                    </Animated.View>

                </Animated.View>
                <ScrollView
                    contentContainerStyle={{ padding: 16, paddingTop: HEADER_EXPANDED_HEIGHT, overflow: 'hidden' }}
                    onScroll={Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    y: this.state.scrollY
                                }
                            }
                        }])}
                    scrollEventThrottle={16}>

                    <View style={styles.contentWrapper}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: '100%',
    },
    contentWrapper: {
        flex: 1,
    }
})