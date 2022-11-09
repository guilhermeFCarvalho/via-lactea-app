import {
  Button,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  ScrollView,
} from 'native-base';
import React, { useState } from 'react';
import { FunctionComponent } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import CompradorService from '../../service/CompradorService/CompradorService';
import { useNavigation } from '@react-navigation/native';

interface Props {}

const CompradorForm: FunctionComponent<Props> = () => {
  const [comprador, setComprador] = useState({});
  const [erros, setErros] = useState({});
  const navigation = useNavigation();

  const saveComprador = () => {
    CompradorService.salvar({
      telefone: comprador.telefone,
      razaoSocial: comprador.razaoSocial,
      inscricaoEstadual: comprador.inscricaoEstadual,
      cnpj: comprador.cnpj,
    }).then(
      navigation.navigate('CompradorList')
    );
  };

  const validate = () => {
    if (comprador.razaoSocial === undefined || comprador.razaoSocial === '') {
      setErros({ ...erros, razaoSocial: 'Informe uma razão social válida' });
      return false;
    }
    if (
      comprador.inscricaoEstadual === undefined ||
      comprador.inscricaoEstadual === '' ||
      comprador.inscricaoEstadual.length != 12
    ) {
      setErros({
        ...erros,
        inscricaoEstadual:
          'Informe uma inscrição estadual válida (somente números)',
      });
      return false;
    }
    if (
      comprador.cnpj === undefined ||
      comprador.cnpj === '' ||
      comprador.cnpj.length != 14
    ) {
      setErros({ ...erros, cnpj: 'Informe um cnpj válido (somente números)' });
      return false;
    }
    if (
      comprador.telefone === undefined ||
      comprador.telefone === '' ||
      comprador.telefone.length > 11
    ) {
      setErros({
        ...erros,
        telefone: 'Informe um telefone válido (somente números)',
      });
      return false;
    }
    return true;
  };
  React.useEffect(() => {
    setErros({});
  }, [comprador]);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
        <Center px="8%" pt="2%" justifyContent={'space-between'}>
          <FormControl isRequired isInvalid={'razaoSocial' in erros}>
            <FormControl.Label>Razão social</FormControl.Label>
            <Input
              placeholder="LACT LTDA."
              onChangeText={(value: any) => {
                setComprador({ ...comprador, razaoSocial: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>
              {erros.razaoSocial}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={'inscricaoEstadual' in erros}>
            <FormControl.Label>Inscrição estadual</FormControl.Label>
            <Input
              placeholder="000.000.000"
              onChangeText={(value: any) => {
                setComprador({ ...comprador, inscricaoEstadual: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>
              {erros.inscricaoEstadual}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={'cnpj' in erros}>
            <FormControl.Label>CNPJ</FormControl.Label>
            <Input
              placeholder="00.000.000/0001-00"
              onChangeText={(value: any) => {
                setComprador({ ...comprador, cnpj: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.cnpj}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'telefone' in erros}>
            <FormControl.Label>Telefone</FormControl.Label>
            <Input
              placeholder="(00)00000-0000"
              onChangeText={(value: any) => {
                setComprador({ ...comprador, telefone: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>
              {erros.telefone}
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
        <Button
          m="8%"
          onPress={() => {
            if (validate()) {
              saveComprador();
            }
          }}
        >
          Salvar
        </Button>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CompradorForm;
