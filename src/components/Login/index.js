import React, { useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity} from 'react-native';
import { styleLogin } from './style';
import * as LocalAuthentication from 'expo-local-authentication';
import LogoAnimation from '../LogoAnimation';

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
                <LogoAnimation width={200} height={200} />
                <Text style={styleLogin.title}>Bem-vindo ao Bate-Ponto</Text>
                <Text style={styleLogin.subtitle}>Controle de Jornada Simplificado: Marque seus pontos com praticidade e segurança.</Text>
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