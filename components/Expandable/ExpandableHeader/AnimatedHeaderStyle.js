import { StyleSheet } from 'react-native'
import { Color } from '../../../config/Color'

export const EXPANDED_HEIGHT = 300
export const COLLAPSED_HEIGHT = 50

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flex: 0,
        height: EXPANDED_HEIGHT,
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerCollapsed: {
        zIndex: 6,
        height: COLLAPSED_HEIGHT
    },
    containerPlaceholderHeader: {
        flex: 0,
        height: EXPANDED_HEIGHT,
        width: '100%',
    },
    headerCollapsed: {
        position: 'absolute',
        flex: 0,
        height: COLLAPSED_HEIGHT,
        width: '100%',
        backgroundColor: Color.background_dark,
    },
    headerExpanded: {
        position: 'absolute',
        flex: 0,
        height: EXPANDED_HEIGHT,
        width: '100%',
        backgroundColor: Color.background_dark,
    },
})
