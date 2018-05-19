import { StyleSheet } from 'react-native'

import { Color } from '../../config/Color'
import { Font } from '../../config/Font'

export const styles = StyleSheet.create({
    wrapper: {
        margin: 0,
        // height: 5,
        // borderWidth: 1,
        backgroundColor: Color.background_dark,
    },
    bar: {
        margin: 0,
        height: 5,
    },

    barInfoWrapper: {
        backgroundColor: Color.highlight_3_light,
        minHeight: 30,
        marginBottom: 0,
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barText: {
        fontFamily: Font.mainFont,
        fontSize: Font.fontsize_normal,
    },
    triangleContainer: {
        marginTop: 5,
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Color.highlight_3_light,
        position: 'relative',
        transform: [{ translateX: -5 }]
    },
})