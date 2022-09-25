import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import {viaLacteaTheme} from "./theme/ColorTheme"
import Endereco from "./components/EnderecoFormComponent";
import FazendaForm from "./components/FazendaFormComponent";

export default function App() {
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <FazendaForm></FazendaForm>

    </NativeBaseProvider>
  );
}

