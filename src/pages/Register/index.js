import { View, Text } from "react-native";
import { styleRegister } from "./style";
import Header from "./Components/Header";
import Timer from "./Components/Timer";

const Register = ()=>{
    return(
        <View style={styleRegister.fullbox}>
            <Header />
            <Timer />
        </View>
    );
};

export default Register;