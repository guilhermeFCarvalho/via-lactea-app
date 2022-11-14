import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  FormControl,
  NativeBaseProvider,
  Input,
  Button,
  Center,
  Select,
  ScrollView,
} from 'native-base';

import InputMask from '../../components/InputMask'
import { sexoDoAnimal } from '../../utils/SexoDoAnimal'

interface Props {
  navigation: any;
  route: any;
}

const AnimalForm = () => {
  const [animal, setAnimal] = useState({});
  const [pesoDoAnimal, setPesoDoAnimal] = useState('');
  const [dataVet, setDataVeterinario] = useState('');
  const [dataNasc, setDataNascimento] = useState('');
  const [erros, setErros] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    setErros({});
  }, [animal]);

  useEffect(() => {
    setValoresAnimal()
  },[pesoDoAnimal, dataVet, dataNasc])

  function setValoresAnimal() {
    console.log('Após definir:');
    setAnimal({ ...animal, peso: pesoDoAnimal, dataVeterinario : dataVet, dataNascimento : dataNasc });
    return console.log(animal);
  }

  const voltarHome = () => {
    console.log('Antes de definir:');
    console.log(animal);
    
    validate()
      ? navigation.navigate('Home', {})
      : console.log(erros);
  };

  const validate = () => {
    if (
      !animal.peso ||
      !animal.peso.match('[0-9]+')
    ) {
      setErros({ ...erros, peso: 'Peso inválido, informe apenas números' });
      return false;
    }
    return true;
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center px="8%" pt="2%" justifyContent={'space-between'}>
          <FormControl isRequired>
            <FormControl.Label>Espécie</FormControl.Label>
              <Input
                placeholder="Espécie do Animal"
                onChangeText={(value: any) => {
                  setAnimal({ ...animal, especie: value });
                }}
              ></Input>
          </FormControl>
          <FormControl isRequired isInvalid={'peso' in erros}>      
            <FormControl.Label>Peso (em @)</FormControl.Label>
              <InputMask
                value={pesoDoAnimal}
                placeholder={'33'}
                mask="peso"
                keyboardType="numeric"
                inputMaskChange={(value: string) => setPesoDoAnimal(value)}
            >
            </InputMask>
            <FormControl.ErrorMessage>
              {erros.pesoDoAnimal}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired>  
            <FormControl.Label>Última Visita ao Veterinário</FormControl.Label>
              <InputMask 
                value={dataVet}
                placeholder={'25/11/2022'}
                maxLength={10}
                mask="data" 
                inputMaskChange={(value: string ) => setDataVeterinario(value)}
                keyboardType='numeric'
              >
              </InputMask>
            <FormControl.Label>Raça</FormControl.Label>
              <Input
                placeholder={' Holandesa'}
                onChangeText={(value: any) => {
                  setAnimal({ ...animal, raca: value });
                }}
              >
            </Input>
            <FormControl.Label>Data de Nascimento</FormControl.Label>
              <InputMask 
                value={dataNasc}
                placeholder={'25/11/2022'}
                maxLength={10}
                mask="data" 
                inputMaskChange={(value: string ) => setDataNascimento(value)} 
                keyboardType='numeric'
              >
              </InputMask>
            <FormControl.Label>Sexo</FormControl.Label>
              <Select
                placeholder="Seleicone um Valor"
                onValueChange={(value: string) => {
                  setAnimal({ ...animal, sexo: value });
                }}
              >
                {sexoDoAnimal.map((e) => {
                  return (
                    <Select.Item label={e.sexo} value={e.sexo} />
                  );
                })}
              </Select>
          </FormControl>
        </Center>
      </ScrollView>
      <Button
        m={'8%'}
        onPress={() => {
          voltarHome();
        }}
      >
        Salvar
      </Button>
    </NativeBaseProvider>
  );
};

export default AnimalForm;
