import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  FormControl,
  NativeBaseProvider,
  Input,
  Button,
  Center,
  Select,
} from 'native-base';

import InputMask from '../../components/InputMask'
import { sexoDoAnimal } from '../../utils/SexoDoAnimal'

interface Props {
  navigation: any;
  route: any;
}

const AnimalForm = () => {
  const [animal, setAnimal] = useState({});
  const [peso, setPeso] = useState('');
  const [dataVet, setDataVeterinario] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [erros, setErros] = useState({});

  const navigation = useNavigation();

  // useEffect(() => {
  //   setErros({});
  // }, [animal]);

  async function setValoresAnimal() {
  await setAnimal({ ...animal, peso: peso });
  await setAnimal({ ...animal, dataVeterinario: dataVet });
  await setAnimal({ ...animal, dataNascimento: dataNascimento });
  return console.log(animal);
  }

  const voltarHome = () => {
    console.log('Antes de definir:');
    console.log(animal);
    console.log('Após definir:');
    setValoresAnimal().then(() => {
      validate()
        ? navigation.navigate('Home', {})
        : console.log(erros);
    })    
  };

  const validate = () => {
    if (
      //verificar depois !animal.peso
      animal.peso === undefined ||
      !animal.peso.match('[0-9]+')
    ) {
      setErros({ ...erros, peso: 'deu erro no peso' });
      console.log('deu erro peso');
      return false;
    }
    return true;
  };

  return (
    <NativeBaseProvider>
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
              value={peso}
              placeholder={'33'}
              mask="peso"
              keyboardType="numeric"
              inputMaskChange={(value: string) => setPeso(value)}
          >
          </InputMask>
          <FormControl.ErrorMessage>
            {erros.peso}
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
              value={dataNascimento}
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
