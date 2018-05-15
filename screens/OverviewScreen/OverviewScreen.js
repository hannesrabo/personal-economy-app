import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Animated } from 'react-native'
import Color from '../../color'

// import GestureController from '../../components/GestureController/GestureController'
import GraphContainer from '../../components/GraphContainer/GraphContainer'
import { ScrollView } from 'react-native-gesture-handler';
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'
// import Demo from '../../components/ExpandableHeader/ExpandableHeader'
import RoundButton from '../../components/Button/RoundButton'

const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60

const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 15,
        flex: 1,
        height: '100%',
        position: 'relative',
        // borderWidth: 1,
        // borderColor: 'red',
    },
    contentWrapper: {
        flex: 1,
        borderTopWidth: 8,
        borderColor: 'purple',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
})

export default class OverviewScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }

    buttonAddClick = () => {
        this.props.navigation.push('AddPost', { title: 'Add new receipt' })
    }

    render() {
        let largeHeader = animationRange => {
            return (
                <Text style={{ fontSize: 30, color: 'white', textAlign: 'center', alignSelf: 'center' }}> tasdf asdflk jasldfk asdlkfd</Text>
            )
        }

        let smallHeader = animationRange => {
            return (
                <Text style={{ fontSize: 30, color: 'white', alignContent: 'center' }}> Alternative</Text>
            )
        }

        return (
            <View style={styles.wrapper}>
                <ExpandableHeader
                    renderCollapsedHeader={smallHeader}
                    renderExpandedHeader={largeHeader}
                >
                    <View style={{ borderTopWidth: 8, borderColor: 'purple', flex: 1, backgroundColor: 'lightgray' }}>
                        <Text style={{ margin: 20 }} >First Tab Screen</Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                    </View>
                </ExpandableHeader>

                <View style={styles.buttonContainer}>
                    <RoundButton
                        style={styles.button}
                        onPress={this.buttonAddClick}
                        elevation={5}
                    />
                </View>
            </View>
        )
    }
}