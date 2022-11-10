import React, { FunctionComponent, useEffect, useState } from 'react';
import { NativeBaseProvider, ScrollView, Icon, Fab, VStack } from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { ReciboDeVenda } from '../../types/ReciboDeVenda';
import ReciboDeVendaCard from './components/ReciboDeVendaCardComponent';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

interface Props {}

const ReciboDeVendaList: FunctionComponent<Props> = (props) => {
  const [listaRecibo, setReciboLista] = useState<Array<any>>([]);
  const navigation = useNavigation();

  const buscar = () => {
    const sortParams = new URLSearchParams();
    sortParams.append('page', '0');
    sortParams.append('size', '30');
    sortParams.append('sort', 'dataDaVenda,desc');
    sortParams.append('sort', 'id');
    ReciboDeVendaService.buscar(sortParams)
      .then((response) => {
        setReciboLista(response.data.content);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      buscar();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Fab
        placement="bottom-right"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />}
        onPress={() => navigation.navigate('ReciboDeVendaForm')}
      />
      <ScrollView p={'2%'}>
        <VStack space={4}>
          {listaRecibo.map((item: ReciboDeVenda) => {
            return <ReciboDeVendaCard recibo={item}> </ReciboDeVendaCard>;
          })}
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ReciboDeVendaList;
