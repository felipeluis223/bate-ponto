import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styleNavbar = StyleSheet.create({
    container: {
        width: '100%', height: 250,
        justifyContent: 'flex-end',
        padding: 45, gap: 15,
    },
    containerTitle: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 30,
        color: colors.darkBlack,
    },
    titleText: {
        color: colors.purple,
        fontSize: 30, fontWeight: 'bold'
    },  
    subtitle: {
        fontSize: 18,
        color: colors.grey,
        fontWeight: 'bold'
    }
});