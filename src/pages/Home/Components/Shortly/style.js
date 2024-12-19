import { StyleSheet } from "react-native";
import { colors } from '../../../../styles/colors';

export const styleShortly = StyleSheet.create({
    fullbox: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 35,
        color: colors.purple,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 20,
        color: colors.grey,
        textAlign: 'center'
    }

});