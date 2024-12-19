import { View } from "react-native";
import { styleChart } from "./style";
import Shortly from '../Home/Components/Shortly'


const Chart = ()=>{
    return(
        <View style={styleChart.fullbox}>
            <Shortly />
        </View>
    );
};

export default Chart;