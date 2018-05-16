import { StyleSheet } from 'react-native'

import { Color } from '../../config/Color'

export const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        flex: 1,
        backgroundColor: Color.background,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animatedBar: {
        backgroundColor: Color.highlight_1,
        height: 50,
        width: 50,
    },
})