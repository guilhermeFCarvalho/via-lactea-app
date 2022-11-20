import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Box,
  Center,
  NativeBaseProvider,
  VStack,
  Text,
  HStack,
  ScrollView,
  Button,
  Progress,
} from 'native-base';
import React, { useEffect } from 'react';
import { FunctionComponent } from 'react';
import CardButtonComponent from '../../components/CardButtonComponent';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import UsuarioService from '../../service/UsuarioService/UsuarioService';

interface Props {
  navigation: any;
  route: any;
}

const FinalizarCadastro: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  const route = useRoute();

  const salvarUsuario = () => {
    UsuarioService.salvar({
      email: route.params.usuario.email,
      password: route.params.usuario.senha,
      pessoaFisica: {
        propriedades: [
          {
            car: route.params.fazenda.car,
            telefone: route.params.fazenda.telefone,
            fazenda: {
              nomeDaFazenda: route.params.fazenda.nome,
              endereco: {
                endereco: route.params.endereco.estado,
                rua: route.params.endereco.rua,
                numero: route.params.endereco.numero,
                bairro: route.params.endereco.bairro,
                cidade: route.params.endereco.cidade,
                cep: route.params.endereco.cep,
              },
            },
          },
        ],
        telefone: route.params.usuario.telefone,
        nome: route.params.usuario.nome,
        sobrenome: route.params.usuario.sobrenome,
        cpf: route.params.usuario.cpf,
      },
    }).then(() => navigation.navigate('LoginPage'));
  };

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
        <VStack space={6} p="20%">
          <Text textAlign={'center'} fontSize={'lg'} fontWeight={'medium'}>
            Deseja finalizar o cadastro?
          </Text>
          <HStack justifyContent={'space-around'}>
            <Button
              onPress={() => {
                salvarUsuario();
              }}
            >
              Sim
            </Button>
            <Button
              bg={'danger.500'}
              onPress={() => {
                navigation.navigate('LoginPage');
              }}
            >
              Não
            </Button>
          </HStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default FinalizarCadastro;
