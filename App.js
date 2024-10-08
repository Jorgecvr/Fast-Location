import React, {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Alert } from 'react-native';
import page from './views/page';
import { css } from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home,Login,Rastreio} from './views';
import AreaRestrita from './views/arearestrita/AreaRestrita';

export default function App() {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" 
                      component={Home} 
                      options={{
                                  title: "Fast Location", 
                                  headerStyle:{backgroundColor: "#F58634"},
                                  headerTintColor: '#333', 
                                  headerTitleStyle:{fontWeight:'bold', alignSelf:'center'}}}/>
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}