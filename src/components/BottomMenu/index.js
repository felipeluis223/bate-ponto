import Home from "../Home";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from "../../styles/colors";

// Navegação de Abas
const Tab = createBottomTabNavigator();

const BottomMenu = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = 'home-outline';
            } else if (route.name === 'Registrar') {
              iconName = 'add-circle-outline';
            }
            else if(route.name === "Histórico"){
              iconName = 'file-tray-stacked-outline'
            }
            else if(route.name === "Análise"){
              iconName = 'stats-chart-outline'
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
            backgroundColor: colors.darkBlack,
            borderColor: null, height: 70,
            paddingTop: 10
          }
        })}
      >
        <Tab.Screen name="Home" component={Home}  options={{headerShown: false}}/>
        <Tab.Screen name="Registrar" component={Home}  options={{headerShown: false}}/>
        <Tab.Screen name="Histórico" component={Home}  options={{headerShown: false}}/>
        <Tab.Screen name="Análise" component={Home}  options={{headerShown: false}}/>
      </Tab.Navigator>
    );
  };

export default BottomMenu;
