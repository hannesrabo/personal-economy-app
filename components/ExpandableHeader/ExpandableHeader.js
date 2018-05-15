import React from 'react'
import { StyleSheet, Text, View, ScrollView, Animated, Dimensions } from 'react-native'
import { AnimatedHeaderCollapsed, PlaceholderHeader, AnimatedHeaderExpanded } from './AnimatedHeader'
import PropTypes from 'prop-types'

import { styles } from './ExpandableHeaderStyle'

export const scrollRangeForAnimation = 250;

export default class ExpandableHeader extends React.Component {
    static propTypes = {
        renderExpandedHeader: PropTypes.func.isRequired,
        renderCollapsedHeader: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            _scrollView: null,
            scrollY: new Animated.Value(0)
        }
    }

    onScrollEndSnapToEdge = event => {
        const y = event.nativeEvent.contentOffset.y;
        if (0 < y && y < scrollRangeForAnimation / 2) {
            if (this.state._scrollView) {
                this.state._scrollView.scrollTo({ y: 0 });
            }
        } else if (scrollRangeForAnimation / 2 <= y && y < scrollRangeForAnimation) {
            if (this.state._scrollView) {
                this.state._scrollView.scrollTo({ y: scrollRangeForAnimation });
            }
        }
    };

    render() {
        const animationRange = this.state.scrollY.interpolate({
            inputRange: [0, scrollRangeForAnimation],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        })
        const deviceHeight = Dimensions.get('window').height

        return (
            <View style={styles.container} >
                <Animated.ScrollView
                    style={styles.scrollView}
                    ref={scrollView => {
                        this.state._scrollView = scrollView ? scrollView._component : null;
                    }}
                    onScrollEndDrag={this.onScrollEndSnapToEdge}
                    onMomentumScrollEnd={this.onScrollEndSnapToEdge}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: { contentOffset: { y: this.state.scrollY } },
                            },
                        ],
                        {
                            useNativeDriver: true,
                        }
                    )}
                >
                    <PlaceholderHeader />
                    <View style={[styles.childContainer, { minHeight: deviceHeight }]}>
                        {this.props.children}
                    </View>
                </Animated.ScrollView>
                <AnimatedHeaderCollapsed
                    animationRange={animationRange}
                >
                    {this.props.renderCollapsedHeader(animationRange)}
                </AnimatedHeaderCollapsed>
                <AnimatedHeaderExpanded
                    animationRange={animationRange}
                >
                    {this.props.renderExpandedHeader(animationRange)}
                </AnimatedHeaderExpanded>
            </View>
        )
    }
}