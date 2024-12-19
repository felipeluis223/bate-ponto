import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styleTimer = StyleSheet.create({
    container: {
        width: '100%', height: 150,
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    date: {
        fontSize: 40,
        color: colors.black,
        textAlign: 'center',
        // fontStyle: 'italic', 
        fontWeight: 'bold'
    },
    time: {
        fontSize: 30,
        color: colors.darkBlack,
        textAlign: 'center',
        fontStyle: 'italic'
    }
});