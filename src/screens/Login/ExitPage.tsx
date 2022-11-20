import React, { FunctionComponent, useEffect } from 'react';
import { NativeBaseProvider } from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validate = () => {
  //todo
};

interface Props {}

const ExitPage: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.clear();
    navigation.navigate('LoginPage');
  }, []);

  return <NativeBaseProvider theme={viaLacteaTheme}></NativeBaseProvider>;
};

export default ExitPage;
