import { StyleSheet } from 'react-native'
import { Color } from '../../config/Color'
import { DefaultLargeHeaderStyle } from '../../config/Font'

export const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    header: {
        fontSize: 30,
        marginBottom: 15,
        color: Color.highlight_1,
    }
})