import React, { Component } from 'react'
import { Text, View } from 'react-native'

import CategoryOverviewCard from '../../components/CategoryOverviewCard/CategoryOverviewCard'

class CategoryDetails extends Component {
    render() {
        return (
            <View>
                <Text>Details Screen</Text>
                <CategoryOverviewCard />
            </View>
        )
    }
}

export default CategoryDetails