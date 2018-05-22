import React from 'react'
import { View, Text, } from 'react-native'
import PropTypes from 'prop-types'

import ExpandableCard from './ExpandableCard'
import NavigationService from '../../../routing/NavigationService'
import OvalButton from '../../Button/OvalButton/OvalButton'

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

    editCard = () => {

    }

    deleteCard = () => {

    }

    renderButtons = () => {
        return (
            <View style={styles.buttonContainer}>
                <OvalButton value="Delete" style={{ backgroundColor: Color.highlight_1, marginRight: 10, }} onPress={this.deleteCard} />
                <OvalButton value="Edit" style={{ backgroundColor: Color.highlight_3 }} onPress={this.editCard} />
            </View>
        )
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
                                {this.renderButtons()}
                                {this.props.children}
                            </ExpandableCard>
                        </View>
                    )
                }}
            </ContextConsumer>
        )
    }
} 