import { StyleSheet } from 'react-native'
import { Color } from '../../config/Color'
import { DefaultSmallHeaderStyle, DefaultLargeHeaderStyle } from '../../config/Font'

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: '100%',
        position: 'relative',
    },
    contentWrapper: {
        flex: 1,
        borderTopWidth: 8,
        borderRightWidth: 8,
        borderColor: Color.highlight_1,
        backgroundColor: Color.background,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    smallHeader: DefaultSmallHeaderStyle,
    largeHeader: DefaultLargeHeaderStyle,
})