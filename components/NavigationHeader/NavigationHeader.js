import React from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet, } from 'react-native'
import NavigationService from '../../routing/NavigationService'


const styles = StyleSheet.create({
    componentWrapper: {
        position: 'relative',
        top: 0,
        left: 0,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderBottomWidth: 3,
        borderColor: 'darkgray',
    },
    // image: {
    //     width: 70,
    //     height: 70,
    //     resizeMode: 'contain',
    // },
})

export default class NavigationHeader extends React.Component {
    constructor(props) {
        super(props)

        const { params } = this.props.navigation.state
        this.title = params ? params.title : 'Title'
    }

    buttonClick = () => {
        NavigationService.pop()
    }


    render() {
        return (
            <View style={styles.componentWrapper}>
                <TouchableOpacity style={{ width: 40, position: 'absolute', left: 10, top: 15 }} onPress={this.buttonClick}>
                    <Text> Back </Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center' }}>{this.title}</Text>
            </View >
        )
    }
}
