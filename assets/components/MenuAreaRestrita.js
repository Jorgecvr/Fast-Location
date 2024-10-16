import React from "react";
import { Text, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { css } from '../../assets/css/Css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function MenuAreaRestrita(props){

    async function logout() {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }

    return(
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2} onPress={()=>props.navigation.navigate('Home')}>
                <FontAwesome name="home" size={20} color="#999" />
            </TouchableOpacity>

            <Text style={css.area__title}>{props.title}</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <FontAwesome name="sign-out" size={20} color="#999" />
            </TouchableOpacity>
        </View>
    );
}