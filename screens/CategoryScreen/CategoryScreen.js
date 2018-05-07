import React, { Component } from 'react'
import { Text, View } from 'react-native'

import CategoryOverviewCard from '../../components/CategoryOverviewCard/CategoryOverviewCard'
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'

class CategoryDetails extends Component {
    render() {
        let smallHeader = (<Text style={{ color: 'white' }}>small</Text>)
        let largeHader = (<Text style={{ color: 'white' }}>large</Text>)

        return (
            <ExpandableHeader
                smallHeaderContent={smallHeader}
                largeHeaderContent={largeHader}
            >
                <Text>Details Screen</Text>
                <CategoryOverviewCard />
            </ExpandableHeader>
        )
    }
}

export default CategoryDetails