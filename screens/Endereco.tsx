import React from 'react';
import { Box, Center, FormControl, Input, NativeBaseProvider, Stack } from 'native-base';
import { viaLacteaTheme } from '../theme/ColorTheme';
import InputComponent from '../components/InputComponent';


export default function Endereco() {
    return (
        <NativeBaseProvider theme={viaLacteaTheme}>
            <Center h="100%" px="2%">
                <FormControl isRequired>
                    <InputComponent placeholder={'Rodovia do Café, 23'} label={'Endereço'} />
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <InputComponent placeholder={'0000000'} label={'CEP'} />
                        <InputComponent placeholder={'AL'} label={'Estado'} />
                    </Stack>
                    <InputComponent placeholder={'Maringá'} label={'Cidade'} />
                </FormControl>
            </Center>
        </NativeBaseProvider>
    )
}