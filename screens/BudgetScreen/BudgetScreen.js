import React, { Component } from 'react'
import { Text, ScrollView, View, StyleSheet, Button } from 'react-native'

import ExpandableCard from '../../components/ExpandableCard/ExpandableCard'
import GraphContainer from '../../components/GraphContainer/GraphContainer'
import DistributionBar from '../../components/Graphs/DistributionBar'
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'
import TransactionCard from '../../components/TransactionCard/TransactionCard'

import { ContextConsumer } from '../../components/Context/Context'
import NavigationService from '../../routing/NavigationService'

import { styles } from './BudgetScrenStyle'

export default class BudgetScreen extends Component {

    constructor(props) {
        super(props)
    }

    showTransactionDetails = () => {
        NavigationService.navigate('TransactionOverview', { title: 'Transaction Details' })
    }

    //     <ExpandableCard subCard={true}>
    //     <View style={{ margin: 5, marginBottom: 10 }}>
    //         <TransactionCard />
    //         <TransactionCard />
    //         <TransactionCard />
    //         <Text>BudgetStuff</Text>
    //         <View style={styles.buttonContainer}>
    //             <Button
    //                 title="Show Transactions"
    //                 onPress={this.showTransactionDetails}
    //             />
    //         </View>
    //     </View>
    // </ExpandableCard>


    render() {
        const cardData = [
            { id: '1' },
            { id: '2' },
            { id: '3' },
            { id: '4' },
            { id: '5' },
        ]

        return (
            <View style={styles.wrapper}>
                <ExpandableHeader
                    renderCollapsedHeader={animationRange => { return (<DistributionBar animationRange={animationRange} />) }}
                    renderExpandedHeader={animationRange => { return (<Text>hej</Text>) }}
                >
                    <ContextConsumer>
                        {context => (
                            <View style={styles.contentWrapper}>
                                {context.state.fontsLoaded ?
                                    <Text style={{ fontFamily: 'nunito' }}>
                                        This is a font test
                                    </Text>
                                    : null
                                }
                                {/* <ExpandableCard key={`${1}`} data={{ id: 1, title: 'this is the title', value: 123, estimate: 321, subCards: null }} /> */}
                                {context.state.budgetPosts.map((data) => { return (<ExpandableCard key={`${data.id}`} data={data} />) })}
                                <View style={{ margin: 20 }} />
                            </View>
                        )}
                    </ContextConsumer>
                </ExpandableHeader>
            </View>
        )
    }
}

