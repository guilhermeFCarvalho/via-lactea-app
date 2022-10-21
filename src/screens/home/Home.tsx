import { NativeBaseProvider, Button } from 'native-base';
import React, { FunctionComponent } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Props {}

export type RootStackParamList = {
  UsuarioForm: { id: string };
  FazendaForm: { id: string };
  FinalizarCadastro:{id: string}
};

const Home: FunctionComponent<Props> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Button
        m="5"
        bg={'viaLacteaSecondary.blue'}
        onPress={() =>
          navigation.navigate('UsuarioForm', { id: 'UsuarioForm' })
        }
      >
        {' '}
        Formulario Usuario{' '}
      </Button>
      <Button
        m="5"
        bg={'viaLacteaSecondary.blue'}
        onPress={() =>
          navigation.navigate('FazendaForm', { id: 'FazendaForm' })
        }
      >
        {' '}
        Formulario Fazenda{' '}
      </Button>
      <Button
        m="5"
        bg={'viaLacteaSecondary.blue'}
        onPress={() =>
          navigation.navigate('FinalizarCadastro', { id: 'FinalizarCadastro' })
        }
      >
        {' '}
        Finalizar Cadastro{' '}
      </Button>
    </NativeBaseProvider>
  );
};

export default Home;
