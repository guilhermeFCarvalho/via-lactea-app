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

export default function App() {
  return (
    //esse provider possibilita que o tema seja usado no app
    <NativeBaseProvider theme={viaLacteaTheme}>
    
      <Box bg = "viaLacteaSecondary.pink" p="4"
      />

    </NativeBaseProvider>
  );
}

