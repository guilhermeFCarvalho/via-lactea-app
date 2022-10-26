import React, { FunctionComponent } from "react";
import {
  NativeBaseProvider,
  Button,
  FormControl,
  Input,
  Checkbox,
  Container,
} from "native-base";
import { viaLacteaTheme } from "../../config/theme/ColorTheme";
import { ReciboDeVenda } from "../../types/ReciboDeVenda";

import { useNavigation } from "@react-navigation/core";
import ReciboDeVendaService from "../../service/reciboDeVendaService/ReciboDeVendaServices";

const validate = () => {
  //todo
};


interface Props {
  
}

const ReciboDeVendaForm: FunctionComponent<Props> = (props) => {

  const navigation = useNavigation()

  const salvarNovoRecibo = () => {
      ReciboDeVendaService.salvar(leiteVendido)
      .finally(
        navigation.navigate('ReciboDeVendaList')
      )
  };


  const [leiteVendido, setLeiteVendido] = React.useState<ReciboDeVenda>({
    quantidadeLeiteVendida: 0,
    observacoes: "",
    pago: false,
  });

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Container mr="auto" ml="auto" mt="5">
        <FormControl isRequired>
          <FormControl.Label>{"Quantidade"}</FormControl.Label>
          <Input
            w="64"
            p={2}
            placeholder={"Ex.: 123,5"}
            onChangeText={(value: any) => {
              setLeiteVendido({ ...leiteVendido, quantidadeLeiteVendida: value });
            }}
          ></Input>

          <FormControl.Label>{"Observações"}</FormControl.Label>
          <Input
            w="64"
            p={2}
            placeholder={"Digite aqui..."}
            onChangeText={(value: any) => {
              setLeiteVendido({ ...leiteVendido, observacoes: value });
            }}
          ></Input>

          <FormControl.Label>{"Foi pago ? "}</FormControl.Label>
          <Checkbox
            value="pago"
            accessibilityLabel="Venda foi paga ?"
            onChange={(value: any) => {
              setLeiteVendido({ ...leiteVendido, pago: value });
            }}
          />

          <Button
            m={5}
            onPress={() => {
              salvarNovoRecibo();
            }}
          >
            Salvar
          </Button>
        </FormControl>
      </Container>
    </NativeBaseProvider>
  );
};

export default ReciboDeVendaForm;
