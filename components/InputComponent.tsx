import { Stack, FormControl, Input, Icon, Pressable } from 'native-base';
import React, { FunctionComponent } from 'react';
import { MaterialIcons } from "@expo/vector-icons";


interface Props {
    placeholder?: string;
    label: string;
    onChangeText: any;
    password?: boolean;

}

const InputComponent: FunctionComponent<Props> = (props) => {
    const [show, setShow] = React.useState(false)
    const isPassword = () => {
        if (props.password) return (<Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />)


    }
    return (
        <Stack direction="column">
            <FormControl.Label>{props.label}</FormControl.Label>
            <Input p={2} placeholder={props.placeholder} onChangeText={props.onChangeText} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>{isPassword}</Pressable>} />
        </Stack>);
}

export default InputComponent;



