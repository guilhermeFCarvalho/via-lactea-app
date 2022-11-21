import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  Icon,
  Fab,
  VStack,
  HStack,
  Button,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { ReciboDeVenda } from '../../types/ReciboDeVenda';
import ReciboDeVendaCard from './components/ReciboDeVendaCardComponent';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native';

const validate = () => {
  //todo
};

interface Props {}

const ReciboDeVendaList: FunctionComponent<Props> = (props) => {

  const [listaRecibo, setListaRecibo] = useState<Array<ReciboDeVenda>>([]);
  const [page, setPage ] = useState(0)
  const [firstPage, setFirstPage] = useState(true)
  const [LastPage, setLastPage] = useState(false)
  const [totalPage,setTotalPage] = useState(1)

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      AsyncStorage.getItem('PropriedadeId').then((res: any) => {
        const response = JSON.parse(res);
        buscar(response.id);
      });
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    AsyncStorage.getItem('PropriedadeId').then((res: any) => {
      const response = JSON.parse(res);
      buscar(response.id);
    });
  }, [page]);

  const buscar = async (propriedade: any) => {
    const params = {
      page:page,
      size: 10, 
      sort: "id,desc" 
    }

      ReciboDeVendaService.buscarPorPropriedade(propriedade, params).then((response: any) => {
        setTotalPage(response.data.totalPages)
        setListaRecibo(response.data.content)
        setFirstPage(response.data.first)
        setLastPage(response.data.last)
      })  
    
  };

  const mostarBotoesDaPaginacao = () => {
    if (totalPage > 1) {
      return (
        <HStack justifyContent={'space-evenly'} mt={10}>
          <Button
            title="Voltar"
            isDisabled={firstPage}
            onPress={() => setPage(page - 1)}
          >
            Anterior
          </Button>
          <Button
            title="Avancar"
            isDisabled={LastPage}
            onPress={() => setPage(page + 1)}
          >
            Proxima
          </Button>
        </HStack>
      );
    }
  };

  const alteratStatusPagamento = (id: number) => {
    ReciboDeVendaService.alterarStatusPagamento(id).then((response: any) => {
      if(response.status == 200){
        const idRecibo = id
        const index = listaRecibo.findIndex((element) => element.id === idRecibo )
        let listaAtt:Array<ReciboDeVenda> = listaRecibo
        listaAtt[index] = response.data
        setListaRecibo([...listaAtt])
      }
    })  
  }

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Fab
        placement="bottom-right"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />}
        onPress={() => navigation.navigate('ReciboDeVendaForm', {})}
      />
      <ScrollView p={'2%'}>
        <VStack space={4}>
          {listaRecibo.map((item: ReciboDeVenda) => {
            return (
              <ReciboDeVendaCard key={`${item.id}-${item.pago}`} recibo={item} alterarStatusPagamento={alteratStatusPagamento} />
            );
          })}
        </VStack>
        {mostarBotoesDaPaginacao()}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ReciboDeVendaList;
