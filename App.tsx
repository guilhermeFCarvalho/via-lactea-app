import React from "react";
import {
  NativeBaseProvider,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import {viaLacteaTheme} from "./theme/ColorTheme"
import Endereco from "./components/EnderecoFormComponent";

export default function App() {
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Endereco></Endereco>

    </NativeBaseProvider>
  );
}

