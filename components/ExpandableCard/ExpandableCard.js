import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import NavigationService from '../../routing/NavigationService'
import OpenDownButton from '../Button/OpenDownButton'

export default class ExpandableCard extends React.Component {
    static defaultProps = {
        color: 'gray',
        title: 'Card Title',
    };

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
        if (this.props.onTitlePress)
            this.props.onTitlePress()
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
                    <Text
                        style={styles.header}
                        onPress={this.headerClick}
                    >
                        {this.props.title}
                    </Text>
                    <OpenDownButton onPress={this.dropDownClick} />
                </View>
                <View
                    style={[styles.animatedContainer, heightStyle]}
                >
                    {/* Render the child components. They need their own margin */}
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxWrapper: {
        margin: 8,
        borderRadius: 3,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingRight: 0,
        overflow: 'hidden',
    },
    headerWrapper: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 0,
        justifyContent: 'space-between',
    },
    header: {
        height: 50,
        width: '70%',
        fontSize: 20,
        padding: 5,
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