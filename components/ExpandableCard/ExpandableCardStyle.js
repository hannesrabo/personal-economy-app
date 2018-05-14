import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    boxWrapper: {
        margin: 8,
        marginBottom: 0,
        borderRadius: 3,
        backgroundColor: '#fff',
        flexDirection: 'column',
        paddingRight: 0,
        overflow: 'hidden',
    },
    headerWrapper: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
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
        borderColor: '#eee',
        width: '100%',
        overflow: 'hidden',
    },
    buttonContainer: {
        width: '50%',
        alignSelf: 'flex-end',
    }
})