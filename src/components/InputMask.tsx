import { Input } from "native-base";
import React from "react";
import { TextInputProps } from "react-native";

import { mascaraData, mascaraPeso } from "../utils/Mascaras";

interface InputProps extends TextInputProps {
  mask: "data" | "number",
  inputMaskChange: any;
}

const InputMask: React.FC<InputProps> = ({ mask, inputMaskChange, ... rest }) => {
  
  function pegarAlteracao(texto: string) {
    if(mask === 'data') {
      const textoFormatado = mascaraData(texto);
      inputMaskChange(textoFormatado)
    } if (mask === 'number') {
      const textoFormatado = mascaraPeso(texto)
      inputMaskChange(textoFormatado)
    }
  }

  return (
    <Input
      onChangeText={text => pegarAlteracao(text)}
        { ...rest }
    >
    </Input>
  )
}

export default InputMask;