import React, { Component } from 'react'
import { Text, ScrollView, View, StyleSheet, Button } from 'react-native'

import ExpandableCard from '../../components/ExpandableCard/ExpandableCard'
import GraphContainer from '../../components/GraphContainer/GraphContainer'
import DistributionBar from '../../components/Graphs/DistributionBar'
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'

import NavigationService from '../../routing/NavigationService'


class BudgetScreen extends Component {

    showTransactionDetails = () => {
        NavigationService.navigate('TransactionOverview')
    }

    render() {
        return (
            <ExpandableHeader
                smallHeaderContent={(<DistributionBar />)}
                largeHeaderContent={<Text>hej</Text>}
            >

                <ExpandableCard onTitlePress={() => { console.log("event") }}>
                    <ExpandableCard subCard={true}>
                        <View style={{ margin: 5, marginBottom: 10 }}>
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
            </ExpandableHeader>
        )
    }
}

export default BudgetScreen


const styles = StyleSheet.create({
    buttonContainer: {
        width: '50%',
        alignSelf: 'flex-end',
    }
})