import React from 'react';
import { StyleSheet, Animated, View } from 'react-native'
import PropType from 'prop-types'

export const EXPANDED_HEIGHT = 300
export const COLLAPSED_HEIGHT = 50

const _TRANSFORM_UP = COLLAPSED_HEIGHT // 0// EXPANDED_HEIGHT / 2 - 

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 0,
        height: EXPANDED_HEIGHT,
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerCollapsed: {
        position: 'absolute',
        flex: 0,
        height: COLLAPSED_HEIGHT,
        width: '100%',
        backgroundColor: 'black',
    },
    headerExpanded: {
        position: 'absolute',
        flex: 0,
        height: EXPANDED_HEIGHT,
        width: '100%',
        backgroundColor: 'black',
    },
})


export class AnimatedHeaderCollapsed extends React.Component {
    // const 

    render() {
        const transform = {
            transform: [
                {
                    translateY: this.props.animationRange.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-COLLAPSED_HEIGHT / 2, 0],
                    }),
                },
            ],
        };

        const opacityCollapsed = {
            opacity: this.props.animationRange.interpolate({
                inputRange: [0, 0.4, 1, 2],
                outputRange: [0, 0, 1, 1],
            }),
        }

        return (
            <Animated.View style={[styles.container, transform, { zIndex: 6, height: COLLAPSED_HEIGHT }]}>
                <Animated.View style={[styles.headerCollapsed, opacityCollapsed]}>
                    {this.props.children}
                </Animated.View>
            </Animated.View>
        )
    }
}

export class AnimatedHeaderExpanded extends React.Component {
    render() {
        const transform = {
            transform: [
                {
                    translateY: this.props.animationRange.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -_TRANSFORM_UP],
                    }),
                },
            ],
        };

        const opacityExpanded = {
            opacity: this.props.animationRange.interpolate({
                inputRange: [0, 0.4, 1],
                outputRange: [1, 0, 0],
            }),
        }

        return (
            <Animated.View style={[styles.container, transform]}>
                <Animated.View style={[styles.headerExpanded, opacityExpanded]}>
                    {this.props.children}
                </Animated.View>
            </Animated.View>
        )
    }
}

export class PlaceholderHeader extends React.Component {
    render() {
        const i = 1;
        return (
            <View style={{ flex: 0, height: EXPANDED_HEIGHT, width: '100%' }} />
        )
    }
}