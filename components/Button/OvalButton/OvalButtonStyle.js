import { StyleSheet } from 'react-native'

import { Color } from '../../../config/Color'

export const styles = StyleSheet.create({
    buttonWrapper: {
        height: 50,
        flex: 1,
        borderRadius: 35,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.highlight_3,
    },
    text: {
        color: 'white'
    }
})