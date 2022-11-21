import { useNavigation, useRoute } from '@react-navigation/native';
import {
  NativeBaseProvider,
  VStack,
  Text,
  HStack,
  ScrollView,
  Button,
  Divider,
} from 'native-base';
import React from 'react';
import { FunctionComponent } from 'react';
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
        <VStack>
          <VStack space={2} padding={'10%'} alignItems={'center'}>
          <Text textAlign={'center'} fontSize={'lg'} fontWeight={'medium'}>
              Confirme seus dados
            </Text>
            <Divider></Divider>
            <Text>
              Nome: {route.params.usuario.nome} {route.params.usuario.sobrenome}
            </Text>
            <Text>Email: {route.params.usuario.email}</Text>
            <Text>CPF: {route.params.usuario.cpf}</Text>
            <Text>Telefone: {route.params.usuario.cpf}</Text>
            <Divider></Divider>
            <Text>Nome da fazenda: {route.params.fazenda.nome}</Text>
            <Text>Telefone da fazenda: {route.params.fazenda.telefone}</Text>
            <HStack space={2}>
              <Text>Rua: {route.params.endereco.rua}</Text>
              <Text>Numero: {route.params.endereco.numero}</Text>
            </HStack>
            <Text>Bairro: {route.params.endereco.bairro}</Text>
            <Text>CEP: {route.params.endereco.cep}</Text>
            <HStack space={2}>
              <Text>Cidade: {route.params.endereco.cidade}</Text>
              <Text>Estado: {route.params.endereco.estado}</Text>
            </HStack>
            <Divider></Divider>
          </VStack>
          <VStack
            space={5}
            px="15%"
          >
            <Text textAlign={'center'} fontSize={'md'} fontWeight={'medium'}>
              Seus dados estão corretos?
            </Text>
            <HStack justifyContent={'space-evenly'}>
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
                  navigation.navigate('UsuarioForm');
                }}
              >
                Não
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default FinalizarCadastro;
