import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from "./src/screens/home/Home";
import FazendaForm from "./src/screens/CadastroFazenda/FazendaForm";
import UsuarioForm from "./src/screens/CadastroUsuario/UsuarioForm";
import FinalizarCadastro from './src/screens/FinalizarCadastro/FinalizarCadastro';
import CompradorForm from './src/screens/CadastroColetor/CompradorForm';


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FazendaForm" component={FazendaForm} />
        <Stack.Screen name="UsuarioForm" component={UsuarioForm} />
        <Stack.Screen name="FinalizarCadastro" component={FinalizarCadastro} />
        <Stack.Screen name="CompradorForm" component={CompradorForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
