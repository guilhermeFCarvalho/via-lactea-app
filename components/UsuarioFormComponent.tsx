import React from 'react';
import { Text, Box, Center, FormControl, Input, NativeBaseProvider, Stack, Button } from 'native-base';
import { viaLacteaTheme } from '../theme/ColorTheme';
import InputComponent from './InputComponent';
import PasswordInputComponent from './PasswordInputComponent';

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
                    <InputComponent placeholder={'joge@hmail.com'} label={'E-mail'} onChangeText={(value: any) => { setUsuario({ ...usuario, email: value }) }} />
                    <PasswordInputComponent label={"Senha"} onChangeText={(value: any) => { setUsuario({ ...usuario, senha: value }) }} />
                    <PasswordInputComponent label={'Confirmar senha'} onChangeText={(value: any) => { setUsuario({ ...usuario, senha: value }) }} />
                </FormControl>
                <Button onPress={()=>{console.log(usuario)}}>Salvar</Button>
            </Center>
        </NativeBaseProvider>
    )
}