import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen'
import HomeScreen from './HomeScreen'
import UserScreen from './UserScreen'


const Tab = createBottomTabNavigator();
//const Stack = createNativeStackNavigator()

export default function App() {
  return (
     <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

