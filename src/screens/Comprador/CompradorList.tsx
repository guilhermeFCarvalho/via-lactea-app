import {
  Text,
  NativeBaseProvider,
  ScrollView,
  VStack,
  HStack,
  IconButton,
  Box,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { FunctionComponent } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { MaterialIcons } from '@expo/vector-icons';
import CompradorService from '../../service/CompradorService/CompradorService';

interface Props {}

const CompradorList: FunctionComponent<Props> = () => {
  const [compradorList, setCompradorList] = useState([]);

  const getCompradores = () => {
    return CompradorService.listar().then((response) =>
      setCompradorList(response.data.content),
    );
  };

  useEffect(() => {
    getCompradores();
  }, []);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView padding={'6%'}>
        <VStack space={6}>
          {compradorList.map((element) => {
            return (
              <Box>
                <VStack
                  borderColor={'primary.400'}
                  borderWidth={'2'}
                  rounded="lg"
                  padding={'2%'}
                  space={1}
                >
                  <Text fontWeight={'medium'} fontSize={'xl'}>
                    {element.razaoSocial}
                  </Text>
                  <HStack justifyContent={'space-between'}>
                    <Text fontSize={'lg'}>{element.cnpj}</Text>
                    <Text fontSize={'lg'}>IE: {element.inscricaoEstadual}</Text>
                  </HStack>
                  <HStack justifyContent={'space-between'}>
                    <Text mt={1} fontSize={'lg'}>
                      Telefone: {element.telefone}
                    </Text>
                    <HStack>
                      <IconButton
                        size={'md'}
                        variant="ghost"
                        _icon={{
                          as: MaterialIcons,
                          name: 'edit',
                        }}
                      />
                      <IconButton
                        size={'md'}
                        variant="ghost"
                        colorScheme={'red'}
                        onPress={() => {
                          console.log({ compradorList });
                        }}
                        _icon={{
                          as: MaterialIcons,
                          name: 'delete',
                        }}
                      />
                    </HStack>
                  </HStack>
                </VStack>
              </Box>
            );
          })}
        </VStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default CompradorList;
