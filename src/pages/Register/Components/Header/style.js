import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleHeader = StyleSheet.create({
    fullbox: {
        width: '100%', height: 150,
        justifyContent: 'flex-end', paddingBottom: 10
    },
    title: {
        color: colors.black,
        fontSize: 30, 
        textAlign: 'center',
        fontStyle: 'italic'
    },
    subtitle: {
        fontSize: 20,
        color: colors.grey,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});