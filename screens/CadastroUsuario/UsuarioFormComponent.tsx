import React from 'react';
import {
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  Button,
} from 'native-base';
import { viaLacteaTheme } from '../../src/config/theme/ColorTheme';
import InputComponent from '../../src/components/InputComponent';
import PasswordInputComponent from '../../src/components/PasswordInputComponent';

const validate = () => {
  //todo
};

export default function UsuarioForm() {
  const [usuario, setUsuario] = React.useState({});
  const [senha, setSenha] = React.useState('');

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Center px="8%" pt="8%" justifyContent={'space-between'}>
        <FormControl isRequired>
          <FormControl.Label>Nome completo</FormControl.Label>
          <Input
            placeholder="Jorge da Silva Dias"
            onChangeText={(value: any) => {
              setUsuario({ ...usuario, nome: value });
            }}
          ></Input>

          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="jorge@email.com"
            onChangeText={(value: any) => {
              setUsuario({ ...usuario, email: value });
            }}
          ></Input>

          <FormControl.Label>Senha</FormControl.Label>
          <Input
            onChangeText={(value: any) => {
              setSenha(value);
            }}
          ></Input>

          <FormControl.Label>Confirmar senha</FormControl.Label>
          <Input
            onChangeText={(value: any) => {
              value == senha
                ? setUsuario({ ...usuario, senha: value })
                : console.error('senha nao bate');
            }}
          ></Input>
        </FormControl>
      </Center>
      <Button
        m="8%"
        onPress={() => {
          console.log(usuario);
        }}
      >
        Salvar
      </Button>
    </NativeBaseProvider>
  );
}
