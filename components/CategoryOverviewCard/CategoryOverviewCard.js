import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        color: '#ff0000',
    }
})

export default class CategegoryOverviewCard extends React.Component {
    headerClick = () => {
        console.log("Header clicked")
    }

    showTransactionDetails = () => {
        console.log("Showing details")
    }

    render() {
        return (
            <View>
                <Text
                    style={styles.header}
                    onPress={this.headerClick}
                >
                    Category overview card
                </Text>
                <Text>Category styff</Text>
                <Button
                    title="Show Transactions"
                    onPress={this.showTransactionDetails}
                />


            </View>
        )
    }
}