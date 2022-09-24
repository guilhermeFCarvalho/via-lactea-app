import { Stack, FormControl, Input } from 'native-base';
import React, { FunctionComponent } from 'react';


interface Props {
    placeholder: string;
    label: string;
    onChangeText: any

}

const InputComponent: FunctionComponent<Props> = (props) => {
    return (
        <Stack direction="column">
            <FormControl.Label>{props.label}</FormControl.Label>
            <Input p={2} placeholder={props.placeholder} onChangeText={props.onChangeText}/>
        </Stack>);
}

export default InputComponent;



