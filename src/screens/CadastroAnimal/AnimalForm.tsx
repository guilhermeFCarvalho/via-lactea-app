import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  FormControl,
  NativeBaseProvider,
  Input,
  Button,
  Center,
} from 'native-base';

import InputMask from '../../components/InputMask'

interface Props {
  navigation: any;
  route: any;
}

const AnimalForm = () => {
  const [animal, setAnimal] = React.useState({});
  const [peso, setPeso] = React.useState('')
  const [dataVeterinario, setDataVeterinario] = React.useState('');
  const [dataNascimento, setDataNascimento] = React.useState('');
  const [erros, setErros] = React.useState({});

  const navigation = useNavigation();

  const voltarHome = () => {
    validate()
      ? navigation.navigate('Home', {})
      : console.log(erros);
  };

  const validate = () => {
    if (
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
              value={dataVeterinario}
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
