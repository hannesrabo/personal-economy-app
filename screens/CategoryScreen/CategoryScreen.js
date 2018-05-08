import React, { Component } from 'react'
import { Text, View } from 'react-native'

import CategoryOverviewCard from '../../components/CategoryOverviewCard/CategoryOverviewCard'
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'

class CategoryDetails extends Component {
    render() {
        let smallHeader = (<Text style={{ color: 'white' }}>small</Text>)
        let largeHader = (<Text style={{ color: 'white' }}>large</Text>)

        return (
            <View>
                <ExpandableHeader
                    smallHeaderContent={smallHeader}
                    largeHeaderContent={largeHader}
                >
                    <View style={{ borderTopWidth: 8, borderLeftWidth: 8, borderColor: 'purple', padding: 8 }}>
                        <Text>Details Screen</Text>
                        <CategoryOverviewCard />

                        <Text style={{ margin: 20 }} >First Tab Screen</Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text>Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                    </View>
                </ExpandableHeader>
            </View>
        )
    }
}

export default CategoryDetails