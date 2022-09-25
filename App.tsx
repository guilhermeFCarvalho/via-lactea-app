import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import {viaLacteaTheme} from "./theme/ColorTheme"
import Endereco from "./components/EnderecoFormComponent";
import FazendaFormComponent from "./components/FazendaFormComponent";
import UsuarioFormComponent from "./components/UsuarioFormComponent";

export default function App() {
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <UsuarioFormComponent></UsuarioFormComponent>

    </NativeBaseProvider>
  );
}

