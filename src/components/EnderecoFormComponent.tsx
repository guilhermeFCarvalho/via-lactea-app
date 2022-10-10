import React, { FunctionComponent } from 'react';
import {
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  Stack,
  Button,
} from 'native-base';


import { viaLacteaTheme } from '../config/theme/ColorTheme';

const validate = () => {
  //todo
};

interface Props {
  onSubmit: any;
}



const EnderecoFormComponent: FunctionComponent<Props> = (props) => {
  const [endereco, setEndereco] = React.useState({});
  const [cep,setCep] = React.useState('');

  const handleSubmit = () => {
    props.onSubmit(endereco);
  };

  

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Center px="8%" justifyContent={'space-between'}>
        
          <FormControl isRequired>
            <FormControl.Label>{'Rua/Estrada'}</FormControl.Label>
            <Input
              p={2}
              placeholder={'Rodovia do Café'}
              onChangeText={(value: any) => {
                setEndereco({ ...endereco, rua: value });
              }}
            ></Input>
            <FormControl.Label>{'Bairro'}</FormControl.Label>
            <Input
              p={2}
              placeholder={'Capivari'}
              onChangeText={(value: any) => {
                setEndereco({ ...endereco, bairro: value });
              }}
            ></Input>
            <FormControl.Label>{'CEP'}</FormControl.Label>
                <Input
                  p={2}
                  placeholder={'00000-000'}
                  onChangeText={(value: any) => {
                    setEndereco({ ...endereco, cep: value });
                  }}
                ></Input>

            <Stack direction={'row'} justifyContent={'space-between'}>
              <Stack width={'50%'}>
                <FormControl.Label>{'numero'}</FormControl.Label>
                <Input
                  p={2}
                  placeholder={'0000'}
                  onChangeText={(value: any) => {
                    setEndereco({ ...endereco, numero: value });
                  }}
                ></Input>
              </Stack>

              <Stack>
                <FormControl.Label>{'Estado'}</FormControl.Label>
                <Input
                  p={2}
                  placeholder={'AL'}
                  onChangeText={(value: any) => {
                    setEndereco({ ...endereco, estado: value });
                  }}
                ></Input>
              </Stack>
            </Stack>

            <FormControl.Label>{'Cidade'}</FormControl.Label>
            <Input
              p={2}
              placeholder={'Maringá'}
              onChangeText={(value: any) => {
                setEndereco({ ...endereco, cidade: value });
              }}
            ></Input>
          </FormControl>
       
      </Center>
      <Button m={'8%'} onPress={handleSubmit}>
        Salvar
      </Button>
    </NativeBaseProvider>
  );
};
export default EnderecoFormComponent;
