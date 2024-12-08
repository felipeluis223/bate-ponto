import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styleHome = StyleSheet.create({
    container: {
        backgroundColor: colors.whiteGhost,
        width: '100%', height: '100%',
    },
    containerCard: {
        width: '100%', height: 600,
        alignItems: 'center', gap: 25
    }
});
