import React, { FunctionComponent, useEffect, useState } from "react";
import {
  NativeBaseProvider,
  Button,
  Box,
  Heading,
} from "native-base";
import { viaLacteaTheme } from "../../config/theme/ColorTheme";
import { ReciboDeVenda } from "../../types/ReciboDeVenda";
import ReciboDeVendaCard from "./components/ReciboDeVendaCardComponent";
import ReciboDeVendaService from "../../service/reciboDeVendaService/ReciboDeVendaServices";
import { useNavigation } from "@react-navigation/native";



const validate = () => {
  //todo
};

interface Props {}

const ReciboDeVendaList: FunctionComponent<Props> = (props) => {
  const [listaRecibo, setReciboLista] = useState<Array<any>>([]);

  const buscar = () => {
    ReciboDeVendaService.buscar({}).then((response) =>
      setReciboLista(response.data.content)
    );
  };

  useEffect(() => {
    buscar();
  }, []);

  const navigation = useNavigation();



  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Button
        mt={"4%"}
        onPress={() => {
          navigation.navigate("ReciboDeVendaForm", {})
        }}
      >
        {" "}
        Adicionar Recibo{" "}
      </Button>
      <Heading fontSize="xl" p="4" pb="3">
        Recibos
      </Heading>

      {listaRecibo.map((item: ReciboDeVenda) => {
        return (
          <>
            <Box >
              <ReciboDeVendaCard recibo={item}> </ReciboDeVendaCard>
            </Box>
|          </>
        );
      })}
    </NativeBaseProvider>
  );
};

export default ReciboDeVendaList;
