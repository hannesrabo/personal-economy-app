import React, { Component } from 'react'
import { Text, ScrollView, View, StyleSheet, Button } from 'react-native'

import ExpandableCardBudget from '../../components/Expandable/ExpandableCard/ExpandableCardBudget'
import DistributionBar from '../../components/Graphs/DistributionBar'
import ExpandableHeader from '../../components/Expandable/ExpandableHeader/ExpandableHeader'
import TransactionCard from '../../components/TransactionCard/TransactionCard'
import { LargeHeader } from '../../components/Text/Header/Header'

import { ContextConsumer } from '../../components/Context/Context'
import NavigationService from '../../routing/NavigationService'

import { styles } from './BudgetScrenStyle'

export default class BudgetScreen extends Component {

    constructor(props) {
        super(props)
    }

    showTransactionDetails = () => {
        NavigationService.navigate('TransactionOverview', { title: 'Transaction Details' })
    }

    //     <ExpandableCard subCard={true}>
    //     <View style={{ margin: 5, marginBottom: 10 }}>
    //         <TransactionCard />
    //         <TransactionCard />
    //         <TransactionCard />
    //         <Text>BudgetStuff</Text>
    //         <View style={styles.buttonContainer}>
    //             <Button
    //                 title="Show Transactions"
    //                 onPress={this.showTransactionDetails}
    //             />
    //         </View>
    //     </View>
    // </ExpandableCard>


    render() {
        const cardData = [
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' },
            { id: '5' },
        ]

        return (
            <View style={styles.wrapper}>
                <ExpandableHeader
                    renderCollapsedHeader={animationRange => { return (<DistributionBar animationRange={animationRange} />) }}
                    renderExpandedHeader={animationRange => { return (<View style={styles.largeHeaderWrapper}><LargeHeader>Overview</LargeHeader></View>) }}
                >
                    <ContextConsumer>
                        {context => (
                            <View style={styles.contentWrapper}>
                                <LargeHeader style={styles.contentHeader}>Budget Categories</LargeHeader>

                                {/* Rendering all the categories that are defined in the global context */}
                                {context.state.budgetPosts.map((data) => { return (<ExpandableCardBudget key={`${data.id}`} data={data} />) })}
                                <View style={{ margin: 20 }} />
                            </View>
                        )}
                    </ContextConsumer>
                </ExpandableHeader>
            </View>
        )
    }
}

