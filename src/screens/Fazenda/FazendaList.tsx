import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  NativeBaseProvider,
  Text,
  ScrollView,
  VStack,
  Center,
  Spinner,
  Divider,
  HStack,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { mascaraTelefone } from '../../utils/Mascaras';

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
            space={6}
            borderRadius={2}
            borderWidth={2}
            borderColor={'coolGray.500'}
            p={'4%'}
          >
            <VStack space={2}>
              <VStack>
                <Text fontSize={'xl'} fontWeight={'medium'}>
                  Dados da fazenda:
                </Text>
                <Divider></Divider>
              </VStack>
              <VStack space={3}>
                <HStack>
                  <Text fontSize={'md'} fontWeight={'medium'}>
                    Nome da Fazenda:{' '}
                  </Text>
                  <Text fontSize={'md'}>
                    {propriedade.fazenda.nomeDaFazenda}
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize={'md'} fontWeight={'medium'}>
                    Telefone:{' '}
                  </Text>
                  <Text fontSize={'md'}>
                    {mascaraTelefone(propriedade.telefone)}
                  </Text>
                </HStack>
                <HStack pr={'25%'}>
                  <Text fontSize={'md'} fontWeight={'medium'}>
                    CAR:{' '}
                  </Text>
                  <Text fontSize={'md'}> {propriedade.car}</Text>
                </HStack>
              </VStack>
            </VStack>
            <VStack space={2}>
              <VStack>
                <Text fontSize={'xl'} fontWeight={'medium'}>
                  Endereço:
                </Text>
                <Divider></Divider>
              </VStack>
              <VStack space={3}>
                <HStack>
                  <Text fontSize={'md'} fontWeight={'medium'}>
                    Rua:{' '}
                  </Text>
                  <Text fontSize={'md'}>
                    {' '}
                    {propriedade.fazenda.endereco.rua}
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize={'md'} fontWeight={'medium'}>
                    Bairro:{' '}
                  </Text>
                  <Text fontSize={'md'}>
                    {propriedade.fazenda.endereco.bairro}
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize={'md'} fontWeight={'medium'}>
                    CEP:{' '}
                  </Text>
                  <Text fontSize={'md'}>
                    {propriedade.fazenda.endereco.cep}
                  </Text>
                </HStack>
                <HStack>
                  <Text fontSize={'md'} fontWeight={'medium'}>
                    Cidade:{' '}
                  </Text>
                  <Text fontSize={'md'}>
                    {propriedade.fazenda.endereco.cidade}
                  </Text>
                </HStack>
              </VStack>
            </VStack>
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
