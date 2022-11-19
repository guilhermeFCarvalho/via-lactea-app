import {
  Text,
  NativeBaseProvider,
  ScrollView,
  VStack,
  HStack,
  IconButton,
  Box,
  Fab,
  Icon,
  Divider,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { MaterialIcons } from '@expo/vector-icons';
import CompradorService from '../../service/CompradorService/CompradorService';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import {
  
  mascaraCnpj,
  mascaraIe,
  
  mascaraTelefone,
} from '../../utils/Mascaras';

interface Props {}

const CompradorList: FunctionComponent<Props> = () => {
  const [compradorList, setCompradorList] = useState([]);
  const navigation = useNavigation();
  const getCompradores = () => {
    return CompradorService.listar()
      .then((response) => setCompradorList(response.data.content))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      getCompradores();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView padding={'6%'}>
        <Fab
          placement="bottom-right"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />}
          onPress={() => navigation.navigate('CompradorForm')}
        />
        <VStack space={6} mb={20}>
          {compradorList.map((element) => {
            return (
              <VStack
                space={2}
                bg={'coolGray.100'}
                p={'6%'}
                borderWidth={1}
                borderRadius={3}
                borderColor={'coolGray.400'}
              >
                <Text fontWeight={'medium'} fontSize={'xl'}>
                  {element.razaoSocial}
                </Text>
                <Divider></Divider>

                <HStack>
                  <Text fontWeight={'medium'} fontSize={'md'}>
                    CNPJ:{' '}
                  </Text>
                  <Text fontSize={'md'}>{mascaraCnpj(element.cnpj)}</Text>
                </HStack>
                <HStack>
                  <Text fontWeight={'medium'} fontSize={'md'}>
                    IE:{' '}
                  </Text>
                  <Text fontSize={'md'}>
                    {mascaraIe(element.inscricaoEstadual)}
                  </Text>
                </HStack>
                <HStack>
                  <Text fontWeight={'medium'} fontSize={'md'}>
                    Telfone:{' '}
                  </Text>
                  <Text fontSize={'md'}>
                    {mascaraTelefone(element.telefone)}
                  </Text>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CompradorList;
