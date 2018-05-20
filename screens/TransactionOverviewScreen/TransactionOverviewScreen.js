import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ContextConsumer } from '../../components/Context/Context';
import ExpandableCardTransaction from '../../components/Expandable/ExpandableCard/ExpandableCardTransaction'
import ExpandableCardBudget from '../../components/Expandable/ExpandableCard/ExpandableCardBudget'
import ExpandableCard from '../../components/Expandable/ExpandableCard/ExpandableCard'

import { styles } from './TransactionOverviewScreenStyle'

export default class TransactionOverviewScreen extends Component {

    render() {
        return (
            <View style={styles.wrapper}>
                <ContextConsumer>
                    {context => {
                        return (
                            <View style={{ backgroundColor: 'lightgray', height: '100%' }}>
                                <Text>Transaction overview screen</Text>
                                {Object.keys(context.state.transactions).map((cardId) => {
                                    return (<ExpandableCardTransaction key={cardId} id={cardId}><Text>card overview screen</Text></ExpandableCardTransaction>)
                                })}

                                {Object.keys(context.state.transactions).map((cardId) => {
                                    return (<View key={cardId} styles={{ height: 100, flexShrink: 0, backgroundColor: 'gray' }}><Text>card overview screen</Text></View>)
                                })}

                                {Object.keys(context.state.budgetPosts).map((cardId) => {
                                    return (<ExpandableCardBudget key={cardId} id={cardId} />)
                                })
                                }
                                <Text>Transaction overview screen</Text>
                                <ExpandableCard title="fsdfsd" renderHeader={() => (<Text>card overview screen</Text>)}>
                                    <Text>card overview screen</Text>

                                </ExpandableCard>
                            </View>
                        )
                    }}
                </ContextConsumer>
            </View>
        )
    }
}   
