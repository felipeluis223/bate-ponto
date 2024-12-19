import { View } from "react-native";
import { styleNotification } from "./style";
import Shortly from "../Home/Components/Shortly";

const Notification = ()=>{
    return(
        <View style={styleNotification.fullbox}>
            <Shortly />
        </View>
    );
};

export default Notification;