import React, { Component } from 'react'
import { Text, View } from 'react-native'

import CategoryOverviewCard from '../../components/CategoryOverviewCard/CategoryOverviewCard'
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'

class CategoryDetails extends Component {
    render() {

        let largeHeader = animationRange => {
            return (
                <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}> tasdf asdflk jasldfk asdlkfd</Text>
            )
        }

        let smallHeader = animationRange => {
            return (
                <Text style={{ fontSize: 30, color: 'white', alignContent: 'center' }}> Alternative</Text>
            )
        }

        return (
            <View style={{ height: '100%', flex: 1 }}>
                <ExpandableHeader
                    renderCollapsedHeader={smallHeader}
                    renderExpandedHeader={largeHeader}
                >
                    <View style={{ borderTopWidth: 8, borderLeftWidth: 8, borderColor: 'purple', padding: 8, backgroundColor: 'lightgray' }}>
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