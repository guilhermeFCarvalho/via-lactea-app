import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  VStack,
  Text,
  Spinner,
  Button,
  HStack,
  Divider,
  Spacer,
  Fab,
  Icon,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimalService from '../../service/AnimalService/AnimalService';
import { useNavigation } from '@react-navigation/native';
import { mascaraSexo } from '../../utils/Mascaras';

interface Props {}

const AnimalList: FunctionComponent<Props> = (props) => {
  const [propriedade, setPropriedade] = useState({});
  const [animais, setAnimais] = useState([]);

  const navigation = useNavigation();

  const buscarFazenda = async () => {
    await AsyncStorage.getItem('PropriedadeId')
      .then((prop) => buscarAnimal(JSON.parse(prop)))
      .catch((erro) => {
        throw new Error(erro);
      });
  };
  const buscarAnimal = async (prop) => {
    const res = await AnimalService.listarAnimaisPorFazenda(prop.id);

    setAnimais(res.data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      buscarFazenda();
    });
    return unsubscribe;
  }, []);

  const showInfo = (
    label: string,
    data: any,
    fontSize: string,
    header?: boolean,
    append?: string,
  ) => {
    let fontWeight;
    header ? (fontWeight = 'medium') : (fontWeight = 'normal');
    if (data) {
      return (
        <HStack>
          <Text fontWeight={'medium'} fontSize={fontSize}>
            {label}
          </Text>
          <Text fontWeight={fontWeight} fontSize={fontSize}>
            {data}
            {append}
          </Text>
        </HStack>
      );
    }
  };

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Fab
        placement="bottom-right"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />}
        onPress={() => navigation.navigate('AnimalForm')}
      />
      <ScrollView p={'2%'}>
        <VStack space={6} p={'2%'} mb={10}>
          {animais.map((element) => {
            return (
              <VStack
                space={4}
                bg={'coolGray.100'}
                p={'6%'}
                borderWidth={1}
                borderRadius={3}
                borderColor={'coolGray.400'}
              >
                <HStack space={2} justifyContent={'space-evenly'}>
                  {showInfo('', element.especie, 'xl', true)}
                  {showInfo('#', element.id, 'xl', true)}
                  <Spacer></Spacer>
                  {showInfo('', element.raca, 'xl', true)}
                </HStack>

                <Divider></Divider>
                <VStack space={2}>
                  {showInfo('Identificação: ', element.identificacao, 'md')}
                  {showInfo('Sexo: ', mascaraSexo(element.sexo), 'md')}
                  {showInfo('Peso: ', element.peso, 'md', false, '@')}
                  {showInfo(
                    'Data de nascimento: ',
                    element.dataDeNascimento,
                    'md',
                  )}
                  {showInfo(
                    'Data da ultima gestação: ',
                    element.dataUltimaGestacao,
                    'md',
                  )}
                  {showInfo(
                    'Parentesco animal: ',
                    element.parentescoAnimal,
                    'md',
                  )}
                  {showInfo(
                    'Tipo de alimentação: ',
                    element.tipoAlimentacao,
                    'md',
                  )}
        
                </VStack>
              </VStack>
            );
          })}
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default AnimalList;
