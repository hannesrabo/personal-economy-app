import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import NavigationService from '../../routing/NavigationService'
import OpenDownButton from '../Button/OpenDownButton'
import { TextInput } from 'react-native-gesture-handler'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
    boxWrapper: {
        margin: 8,
        marginBottom: 0,
        borderRadius: 3,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingRight: 0,
        overflow: 'hidden',
    },
    headerWrapper: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    headerText: {
        paddingLeft: 20,
    },
    headerZoneTitle: {
        padding: 8,
        flex: 4,
        flexDirection: 'row',
    },
    headerZoneBudget: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    animatedContainer: {
        borderColor: '#eee',
        width: '100%',
        overflow: 'hidden',
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'flex-end',
    }
})

export default class ExpandableCard extends React.Component {
    static defaultProps = {
        color: 'gray',
        title: 'Card Title',
    }

    static propTypes = {
        id: PropTypes.string.isRequired,
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
        NavigationService.navigate('EditCategoryScreen', { id: this.props.id })
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

                    <View style={styles.headerZoneBudget}>
                        <Text
                            style={[styles.text, { color: 'limegreen', padding: 8 }]}
                        >
                            $ 100
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                            <Text style={[styles.text, { color: 'red', padding: 8, paddingRight: 0 }]}>-$</Text>
                            <TextInput
                                keyboardType='numeric'
                                maxLength={7}
                                style={[styles.text, { color: 'red', padding: 6, }]}
                            >
                                50
                            </TextInput>
                        </View>
                    </View>
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
