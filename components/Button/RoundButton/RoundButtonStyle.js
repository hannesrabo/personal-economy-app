import { StyleSheet } from 'react-native'

import { Color } from '../../../config/Color'

export const styles = StyleSheet.create({
    buttonWrapper: {
        borderRadius: 35,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.highlight_1,
    },
    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
    },
})