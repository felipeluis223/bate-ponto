import { View } from "react-native";
import { styleHome } from "./style";
import Navbar from "../Navbar/navbar";
import HomeCards from "../HomeCards";

const Home = ()=>{
    const data = [
        {
            title: "Entrada/Saída",
            description: "Registrar horário de trabalho"
        },
        {
            title: "Lembrete",
            description: "Agende um Lembrete para Registrar Seu Ponto"
        },
        {
            title: "Visão Geral",
            description: "Acessar gráfico geral"
        },
        {
            title: "Histórico",
            description: "Acessar o hitórico de registros"
        },
    ]

    return (
        <View style={styleHome.container}>
            <Navbar />
            <View style={styleHome.containerCard}>
                {
                    data.map((index, key)=>(
                        <HomeCards title={index.title} description={index.description}  key={key}/>
                    ))
                }
            </View>
        </View>
    )
};

export default Home;