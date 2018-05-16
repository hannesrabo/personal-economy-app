import { StyleSheet } from 'react-native'
import { Color } from '../../config/Color'
import { DefaultSmallHeaderStyle, DefaultLargeHeaderStyle } from '../../config/Font'

export const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        flex: 1,
    },
    smallHeader: DefaultSmallHeaderStyle,
    largeHeader: DefaultLargeHeaderStyle,
    largeHeaderWrapper: {
        height: '100%',
        flex: 1,
        borderRightWidth: 8,
        borderColor: Color.highlight_2,
    },
    contentWrapper: {
        borderTopWidth: 8,
        borderLeftWidth: 8,
        padding: 8,
        borderColor: Color.highlight_2,
        backgroundColor: Color.background,
    }
})