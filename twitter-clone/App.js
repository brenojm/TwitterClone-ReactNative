import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FabButton from './src/components/Botao';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';
import { LoginStart } from './src/screens/LoginStart';
import { LoginFinish } from './src/screens/LoginFinish';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function MyRoutes() {
  return <Routes/>
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginStart" component={LoginStart} options={{headerShown: false}} />
      <Stack.Screen name="LoginFinish" component={LoginFinish} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={MyRoutes} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}


