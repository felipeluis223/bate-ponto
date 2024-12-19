import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleTimer = StyleSheet.create({
    container: {
        width: '100%', height: 150,
        justifyContent: 'center',
    },
    date: {
        fontSize: 40,
        color: colors.purple,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    time: {
        fontSize: 30,
        color: colors.purple,
        textAlign: 'center',
    }
});