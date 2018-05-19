import React from 'react'
import { View, Text, TextInput, Animated } from 'react-native'
import PropTypes from 'prop-types'

import ExpandableCard from './ExpandableCard'
import NavigationService from '../../../routing/NavigationService'
import TrackingBar from '../../TrackingBar/TrackingBar'
import OvalButton from '../../Button/OvalButton/OvalButton'

import { styles } from './ExpandableCardBudgetStyle'
import { Color } from '../../../config/Color';
import { ContextConsumer } from '../../Context/Context';


export default class ExpandableCardBudget extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        let budgetPost = null

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

    renderBarInfo = (data) => {
        let left = data.percentage * 100 + '%'
        return (
            <View>
                <View style={styles.triangleContainer}>
                    <View style={[styles.triangle, { left: (left) }]} />
                </View>
                <View style={styles.barInfoWrapper}>
                    <Text style={styles.barText}> {data.value} / {data.estimate}</Text>
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
                    $ {this.budgetPost.estimate}
                </Text>
            </View>
        )
    }

    renderBar = () => {
        let paddingStyle = {
            padding: this.state.barAnimation.interpolate({
                inputRange: [0, 0.01, 1],
                outputRange: [0, 0, 15]
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
                    value={this.budgetPost.percentage}
                    barBackground={Color.background_medium}
                    barColor={Color.highlight_3}
                    barHeight={barHeight}
                />
            </Animated.View>
        )
    }

    renderNavigation = () => {
        return (
            <View style={styles.navigationContainer}>
                <OvalButton
                    value="Show Transactions"
                    style={{ marginRight: 15, flex: 2 }}
                    onPress={() => { NavigationService.navigate('TransactionOverview', { id: this.props.id }) }}
                />
                <OvalButton
                    value="Edit"
                    onPress={() => { NavigationService.navigate('EditCategoryScreen', { id: this.props.id }) }}
                />
            </View>
        )
    }

    renderUpcomingTransactions = () => {
        return (
            <View style={styles.upcomingTransactionsContainer}>
                <Text style={styles.upcomingTransactionText}>Next Upcoming: </Text>
                <View style={styles.upcomingTransactionsCard} />
            </View>
        )
    }

    renderSeparator = () => {
        return (
            <View style={{ flex: 1, borderTopWidth: 2, borderColor: 'lightgray', marginLeft: 5, marginRight: 5 }}></View>
        )
    }

    render() {
        return (
            <ContextConsumer>
                {context => {
                    let budgetPost = context.state.budgetPosts[this.props.id]
                    this.budgetPost = budgetPost

                    return (
                        <ExpandableCard
                            title={budgetPost.title}
                            renderHeader={this.renderHeader}
                            renderBar={this.renderBar}
                            onPress={this.cardPressed}
                        >
                            {this.renderBarInfo(budgetPost)}
                            {this.renderNavigation()}
                            {(this.props.children) ? this.renderSeparator() : this.renderUpcomingTransactions()}
                            {this.props.children}
                        </ExpandableCard>
                    )
                }}
            </ContextConsumer>
        )
    }
} 