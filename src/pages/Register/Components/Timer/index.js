import { View, Text } from "react-native";
import { styleTimer } from "./style";

const Timer = ()=>{
    return(
        <View style={styleTimer.container}>
            <Text style={styleTimer.date}>19/10/2024</Text>
            <Text style={styleTimer.time}>09:10:58</Text>
        </View>
    );
}

export default Timer;