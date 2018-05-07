import React, { Component } from 'react'
import { Text, ScrollView, View, StyleSheet, Button } from 'react-native'

import BudgetCategoryCard from '../../components/BudgetCategoryCard/BudgetCategoryCard'
import GraphContainer from '../../components/GraphContainer/GraphContainer'
import DistributionBar from '../../components/Graphs/DistributionBar'

import NavigationService from '../../routing/NavigationService'


class BudgetScreen extends Component {

    showTransactionDetails = () => {
        NavigationService.navigate('TransactionOverview')
    }

    render() {
        return (
            <View>
                <DistributionBar />
                <ScrollView>
                    <BudgetCategoryCard>
                        <BudgetCategoryCard subCard={true}>
                            <Text>BudgetStuff</Text>
                            <View style={styles.buttonContainer}>
                                <Button
                                    title="Show Transactions"
                                    onPress={this.showTransactionDetails}
                                />
                            </View>
                        </BudgetCategoryCard>
                    </BudgetCategoryCard>
                </ScrollView>
            </View>
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