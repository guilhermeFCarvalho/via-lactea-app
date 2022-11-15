import React, { FunctionComponent, useEffect, useState } from 'react';
import { NativeBaseProvider, ScrollView, Icon, Fab, VStack, HStack , Button} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { ReciboDeVenda } from '../../types/ReciboDeVenda';
import ReciboDeVendaCard from './components/ReciboDeVendaCardComponent';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validate = () => {
  //todo
};

interface Props {}

const ReciboDeVendaList: FunctionComponent<Props> = (props) => {
  const [listaRecibo, setListaRecibo] = useState<Array<any>>([]);

  const [refreshList, setRefreshList] = useState(true);  
  const [page, setPage ] = useState(0)

  const navigation = useNavigation();

  const buscar = async (propriedade: any) => {
    const sortParams = new URLSearchParams();
    sortParams.append('page', page);
    sortParams.append('size', '2');
    sortParams.append('sort', 'id,desc');
    sortParams.append('sort', 'dataDaVenda,desc');
    
    ReciboDeVendaService.buscarPorPropriedade(propriedade, sortParams).then((response) => {
      setListaRecibo(response.data.content)
    })  
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      AsyncStorage.getItem('PropriedadeId').then((res: any) => {
        const response = JSON.parse(res) 
        
        buscar(response.id);
      });
    });

    return unsubscribe;
  }, [navigation]);


  useEffect(() => {
      AsyncStorage.getItem('PropriedadeId').then((res: any) => {
        const response = JSON.parse(res) 
        
        buscar(response.id);
      });

  }, [page]);

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
              <ReciboDeVendaCard key={item.id} recibo={item}>
                {' '}
              </ReciboDeVendaCard>
            );
          })}
        </VStack>

        <HStack justifyContent={'center'}>
          <Button title='Teste 1' onPress={()=> setPage(page-1)}>Pagina anterior</Button>
          <Button title='Teste 2' onPress={()=> setPage(page+1)}>Proxima pagina</Button>

        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ReciboDeVendaList;
