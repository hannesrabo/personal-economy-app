import React, { Component } from 'react'
import { Text, ScrollView, View, StyleSheet, Button } from 'react-native'

import ExpandableCard from '../../components/ExpandableCard/ExpandableCard'
import GraphContainer from '../../components/GraphContainer/GraphContainer'
import DistributionBar from '../../components/Graphs/DistributionBar'
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'
import TransactionCard from '../../components/TransactionCard/TransactionCard'

import NavigationService from '../../routing/NavigationService'

const styles = StyleSheet.create({
    buttonContainer: {
        width: '50%',
        alignSelf: 'flex-end',
    }
})

export default class BudgetScreen extends Component {

    showTransactionDetails = () => {
        NavigationService.navigate('TransactionOverview', { title: 'Transaction Details' })
    }

    render() {
        return (
            <View style={{ height: '100%', borderLeftWidth: 8, borderColor: 'purple' }}>
                <ExpandableHeader
                    renderCollapsedHeader={animationRange => { return (<DistributionBar animationRange={animationRange} />) }}
                    renderExpandedHeader={animationRange => { return (<Text>hej</Text>) }}
                >
                    <View style={{ backgroundColor: 'lightgray', }}>
                        <ExpandableCard onTitlePress={() => { console.log("event") }}>
                            <ExpandableCard subCard={true}>
                                <View style={{ margin: 5, marginBottom: 10 }}>
                                    <TransactionCard />
                                    <TransactionCard />
                                    <TransactionCard />
                                    <Text>BudgetStuff</Text>
                                    <View style={styles.buttonContainer}>
                                        <Button
                                            title="Show Transactions"
                                            onPress={this.showTransactionDetails}
                                        />
                                    </View>
                                </View>
                            </ExpandableCard>
                        </ExpandableCard>
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                        <ExpandableCard />
                        <View style={{ margin: 20 }} />
                    </View>
                </ExpandableHeader>
            </View>
        )
    }
}
