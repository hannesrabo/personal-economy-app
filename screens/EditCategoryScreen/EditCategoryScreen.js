import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class EditCategoryScreen extends Component {
    constructor(props) {
        super(props)

        const { params } = this.props.navigation.state

        this.state = {
            id: params.id,
        }
    }

    render() {
        return (
            <View>
                <Text>Category edit: {this.state.id}</Text>
            </View>
        )
    }
}

