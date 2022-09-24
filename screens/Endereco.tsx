import React from 'react';
import { Text, Box, Center, FormControl, Input, NativeBaseProvider, Stack, Button } from 'native-base';
import { viaLacteaTheme } from '../theme/ColorTheme';
import InputComponent from '../components/InputComponent';

const validate = () => {
    //todo
}


export default function EnderecoForm() {
    const [endereco, setEndereco] = React.useState({});

    return (
        <NativeBaseProvider theme={viaLacteaTheme}>
            <Center h="100%" p="8%" justifyContent={'space-between'}>
                <FormControl isRequired>
                    <InputComponent placeholder={'Rodovia do Café, 23'} label={'Endereço'} onChangeText={(value: any) => { setEndereco({ ...endereco, rua: value }) }} />
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <InputComponent placeholder={'0000000'} label={'CEP'} onChangeText={(value: any) => { setEndereco({ ...endereco, cep: value }) }} />
                        <InputComponent placeholder={'AL'} label={'Estado'} onChangeText={(value: any) => { setEndereco({ ...endereco, estado: value }) }} />
                    </Stack>
                    <InputComponent placeholder={'Maringá'} label={'Cidade'} onChangeText={(value: any) => { setEndereco({ ...endereco, cidade: value }) }} />
                </FormControl>
                <Button onPress={()=>{console.log(endereco)}}>Salvar</Button>
            </Center>
        </NativeBaseProvider>
    )
}