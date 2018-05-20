import React, { Component } from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { ContextConsumer } from '../../components/Context/Context'

import TrackingBar from '../../components/TrackingBar/TrackingBar'
import TrackingBarInfo from '../../components/TrackingBar/TrackingBarInfo'
import OvalButton from '../../components/Button/OvalButton/OvalButton'
import OvalBarButton from '../../components/Button/OvalBarButton/OvalBarButton'
import NavigationService from '../../routing/NavigationService'

import { styles } from './EditCategoryScreenStyle'
import { Color } from '../../config/Color'

export default class EditCategoryScreen extends Component {
    constructor(props) {
        super(props)

        const { params } = this.props.navigation.state

        let context = null

        this.state = {
            id: 'id1' //params.id,
        }
    }

    categoryTitleChange = (newValue) => {
        let data = this.context.state.budgetPosts[this.state.id]
        data.title = newValue

        this.context.updateBudgetPost(this.state.id, data)
    }

    budgetAutoModeChange = (index) => {
        let data = this.context.state.budgetPosts[this.state.id]
        data.automatic = (index == 0)
        this.context.updateBudgetPost(this.state.id, data)
    }

    categoryEstimateChange = (newValue) => {
        let data = this.context.state.budgetPosts[this.state.id]
        data.estimate = newValue
        data.percentage = data.value / data.estimate

        if (data.percentage < 0) data.percentage = 0
        else if (data.percentage > 1) data.percentage = 1

        this.context.updateBudgetPost(this.state.id, data)
    }

    graphTimeSpanChanged = (index) => {

    }

    render() {
        return (
            <ScrollView>
                <ContextConsumer>
                    {context => {
                        let data = context.state.budgetPosts[this.state.id]
                        this.context = context

                        let textDisabledStyle = (data.automatic) ? { color: '#999' } : {}

                        return (
                            <View style={styles.wrapper}>
                                <View style={styles.headerSection}>
                                    <TextInput style={styles.categoryTitle} value={data.title} onChangeText={this.categoryTitleChange} />
                                    <View style={styles.summaryCard} elevation={2}>
                                        <View style={styles.summaryCardHeaderContainer}>
                                            <Text style={styles.summaryCardHeader}>Transactions Overview</Text>
                                        </View>
                                        <TrackingBar
                                            value={data.percentage}
                                            barBackground={Color.background_medium}
                                            barColor={Color.highlight_3}
                                            barHeight={10}
                                        />
                                        <TrackingBarInfo id={this.state.id}>
                                            <View style={styles.barInfoContainer}>
                                                <Text style={[styles.barText, textDisabledStyle]}> $ {data.value} </Text>
                                                <Text style={[styles.barText, textDisabledStyle]}> / </Text>
                                                <TextInput style={[styles.barTextInput, textDisabledStyle]} onChangeText={this.categoryEstimateChange} value={`${data.estimate}`} keyboardType='numeric' editable={!data.automatic} />
                                            </View>
                                        </TrackingBarInfo>
                                        <View style={styles.buttonContainer}>
                                            <OvalBarButton values={["Automatic Budget", "Manual Budget"]} onPress={this.budgetAutoModeChange} />
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <OvalButton value="Show All Transactions" onPress={() => { NavigationService.navigate('TransactionOverview', { id: this.state.id }) }} />
                                        </View>
                                    </View>
                                </View>

                                <Text style={styles.title}>Trends</Text>
                                <View style={styles.graphContainer} elevation={2}>
                                    <View style={styles.graphControllerContainer}>
                                        <View style={styles.graphControllerButtonContainer}>
                                            <OvalBarButton values={["Year", "Month", "Day"]} onPress={this.graphTimeSpanChanged} />
                                        </View>
                                    </View>
                                    <View style={styles.graphTrend} >

                                    </View>
                                    <View style={styles.graphDivision} >

                                    </View>
                                </View>
                                <Text style={styles.title}>Upcoming Transactions</Text>
                                <View style={styles.upcomingTransactions}>
                                    <View style={styles.upcomingTransactionsContainer}>
                                        <View style={styles.upcomingTransactionsCard} />
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                </ContextConsumer>
            </ScrollView>
        )
    }
}

