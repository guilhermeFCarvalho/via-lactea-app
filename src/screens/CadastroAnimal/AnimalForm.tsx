import { FormControl, NativeBaseProvider, Input, Button, Center } from 'native-base';
import React from 'react';

interface Props {
  navigation: any;
  route: any;
}

const AnimalForm = () => {
  
  const [animal, setAnimal] = React.useState({})

  return (
    <NativeBaseProvider>
      <Center px="8%" pt="2%" justifyContent={'space-between'}>
        <FormControl isRequired>
          <FormControl.Label>Espécie</FormControl.Label>
            <Input
              testID="input_especie"
              placeholder="Espécie do Animal"
              onChangeText={(value: any) => {
                setAnimal({ ...animal, especie : value  });
              }}
            ></Input>
          <FormControl.Label>Peso (em @)</FormControl.Label>
          <Input
            placeholder={"Ex.: 33"}
            onChangeText={(value: unknown) => {
              setAnimal({ ...animal, peso : value });
            }} 
          >
          </Input>
          <FormControl.Label>Última Visita ao Veterinário</FormControl.Label>
          <Input
            placeholder={"Ex.: ..."}
            onChangeText={(value: unknown) => {
              setAnimal({ ...animal, ultimaVisitaVeterinario : value });
            }} 
          >
          </Input>
          <FormControl.Label>Raça</FormControl.Label>
          <Input
            placeholder={"Ex.: Holandesa"}
            onChangeText={(value: unknown) => {
              setAnimal({ ...animal, raca : value });
            }} 
          >
          </Input>
          <FormControl.Label>Data de Nascimento</FormControl.Label>
          <Input
            placeholder={"Ex.: ..."}
            onChangeText={(value: unknown) => {
              setAnimal({ ...animal, dataDeNascimento : value });
            }} 
          >
          </Input>
          <FormControl.Label>Sexo</FormControl.Label>
          <Input
            placeholder={"Ex.: ..."}
            onChangeText={(value: unknown) => {
              setAnimal({ ...animal, dataDeNascimento : value });
            }} 
          >
          </Input>
        </FormControl>
      </Center>
      <Button m={'8%'} onPress={() => {console.log(animal)}}>
        Salvar
      </Button>
    </NativeBaseProvider>
  )

};

export default AnimalForm;
