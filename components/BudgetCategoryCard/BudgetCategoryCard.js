import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import NavigationService from '../../routing/NavigationService'

export default class BudgetCategoryCard extends React.Component {
    headerClick = () => {
        console.log("Header clicked")
    }

    showTransactionDetails = () => {
        NavigationService.navigate('TransactionOverview')
    }


    render() {
        return (
            <View>
                <Text
                    style={styles.header}
                    onPress={this.headerClick}
                >
                    BudgetCategoryCard
                </Text>
                <Text>BudgetStuff</Text>
                <Button
                    title="Show Transactions"
                    onPress={this.showTransactionDetails}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: '#ff0000',
    }
})