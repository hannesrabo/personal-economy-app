import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
    text: {
        fontSize: 20,
    },
})