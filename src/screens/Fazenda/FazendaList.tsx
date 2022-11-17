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
  HStack,
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
            space={3}
            borderRadius={5}
            borderWidth={2}
            borderColor={'coolGray.400'}
            p={'4%'}
          >
            <Text fontSize={'2xl'} fontWeight={'medium'}>
              Dados da fazenda:
            </Text>
            <Divider></Divider>
            <HStack>
              <Text fontSize={'md'} fontWeight={'medium'}>
                Nome da Fazenda:{' '}
              </Text>
              <Text fontSize={'md'}>{propriedade.fazenda.nomeDaFazenda}</Text>
            </HStack>
            <HStack>
              <Text fontSize={'md'} fontWeight={'medium'}>
                Telefone:{' '}
              </Text>
              <Text fontSize={'md'}>{propriedade.telefone}</Text>
            </HStack>
            <HStack>
              <Text fontSize={'md'} fontWeight={'medium'}>
                Telefone:{' '}
              </Text>
              <Text fontSize={'md'}> {propriedade.telefone}</Text>
            </HStack>

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
