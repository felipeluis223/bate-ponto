import { View } from "react-native";
import { styleHome } from "./style";
import Navbar from "../Navbar/navbar";
import HomeCards from "../HomeCards";

const Home = ()=>{
    const data = [
        {
            title: "Entrada/Saída",
            description: "Registrar horário de trabalho",
            route: "Registrar"
        },
        {
            title: "Lembrete",
            description: "Agende um Lembrete para Registrar Seu Ponto",
            route: "Notification"
        },
        {
            title: "Visão Geral",
            description: "Acessar gráfico geral",
            route: "Análise"
        },
        {
            title: "Histórico",
            description: "Acessar o hitórico de registros",
            route: "Histórico"
        },
    ]

    return (
        <View style={styleHome.container}>
            <Navbar />
            <View style={styleHome.containerCard}>
                {
                    data.map((index, key)=>(
                        <HomeCards title={index.title} description={index.description} route={index.route} key={key}/>
                    ))
                }
            </View>
        </View>
    )
};

export default Home;