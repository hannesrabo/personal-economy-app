import React from 'react'
import { View, Text, TextInput } from 'react-native'

import ExpandableCard from './ExpandableCard'
import NavigationService from '../../../routing/NavigationService'

import { styles } from './ExpandableCardBudgetStyle'

export default class ExpandableCardBudget extends React.Component {
    constructor(props) {
        super(props)
    }

    renderHeader = () => {
        return (
            <View style={styles.headerZoneBudget}>
                <Text
                    style={[styles.text, { color: 'limegreen', padding: 8 }]}
                >
                    $ {this.props.data.estimate}
                </Text>

                <View style={styles.headerEditableValueContainer}>
                    <Text style={[styles.text, styles.headerEditableValueCurrency]}>-$</Text>
                    <TextInput
                        keyboardType='numeric'
                        maxLength={7}
                        style={[styles.text, styles.headerEditableValue]}
                    >
                        {this.props.data.value}
                    </TextInput>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ExpandableCard
                title={this.props.data.title}
                renderHeader={this.renderHeader}
                headerClick={() => { NavigationService.navigate('EditCategoryScreen', { id: this.props.data.id }) }}
            >
                {this.props.children}
            </ExpandableCard>
        )
    }
} 