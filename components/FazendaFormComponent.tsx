import React from "react";
import {
  Text,
  Box,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  Stack,
  Button,
} from "native-base";
import { viaLacteaTheme } from "../theme/ColorTheme";
import InputComponent from "./InputComponent";
import EnderecoForm from "./EnderecoFormComponent";


type Fazenda = { nome: string, endereco: Object
}
const validate = () => {
  //todo
};

export default function FazendaForm() {
  const [fazenda, setFazenda] = React.useState({});

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Center h="100%" p="8%" justifyContent={"space-between"}>
        <FormControl isRequired>
          <InputComponent
            placeholder={"Fazenda São Jorge"}
            label={"Nome da Fazenda"}
            onChangeText={(value: any) => {
              setFazenda({ ...fazenda, nome: value });
            }}
          />
          <EnderecoForm
            onSubmit={(endereco: Object) => {
              setFazenda({ ...fazenda, endereco });
            }}
          ></EnderecoForm>
        </FormControl>
      </Center>
    </NativeBaseProvider>
  );
}
