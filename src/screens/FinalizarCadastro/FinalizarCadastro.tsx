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

  const salvarUsuario = () => {
    UsuarioService.salvar({
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
              salvarUsuario();
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
