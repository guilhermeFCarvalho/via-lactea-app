import { Stack, FormControl, Input } from 'native-base';
import React, { FunctionComponent } from 'react';


interface Props {
    placeholder: string;
    label: string;

}

const InputComponent: FunctionComponent<Props> = (props) => {
    return (
        <Stack direction="column">
            <FormControl.Label>{props.label}</FormControl.Label>
            <Input p={2} placeholder={props.placeholder} />
        </Stack>);
}

export default InputComponent;



