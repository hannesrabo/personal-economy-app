import React from 'react'
import { Text, View, Button, Animated, StyleSheet, Easing } from 'react-native'
import NavigationService from '../../routing/NavigationService'
import OpenDownButton from '../Button/OpenDownButton'

export default class BudgetCategoryCard extends React.Component {
    constructor(props) {
        super(props)
        this._isAnimating = false
        this.state = { height: new Animated.Value(), maxHeight: 1, expanded: true }
    }

    dropDownClick = () => {
        if (!this._isAnimating) {
            this._isAnimating = true
            let toVal = 1
            if (this.state.expanded) {
                this.state.height.setValue(this.state.maxHeight);
            } else {
                this.state.height.setValue(1);
                toVal = this.state.maxHeight
            }

            this.setState({
                expanded: !this.state.expanded
            })

            Animated.timing(
                this.state.height,
                {
                    toValue: toVal,
                    duration: 150,
                    easing: Easing.cubic
                }
            ).start(this.animationDone);
        }
    }

    animationDone = () => {
        this._isAnimating = false
    }

    showTransactionDetails = () => {
        NavigationService.navigate('TransactionOverview')
    }

    _setMaxHeight = (event) => {
        if (this.state.maxHeight == 1 && event.nativeEvent.layout.height != 0) {
            this.setState({
                maxHeight: event.nativeEvent.layout.height,
                expanded: false,
            });

            this.state.height.setValue(event.nativeEvent.layout.height);
            Animated.timing(this.state.height, { toValue: 1 }, { duration: 0 }).start();

        }
    }

    render() {
        return (
            <View style={styles.boxWrapper} elevation={2}>
                <View style={styles.headerWrapper}>
                    <Text
                        style={styles.header}
                    // {/* onPress={this.headerClick} */}
                    >
                        The Month
                    </Text>
                    <OpenDownButton onPress={this.dropDownClick} />
                </View>
                <Animated.View
                    style={[styles.animatedContainer, {
                        height: this.state.height,
                        borderTopWidth: (this.state.expanded ? 1 : 0),
                    }]}
                >
                    <View
                        style={styles.contentWrapper}
                        onLayout={this._setMaxHeight}>
                        <Text>BudgetStuff</Text>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Show Transactions"
                                onPress={this.showTransactionDetails}
                            />
                        </View>
                    </View>
                </Animated.View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    boxWrapper: {
        // shadowOffset: { width: 15, height: 15, },
        // shadowColor: '#000000',
        // shadowOpacity: 1.0,
        // shadowRadius: 10,
        margin: 8,
        borderRadius: 5,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingRight: 0,
    },
    headerWrapper: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 0,
        justifyContent: 'space-between',
    },
    header: {
        height: 50,
        color: '#ff0000',
        width: '70%',
        fontSize: 20,
        padding: 5,
    },
    animatedContainer: {
        borderColor: '#eee',
        width: '100%',
        overflow: 'hidden',
        //margin: 5,
    },
    contentWrapper: {
        padding: 5,
        paddingBottom: 10,
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'flex-end',
    }
})