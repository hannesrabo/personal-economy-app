import React from 'react'
import { View, Text } from 'react-native'

import ExpandableCard from './ExpandableCard'

export default class ExpandableCardBudget extends React.Component {
    render() {
        return (
            <ExpandableCard>
                {this.props.children}
            </ExpandableCard>
        )
    }
} 