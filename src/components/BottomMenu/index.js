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
              iconName = 'home';
            } else if (route.name === 'Settings') {
              iconName = 'settings';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.white,
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
            backgroundColor: colors.darkBlack,
            borderColor: null, height: 70,
            paddingTop: 10,
            
          }
        })}
      >
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    );
  };

export default BottomMenu;
