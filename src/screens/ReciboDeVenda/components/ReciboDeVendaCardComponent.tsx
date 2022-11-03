import {
  Container,
  Text,
  Heading,
  Box,
  HStack,
  VStack,
  Divider,
  Input,
  Checkbox,
} from 'native-base';
import { FunctionComponent } from 'react';
import React = require('react');
import { format } from "date-fns";


import { ReciboDeVenda } from '../../../types/ReciboDeVenda';




interface Props {
  recibo: ReciboDeVenda;
}

const ReciboDeVendaCard: FunctionComponent<Props> = (props) => {
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
    <VStack shadow={5} justifyContent={'space-between'} p={'3%'} space={2}>
      <HStack justifyContent={'space-between'} p={'2%'}>
        <Text fontWeight={'medium'} fontSize={'xl'}>
          Coleta #{props.recibo.id}
        </Text>
        <Text fontWeight={'medium'} fontSize={'xl'}>
          {format(props.recibo.dataDaVenda, 'YYYYDDMM')}
        </Text>
      </HStack>
      <Divider />
      <HStack justifyContent={'space-between'}>
        {mostrarObservacoes()}

        <VStack>
          <Checkbox value={'checkbox'} isChecked={props.recibo.pago}>
            Pago
          </Checkbox>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default ReciboDeVendaCard;
