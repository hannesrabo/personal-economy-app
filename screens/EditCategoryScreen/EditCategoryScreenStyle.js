import { StyleSheet } from 'react-native'
import { Color } from '../../config/Color'

import { DefaultLargeHeaderStyle } from '../../config/Font'

export const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        backgroundColor: Color.background,
    },
    title: {
        margin: 15,
        marginTop: 5,
        fontSize: 30,
        color: Color.highlight_3_dark,
        fontFamily: 'nunito',
    },



    headerSection: {
        padding: 15,
        paddingTop: 20,
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
        color: Color.highlight_3_dark,
        fontFamily: 'nunito',
    },
    summaryCard: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 15,
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



    graphContainer: {
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: Color.highlight_3,
        backgroundColor: Color.background_medium,
        position: 'relative',
        marginBottom: 15,
    },
    graphControllerContainer: {
        position: 'absolute',
        top: 15,
        left: 0,
        width: '100%',
        zIndex: 5,
        alignItems: 'center',
    },
    graphControllerButtonContainer: {
        position: 'relative',
        width: '70%',
    },

    graphTrend: {
        backgroundColor: Color.background_dark,
        height: 320,
    },
    graphDivision: {
        borderTopWidth: 3,
        borderColor: Color.highlight_3_dark,
        backgroundColor: Color.background_dark,
        height: 260,
    },



    upcomingTransactions: {
        borderTopWidth: 3,
        borderColor: Color.highlight_3,
        minHeight: 220,
        backgroundColor: Color.highlight_3_light,
    },
    upcomingTransactionsContainer: {
        backgroundColor: Color.highlight_3_light,
        padding: 20,
    },
    upcomingTransactionsCard: {
        height: 80,
        backgroundColor: '#ffffff99'
    },

})