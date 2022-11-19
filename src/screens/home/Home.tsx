import { NativeBaseProvider, Button, ScrollView, View, Center, FormControl, VStack, Text, Container } from 'native-base';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReciboDeVendaService from '../../service/reciboDeVendaService/ReciboDeVendaServices';
import ReciboDeVendaCard from '../ReciboDeVenda/components/ReciboDeVendaCardComponent';
import PessoaService from '../../service/PessoaService/PessoaService';
import { Pressable } from 'react-native';


interface Props {}


const Home: FunctionComponent<Props> = (props) => {

  const [venda, setVenda] = useState();
  

  const navigation = useNavigation();

  const goToReciboDeVendaList = () => {
    navigation.navigate('ReciboDeVendaList');
  }
  
  const goToReciboDeVendaForm = () => {
    navigation.navigate('ReciboDeVendaForm');
  }
  
  const pegarDadosDoUsuario = async() => {
    const dadosPessoa = await PessoaService.getPrincipaisInformacoesDoUsuario();
    const propriedadeId = dadosPessoa.data.propriedades[0].id
    const ultimaVenda = await ReciboDeVendaService.buscarUltimaVendaPorPropriedade(propriedadeId);
    setVenda(ultimaVenda.data);
    //const reciboDeVenda: ReciboDeVenda = dadosPessoa.data.propriedades[0].fazenda.id
    console.log(dadosPessoa);
    console.log(dadosPessoa.data);
    console.log(dadosPessoa.data.propriedades);
    console.log(dadosPessoa.data.propriedades[0].id);
    console.log(ultimaVenda.data);
  }  

  useEffect(() => {
    pegarDadosDoUsuario();
  }, []);

  const renderizarCard =  () => {
    if(venda) {
      return (
        <ScrollView p={'2%'} >
          <VStack space={4}>
            <Pressable
              onPress={() => goToReciboDeVendaList()}
             >
              <ReciboDeVendaCard recibo={venda}/> 
            </Pressable>
          </VStack>
          <Button
          mt={5}
          p={'5%'}
            onPress={() => {
              goToReciboDeVendaForm();
            }}
          >
            + Nova Venda
          </Button>
       </ScrollView>
       )
    } else {
      return (
        <ScrollView p={'2%'} >
          <VStack space={4} py={'5%'} mb={'2%'}>
              <Text fontSize="xl" textAlign={'center'}>
                Não há recibos de venda no momento
              </Text>
          </VStack>
          <Button
          mt={5}
          p={'5%'}
          onPress={() => {
            goToReciboDeVendaForm();
          }}
          >
            + Nova Venda
          </Button>
        </ScrollView>
      )        
    }
  } 
  
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <VStack alignItems="center" m={'2%'}>
        <Text fontSize="4xl">
          Última Coleta:
        </Text>
      </VStack>
      {renderizarCard()}
    </NativeBaseProvider>
  );
};

export default Home;
