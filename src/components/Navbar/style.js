import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styleNavbar = StyleSheet.create({
    container: {
        width: '100%', height: 450,
        justifyContent: 'center',
        padding: 45, gap: 15,
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        color: colors.white
    },
    titleText: {
        color: colors.purple,
        fontSize: 30
    },  
    subtitle: {
        fontSize: 20,
        color: colors.grey
    }
});