import { View, Text } from "react-native";
import { styleHomeCards } from "./style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/colors";

const HomeCards = ({title, description, route}) => {
    return(
        <View style={styleHomeCards.container}>
            <View style={styleHomeCards.containerCard}>
                <Text style={styleHomeCards.title}>{title}</Text>
                <Text style={styleHomeCards.description}>{description}</Text>
            </View>

            <View style={styleHomeCards.containerIcon}>
                <Ionicons name={"arrow-forward-outline"} size={30} color={colors.white} />
            </View>
        </View>
    );
};

export default HomeCards;