import { StyleSheet } from 'react-native'
import { Color } from '../../config/Color'

import { DefaultLargeHeaderStyle } from '../../config/Font'

export const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundColor: Color.background,
    },



    headerSection: {
        padding: 15,
    },
    summaryCardHeaderContainer: {
        paddingBottom: 8,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    categoryTitle: {
        paddingBottom: 10,
        marginBottom: 10,
        fontSize: 30,
        color: Color.highlight_3,
        fontFamily: 'nunito',
    },
    summaryCard: {
        backgroundColor: 'white',
        padding: 15,
    },
    summaryCardHeader: {
        fontSize: 20,
        fontFamily: 'nunito',
    },
    barInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    barText: {
        padding: 10,
        paddingRight: 0,
        fontSize: 20,
        fontFamily: 'nunito',
    },
    barTextInput: {
        padding: 10,
        fontSize: 20,
        fontFamily: 'nunito',
    },
    buttonContainer: {
        marginTop: 15,
    },


    graphTrend: {
        backgroundColor: Color.background_dark,
        height: 220,
    },
    graphDivision: {
        backgroundColor: Color.background_medium,
        height: 220,
    },




    upcomingTransactions: {
        minHeight: 220,
        backgroundColor: Color.highlight_3_light,
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
    },

})