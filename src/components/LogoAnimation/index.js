import LottieView from "lottie-react-native";

const LogoAnimation = ({width, height})=>{
    return (
        <LottieView
            source={require('../../../assets/animations/loading.json')} // Caminho para o arquivo Lottie
            autoPlay // Inicia a animação automaticamente
            loop // Faz a animação repetir em loop
            style={{width: width, height: height}}
        />
    )
}

export default LogoAnimation;