import { StyleSheet } from 'react-native'
import { Color } from '../../config/Color'

export const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        // borderLeftWidth: 8,
        // borderColor: Color.highlight,
    },
    contentWrapper: {
        backgroundColor: Color.background,
        padding: 10,
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'flex-end',
    },
    largeHeaderWrapper: {
        borderRightWidth: 8,
        borderBottomWidth: 8,
        borderColor: Color.highlight_3_dark,
        height: '100%',
        flex: 1,
    },
    contentHeader: {
        color: Color.highlight_3_dark,
    },
})