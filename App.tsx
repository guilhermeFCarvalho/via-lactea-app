import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './src/screens/home/Home';
import FazendaForm from './src/screens/CadastroFazenda/FazendaForm';
import UsuarioForm from './src/screens/CadastroUsuario/UsuarioForm';
import FinalizarCadastro from './src/screens/FinalizarCadastro/FinalizarCadastro';
import CompradorForm from './src/screens/Comprador/CompradorForm';
import CompradorList from './src/screens/Comprador/CompradorList';
import ReciboDeVendaList from './src/screens/ReciboDeVenda/ReciboDeVendaList';
import ReciboDeVendaForm from './src/screens/ReciboDeVenda/ReciboDeVendaForms';
import AnimalForm from './src/screens/CadastroAnimal/AnimalForm';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimalForm">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FazendaForm" component={FazendaForm} />
        <Stack.Screen name="UsuarioForm" component={UsuarioForm} />
        <Stack.Screen name="AnimalForm" component={AnimalForm} />
        <Stack.Screen name="FinalizarCadastro" component={FinalizarCadastro} />
        <Stack.Screen name="CompradorForm" component={CompradorForm} />
        <Stack.Screen name="CompradorList" component={CompradorList} />
        <Stack.Screen name="ReciboDeVendaList" component={ReciboDeVendaList} />
        <Stack.Screen name="ReciboDeVendaForm" component={ReciboDeVendaForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
