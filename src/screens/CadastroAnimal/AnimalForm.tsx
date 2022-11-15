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

import InputMask from '../../components/InputMask';
import { sexoDoAnimal } from '../../utils/SexoDoAnimal';

interface Props {
  navigation: any;
  route: any;
}

const AnimalForm = () => {
  const [animal, setAnimal] = useState({});
  const [pesoDoAnimal, setPesoDoAnimal] = useState('');
  const [dataVeterinario, setDataVeterinario] = useState('');
  const [dataGestacao, setDataGestacao] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [quantidadeCrias, setQuantidadeCrias] = useState('');
  const [erros, setErros] = useState({});

  const navigation = useNavigation();

  useEffect(() => {
    setErros({});
  }, [animal]);

  useEffect(() => {
    setValoresAnimal();
  }, [
    pesoDoAnimal,
    dataVeterinario,
    dataNascimento,
    quantidadeCrias,
    dataGestacao,
  ]);

  function setValoresAnimal() {
    console.log('Após definir:');
    setAnimal({
      ...animal,
      peso: parseInt(pesoDoAnimal),
      dataVeterinario: dataVeterinario,
      dataNascimento: dataNascimento,
      quantidadeCrias: parseInt(quantidadeCrias)
        ? parseInt(quantidadeCrias)
        : 0,
      dataGestacao: dataGestacao,
    });
    return console.log(animal);
  }

  const voltarHome = () => {
    console.log('Antes de definir:');
    console.log(animal);

    validate() ? navigation.navigate('Home', {}) : console.log(erros);
    animal;
  };

  const validate = () => {
    if (!animal.especie) {
      setErros({ ...erros, especie: 'Informe a Espécie do Animal' });
      return false;
    }
    if (!animal.raca) {
      setErros({ ...erros, raca: 'Informe a Raca do Animal' });
      return false;
    }
    if (!animal.peso) {
      setErros({ ...erros, peso: 'Informe o Peso do Animal' });
      return false;
    }
    if (!animal.dataNascimento) {
      setErros({
        ...erros,
        dataNascimento: 'Informe a Data de Nascimento do Animal',
      });
      return false;
    }
    if (!animal.sexo) {
      setErros({ ...erros, sexo: 'Informe o Sexo do Animal' });
      return false;
    }
    return true;
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center px="8%" pt="2%" justifyContent={'space-between'}>
          <FormControl mb={10}>
            <FormControl.Label>
              Inputs faltantes: Parentesco, Animal Da Cruza
            </FormControl.Label>
          </FormControl>

          <FormControl>
            <FormControl.Label>Identificação do Animal</FormControl.Label>
            <Input
              placeholder="9QC2B82"
              onChangeText={(value: any) => {
                setAnimal({ ...animal, identificacao: value });
              }}
            ></Input>
          </FormControl>

          <FormControl isRequired isInvalid={'especie' in erros}>
            <FormControl.Label>Espécie</FormControl.Label>
            <Input
              placeholder="Espécie do Animal"
              onChangeText={(value: any) => {
                setAnimal({ ...animal, especie: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.especie}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
            <FormControl.Label>Tipo de Alimetação</FormControl.Label>
            <Input
              placeholder="Espécie do Animal"
              onChangeText={(value: any) => {
                setAnimal({ ...animal, alimentacao: value });
              }}
            ></Input>
          </FormControl>

          <FormControl isRequired isInvalid={'raca' in erros}>
            <FormControl.Label>Raça</FormControl.Label>
            <Input
              placeholder={' Holandesa'}
              onChangeText={(value: any) => {
                setAnimal({ ...animal, raca: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.raca}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'peso' in erros}>
            <FormControl.Label>Peso (em @)</FormControl.Label>
            <InputMask
              value={pesoDoAnimal}
              placeholder={'33'}
              maxLength={7}
              mask="number"
              keyboardType="numeric"
              inputMaskChange={(value: string) => setPesoDoAnimal(value)}
            ></InputMask>
            <FormControl.ErrorMessage>
              {erros.pesoDoAnimal}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'dataNascimento' in erros}>
            <FormControl.Label>Data de Nascimento</FormControl.Label>
            <InputMask
              value={dataNascimento}
              placeholder={'11/11/1111'}
              maxLength={10}
              mask="data"
              inputMaskChange={(value: string) => setDataNascimento(value)}
              keyboardType="numeric"
            ></InputMask>
            <FormControl.ErrorMessage>
              {erros.dataNascimento}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isInvalid={'dataVeterinario' in erros}>
            <FormControl.Label>Última Visita ao Veterinário</FormControl.Label>
            <InputMask
              value={dataVeterinario}
              placeholder={'11/11/1111'}
              maxLength={10}
              mask="data"
              inputMaskChange={(value: string) => setDataVeterinario(value)}
              keyboardType="numeric"
            ></InputMask>
            <FormControl.ErrorMessage>{erros.dataVet}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={'sexo' in erros}>
            <FormControl.Label>Sexo</FormControl.Label>
            <Select
              placeholder="Seleicone um Valor"
              onValueChange={(value: string) => {
                setAnimal({ ...animal, sexo: value });
              }}
            >
              {sexoDoAnimal.map((e) => {
                return <Select.Item label={e.sexo} value={e.sexo} />;
              })}
            </Select>
            <FormControl.ErrorMessage>{erros.sexo}</FormControl.ErrorMessage>
          </FormControl>

          <FormControl>
            <FormControl.Label>Quantidade de Crias</FormControl.Label>
            <InputMask
              value={quantidadeCrias}
              placeholder="(Opicional)"
              mask="number"
              maxLength={5}
              inputMaskChange={(value: string) => {
                setQuantidadeCrias(value);
              }}
            ></InputMask>
          </FormControl>

          <FormControl isInvalid={'dataGestacao' in erros}>
            <FormControl.Label>Data de Nascimento</FormControl.Label>
            <InputMask
              value={dataGestacao}
              placeholder={'11/11/1111'}
              maxLength={10}
              mask="data"
              inputMaskChange={(value: string) => setDataGestacao(value)}
              keyboardType="numeric"
            ></InputMask>
            <FormControl.ErrorMessage>
              {erros.dataGestacao}
            </FormControl.ErrorMessage>

            <Button
              m={'8%'}
              onPress={() => {
                voltarHome();
              }}
            >
              Salvar
            </Button>
          </FormControl>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default AnimalForm;
