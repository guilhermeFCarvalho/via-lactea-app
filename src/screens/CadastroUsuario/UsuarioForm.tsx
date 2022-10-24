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

interface Props {
  navigation: any;
}

const UsuarioForm: FunctionComponent<Props> = (props) => {
  const [usuario, setUsuario] = React.useState({});
  const [senha, setSenha] = React.useState('');
  const [erros, setErros] = React.useState({});

  React.useEffect(() => {
    setErros({});
  }, [usuario]);

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

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Center w={'100%'} h={"10%"}>
        <Progress value={33} maxW={'80%'} />
      </Center>
      <ScrollView>
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
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              onChangeText={(value: any) => {
                setSenha(value);
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.senha}</FormControl.ErrorMessage>
            <FormControl.Label>Confirmar senha</FormControl.Label>
            <Input
              onChangeText={(value: any) => {
                value == senha
                  ? setUsuario({ ...usuario, senha: value })
                  : setErros({ ...erros, senha: 'senha não bate' });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.senha}</FormControl.ErrorMessage>
          </FormControl>
        </Center>
        <Button
          m="8%"
          onPress={() => {
            validate()
              ? props.navigation.navigate('FazendaForm', usuario)
              : console.log(erros);
          }}
        >
          Próximo
        </Button>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default UsuarioForm;
