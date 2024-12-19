import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleHeader = StyleSheet.create({
    fullbox: {
        width: '100%', height: 150,
        backgroundColor: colors.purple,
        justifyContent: 'flex-end', paddingBottom: 30
    },
    title: {
        color: colors.white,
        fontSize: 35, 
        fontWeight: 'bold', textAlign: 'center',
        fontStyle: 'italic'
    },
    subtitle: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});