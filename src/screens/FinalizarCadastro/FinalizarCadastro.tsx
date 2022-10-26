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
import React from 'react';
import { FunctionComponent } from 'react';
import CardButtonComponent from '../../components/CardButtonComponent';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import UsuarioService from '../../service/UsuarioService/UsuarioService';

interface Props {
  navigation: any;
  route: any;
}

const FinalizarCadastro: FunctionComponent<Props> = (props) => {

  const navigation =  useNavigation();
  const route = useRoute();

  const salvarUsuario = (userData: object) => {
    UsuarioService.salvar({
      propriedades: [
        {
          car: userData.fazenda.car,
          telefone: userData.fazenda.telefone,
          fazenda: {
            nomeDaFazenda: userData.fazenda.nome,
            endereco: {
              endereco: userData.endereco.estado,
              rua: userData.endereco.rua,
              numero: userData.endereco.numero,
              bairro: userData.endereco.bairro,
              cidade: userData.endereco.cidade,
              cep: userData.endereco.cep,
            },
          },
        },
      ],
      telefone: userData.usuario.telefone,
      nome: userData.usuario.nome,
      sobrenome: userData.usuario.sobrenome,
      cpf: userData.usuario.cpf,
    });
  };

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
        <Progress value={60}></Progress>
        <VStack space={6} p="12%">
          <CardButtonComponent
            title="Cadastrar coletor"
            subtitle="Cadastre os coletores que irão comprar leite da sua fazenda"
            ></CardButtonComponent>
          <CardButtonComponent
            title="Cadastrar animais"
            subtitle="Cadastre os animais que você possui em sua fazenda"
            ></CardButtonComponent>
          <CardButtonComponent
            title="Cadastrar fazenda"
            subtitle="Cadastre outras fazendas que deseja gerenciar no sistema"
            screen={'FazendaForm'}
          ></CardButtonComponent>
          <Button
            onPress={() => {
              salvarUsuario(route.params);
            }}
          >
            Finalizar 
            
          </Button>
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default FinalizarCadastro;
