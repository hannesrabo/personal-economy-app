import { StyleSheet } from 'react-native'
import { Color } from '../../config/Color'

export const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        borderLeftWidth: 8,
        borderColor: Color.highlight,
    },
    contentWrapper: {
        backgroundColor: Color.background,
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'flex-end',
    }
})