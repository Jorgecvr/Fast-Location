import React , {useEffect, useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { css } from '../../assets/css/Css';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import config from "../../config/config";

export default function Profile({navigation})
{
    const [idUser, setIdUser] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setconfNovaSenha] = useState(null);
    const [msg, setMsg] = useState(null);

    useEffect(()=>{
        async function getIdUser() {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
    })

    async function sendForm() {
        let response=await fetch(`${config.urlRoot}verifyPass`,{
            method:'POST',
            body:JSON.stringify({
                id: idUser,
                senhaAntiga: senhaAntiga,
                novaSenha: novaSenha,
                confNovaSenha: confNovaSenha
            }),
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let json=await response.json();
        setMsg(json);
    }

    return(
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Perfil' navigation={navigation} />

            <View>
                <Text>{msg}</Text>
                <TextInput placeholder='Senha Antiga: ' onChangeText={text=>setSenhaAntiga(text)}/>
                <TextInput placeholder='Nova Senha: ' onChangeText={text=>setNovaSenha(text)}/>
                <TextInput placeholder='Confirmação da Nova Senha: ' onChangeText={text=>setconfNovaSenha(text)}/>

                <TouchableOpacity onPress={()=>sendForm()}>
                    <Text>Trocar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}