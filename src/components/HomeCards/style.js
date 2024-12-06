import { StyleSheet, Platform } from "react-native";
import { colors } from "../../styles/colors";

export const styleHomeCards = StyleSheet.create({
    container: {
        width: 450,
        height: 100,
        borderBottomColor: colors.purple,
        backgroundColor: colors.whiteGhost,
        borderRadius: 20,
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 14 },
                shadowOpacity: 0.24,
                shadowRadius: 15.38,
            },
            android: {
                elevation: 19,
            }
        }),
    },
    containerCard: {
        width: "85%",
        justifyContent: "center",
        paddingLeft: 35,
    },
    containerIcon: {
        width: "15%",
        justifyContent: "center",
        backgroundColor: colors.purple,
        paddingLeft: 15, 
        borderTopRightRadius: 28,
        borderBottomRightRadius: 28
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.purple,
    },
    description: {
        fontSize: 15,
        color: colors.grey,
    },
});
