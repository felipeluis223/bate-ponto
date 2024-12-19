import { View, Text } from "react-native";
import { styleShortly } from "./style";
import LottieView from "lottie-react-native";


const Shortly = ()=>{
    return(
        <View style={styleShortly.fullbox}>
            <Text style={styleShortly.title}>Em Breve!</Text>
            <Text style={styleShortly.subtitle}>Novas funcionalidades estão sendo desenvolvidas.</Text>
            <LottieView
                source={require('../../../../../assets/animations/create_loading.json')} // Caminho para o arquivo Lottie
                autoPlay // Inicia a animação automaticamente
                loop // Faz a animação repetir em loop
                style={{width: 400, height: 600}}
            />
        </View>
    );
}

export default Shortly;