import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginInterface from '../Login';
import BottomMenu from '../BottomMenu';

// Navegação Principal
const Stack = createStackNavigator();

export default function Template() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginInterface} />
        <Stack.Screen name="HomeTabs" component={BottomMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
