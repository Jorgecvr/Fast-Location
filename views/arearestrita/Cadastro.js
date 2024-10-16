import React , {useEffect, useState} from 'react';
import { Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';

export default function Cadastro({navigation})
{
    
    return(
        <View>
             <MenuAreaRestrita title='Cadastro' navigation={navigation} />
        </View>
    );
}