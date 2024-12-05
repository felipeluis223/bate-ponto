import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity} from 'react-native';
import { styleLogin } from './style';
import LottieView from 'lottie-react-native';    
import * as LocalAuthentication from 'expo-local-authentication';

const LoginInterface = ({navigation})=>{
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    
    const handleBiometricAuth = async()=>{
        // Verificar se o dipositivo tem a biometria:
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        if(!hasHardware){
           Alert.alert("Erro!", "O dispositivo não suporta autenticação biométrica");
           return ;
        };

        // Verifica se existem biometria cadastrada (impressões digitais, faces, etc.)
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        if(!isEnrolled){
            Alert.alert("Erro!", "Nenhuma biometria cadastrada no dispositivo");
            return ;
        };

        // Solicita autenticação biométrica
        const authResult = await LocalAuthentication.authenticateAsync({
            promptMessage: "Autentique-se",
            fallbackLabel: "Digite sua senha"
        });
        
        authResult.success ? setIsAuthenticated(true) : Alert.alert("Erro!", "Autenticação falhou");
    }

    useEffect(()=>{
        if(isAuthenticated) {
            navigation.replace('HomeTabs'); // Substitui a tela atual pela navegação de abas
        }
    },[isAuthenticated])

    return(
        <View style={styleLogin.fullBox}>
            <View style={styleLogin.containerUp}>
                <LottieView
                    source={require('../../../assets/animations/loading.json')} // Caminho para o arquivo Lottie
                    autoPlay // Inicia a animação automaticamente
                    loop // Faz a animação repetir em loop
                    style={styleLogin.lottie}
                />
                <Text style={styleLogin.title}>Bem-vindo ao Bate-Ponto</Text>
            </View>
            <View style={styleLogin.containerDown}>
                <TouchableOpacity style={styleLogin.button} onPress={handleBiometricAuth}>
                    <Text style={styleLogin.labelButton}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginInterface;