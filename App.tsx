import React from 'react';
import { NativeBaseProvider } from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import { viaLacteaTheme } from './src/config/theme/ColorTheme';
import Endereco from './src/components/EnderecoFormComponent';
import FazendaFormComponent from './src/components/FazendaFormComponent';
import UsuarioFormComponent from './src/components/UsuarioFormComponent';

export default function App() {
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
       <UsuarioFormComponent></UsuarioFormComponent>
    </NativeBaseProvider>
  );
}
