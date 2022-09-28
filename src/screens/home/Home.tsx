import { Stack, FormControl, Input, Icon, Pressable, NativeBaseProvider, Button, Center, useTheme } from 'native-base';
import React, { FunctionComponent } from 'react';
import { MaterialIcons } from "@expo/vector-icons";
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import { useNavigation } from '@react-navigation/native';



interface Props {
}




const PasswordInputComponent: FunctionComponent<Props> = (props) => {

  const navigation = useNavigation();

    return (
        <NativeBaseProvider theme={viaLacteaTheme}>

            <Button m="5"
              bg={"viaLacteaSecondary.blue"} 
              onPress={() => navigation.navigate('UsuarioForm')}> Formulario Usuario </Button>
            <Button m="5"
              bg={"viaLacteaSecondary.blue"} 
              onPress={() => navigation.navigate('FazendaForm')}> Formulario Fazenda </Button>

        </NativeBaseProvider>);
}

export default PasswordInputComponent;



