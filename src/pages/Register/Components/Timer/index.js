import { View, Text } from "react-native";
import { styleTimer } from "./style";
import { useEffect, useState } from "react";

const Timer = ()=>{
    const [ currentDate, setCurrentDate ] = useState(new Date());
    
    useEffect(()=>{
        // Atualiza o estado a cada segundo
        const timer = setInterval(()=>{
            setCurrentDate(new Date())
        }, 1000);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(timer);
    },[]);

    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();


    return(
        <View style={styleTimer.container}>
            <Text style={styleTimer.date}>{formattedDate}</Text>
            <Text style={styleTimer.time}>{formattedTime}</Text>
        </View>
    );
}

export default Timer;