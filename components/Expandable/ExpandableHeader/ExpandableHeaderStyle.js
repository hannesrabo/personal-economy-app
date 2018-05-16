import { StyleSheet } from 'react-native'
import { Color } from '../../../config/Color'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: Color.background_dark,
    },
    scrollView: {
        flex: 1,
        zIndex: 5
    },
    childContainer: {
        zIndex: 5,
        backgroundColor: Color.background
    }
})