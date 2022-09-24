import React, { FunctionComponent } from 'react';
import { Text, Box, Center, FormControl, Input, NativeBaseProvider, Stack, Button } from 'native-base';
import { viaLacteaTheme } from '../theme/ColorTheme';
import InputComponent from './InputComponent';

const validate = () => {
    //todo
}

interface EnderecoComponentProps {
    parentObject: Object;

}

const EnderecoComponent: FunctionComponent<EnderecoComponentProps> = (props) => {
    const [endereco, setEndereco] = React.useState({});
    
    return (
        <NativeBaseProvider theme={viaLacteaTheme}>
            <FormControl isRequired>
                <InputComponent placeholder={'Rodovia do Café, 23'} label={'Endereço'} onChangeText={(value: any) => { setEndereco({ ...endereco, rua: value }) }} />
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <InputComponent placeholder={'0000000'} label={'CEP'} onChangeText={(value: any) => { setEndereco({ ...endereco, cep: value }) }} />
                    <InputComponent placeholder={'AL'} label={'Estado'} onChangeText={(value: any) => { setEndereco({ ...endereco, estado: value }) }} />
                </Stack>
                <InputComponent placeholder={'Maringá'} label={'Cidade'} onChangeText={(value: any) => { setEndereco({ ...endereco, cidade: value }) }} />
            </FormControl>
            <Button mt={"4%"} onPress={()=>{console.log({...props.parentObject, endereco})}}> Salvar</Button>
        </NativeBaseProvider>

    );
}

export default EnderecoComponent;