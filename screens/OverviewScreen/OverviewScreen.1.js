import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Animated } from 'react-native'
import Color from '../../color'

import GestureController from '../../components/GestureController/GestureController'
import GraphContainer from '../../components/GraphContainer/GraphContainer'
import { ScrollView } from 'react-native-gesture-handler';

const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60

class OverviewScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }

    buttonAddClick = () => {
        console.log("Button pushed")
        this.props.navigation.push('AddPost')
        // this.props.navigation.push('BudgetScreen')
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
            extrapolate: 'clamp'
        })
        const headerTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });

        const heroTitleOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });
        return (
            <View style={styles.wrapper}>
                {/* <GraphContainer>
                    <Text>This is the graph</Text>
                </GraphContainer> */}
                <Animated.View style={{
                    height: headerHeight, backgroundColor: 'gray', width: '100%', position: 'absolute', top: 0, left: 0, justifyContent: 'center',
                    alignItems: 'center', zIndex: 9999
                }}>
                    <Animated.View style={{ opacity: headerTitleOpacity, position: 'absolute', left: 0, bottom: 0, width: '100%' }}>
                        <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}> tasdf asdflk jasldfk asdlkfd</Text>
                    </Animated.View>
                    <Animated.View style={{ opacity: heroTitleOpacity }}>
                        <Text style={{ fontSize: 30, color: 'white', alignContent: 'center' }}> Alternative</Text>
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
                        <Text style={{ margin: 20 }} >First Tab Screen</Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                    </View>
                </ScrollView>
                <Button
                    style={styles.button}
                    onPress={this.buttonAddClick}
                    title="Add Post"
                    // style={styles.button}
                    color={Color.button_highlight}
                />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 15,
        flex: 1,
        height: '100%',
    },
    contentWrapper: {
        flex: 1,
    },
    button: {
        flex: 0,
    }
})

export default OverviewScreen