import React, { FunctionComponent, useEffect, useState } from 'react';
import { NativeBaseProvider, ScrollView, Icon, Fab, VStack } from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { ReciboDeVenda } from '../../types/ReciboDeVenda';
import ReciboDeVendaCard from './components/ReciboDeVendaCardComponent';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



const validate = () => {
  //todo
};

interface Props {}

const ReciboDeVendaList: FunctionComponent<Props> = (props) => {
  const [listaRecibo, setReciboLista] = useState<Array<any>>([]);
  const [refreshList, setRefreshList] = useState(true);

  const buscar = () => {
    
    ReciboDeVendaService.buscar({}).then((response) =>
      setReciboLista(response.data.content),
    );
    
  };

  useEffect(() => {
    buscar();
    setRefreshList(false);
  }, [refreshList]);

  const navigation = useNavigation();



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
            return <ReciboDeVendaCard key={item.id} recibo={item}> </ReciboDeVendaCard>;
          })}
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ReciboDeVendaList;
