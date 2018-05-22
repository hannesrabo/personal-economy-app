import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ContextConsumer } from '../../components/Context/Context';
import ExpandableCardTransaction from '../../components/Expandable/ExpandableCard/ExpandableCardTransaction'
// import ExpandableCardBudget from '../../components/Expandable/ExpandableCard/ExpandableCardBudget'
// import ExpandableCard from '../../components/Expandable/ExpandableCard/ExpandableCard'

import { styles } from './TransactionOverviewScreenStyle'
import { ScrollView } from 'react-native-gesture-handler';

export default class TransactionOverviewScreen extends Component {

    render() {
        return (
            <ScrollView>
                <ContextConsumer>
                    {context => {
                        return (
                            <View style={styles.wrapper}>

                                <Text style={styles.header}>Transaction overview screen</Text>
                                {Object.keys(context.state.transactions).map((cardId) => {
                                    return (<ExpandableCardTransaction key={cardId} id={cardId} />)
                                })}
                            </View>
                        )
                    }}
                </ContextConsumer>
            </ScrollView>
        )
    }
}   
