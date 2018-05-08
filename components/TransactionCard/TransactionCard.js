import React from 'react'
import { Text, View } from 'react-native'

export default class TransactionCard extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: 'lightgray', padding: 8, marginBottom: 8, borderWidth: 1, borderColor: 'darkgray' }}>
                <Text>This is a transaction.</Text>
                <Text>This is a transaction.</Text>
                <Text>This is a transaction.</Text>
                <Text style={{ position: 'absolute', top: 10, right: 10, color: 'red' }}>- $ 100</Text>
            </View>
        )
    }
}
