import React from 'react';
import { Text, Box, Center, FormControl, Input, NativeBaseProvider, Stack, Button } from 'native-base';
import { viaLacteaTheme } from '../theme/ColorTheme';
import InputComponent from './InputComponent';

const validate = () => {
    //todo
}


export default function EnderecoForm() {
    const [endereco, setEndereco] = React.useState({});

    return (
        <NativeBaseProvider theme={viaLacteaTheme}>
            <Center p="8%" justifyContent={'space-between'}>
                <FormControl isRequired>

                    <FormControl.Label>{"Endereço"}</FormControl.Label>
                    <Input p={2} placeholder={"Rodovia do Café, 23"} onChangeText={(value: any) => { setEndereco({ ...endereco, rua: value }) }}></Input>

                    <Stack direction={'row'} justifyContent={"space-between"} >

                        <Stack width={"50%"}>
                            <FormControl.Label>{"CEP"}</FormControl.Label>
                            <Input p={2} placeholder={"00000-000"} onChangeText={(value: any) => { setEndereco({ ...endereco, cep: value }) }}></Input>
                        </Stack>

                        <Stack >
                            <FormControl.Label>{"Estado"}</FormControl.Label>
                            <Input p={2} placeholder={"AL"} onChangeText={(value: any) => { setEndereco({ ...endereco, estado: value }) }}></Input>
                        </Stack>

                    </Stack>

                    <FormControl.Label>{"Cidade"}</FormControl.Label>
                    <Input p={2} placeholder={"Maringá"} onChangeText={(value: any) => { setEndereco({ ...endereco, cidae: value }) }}></Input>

                </FormControl>
            </Center>
            <Button onPress={() => { }}>Salvar</Button>
        </NativeBaseProvider>
    )
}