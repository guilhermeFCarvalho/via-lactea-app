import { Stack, FormControl, Input, NativeBaseProvider } from 'native-base';
import React, { FunctionComponent } from 'react';
import { viaLacteaTheme } from '../config/theme/ColorTheme';

interface Props {
  placeholder?: string;
  label: string;
  onChangeText: any;
  password?: boolean;
}

const InputComponent: FunctionComponent<Props> = (props) => {
  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Stack direction="column">
        <FormControl.Label>{props.label}</FormControl.Label>
        <Input
          p={2}
          placeholder={props.placeholder}
          onChangeText={props.onChangeText}
        ></Input>
      </Stack>
    </NativeBaseProvider>
  );
};

export default InputComponent;
