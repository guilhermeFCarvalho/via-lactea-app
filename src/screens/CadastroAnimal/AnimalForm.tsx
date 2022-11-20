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
import { validarData } from '../../utils/ValidarData';
import AnimalService from '../../service/AnimalService/AnimalService';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [quantidaDeCrias, setQuantidadeCrias] = useState('');
  const [erros, setErros] = useState({});
  const [fazenda, setFazenda] = useState({});

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
    quantidaDeCrias,
    dataGestacao,
  ]);
  useEffect(() => {
    buscarFazenda();
  }, []);

  const salvarAnimal = () => {
    AnimalService.salvar({
      parentescoAnimal: null,
      especie: animal.especie,
      peso: animal.peso,
      raca: animal.raca,
      quantidaDeCrias: animal.quantidaDeCrias,
      dataDeNascimento: animal.dataNascimento,
      dataUltimaGestacao: animal.dataGestacao,
      tipoAlimentacao: animal.alimentacao,
      identificacao: animal.identificacao,
      animalQueCruzou: null,
      sexo: animal.sexo,
      fazenda: {id: fazenda.id},
    });
    return navigation.navigate('Animais');
  };

  const buscarFazenda = async () => {
    await AsyncStorage.getItem('PropriedadeId')
      .then((prop) => setFazenda(JSON.parse(prop)))
      .catch((erro) => {
        throw new Error(erro);
      });
  };

  function setValoresAnimal() {
    setAnimal({
      ...animal,
      peso: parseInt(pesoDoAnimal),
      dataVeterinario: dataVeterinario,
      dataNascimento: dataNascimento,
      quantidaDeCrias: parseInt(quantidaDeCrias)
        ? parseInt(quantidaDeCrias)
        : 0,
      dataGestacao: dataGestacao,
    });
  }

  const validate = () => {
    if (!animal.especie) {
      setErros({ ...erros, especie: 'Informe a Espécie do Animal!' });
      return false;
    }
    if (!animal.raca) {
      setErros({ ...erros, raca: 'Informe a Raca do Animal!' });
      return false;
    }
    if (!animal.peso) {
      setErros({ ...erros, peso: 'Informe o Peso do Animal!' });
      return false;
    }
    if (!animal.dataNascimento) {
      setErros({
        ...erros,
        dataNascimento: 'Informe a Data de Nascimento do Animal!',
      });
      return false;
    }
    if (!animal.sexo) {
      setErros({ ...erros, sexo: 'Informe o Sexo do Animal!' });
      return false;
    }
    if (!validarData(animal.dataNascimento)) {
      setErros({
        ...erros,
        dataNascimento: 'Data inválida!',
      });
      return false;
    }
    if (animal.dataVeterinario) {
      if (!validarData(animal.dataVeterinario)) {
        setErros({
          ...erros,
          dataVeterinario: 'Data inválida!',
        });
        return false;
      }
    }
    if (animal.dataGestacao) {
      if (!validarData(animal.dataGestacao)) {
        setErros({
          ...erros,
          dataGestacao: 'Data inválida!',
        });
        return false;
      }
    }
    return true;
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center px="8%" pt="2%" justifyContent={'space-between'}>
          <FormControl>
            <FormControl.Label>Identificação do Animal</FormControl.Label>
            <Input
              placeholder="9QC2B82..."
              maxLength={250}
              onChangeText={(value: any) => {
                setAnimal({ ...animal, identificacao: value });
              }}
            ></Input>
          </FormControl>
          <FormControl isRequired isInvalid={'especie' in erros}>
            <FormControl.Label>Espécie</FormControl.Label>
            <Input
              placeholder="Vaca, Cabra..."
              maxLength={250}
              onChangeText={(value: any) => {
                setAnimal({ ...animal, especie: value });
              }}
            ></Input>
            <FormControl.ErrorMessage>{erros.especie}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl>
            <FormControl.Label>Tipo de Alimetação</FormControl.Label>
            <Input
              placeholder="Ração..."
              maxLength={250}
              onChangeText={(value: any) => {
                setAnimal({ ...animal, alimentacao: value });
              }}
            ></Input>
          </FormControl>
          <FormControl isRequired isInvalid={'raca' in erros}>
            <FormControl.Label>Raça</FormControl.Label>
            <Input
              placeholder={' Holandesa, Canindé... '}
              maxLength={250}
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
              placeholder={'33...'}
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
            <FormControl.ErrorMessage>
              {erros.dataVeterinario}
            </FormControl.ErrorMessage>
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
              value={quantidaDeCrias}
              placeholder="(Opcional)..."
              mask="number"
              maxLength={5}
              keyboardType="numeric"
              inputMaskChange={(value: string) => {
                setQuantidadeCrias(value);
              }}
            ></InputMask>
          </FormControl>
          <FormControl isInvalid={'dataGestacao' in erros}>
            <FormControl.Label>Data da Última Gestação</FormControl.Label>
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
                if (validate()) {
                  salvarAnimal();
                }
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
