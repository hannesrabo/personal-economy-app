import React from 'react'
import { View, Text, } from 'react-native'
import PropTypes from 'prop-types'

import ExpandableCard from './ExpandableCard'
import NavigationService from '../../../routing/NavigationService'

import { styles } from './ExpandableCardTransactionStyle'
import { Color } from '../../../config/Color';
import { ContextConsumer } from '../../Context/Context';


export default class ExpandableCardTransaction extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)

        this.transaction = null
    }

    renderHeader = () => {
        return (
            <View style={styles.headerZoneTotal}>
                <Text
                    style={[styles.text, { color: 'limegreen', padding: 8 }]}
                >
                    $ {this.transaction.total}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <ContextConsumer>
                {context => {
                    let transaction = context.state.transactions[this.props.id]

                    this.transaction = transaction

                    return (
                        <View style={{}}>
                            <ExpandableCard
                                title={transaction.title}
                                renderHeader={this.renderHeader}
                            >
                                {this.props.children}
                            </ExpandableCard>
                        </View>
                    )
                }}
            </ContextConsumer>
        )
    }
} 