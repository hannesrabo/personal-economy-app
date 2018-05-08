import React from 'react'
import { Text, View, StyleSheet, Animated, ScrollView } from 'react-native'

const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
    }
})

export default class GraphContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
            extrapolate: 'clamp'
        })

        return (
            <View style={styles.container}>
                <Animated.View style={{ height: headerHeight }} />
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    onScroll={Animated.event(
                        [{
                            nativeEvent: {
                                contentOffset: {
                                    y: this.state.scrollY
                                }
                            }
                        }])}
                    scrollEventThrottle={16}>
                    <Text>This is some text</Text>
                </ScrollView>
            </View>
        )
    }
}