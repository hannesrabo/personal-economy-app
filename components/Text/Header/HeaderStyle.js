import { StyleSheet } from 'react-native'

import { Color } from '../../../config/Color'

export const styles = StyleSheet.create({
    wrapperLarge: {
        flex: 1,
    },
    textLarge: {
        color: Color.text_highlight,
        fontSize: 30,
        fontFamily: 'nunito',
    },
    wrapperSmall: {
        flex: 1,
    },
    textSmall: {
        color: Color.text_highlight,
        fontSize: 20,
        fontFamily: 'nunito',
    },
})