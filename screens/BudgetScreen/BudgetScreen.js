import React, { Component } from 'react'
import { Text, View } from 'react-native'

import BudgetCategoryCard from '../../components/BudgetCategoryCard/BudgetCategoryCard'

class BudgetScreen extends Component {
    render() {
        return (
            <View>
                <Text>First Tab Screen</Text>
                <BudgetCategoryCard />
            </View>
        )
    }
}

export default BudgetScreen