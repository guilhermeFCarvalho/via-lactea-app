import { NativeBaseProvider, Button, ScrollView } from 'native-base';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';

interface Props {}

export type RootStackParamList = {

};

const Home: FunctionComponent<Props> = (props) => {

  const navigation = useNavigation();

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <ScrollView>
      
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
