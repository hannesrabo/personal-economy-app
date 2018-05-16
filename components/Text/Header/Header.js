import React from 'react'

import { styles } from './HeaderStyle'

export class LargeHeader extends React.Component {
    render() {
        return (
            <View style={styles.wrapperLarge}>
                <Text style={styles.textLarge}>{this.props.children}</Text>
            </View>
        )
    }
}

export class SmallHeader extends React.Component {
    render() {
        return (
            <View style={styles.wrapperSmall}>
                <Text style={styles.textSmall}>{this.props.children}</Text>
            </View>
        )
    }
}