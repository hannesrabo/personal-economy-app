import React from 'react'
import { Text, View, Button, StyleSheet, TextInput } from 'react-native'
import OpenDownButton from '../../Button/OpenDownButton/OpenDownButton'
import PropTypes from 'prop-types'

import { styles } from './ExpandableCardStyle'

export default class ExpandableCard extends React.Component {
    static defaultProps = {
        color: 'gray',
        title: 'Card Title',
    }

    static propTypes = {
        renderHeader: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = { expanded: false }
    }

    dropDownClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    headerClick = () => {
        if (this.props.headerClick) {
            this.props.headerClick()
        }
    }

    render() {
        // Custom styling if it is a sub category card
        let subCardStyle = {}
        if (this.props.subCard) {
            subCardStyle = {
                borderRadius: 0,
                margin: 0,
                borderLeftWidth: 7,
                borderColor: this.props.color,
            }
        }

        // Animation of height
        let heightStyle = { borderTopWidth: 1 }
        if (!this.state.expanded) {
            heightStyle.height = 0
            heightStyle.borderTopWidth = 0
        }

        return (
            <View
                style={[styles.boxWrapper, subCardStyle]}
                elevation={2}
            >
                <View style={styles.headerWrapper}>
                    <View style={styles.headerZoneTitle}>
                        <OpenDownButton onPress={this.dropDownClick} />
                        <Text
                            style={[styles.text, styles.headerText]}
                            onPress={this.headerClick}
                        >
                            {this.props.title}
                        </Text>
                    </View>

                    {this.props.renderHeader()}
                </View>
                <View
                    style={[styles.animatedContainer, heightStyle]}
                >
                    {this.props.children}
                </View>
            </View >
        )
    }
}