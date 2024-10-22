import React , {useEffect, useState} from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import { Camera, CameraView } from 'expo-camera';
import { css } from '../../assets/css/Css';
import { TouchableOpacity } from 'react-native';

export default function Edicao({navigation})
{
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');
    const [displayForm, setDisplayForm] = useState('none');
    const [code, setCode] = useState(null);
    const [product, setProduct] = useState(null);
    const [localization, setLocalization] = useState(null);

    useEffect(()=>{
        (async () =>{
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    },[]);

    async function handleBarCodeScanned ({ type, data }){
        setScanned(true);
        setDisplayQR('none');
        setDisplayQR('none');
        setDisplayForm('flex');
        setCode({data});
    };

    async function sendForm() {
        
    }

    return(
        <View>
             <MenuAreaRestrita title='Edição' navigation={navigation} />
        
            <CameraView
                onBarCodeScanned={scanned ? undefined : value=>handleBarCodeScanned(value)}
                style={css.qr__code(displayQR)}
            />

            <View style={css.qr__form(displayForm)}>
                <Text>Código do Produto: {code}</Text>
                <View style={css.login__input}>
                    <TextInput 
                        placeholder='Nome do Produto:'
                        onChangeText={text=>setProduct(text)}
                        value={product}
                    />
                </View>

                <View style={css.login__input}>
                    <TextInput 
                        placeholder='Localização do Produto:'
                        onChangeText={text=>setLocalization(text)}
                        value={setLocalization}
                    />
                </View>

                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                     <Text>Atualizar</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
}