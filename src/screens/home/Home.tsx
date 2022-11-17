import { NativeBaseProvider, Button, ScrollView } from 'native-base';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import ReciboDeVendaCard from '../ReciboDeVenda/components/ReciboDeVendaCardComponent';
import { Pressable } from 'react-native';


interface Props {}

export type RootStackParamList = {
  UsuarioForm: { id: string };
  FazendaForm: { id: string };
  FinalizarCadastro: { id: string };
  ColetorForm: { id: string };
  ReciboDeVendaList: { id: string };
  CompradorForm: { id: string };
  AnimalForm: { id: string };
  OldHome: { id: string};
};

const Home: FunctionComponent<Props> = (props) => {

  const [venda, setVenda] = useState({});
  

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      // AsyncStorage.getItem('PropriedadeId').then((res: any) => {
      //   const response = JSON.parse(res) 
      //   buscar(response.id);
      // });
      console.log('passou aqui')
    });

    return unsubscribe;
  }, [navigation]);


  useEffect(() => {
    // AsyncStorage.getItem('PropriedadeId').then((res: any) => {
    //   const response = JSON.parse(res) 
    //   buscarVenda(response.id);
    // });
  }, []);

  const goToReciboDeVendaList = () => {
    navigation.navigate('ReciboDeVendaList');
  }

  const buscarVenda = async (propriedade: any) => {
    console.log(propriedade);
    ReciboDeVendaService.buscarUltimaVendaPorPropriedade(propriedade)
      .then((response: any) => {
        console.log(response)
        setVenda(response.data.content)
    })
  };

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
        <Pressable
          onPress={() => goToReciboDeVendaList()}
        >
          <ReciboDeVendaCard recibo={venda}>
            {' '}
          </ReciboDeVendaCard>
        </Pressable>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
