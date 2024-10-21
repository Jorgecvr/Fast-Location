import React , {useEffect, useState} from 'react';
import { Text, View, Button, BackHandler, Alert} from 'react-native';
import { css } from '../../assets/css/Css';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Profile,Cadastro,Edicao} from '../index';
// Tirei o icon pq tava dando erro, no lugar use Font Awesome abaixo import { Icon } from 'react-native-vector-icons/dist/FontAwesome';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default function AreaRestrita({navigation})
{
    const Tab = createMaterialBottomTabNavigator();
    const [user, setUser]=useState(null);

    useEffect(()=>{
        async function getUser() {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    }, []);

    useEffect(() => {
        const backAction = () => {
          Alert.alert('Alerta!', 'Deseja mesmo sair do App?', [
            {
              text: 'Não',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'Sim', onPress: () => {
                navigation.navigate('Home'),
                BackHandler.exitApp()
                }
            },
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);

    return(
        <Tab.Navigator
            activeColor='#999'
            inactiveColor= '#fff'
            barStyle={css.area__tab}
        >
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon:()=>(
                        <FontAwesome name="users" size={20} color="#999" />
                    )
                }}
                
            />
            <Tab.Screen 
                name="Cadastro" 
                component={Cadastro}
                options={{
                    tabBarIcon:()=>(
                        <FontAwesome name="archive" size={20} color="#999" />
                    )
                }}
            />
            <Tab.Screen 
                name="Edicao" 
                component={Edicao}
                options={{
                    tabBarIcon:()=>(
                        <FontAwesome name="edit" size={20} color="#999" />
                    )
                }}
            />
        </Tab.Navigator>
    );
}