import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styleLogin = StyleSheet.create({
    fullBox: {
        width: '100%', height: '100%',
        justifyContent: 'center', alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: colors.darkBlack
    },
    containerUp: {
        width:'100%', height: '70%',
        justifyContent: 'center', alignItems: 'center'
    },
    lottie: {
        width: 200,
        height: 200,
      },
      title: {
        fontSize: 25,
        color: colors.white, 
        fontWeight: 'bold', 
      },  
      containerDown:{
        width:'100%', height:'30%',
        justifyContent: 'center', alignItems: 'center'
      },
      button: {
        width: '40%', padding: 20,
        backgroundColor: colors.purple,
        borderRadius: 15
      },
      labelButton: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.white,
        fontWeight: 'bold', 
        justifyContent: 'center', alignItems: 'center'
      },
});