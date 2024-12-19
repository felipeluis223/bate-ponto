import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleHeader = StyleSheet.create({
    fullbox: {
        width: '100%', height: 280,
        backgroundColor: colors.whiteGhost,
        justifyContent: 'center',
    },
    title: {
        color: colors.purple,
        fontSize: 35, 
        fontWeight: 'bold', textAlign: 'center',
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