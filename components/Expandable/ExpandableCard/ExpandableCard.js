import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
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
        this.state = {
            expanded: false,
            buttonRef: null
        }
    }

    dropDownClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })

        if (this.props.onPress) {
            this.props.onPress(this.state.expanded)
        }
    }

    cardClicked = () => {
        if (this.state.buttonRef) {
            this.state.buttonRef.buttonClick()
        }

        if (this.props.onPress) {
            this.props.onPress(this.state.expanded)
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

        let borderStyle = { borderBottomWidth: 1 }

        // Animation of height
        let heightStyle = {}
        if (!this.state.expanded) {
            heightStyle.height = 0
            borderStyle = 0
        }

        return (
            <View
                style={[styles.boxWrapper, subCardStyle]}
                elevation={2}
            >
                <TouchableOpacity
                    style={styles.pressableArea}
                    onPress={this.cardClicked}
                >
                    <View style={[styles.headerWrapper, borderStyle]}>
                        <View style={styles.headerZoneTitle}>
                            <OpenDownButton
                                ref={buttonRef => { if (!this.state.buttonRef) this.setState({ buttonRef }) }}
                                onPress={this.dropDownClick}
                            />
                            <Text
                                style={[styles.text, styles.headerText]}
                            >
                                {this.props.title}
                            </Text>
                        </View>

                        {this.props.renderHeader()}
                    </View>
                    {(this.props.renderBar) ? this.props.renderBar() : null}
                </TouchableOpacity>
                <View
                    style={[styles.animatedContainer, heightStyle]}
                >
                    {this.props.children}
                </View>

            </View>
        )
    }
}