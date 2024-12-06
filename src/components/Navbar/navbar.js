import { View, Text } from "react-native";
import { styleNavbar } from "./style";
import LogoAnimation from '../LogoAnimation';

const Navbar = () => {
    const titleData = {
        description: "Seja bem-vindo ao ",
        title:"Bate Ponto!"
    };

    return(
        <View style={styleNavbar.container}>
            <View style={styleNavbar.containerLogo}>
                <LogoAnimation width={160} height={160} />
            </View>
            <View style={styleNavbar.containerTitle}>
                <Text style={styleNavbar.title}>{titleData.description}</Text>
                <Text style={styleNavbar.titleText}>{titleData.title}</Text>
            </View>
            <Text style={styleNavbar.subtitle}>Explore as opções disponíveis e aproveite ao máximo!</Text>
        </View>
    )
};

export default Navbar;