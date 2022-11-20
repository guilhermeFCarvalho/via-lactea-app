import {
  NativeBaseProvider,
  Button,
  ScrollView,
  VStack,
  Text,
} from 'native-base';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import ReciboDeVendaCard from '../ReciboDeVenda/components/ReciboDeVendaCardComponent';
import PessoaService from '../../service/PessoaService/PessoaService';
import { Pressable } from 'react-native';

interface Props {}

const Home: FunctionComponent<Props> = (props) => {
  const [venda, setVenda] = useState();

  const navigation = useNavigation();

  const goToReciboDeVendaList = () => {
    navigation.navigate('ReciboDeVendaList');
  };

  const goToReciboDeVendaForm = () => {
    navigation.navigate('ReciboDeVendaForm');
  };

  const pegarDadosDoUsuario = async () => {
    const dadosPessoa = await PessoaService.getPrincipaisInformacoesDoUsuario();
    const propriedadeId = dadosPessoa.data.propriedades[0].id;
    const ultimaVenda =
      await ReciboDeVendaService.buscarUltimaVendaPorPropriedade(propriedadeId);
    setVenda(ultimaVenda.data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      pegarDadosDoUsuario();
    });
    return unsubscribe;
  }, []);

  const renderizarCard = () => {
    if (venda) {
      return (
        <ScrollView p={'2%'}>
          <VStack space={20} m={'2%'}>
            <VStack py={'5%'} alignItems="center" m={'2%'}>
              <Text fontSize="4xl">Última Venda:</Text>
            </VStack>
            <Pressable onPress={() => goToReciboDeVendaList()}>
              <ReciboDeVendaCard recibo={venda} />
            </Pressable>
            <Button
              mt={5}
              p={'5%'}
              onPress={() => {
                goToReciboDeVendaForm();
              }}
            >
              + Nova Venda
            </Button>
          </VStack>
        </ScrollView>
      );
    } else {
      return (
        <ScrollView p={'2%'}>
          <VStack space={20} py={'5%'} m={'2%'}>
            <VStack py={'5%'} alignItems="center" m={'2%'}>
              <Text fontSize="4xl">Última Venda:</Text>
            </VStack>
            <Text fontSize="xl" textAlign={'center'}>
              Não há recibos de venda no momento
            </Text>
            <Button
              mt={5}
              p={'5%'}
              onPress={() => {
                goToReciboDeVendaForm();
              }}
            >
              + Nova Venda
            </Button>
          </VStack>
        </ScrollView>
      );
    }
  };

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      {renderizarCard()}
    </NativeBaseProvider>
  );
};

export default Home;
