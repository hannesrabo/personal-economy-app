import { StyleSheet } from 'react-native'

import { Color } from '../../../config/Color'
import { Font } from '../../../config/Font'

export const styles = StyleSheet.create({
    headerZoneBudget: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    headerEditableValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    headerEditableValueCurrency: {
        color: 'red',
        padding: 8,
        paddingRight: 0,
    },
    headerEditableValue: {
        color: 'red',
        padding: 6,
    },
    text: {
        fontSize: 20,
    },


    // This should be moved to the separate class
    barInfoWrapper: {
        backgroundColor: Color.highlight_3_light,
        height: 30,
        margin: 15,
        marginBottom: 0,
        marginTop: 0,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    barText: {
        fontFamily: Font.mainFont,
        fontSize: Font.fontsize_normal,
    },
    triangleContainer: {
        margin: 15,
        marginTop: 5,
        marginBottom: 0,
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


    navigationContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
    },




    upcomingTransactionsContainer: {
        backgroundColor: Color.highlight_3_light,
        padding: 10,
    },

    upcomingTransactionText: {
        paddingBottom: 10,
    },

    upcomingTransactionsCard: {
        height: 80,
        backgroundColor: '#ffffff99'
    }
})