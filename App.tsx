import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import {viaLacteaTheme} from "./theme/ColorTheme"
import Endereco from "./screens/Endereco";

export default function App() {
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
    
      <Endereco/>

    </NativeBaseProvider>
  );
}

