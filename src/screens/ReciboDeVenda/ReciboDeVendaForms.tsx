import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  NativeBaseProvider,
  Button,
  FormControl,
  Input,
  Checkbox,
  Container,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { ReciboDeVenda } from '../../types/ReciboDeVenda';

import { useNavigation } from '@react-navigation/core';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {}

const ReciboDeVendaForm: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();
  const [erros, setErros] = useState({});

  const [leiteVendido, setLeiteVendido] = React.useState<ReciboDeVenda>({
    quantidadeLeiteVendida: 0,
    observacoes: '',
    pago: false,
  });

  const salvarNovoRecibo = async () => {
    salvar();
  };

  const salvar = async () => {
    ReciboDeVendaService.salvar(leiteVendido).then(() => {
      navigation.navigate('ReciboDeVendaList');
    });
  };

  useEffect(() => {
    setErros({});
  }, [leiteVendido]);

  useEffect(() => {
    AsyncStorage.getItem('PropriedadeId').then((res: any) => {
      const response = JSON.parse(res);
      setLeiteVendido({
        ...leiteVendido,
        propriedade: { id: response.id },
      });
    });
  }, []);

  const validate = () => {
    if (
      !leiteVendido.quantidadeLeiteVendida ||
      !/^[0-9]+$/.test(leiteVendido.quantidadeLeiteVendida)
    ) {
      setErros({
        ...erros,
        quantidadeDeLeiteVendida: 'Insira uma quantidade válida',
      });
      return false;
    }
    return true;
  };
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Container mr="auto" ml="auto" mt="5">
        <FormControl isRequired isInvalid={'quantidadeDeLeiteVendida' in erros}>
          <FormControl.Label>{'Quantidade'}</FormControl.Label>
          <Input
            w="64"
            p={2}
            placeholder={'Ex.: 123,5'}
            onChangeText={(value: any) => {
              setLeiteVendido({
                ...leiteVendido,
                quantidadeLeiteVendida: value,
              });
            }}
          ></Input>
          <FormControl.ErrorMessage>
            {erros.quantidadeDeLeiteVendida}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>{'Observações'}</FormControl.Label>
          <Input
            w="64"
            p={2}
            placeholder={'Digite aqui...'}
            onChangeText={(value: any) => {
              setLeiteVendido({ ...leiteVendido, observacoes: value });
            }}
          ></Input>
        </FormControl>
        <FormControl>
          <FormControl.Label>{'Foi pago ? '}</FormControl.Label>
          <Checkbox
            value="pago"
            accessibilityLabel="Venda foi paga ?"
            onChange={(value: any) => {
              setLeiteVendido({ ...leiteVendido, pago: value });
            }}
          />

          <Button
            m={5}
            onPress={() => {
              if (validate()) {
                salvarNovoRecibo();
              }
            }}
          >
            Salvar
          </Button>
        </FormControl>
      </Container>
    </NativeBaseProvider>
  );
};

export default ReciboDeVendaForm;
