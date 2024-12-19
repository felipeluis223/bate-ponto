import { View } from "react-native";
import { styleHistoric } from "./style";
import Shortly from "../Home/Components/Shortly";

const Historic = ()=>{
    return(
        <View style={styleHistoric.fullbox}>
            <Shortly />
        </View>
    );
};

export default Historic;