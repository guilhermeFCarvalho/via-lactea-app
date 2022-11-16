import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from './src/screens/home/Home';
import FazendaForm from './src/screens/Fazenda/FazendaForm';
import UsuarioForm from './src/screens/CadastroUsuario/UsuarioForm';
import FinalizarCadastro from './src/screens/FinalizarCadastro/FinalizarCadastro';
import CompradorForm from './src/screens/Comprador/CompradorForm';
import CompradorList from './src/screens/Comprador/CompradorList';
import ReciboDeVendaList from './src/screens/ReciboDeVenda/ReciboDeVendaList';
import ReciboDeVendaForm from './src/screens/ReciboDeVenda/ReciboDeVendaForms';
import LoginPage from './src/screens/Login/LoginPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimalForm from './src/screens/CadastroAnimal/AnimalForm';
import FazendaList from './src/screens/Fazenda/FazendaList';

export default function App() {
  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'front',
        }}
      >
        <Drawer.Screen
          name="AnimalForm"
          component={AnimalForm}
          options={{
            swipeEnabled: false,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Cadastro de Animal',
            drawerLabel: 'AnimalForm',
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            swipeEnabled: false,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Tela principal',
          }}
        />

        <Drawer.Screen
          name="FazendaForm"
          component={FazendaForm}
          options={{
            swipeEnabled: false,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Cadastrar Fazenda',
            drawerLabel: 'Cadastrar Fazenda',
          }}
        />

        <Drawer.Screen
          name="FazendaList"
          component={FazendaList}
          options={{
            swipeEnabled: false,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Minha Fazenda',
            drawerLabel: 'Minha Fazenda',
          }}
        />

        <Drawer.Screen
          name="CompradorList"
          component={CompradorList}
          options={{
            swipeEnabled: false,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Lista de Compradores',
            drawerLabel: 'Compradores',
          }}
        />
        <Drawer.Screen
          name="ReciboDeVendaList"
          component={ReciboDeVendaList}
          options={{
            swipeEnabled: false,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Listagem de Recibos',
            drawerLabel: 'Recibos de venda',
          }}
        />

        <Drawer.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            swipeEnabled: false,
            headerShown: false,
            headerTitleAlign: 'center',
            drawerItemStyle: { height: 0, padding: 0, margin: 0 },
          }}
        />

        <Drawer.Screen
          name="UsuarioForm"
          component={UsuarioForm}
          options={{
            swipeEnabled: false,
            headerShown: false,
            headerTitleAlign: 'center',
            headerTitle: 'Cadastro',
            drawerItemStyle: { height: 0, padding: 0, margin: 0 },
          }}
        />
        <Drawer.Screen
          name="FinalizarCadastro"
          component={FinalizarCadastro}
          options={{
            swipeEnabled: false,
            headerShown: false,
            headerTitleAlign: 'center',
            headerTitle: 'Tela principal',
            drawerItemStyle: { height: 0, padding: 0, margin: 0 },
          }}
        />
        <Drawer.Screen
          name="CompradorForm"
          component={CompradorForm}
          options={{
            swipeEnabled: false,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Cadastro de Compradores',
            drawerItemStyle: { height: 0, padding: 0, margin: 0 },
          }}
        />

        <Drawer.Screen
          name="ReciboDeVendaForm"
          component={ReciboDeVendaForm}
          options={{
            swipeEnabled: false,
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitle: 'Novo Recibo',
            drawerItemStyle: { height: 0, padding: 0, margin: 0 },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
