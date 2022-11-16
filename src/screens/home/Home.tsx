import { NativeBaseProvider, Button, ScrollView } from 'native-base';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface Props {}

export type RootStackParamList = {
  UsuarioForm: { id: string };
  FazendaForm: { id: string };
  FinalizarCadastro: { id: string };
  ColetorForm: { id: string };
  ReciboDeVendaList: { id: string };
  CompradorForm: { id: string };
  AnimalForm: { id: string };
  OldHome: { id: string}
};

const Home: FunctionComponent<Props> = (props) => {

  const navigation = useNavigation();

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>

        <Button
          m="5"
          bg={'viaLacteaSecondary.blue'}
          onPress={() =>
            navigation.navigate('OldHome', { id: 'OldHome' })
          }
        >
          {' '}
          Old Home{' '}
        </Button>
        
        <Button
          m="5"
          bg={'viaLacteaSecondary.blue'}
          onPress={() =>
            navigation.navigate('AnimalForm', { id: 'AnimalForm' })
          }
        >
          {' '}
          Cadastro Animal{' '}
        </Button>
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
            navigation.navigate('FinalizarCadastro', {
              id: 'FinalizarCadastro',
            })
          }
        >
          {' '}
          Finalizar Cadastro{' '}
        </Button>

        <Button
          m="5"
          bg={'viaLacteaSecondary.blue'}
          onPress={() => navigation.navigate('ReciboDeVendaList', {})}
        >
          {' '}
          Recibo de Venda{' '}
        </Button>

        <Button
          m="5"
          bg={'viaLacteaSecondary.blue'}
          onPress={() => navigation.navigate('UsuarioForm', { id: 'Novo' })}
        >
          {' '}
          Formulario Usuario{' '}
        </Button>
        <Button
          m="5"
          bg={'viaLacteaSecondary.blue'}
          onPress={() => navigation.navigate('FazendaForm', { id: 'Novo' })}
        >
          {' '}
          Formulario Fazenda{' '}
        </Button>
        <Button
          m="5"
          bg={'viaLacteaSecondary.blue'}
          onPress={() =>
            navigation.navigate('FinalizarCadastro', {
              id: 'FinalizarCadastro',
            })
          }
        >
          {' '}
          Finalizar Cadastro{' '}
        </Button>
        <Button
          m="5"
          bg={'viaLacteaSecondary.blue'}
          onPress={() => navigation.navigate('CompradorForm', { id: 'Novo' })}
        >
          {' '}
          Cadastrar Comprador{' '}
        </Button>

        <Button
        m="5"
        bg={'viaLacteaSecondary.blue'}
        onPress={() =>
          navigation.navigate('LoginPage', { })
        }
      >
        {' '}
        Login Page{' '}
      </Button>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
