import {
  Stack,
  FormControl,
  Input,
  Icon,
  Pressable,
  NativeBaseProvider,
} from 'native-base';
import React, { FunctionComponent } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { viaLacteaTheme } from '../config/theme/ColorTheme';

interface Props {
  onChangeText: any;
  label: string;
}

const PasswordInputComponent: FunctionComponent<Props> = (props) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Stack direction="column">
        <FormControl.Label>{props.label}</FormControl.Label>
        <Input
          p={2}
          label={props.label}
          onChangeText={props.onChangeText}
          type={show ? 'text' : 'password'}
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr="2"
                color="muted.400"
              />
            </Pressable>
          }
        />
      </Stack>
    </NativeBaseProvider>
  );
};

export default PasswordInputComponent;
