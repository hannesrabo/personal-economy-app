import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, Animated } from 'react-native'
import Color from '../../color'

import GestureController from '../../components/GestureController/GestureController'
import GraphContainer from '../../components/GraphContainer/GraphContainer'
import { ScrollView } from 'react-native-gesture-handler';
import ExpandableHeader from '../../components/ExpandableHeader/ExpandableHeader'

const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60

class OverviewScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollY: new Animated.Value(0)
        }
    }

    buttonAddClick = () => {
        console.log("Button pushed")
        this.props.navigation.push('AddPost')
        // this.props.navigation.push('BudgetScreen')
    }

    render() {
        let largeHeader = (
            <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}> tasdf asdflk jasldfk asdlkfd</Text>
        )

        let smallHeader = (
            <Text style={{ fontSize: 30, color: 'white', alignContent: 'center' }}> Alternative</Text>
        )

        return (
            <View style={styles.wrapper}>
                {/* <GraphContainer>
                    <Text>This is the graph</Text>
                </GraphContainer> */}
                <ExpandableHeader
                    largeHeaderContent={largeHeader}
                    smallHeaderContent={smallHeader}
                >

                    <View style={styles.contentWrapper}>
                        <Text style={{ margin: 20 }} >First Tab Screen</Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                        <Text style={{ margin: 20 }} >Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum Click me Lorem ipsum </Text>
                    </View>
                </ExpandableHeader>
                <Button
                    style={styles.button}
                    onPress={this.buttonAddClick}
                    title="Add Post"
                    // style={styles.button}
                    color={Color.button_highlight}
                />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        paddingBottom: 15,
        flex: 1,
        height: '100%',
    },
    contentWrapper: {
        flex: 1,
    },
    button: {
        flex: 0,
    }
})

export default OverviewScreen