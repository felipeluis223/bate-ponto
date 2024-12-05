import { Text, View } from "react-native";
import { styleHome } from "./style";
import Navbar from "../Navbar/navbar";

const Home = ()=>{
    return (
        <View style={styleHome.container}>
            <Navbar />
            
        </View>
    )
};

export default Home;