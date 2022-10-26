import { Container, Text, Heading, Box, HStack } from "native-base";
import React, { FunctionComponent } from "react";
import { viaLacteaTheme } from "../../../config/theme/ColorTheme";
import { ReciboDeVenda } from "../../../types/ReciboDeVenda";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

interface Props {
  recibo: ReciboDeVenda;
}

const ReciboDeVendaCard: FunctionComponent<Props> = (props) => {
  return (
    <Container
      height={200}
      mr={"auto"}
      ml={"auto"}
      marginY={2}
      maxWidth={windowWidth * 0.9}
      width={windowWidth * 0.9}
      borderColor={"gray.500"}
      borderStyle={"solid"}
      borderWidth="1"
    >
      <Heading>
        <HStack
          borderBottomColor={"black"}
          borderBottomWidth={1}
          width={windowWidth * 0.9}
          height={30}
          mr={"auto"}
          ml={"auto"}
          justifyContent={"space-around"}
        >
          <Text fontSize={10}>Coleta:{props.recibo.id}</Text>

          <Text fontSize={10}>Data:{props.recibo.dataDaVenda}</Text>
        </HStack>
      </Heading>

      
    </Container>
  );
};

export default ReciboDeVendaCard;
