import React from 'react'
import { View, Animated, Text } from 'react-native'

import { ContextConsumer } from '../../components/Context/Context'

import { styles } from './LoadingScreenStyle'

export default class LoadingScreen extends React.Component {
    constructor(props) {
        super(props)

        let lastContextValue = 0

        this.state = {
            loadingStage: new Animated.Value(0), // goes from 0 - 1
        }
    }

    render() {
        return (
            <ContextConsumer>
                {context => {
                    if (this.lastContextValue != context.state.loadingStage) {
                        // Make sure this only happens once
                        this.lastContextValue = context.state.loadingStage

                        let animationEndFunction = () => {
                            let stage = context.state.loadingStage
                        }

                        // Create an animation event.
                        Animated.spring(
                            this.state.loadingStage,
                            {
                                toValue: context.state.loadingStage,
                            }
                        ).start(((context) => {
                            // Saving the context
                            let savedContext = context
                            return () => {
                                // If done, we set the global state to done.
                                if (savedContext.state.loadingStage == 1) {
                                    savedContext.updateLoadingDone(true)
                                }
                            }
                        })(context))
                    }

                    barAnimation = {
                        transform: [{
                            rotate: this.state.loadingStage.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '180deg'],
                            })
                        }]
                    }

                    return (
                        <View style={styles.wrapper}>
                            <Animated.View style={[styles.animatedBar, barAnimation]} />
                        </View>
                    )
                }}
            </ContextConsumer>
        )
    }
}