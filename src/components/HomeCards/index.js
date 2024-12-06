import { View, Text, TouchableOpacity } from "react-native";
import { styleHomeCards } from "./style";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from "../../styles/colors";
import { useNavigation } from '@react-navigation/native';

const HomeCards = ({title, description, route}) => {
    const navigation = useNavigation();
    const handleNavigation = ()=>{
        navigation.navigate(route)
    }
    return(
        <TouchableOpacity style={styleHomeCards.container} onPress={handleNavigation}>
            <View style={styleHomeCards.containerCard}>
                <Text style={styleHomeCards.title}>{title}</Text>
                <Text style={styleHomeCards.description}>{description}</Text>
            </View>

            <View style={styleHomeCards.containerIcon}>
                <Ionicons name={"arrow-forward-outline"} size={30} color={colors.white} />
            </View>
        </TouchableOpacity>
    );
};

export default HomeCards;