import React, { FunctionComponent } from 'react';
import {
  Text,
  Box,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  Stack,
  Button,
} from 'native-base';
import { viaLacteaTheme } from '../config/theme/ColorTheme';
import InputComponent from './InputComponent';

const validate = () => {
  //todo
};

interface EnderecoComponentProps {
  onSubmit: any;
}

const EnderecoFormComponent: FunctionComponent<EnderecoComponentProps> = (
  props,
) => {
  const [endereco, setEndereco] = React.useState({});

  const handleSubmit = () => {
    props.onSubmit(endereco);
  };

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Center px="8%" justifyContent={'space-between'}>
        <FormControl isRequired>
          <FormControl.Label>{'Endereço'}</FormControl.Label>
          <Input
            p={2}
            placeholder={'Rodovia do Café, 23'}
            onChangeText={(value: any) => {
              setEndereco({ ...endereco, rua: value });
            }}
          ></Input>

          <Stack direction={'row'} justifyContent={'space-between'}>
            <Stack width={'50%'}>
              <FormControl.Label>{'CEP'}</FormControl.Label>
              <Input
                p={2}
                placeholder={'00000-000'}
                onChangeText={(value: any) => {
                  setEndereco({ ...endereco, cep: value });
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
              setEndereco({ ...endereco, cidae: value });
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
