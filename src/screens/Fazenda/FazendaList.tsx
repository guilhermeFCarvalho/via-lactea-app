import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Input,
  NativeBaseProvider,
  Text,
  ScrollView,
  VStack,
  Center,
  Spinner,
  Button,
  Divider,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {}

const FazendaList: FunctionComponent<Props> = (props) => {
  const [propriedade, setPropriedade] = useState({});

  const buscaFazenda = async () => {
    const prop: any = await AsyncStorage.getItem('PropriedadeId');
    setPropriedade(JSON.parse(prop));
  };

  useEffect(() => {
    buscaFazenda();
  }, []);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      {propriedade.fazenda ? (
        <ScrollView p={'2%'}>
          <VStack
            justifyContent={'flex-start'}
            space={1}
            borderRadius={5}
            borderWidth={2}
            borderColor={'coolGray.400'}
            p={'4%'}
          >
            <Text fontWeight={'medium'}>Dados da fazenda:</Text>
            <Text>Nome da fazenda: {propriedade.fazenda.nomeDaFazenda}</Text>
            <Text>Telefone: {propriedade.telefone}</Text>
            <Text>CAR: {propriedade.car}</Text>
            <Divider></Divider>
            <Text fontWeight={'medium'}>Endereço:</Text>
            <Text>rua: {propriedade.fazenda.endereco.rua}</Text>
            <Text>bairro: {propriedade.fazenda.endereco.bairro}</Text>
            <Text>cidade: {propriedade.fazenda.endereco.cidade}</Text>
            <Text>CEP: {propriedade.fazenda.endereco.cep}</Text>
          </VStack>
        </ScrollView>
      ) : (
        <Center>
          <Spinner></Spinner>
        </Center>
      )}
    </NativeBaseProvider>
  );
};

export default FazendaList;
