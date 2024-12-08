import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styleLogin = StyleSheet.create({
    fullBox: {
        width: '100%', height: '100%',
        gap: 20, 
        alignItems: 'center',
        paddingHorizontal: 40,
        backgroundColor: colors.darkBlack
    },
    containerUp: {
        marginTop: 15,
        width:'100%', height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
      title: {
        fontSize: 25,
        color: colors.white, 
        fontWeight: 'bold', 
      },  
      subtitle: {
        color: colors.grey,
        fontSize: 18, textAlign: 'center',
        paddingTop: 20
      },
      containerDown:{
        width:'100%', height:'30%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      labelButton: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.grey,
        fontWeight: 'bold', 
        justifyContent: 'center', alignItems: 'center'
      },
      containerRegister: {
        width: '100%', height: '50%',
        gap: 40
      },
      containerLabelInput: {
        width: '100%', height: '50%',
      },
      textLabel: {
        color: colors.whiteGhost,
        fontSize: 18, fontWeight: 'bold'
      },
      textInput: {
        borderBottomWidth: 1, 
        borderBottomColor: colors.purple,
        color: colors.white,
        fontSize: 18

      },
      containerButton: {
        width: '100%', height: 200,
        alignItems: 'center',
        gap: 20,
      },
      button: {
        backgroundColor: colors.black,
        width: 180, height: 60,
        justifyContent: 'center',
        borderRadius: 10,
      },
      buttonLabel: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white
      },
      containerInputRegister: {
        paddingTop: 15,
        width: '50%',
        alignItems: 'center'
      },
      labelInputRegister: {
        color: colors.whiteGhost, fontSize: 15,
      },
      containerBiometrich: {
        width: '100%', height: 80,
        justifyContent: 'center', alignItems: 'center'
      },
      buttonBiometrich: {
        width: '100%', height: 50, 
        justifyContent: 'center',

      }
});