import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  Progress,
  ScrollView,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import EnderecoFormComponent from '../../components/EnderecoFormComponent';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {}

const FazendaForm: FunctionComponent<Props> = (props) => {
  const [fazenda, setFazenda] = useState({});
  const [erros, setErros] = useState({});

  const navigation = useNavigation();
  const route = useRoute();

  
  useEffect(() => {
    
    setErros({});
  }, [fazenda]);

 
  const validate = () => {
    if (fazenda.nome === undefined || fazenda.nome === '') {
      setErros({ ...erros, nome: 'Informe um nome' });
      return false;
    }
    if (
      fazenda.telefone === undefined ||
      fazenda.telefone === '' ||
      fazenda.telefone.length > 11
    ) {
      setErros({
        ...erros,
        telefone: 'Informe um telefone válido (somente números)',
      });
      return false;
    }
    if (fazenda.car === undefined || fazenda.car === '') {
      setErros({ ...erros, car: 'Informe um cadastro de ambiente rual' });
      return false;
    }
    return true;
  };

  const goToCheckout = (endereco) => {
    if (validate() && isNew() && endereco != 'erro') {
      navigation.navigate('FinalizarCadastro', {
        usuario: route.params,
        fazenda,
        endereco,
      });
    }
  };

  const isNew = () => {
    return route.params != undefined;
  };
  const showProgress = (value) => {
    if (isNew()) {
      return <Progress value={value}></Progress>;
    }
  };

  

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
        {showProgress(30)}
        <Center px="8%" pt="8%" justifyContent={'space-between'}>
          <FormControl isRequired isInvalid={'nome' in erros}>
            <FormControl.Label>Nome da Fazenda</FormControl.Label>
            <Input
              placeholder="Fazenda São Jorge"
              onChangeText={(value: any) => {
                setFazenda({ ...fazenda, nome: value });
              }}
            >
              
            </Input>
            <FormControl.ErrorMessage>{erros.nome}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={'telefone' in erros}>
            <FormControl.Label>Telefone da fazenda</FormControl.Label>
            <Input
              placeholder="(00)00000-0000"
              onChangeText={(value: any) => {
                setFazenda({ ...fazenda, telefone: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>
              {erros.telefone}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={'car' in erros}>
            <FormControl.Label>
              Cadastro de Ambiente Rural (CAR)
            </FormControl.Label>
            <Input
              placeholder="3500550-743F2702003F42F780845B7682E06F60"
              onChangeText={(value: any) => {
                setFazenda({ ...fazenda, car: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.car}</FormControl.ErrorMessage>
          </FormControl>
        </Center>

        <EnderecoFormComponent
          onSubmit={(endereco: any) => {
            goToCheckout(endereco);
          }}
        ></EnderecoFormComponent>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default FazendaForm;
