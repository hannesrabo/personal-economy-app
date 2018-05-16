import React from 'react';
import { StyleSheet, Animated, View } from 'react-native'
import PropType from 'prop-types'

import { styles, COLLAPSED_HEIGHT } from './AnimatedHeaderStyle'

export class AnimatedHeaderCollapsed extends React.Component {
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
            <Animated.View style={[styles.container, transform, styles.containerCollapsed]}>
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
                        outputRange: [0, -COLLAPSED_HEIGHT],
                    }),
                },
            ],
        };

        const opacityExpanded = {
            opacity: this.props.animationRange.interpolate({
                inputRange: [0, 0.6, 1],
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
            <View style={styles.containerPlaceholderHeader} />
        )
    }
}