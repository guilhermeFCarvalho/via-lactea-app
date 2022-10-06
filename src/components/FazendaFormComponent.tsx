import React from 'react';
import { Center, FormControl, Input, NativeBaseProvider } from 'native-base';
import { viaLacteaTheme } from '../config/theme/ColorTheme';
import EnderecoFormComponent from './EnderecoFormComponent';

const validate = () => {
  //todo
};

export default function FazendaForm() {
  const [fazenda, setFazenda] = React.useState({});

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Center px="8%" pt="8%" justifyContent={'space-between'}>
        <FormControl isRequired>
          <FormControl.Label>Nome da Fazenda</FormControl.Label>
          <Input
            placeholder="Fazenda São Jorge"
            onChangeText={(value: any) => {
              setFazenda({ ...fazenda, nome: value });
            }}
          ></Input>
        </FormControl>
      </Center>
      <EnderecoFormComponent
        onSubmit={(endereco: object) => {
          setFazenda({ ...fazenda, endereco });
        }}
      ></EnderecoFormComponent>
    </NativeBaseProvider>
  );
}
