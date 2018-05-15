import React, { Component } from 'react'
import { Text, View } from 'react-native'

import CategoryOverviewCard from '../../components/CategoryOverviewCard/CategoryOverviewCard'
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'
import { styles } from './CategoryScreenStyle'

class CategoryDetails extends Component {
    render() {

        let largeHeader = animationRange => {
            return (
                <Text style={styles.largeHeader}> tasdf asdflk jasldfk asdlkfd</Text>
            )
        }

        let smallHeader = animationRange => {
            return (
                <Text style={styles.smallHeader}> Alternative</Text>
            )
        }

        return (
            <View style={styles.wrapper}>
                <ExpandableHeader
                    renderCollapsedHeader={smallHeader}
                    renderExpandedHeader={largeHeader}
                >
                    <View style={styles.contentWrapper}>
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