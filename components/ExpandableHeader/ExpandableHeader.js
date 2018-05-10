import React from 'react'
import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native'
import { AnimatedHeaderCollapsed, PlaceholderHeader, AnimatedHeaderExpanded } from './AnimatedHeader'
import PropTypes from 'prop-types'

export const scrollRangeForAnimation = 250;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: 'black',
    },
    scrollView: {
        flex: 1,
        zIndex: 5
    }
})

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
                    <View style={{ zIndex: 5, }}>
                        {this.props.children}
                    </View>
                </Animated.ScrollView>
                <AnimatedHeaderCollapsed
                    animationRange={animationRange} style={{ backgroundColor: 'black', }}
                >
                    {this.props.renderCollapsedHeader(animationRange)}
                </AnimatedHeaderCollapsed>
                <AnimatedHeaderExpanded
                    animationRange={animationRange} style={{ backgroundColor: 'black', }}
                >
                    {this.props.renderExpandedHeader(animationRange)}
                </AnimatedHeaderExpanded>
            </View>
        )
    }
}