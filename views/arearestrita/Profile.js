import React , {useEffect, useState} from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { css } from '../../assets/css/Css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';


export default function Profile({navigation})
{


    return(
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />
        </View>
    );
}