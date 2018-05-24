import { StyleSheet } from 'react-native'
import { Color } from '../../config/Color'
import { DefaultSmallHeaderStyle, DefaultLargeHeaderStyle } from '../../config/Font'

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    contentWrapper: {
        // flex: 1,
        padding: 10,
        borderTopWidth: 8,
        borderRightWidth: 8,
        borderColor: Color.highlight_1,
        backgroundColor: Color.background,
    },
    header: {
        fontFamily: 'nunito',
        fontSize: 30,
        color: Color.highlight_2,
        marginBottom: 20,
    },



    cardWrapper: {
        backgroundColor: 'white',
        marginBottom: 10,
        flex: 1,
        padding: 10,
    },
    cardHeaderWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    cardHeader: {
        fontFamily: 'nunito',
        fontSize: 25,
        color: Color.highlight_2,
        marginBottom: 5,
    },
    separator: {
        flex: 1,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        marginTop: 10,
        marginBottom: 10,
    },
    subCardWrapper: {
        marginBottom: 10,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        backgroundColor: Color.highlight_1_light,
    },
    cardText: {
        fontFamily: 'nunito',
        fontSize: 20,
        width: '50%',
    },
    cardTextSmall: {
        color: 'gray',
        fontSize: 15,
    },



    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    smallHeader: DefaultSmallHeaderStyle,
    largeHeader: DefaultLargeHeaderStyle,
})