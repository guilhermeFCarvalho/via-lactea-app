import {
  FormControl,
  NativeBaseProvider,
  Input,
  Button,
  Center,
} from 'native-base';
import { Platform, Text, View } from 'react-native';
import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
//import { animal } from '../../types/Animal';
import React from 'react';

interface Props {
  navigation: any;
  route: any;
}

const AnimalForm = () => {
  const [animal, setAnimal] = React.useState({});
  const [dataVeterinario, setDataVeterinario] = React.useState(new Date());
  const [erros, setErros] = React.useState({});

  const navigation = useNavigation();

  const formatarDate = (data: Date) => {
    let dataFormatada = data.toString()
    if (dataFormatada.match(/^\d{2}$/) !== null) {
      dataFormatada = dataFormatada + '/';
    } else if (dataFormatada.match(/^\d{2}\/\d{2}$/) !== null) {
      dataFormatada = dataFormatada + '/';
    }
  }

  // const onChange = (event, selectedDate) => {
  //   const dataAtual = selectedDate; //|| dataVeterinario;
  //   setShow(Platform.OS === 'android');
  //   setDataVeterinario(currentDate);

  //   const dataTemp = new Date(currentDate);
  //   const dataFormatada = dataTemp.getDate() + '/' + (dataTemp.getMonth() + 1) + '/' + (dataTemp.getFullYear());
  //   setTextoData(dataFormatada);

  //   console.log(dataFormatada);
  //   setShow(false);
  // }

  // const showMode = () => {
  //   setShow(true)
  //   setMode('date');  
  // }

  // const setDate = (event: DateTimePickerEvent, date: Date) => {
  //   const {
  //     type,
  //     nativeEvent: {timestamp},
  //   } = event;
  // };

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   getDate('set',currentDate);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showMode = (date) => {
  //   DateTimePickerAndroid.open({
  //     value: date,
  //     onChange,
  //     mode: date,
  //     is24Hour: true,
  //   });
  // };

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
            <Input
              placeholder={'Ex.: 33'}
              keyboardType="numeric"
              onChangeText={(value: any) => {
                setAnimal({ ...animal, peso: value });
              }}
          >
          </Input>
          <FormControl.ErrorMessage>
            {erros.peso}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired>  
          <FormControl.Label>Última Visita ao Veterinário</FormControl.Label>
            <Input
              placeholder={'Ex.: 22/08/2022'}
              onChangeText={(value: unknown) => {
                setAnimal({ ...animal, ultimaVisitaVeterinario: value });
              }}
              
            >
            </Input>
          <FormControl.Label>Raça</FormControl.Label>
            <Input
              placeholder={'Ex.: Holandesa'}
              onChangeText={(value: unknown) => {
                setAnimal({ ...animal, raca: value });
              }}
            >
          </Input>
          <FormControl.Label>Data de Nascimento</FormControl.Label>
            <Input
              placeholder={'Ex.: ...'}
              onChangeText={(value: unknown) => {
                setAnimal({ ...animal, dataDeNascimento: value });
              }}
          >
          </Input>
          <FormControl.Label>Sexo</FormControl.Label>
            
         
          {/* <Text>selected: {date.toLocaleString()}</Text> */}
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
