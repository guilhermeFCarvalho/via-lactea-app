import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  VStack,
  Text,
  Spinner,
  Button,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimalService from '../../service/AnimalService/AnimalService';

interface Props {}

const AnimalList: FunctionComponent<Props> = (props) => {
  const [propriedade, setPropriedade] = useState({});
  const [animais, setAnimais] = useState([]);

  const buscarFazenda = async () => {
    const prop: any = await AsyncStorage.getItem('PropriedadeId');
    setPropriedade(JSON.parse(prop));
  };
  const buscarAnimal = () => {
    return AnimalService.listarAnimaisPorFazenda(propriedade.id)
      .then((res) => setAnimais(res.data))
      .catch((erro) => {
        throw new Error(erro);
      });
  };

  useEffect(() => {
    buscarFazenda().then(() => {
      buscarAnimal();
    });
  }, []);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView p={'2%'}>
        {animais.map((element) => {
          return (
            <VStack>
              <Text fontWeight={'medium'}>#{element.id}</Text>
              <Text></Text>
              
            </VStack>
          );
        })}
      </ScrollView>
      <Button onPress={()=>{console.log(animais)}}></Button>
    </NativeBaseProvider>
  );
};

export default AnimalList;
