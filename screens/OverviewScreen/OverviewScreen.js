import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler';
import ExpandableHeader from '../../components/Expandable/ExpandableHeader/ExpandableHeader'
import RoundButton from '../../components/Button/RoundButton/RoundButton'
import TrackingBar from '../../components/TrackingBar/TrackingBar'
import TrackingBarInfo from '../../components/TrackingBar/TrackingBarInfo'

import { Color } from '../../config/Color'
import { styles } from './OverviewScreenStyle'

const HEADER_EXPANDED_HEIGHT = 300
const HEADER_COLLAPSED_HEIGHT = 60

const Card = (props) => {
    return (
        <View style={styles.cardWrapper} elevation={2}>
            {props.children}
        </View>
    )
}

export default class OverviewScreen extends Component {
    constructor(props) {
        super(props)

    }

    buttonAddClick = () => {
        this.props.navigation.push('AddPost', { title: 'Add new receipt' })
    }

    renderStatus = () => {
        let barValue = 0.55

        return (
            <Card>
                <View style={styles.cardHeaderWrapper}>
                    <Text style={styles.cardHeader}>Status</Text>
                    <Text style={styles.cardHeader}>Good!</Text>
                </View>
                <TrackingBar
                    value={barValue}
                    barBackground={Color.background_medium}
                    barColor={Color.highlight_2}
                    barHeight={10}
                />
                <TrackingBarInfo
                    barValue={barValue}
                    color={Color.highlight_1}
                >
                    <Text>This is some info here</Text>
                </TrackingBarInfo>
            </Card>
        )
    }

    renderAverages = () => {
        return (
            <Card>
                <Text style={styles.cardHeader}>Average</Text>

                <View style={styles.subCardWrapper}>
                    <Text style={styles.cardText}>Monthly:</Text>
                    <Text style={styles.cardText}>$ 600</Text>

                    <Text style={styles.cardText}>Daily:</Text>
                    <Text style={styles.cardText}>$ 20</Text>
                </View>

                <View style={styles.separator} />

                <Text style={styles.cardHeader}>Optimal</Text>
                <Text style={styles.cardTextSmall}>Decrease to keep your goal</Text>
                <View style={styles.subCardWrapper}>
                    <Text style={styles.cardText}>Monthly:</Text>
                    <Text style={styles.cardText}>$ 20</Text>

                    <Text style={styles.cardText}>Daily:</Text>
                    <Text style={styles.cardText}>$ 20</Text>
                </View>

            </Card>
        )
    }

    renderSavings = () => {
        let barValue = 0.44

        return (
            <Card>
                <Text style={styles.cardHeader}>Projected Savings</Text>
                <View style={styles.subCardWrapper}>
                    <Text style={styles.cardText}>Projected:</Text>
                    <Text style={styles.cardText}>$ 20</Text>

                    <Text style={styles.cardText}>Goal:</Text>
                    <Text style={styles.cardText}>$ 20</Text>
                </View>

                <TrackingBar
                    value={barValue}
                    barBackground={Color.background_medium}
                    barColor={Color.highlight_2}
                    barHeight={10}
                />
                <TrackingBarInfo
                    barValue={barValue}
                    color={Color.highlight_1}
                >
                    <Text>This is some info here</Text>
                </TrackingBarInfo>
            </Card>
        )
    }

    renderEvents = () => {
        return (
            // position: 'relative',
            <Card>
                <Text style={styles.cardHeader}>Upcoming Transactions</Text>
                <View style={styles.subCardWrapper}>
                    <Text style={styles.cardText}>Buy a bed:</Text>
                    <Text style={styles.cardText}>$ 20</Text>

                    <View style={styles.separator} />
                    <Text style={[styles.cardText, styles.cardTextSmall]}>2018/05/05</Text>
                </View>
            </Card>
        )
    }

    render() {
        let largeHeader = animationRange => {
            return (
                <Text style={styles.largeHeader}> tasdf asdflk jasldfk asdlkfd</Text>
            )
        }

        let smallHeader = animationRange => {
            return (
                <Text style={styles.smallHeader}> Alternative</Text>
            )
        }

        return (
            <View style={styles.wrapper}>
                <ExpandableHeader
                    renderCollapsedHeader={smallHeader}
                    renderExpandedHeader={largeHeader}
                >
                    <View style={styles.contentWrapper}>
                        <Text style={styles.header}>Overview</Text>
                        {this.renderStatus()}
                        {this.renderAverages()}
                        {this.renderSavings()}
                        {this.renderEvents()}
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