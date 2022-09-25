import React from 'react';
import { Text, Box, Center, FormControl, Input, NativeBaseProvider, Stack, Button } from 'native-base';
import { viaLacteaTheme } from '../theme/ColorTheme';
import InputComponent from './InputComponent';

const validate = () => {
    //todo
}


export default function UsuarioForm() {
    const [usuario, setUsuario] = React.useState({});

    return (
        <NativeBaseProvider theme={viaLacteaTheme}>
            <Center h="100%" p="8%" justifyContent={'space-between'}>
                <FormControl isRequired>
                    <InputComponent placeholder={'Jorge da Silva Dias'} label={'Nome completo'} onChangeText={(value: any) => { setUsuario({ ...usuario, nome: value }) }} />
                    <InputComponent placeholder={'Rodovia do Café, 23'} label={'E-mail'} onChangeText={(value: any) => { setUsuario({ ...usuario, email: value }) }} />
                    <InputComponent label={'Senha'} password onChangeText={(value: any) => { setUsuario({ ...usuario, senha: value }) }} />
                    <InputComponent label={'Confirmar senha'} password onChangeText={(value: any) => { setUsuario({ ...usuario, senha: value }) }} />
                </FormControl>
                <Button onPress={()=>{validate}}>Salvar</Button>
            </Center>
        </NativeBaseProvider>
    )
}