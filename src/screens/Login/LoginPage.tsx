import React, { FunctionComponent } from 'react';
import {
  NativeBaseProvider,
  Button,
  FormControl,
  Input,
  Pressable,
  Icon,
  VStack,
  useToast,
  Toast,
  Image,
  Link,
  Center,
  ScrollView,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/core';
import { Login } from '../../types/Login';
import AuthService from '../../service/AuthService/AuthService';
import PessoaService from '../../service/PessoaService/PessoaService';
import { MaterialIcons } from '@expo/vector-icons';

const validate = () => {
  //todo
};

interface Props {}

const LoginPage: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);

  async function handleLogin() {
    try {
      await AuthService.login(login);
      setTimeout(() => {
        PessoaService.getPrincipaisInformacoesDoUsuario();
        navigation.navigate('Home');
        Toast.show({
          description: 'Login realizado com sucesso',
        });
      }, 1000);
    } catch (error) {
      console.log(error);
      Toast.show({
        description: 'Erro ao autenticar usuário',
      });
    }
  }

  const [login, setLogin] = React.useState<Login>({
    email: '',
    password: '',
  });

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
        <VStack mr="auto" ml="auto" mt="10">
          <Center>
            <Image
              alt=" "
              size={'56'}
              source={require('./assets/logo.png')}
            ></Image>
          </Center>
          <FormControl isRequired>
            <FormControl.Label>{'Email'}</FormControl.Label>
            <Input
              w="64"
              p={2}
              placeholder={'Digite aqui...'}
              onChangeText={(value: any) => {
                setLogin({ ...login, email: value });
              }}
            ></Input>
          </FormControl>

          <FormControl>
            <FormControl.Label>{'Senha'}</FormControl.Label>
            <Input
              type={show ? 'text' : 'password'}
              w="64"
              p={2}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? 'visibility' : 'visibility-off'}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder={'Digite aqui...'}
              onChangeText={(value: any) => {
                setLogin({ ...login, password: value });
              }}
            ></Input>
          </FormControl>

          <Button
            mt={10}
            p={4}
            onPress={() => {
              handleLogin();
            }}
          >
            Entrar
          </Button>

          <Link
            mt={8}
            _text={{
              color: 'primary.600',
            }}
            isUnderlined
            onPress={() => navigation.navigate('UsuarioForm', { id: 'Novo' })}
          >
            Ainda não tem uma conta? Cadastre-se.
          </Link>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default LoginPage;
