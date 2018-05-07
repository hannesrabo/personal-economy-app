import React from 'react'
import { View, StyleSheet } from 'react-native'

import BudgetCategoryCard from './BudgetCategoryCard'

export default class BudgetCategorySubCard extends BudgetCategoryCard {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.cardWrapper}>
                {super.render()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardWrapper: {
        borderWidth: 1,
        borderColor: 'black',
    },
})