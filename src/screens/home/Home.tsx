import { NativeBaseProvider, Button, ScrollView, View, Center, FormControl } from 'native-base';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import ReciboDeVendaCard from '../ReciboDeVenda/components/ReciboDeVendaCardComponent';
import PessoaService from '../../service/PessoaService/PessoaService';
import { Pressable, Text } from 'react-native';


interface Props {}


const Home: FunctionComponent<Props> = (props) => {

  const [venda, setVenda] = useState();
  

  const navigation = useNavigation();
  
  const pegarDadosDoUsuario = async() => {
    const dadosPessoa = await PessoaService.getPrincipaisInformacoesDoUsuario();
    console.log(dadosPessoa.data.propriedades[0].fazenda.id);
    return dadosPessoa.data.propriedades[0].fazenda.id;
  }
  
  useEffect(() => {
    pegarDadosDoUsuario();
  }, []);

  const renderizarCard =  () => {
    if(venda) {
      return (
        <Pressable
        // onPress={() => goToReciboDeVendaList()}
        >
        <ReciboDeVendaCard recibo={venda}/> 
      </Pressable>
       )
    } 
  } 
  
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      {renderizarCard()}
      
      <Center pl={'45%'} pt="2%" justifyContent={'space-between'} >
        <FormControl mb={10}>
            <FormControl.Label>
              cadê o card po 
            </FormControl.Label>
          </FormControl>
      </Center>
    </NativeBaseProvider>
  );
};

export default Home;
