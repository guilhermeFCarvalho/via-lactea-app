import React, { FunctionComponent } from 'react';
import {
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  Button,
  ScrollView,
  Progress,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';

import EmailValidator from 'email-validator';
import StepsComponent from '../../components/StepsComponent';
import { useNavigation, useRoute } from '@react-navigation/native';
import PasswordInputComponent from '../../components/PasswordInputComponent';

interface Props {}

const UsuarioForm: FunctionComponent<Props> = (props) => {
  const [usuario, setUsuario] = React.useState({});
  const [senha, setSenha] = React.useState('');
  const [erros, setErros] = React.useState({});

  const navigation = useNavigation();
  const route = useRoute();

  const isNew = () => {
    return route.params.id === 'Novo';
  };

  const goToFazendaForm = () => {
    validate() && isNew()
      ? navigation.navigate('FazendaForm', usuario)
      : console.log(erros);
  };

  const validatePassword = (value) => {
    value == senha
      ? setUsuario({ ...usuario, senha: value })
      : setErros({ ...erros, senha: 'senha não bate' });
  };

  const validate = () => {
    if (usuario.nome === undefined || usuario.nome === '') {
      setErros({ ...erros, nome: 'Informe um nome' });
      return false;
    }
    if (usuario.sobrenome === undefined || usuario.sobrenome === '') {
      setErros({ ...erros, sobrenome: 'Informe sobrenome' });
      return false;
    }
    if (usuario.telefone === undefined || usuario.telefone === '') {
      setErros({ ...erros, telefone: 'Informe um telefone' });
      return false;
    }
    if (!EmailValidator.validate(usuario.email)) {
      setErros({ ...erros, email: 'Informe um e-mail válido' });
      return false;
    }
    if (usuario.senha === undefined || usuario.senha === '') {
      setErros({ ...erros, senha: 'senha inválida' });
      return false;
    }
    if (usuario.cpf === undefined || usuario.cpf === '') {
      setErros({ ...erros, cpf: 'cpf inválido' });
      return false;
    }
    return true;
  };
  const showProgress = (value) => {
    if (route.params.id === 'Novo') {
      return <Progress value={value}></Progress>;
    }
  };

  React.useEffect(() => {
    setErros({});
  }, [usuario]);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
        {showProgress(1)}
        <Center px="8%" pt="2%" justifyContent={'space-between'}>
          <FormControl isRequired isInvalid={'nome' in erros}>
            <FormControl.Label>Nome</FormControl.Label>
            <Input
              placeholder="Jorge"
              onChangeText={(value: any) => {
                setUsuario({ ...usuario, nome: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.nome}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={'sobrenome' in erros}>
            <FormControl.Label>Sobrenome</FormControl.Label>
            <Input
              placeholder="Silva Dias"
              onChangeText={(value: any) => {
                setUsuario({ ...usuario, sobrenome: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>
              {erros.sobrenome}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={'cpf' in erros}>
            <FormControl.Label>CPF</FormControl.Label>
            <Input
              placeholder="000.000.000-90"
              onChangeText={(value: any) => {
                setUsuario({ ...usuario, cpf: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.cpf}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'telefone' in erros}>
            <FormControl.Label>Telefone</FormControl.Label>
            <Input
              placeholder="(00)90000-0000"
              onChangeText={(value: any) => {
                setUsuario({ ...usuario, telefone: value });
              }}
            ></Input>

            <FormControl.ErrorMessage>
              {erros.telefone}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={'email' in erros}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
              placeholder="jorge@email.com"
              onChangeText={(value: any) => {
                setUsuario({ ...usuario, email: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.email}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'senha' in erros}>
            <PasswordInputComponent
              onChangeText={(value: any) => {
                setSenha(value);
              }}
              label={'Senha'}
            ></PasswordInputComponent>
            <FormControl.ErrorMessage>{erros.senha}</FormControl.ErrorMessage>

            <PasswordInputComponent
              onChangeText={(value: any) => {
                validatePassword(value);
              }}
              label={'Confirmar Senha'}
            ></PasswordInputComponent>
            <FormControl.ErrorMessage>{erros.senha}</FormControl.ErrorMessage>
          </FormControl>
        </Center>
        <Button
          m="8%"
          onPress={() => {
            goToFazendaForm();
          }}
        >
          Próximo
        </Button>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default UsuarioForm;
