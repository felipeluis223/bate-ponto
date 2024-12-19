import { View, Text } from "react-native";
import { styleHeader } from "./style";

const Header = ()=> {
    return (
        <View style={styleHeader.fullbox}>
            <Text style={styleHeader.title}>Registrar Entrada/Saída</Text>
        </View>
    );
};

export default Header;