import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    boxWrapper: {
        marginBottom: 10,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingRight: 0,
        overflow: 'hidden',
    },
    pressableArea: {
        flex: 1,
        height: '100%',
    },
    headerWrapper: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#eee',
    },
    text: {
        fontSize: 20,
    },
    headerText: {
        paddingLeft: 20,
    },
    headerZoneTitle: {
        padding: 8,
        flex: 4,
        flexDirection: 'row',
    },
    headerZoneBudget: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    animatedContainer: {
        width: '100%',
        overflow: 'hidden',
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'flex-end',
    }
})