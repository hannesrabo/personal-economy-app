import { StyleSheet } from 'react-native'

import { Color } from '../../../config/Color'

export const styles = StyleSheet.create({
    buttonWrapper: {
        height: 35,
        flex: 1,
        borderRadius: 35,
        overflow: 'hidden',
        flexDirection: 'row',
        backgroundColor: Color.highlight_3,
    },
    pressableArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: 'white'
    }
}) 