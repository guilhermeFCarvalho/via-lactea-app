import React, { FunctionComponent } from 'react';
import {
  NativeBaseProvider,
  Button,
  FormControl,
  Input,
  Container,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';

import { useNavigation } from '@react-navigation/core';
import { Login } from '../../types/Login';
import axios from 'axios';

const validate = () => {
  //todo
};

interface Props {}

const LoginPage: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function handleLogin() {
    axios.post(`http://localhost:8080/api/auth/signin`, login).then((response) => console.log(response));
    
  } 


  const [login, setLogin] = React.useState<Login>({
    username: '',
    password: '',
  });

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Container mr="auto" ml="auto" mt="5">
        <FormControl isRequired>

          <FormControl.Label>{'Email'}</FormControl.Label>
          <Input
            w="64"
            p={2}
            placeholder={'Digite aqui...'}
            onChangeText={(value: any) => {
              setLogin({ ...login, username: value });
            }}
          ></Input>

          <FormControl.Label>{'Senha'}</FormControl.Label>
          <Input
            type={show ? 'text' : 'password'}

            w="64"
            p={2}
            InputRightElement={
              <Button
                size="xs"
                rounded="none"
                w="1/6"
                h="full"
                onPress={handleClick}
              >
                {show ? 'Esconder' : 'Mostrar'}
              </Button>
            }
            placeholder={'Digite aqui...'}
            onChangeText={(value: any) => {
              setLogin({ ...login, password: value });
            }}
          ></Input>
          

          <Button
            m={5}
            onPress={() => {
              handleLogin()
            }}
          >
            Entrar
          </Button>
        </FormControl>
      </Container>
    </NativeBaseProvider>
  );
};

export default LoginPage;
