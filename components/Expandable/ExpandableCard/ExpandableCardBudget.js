import React from 'react'
import { View, Text, TextInput, Animated } from 'react-native'

import ExpandableCard from './ExpandableCard'
import NavigationService from '../../../routing/NavigationService'
import TrackingBar from '../../TrackingBar/TrackingBar'

import { styles } from './ExpandableCardBudgetStyle'
import { Color } from '../../../config/Color';


export default class ExpandableCardBudget extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            barRef: null,
            barAnimation: new Animated.Value(0),
        }
    }

    cardPressed = (expanded) => {
        if (expanded) {
            this.state.barAnimation.setValue(1)
            Animated.timing(this.state.barAnimation, {
                toValue: 0,
                duration: 250,
            }).start()
        } else {
            this.state.barAnimation.setValue(0)
            Animated.timing(this.state.barAnimation, {
                toValue: 1,
                duration: 250,
            }).start()
        }
    }

    renderBarInfo = () => {
        let left = this.props.data.percentage * 100 + '%'
        return (
            <View>
                <View style={styles.triangleContainer}>
                    <View style={[styles.triangle, { left: (left) }]} />
                </View>
                <View style={styles.barInfoWrapper}>
                    <Text style={styles.barText}> {this.props.data.value} / {this.props.data.estimate}</Text>
                </View>
            </View>
        )
    }

    renderHeader = () => {
        return (
            <View style={styles.headerZoneBudget}>
                <Text
                    style={[styles.text, { color: 'limegreen', padding: 8 }]}
                >
                    $ {this.props.data.estimate}
                </Text>
            </View>
        )
    }

    renderBar = () => {
        let paddingStyle = {
            padding: this.state.barAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 15]
            }),
            paddingBottom: 0,
        }

        let barHeight = this.state.barAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [5, 10],
        })

        return (
            <Animated.View style={[{ flex: 1, justifyContent: 'center' }, paddingStyle]}>
                <TrackingBar
                    value={this.props.data.percentage}
                    barBackground={Color.background_medium}
                    barColor={Color.highlight_3}
                    barHeight={barHeight}
                />
            </Animated.View>
        )
    }

    // NavigationService.navigate('EditCategoryScreen', { id: this.props.data.id }) }

    render() {
        return (
            <ExpandableCard
                title={this.props.data.title}
                renderHeader={this.renderHeader}
                renderBar={this.renderBar}
                onPress={this.cardPressed}
            >
                {this.renderBarInfo()}
                {this.props.children}
            </ExpandableCard>
        )
    }
} 