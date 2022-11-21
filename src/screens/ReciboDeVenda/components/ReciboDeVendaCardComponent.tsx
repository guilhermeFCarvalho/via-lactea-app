import {
  Text,
  Box,
  HStack,
  VStack,
  Divider,
  Badge,
  View,
} from 'native-base';
import React from 'react';
import { FunctionComponent } from 'react';
import { Pressable } from 'react-native';

import { ReciboDeVenda } from '../../../types/ReciboDeVenda';

interface Props {
  recibo: ReciboDeVenda;
  alterarStatusPagamento(id:number):void; 
}

const formatDate = (date: Date | string) => {
  const splitDate: string[] = date.toString().split(',').reverse();
  if (splitDate[0].length == 1) {
    splitDate[0] = '0'.concat(splitDate[0]);
  }
  return splitDate.join('/');
};

const ReciboDeVendaCard: FunctionComponent<Props> = (props) => {
  const formatDate = (date: Date | string) => {
    const splitDate: string[] = date.toString().split(',').reverse();
    if (splitDate[0].length == 1) {
      splitDate[0] = '0'.concat(splitDate[0]);
    }
    return splitDate.join('/');
  };

  const mostrarObservacoes = () => {
    if (props.recibo.observacoes) {
      return (
        <VStack>
          <Text fontWeight={'medium'} fontSize={'md'}>
            Observações:
          </Text>
          <Box p={2} rounded={2} bg={'coolGray.100'}>
            <Text>{props.recibo.observacoes}</Text>
          </Box>
        </VStack>
      );
    }
  };

  return (
    <View
      borderColor={'gray.500'}
      borderRadius={5}
      borderWidth={1}
      justifyContent={'space-between'}
    >
      <VStack shadow={5} justifyContent={'space-between'} p={'3%'} space={2}>
        <HStack justifyContent={'space-between'} p={'2%'}>
          <Text fontWeight={'medium'} fontSize={'xl'}>
            Coleta #{props.recibo.id}
          </Text>
          <Text fontWeight={'medium'} fontSize={'xl'}>
            {formatDate(props.recibo.dataDaVenda)}
          </Text>
        </HStack>
        <Divider />
        <HStack justifyContent={'space-between'}>
          {mostrarObservacoes()}
          <Pressable onPress={() => props.alterarStatusPagamento(props.recibo.id)}>
            <VStack>
              {props.recibo.pago ? (
                <Badge colorScheme="success">PAGO</Badge>
                ) : (
                  <Badge colorScheme="danger">NÃO PAGO</Badge>
                  )}
            </VStack>
          </Pressable>
        </HStack>
      </VStack>
    </View>
  );
};

export default ReciboDeVendaCard;
