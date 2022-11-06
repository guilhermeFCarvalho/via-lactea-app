import React, { FunctionComponent, useEffect } from 'react';
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

const validate = () => {
  //Utilizar API ViaCep
};

interface Props {}

const FazendaForm: FunctionComponent<Props> = (props) => {
  const [fazenda, setFazenda] = React.useState({});

  const navigation = useNavigation();
  const route = useRoute();

  const goToCheckout = (endereco) => {
    navigation.navigate('FinalizarCadastro', {
      usuario: route.params,
      fazenda,
      endereco,
    });
  };

  const showProgress = (value) => {
    if(route.params.id === 'Novo'){
      return <Progress value={value}></Progress>
    }

  }

  useEffect(() => {
    console.log(route.params);
  }, []);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
        {showProgress(30)}
        <Center px="8%" pt="8%" justifyContent={'space-between'}>
          <FormControl isRequired>
            <FormControl.Label>Nome da Fazenda</FormControl.Label>
            <Input
              placeholder="Fazenda São Jorge"
              onChangeText={(value: any) => {
                setFazenda({ ...fazenda, nome: value });
              }}
            ></Input>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label>Telefone da fazenda</FormControl.Label>
            <Input
              placeholder="(00)00000-0000"
              onChangeText={(value: any) => {
                setFazenda({ ...fazenda, telefone: value });
              }}
            ></Input>
          </FormControl>
          <FormControl>
            <FormControl.Label>
              Cadastro de Ambiente Rural (CAR)
            </FormControl.Label>
            <Input
              placeholder="3500550-743F2702003F42F780845B7682E06F60"
              onChangeText={(value: any) => {
                setFazenda({ ...fazenda, car: value });
              }}
            ></Input>
          </FormControl>
        </Center>

        <EnderecoFormComponent
          onSubmit={(endereco: object) => {
            goToCheckout(endereco);
          }}
        ></EnderecoFormComponent>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default FazendaForm;
