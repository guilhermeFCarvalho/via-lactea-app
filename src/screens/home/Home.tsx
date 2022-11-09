import { NativeBaseProvider, Button, ScrollView, VStack } from 'native-base';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ReciboDeVenda } from '../../types/ReciboDeVenda';
import ReciboDeVendaCard from '../ReciboDeVenda/components/ReciboDeVendaCardComponent';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';

interface Props {}

export type RootStackParamList = {
//   UsuarioForm: { id: string };
//   FazendaForm: { id: string };
//   FinalizarCadastro: { id: string };
//   ColetorForm: { id: string };
  ReciboDeVendaList: { id: string };
//   CompradorForm: { id: string };
};

const Home: FunctionComponent<Props> = (props) => {
  const [listaRecibo, setReciboLista] = useState<Array<any>>([]);
  const [refreshList, setRefreshList] = useState(true);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const buscar = () => {
    ReciboDeVendaService.buscar({}).then((response) =>
      setReciboLista(response.data.content),
    );
  };

  useEffect(() => {
    buscar();
    setRefreshList(false);
  }, [refreshList]);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
      <VStack space={4}>
          {listaRecibo.map((item: ReciboDeVenda) => {
            return <ReciboDeVendaCard recibo={
              item[listaRecibo.length-1]
            }>
              onPress = {() => navigation.navigate('ReciboDeVendaList', { id: 'ReciboDeVendaList' })}  
            </ReciboDeVendaCard>;
          })}
          
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
