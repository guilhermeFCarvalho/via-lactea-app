import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  Icon,
  Fab,
} from 'native-base';
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

  const buscar = () => {
    ReciboDeVendaService.buscar({}).then((response) =>
      setReciboLista(response.data.content),
    );
  };

  useEffect(() => {
    buscar();
  }, []);

  const navigation = useNavigation();

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Fab
        placement="bottom-right"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />}
        onPress={() => navigation.navigate('ReciboDeVendaForm', {})}
      />
      <ScrollView p={'2%'}>
        {listaRecibo.map((item: ReciboDeVenda) => {
          return <ReciboDeVendaCard recibo={item}> </ReciboDeVendaCard>;
        })}
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default ReciboDeVendaList;
