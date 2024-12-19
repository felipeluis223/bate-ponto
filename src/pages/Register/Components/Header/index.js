import { View, Text } from "react-native";
import { styleHeader } from "./style";

const Header = ()=> {
    return (
        <View style={styleHeader.fullbox}>
            <Text style={styleHeader.title}>Entrada e Saída</Text>
            <Text style={styleHeader.subtitle}>Controle Simples e Eficiente de Horas Trabalhadas</Text>
        </View>
    );
};

export default Header;