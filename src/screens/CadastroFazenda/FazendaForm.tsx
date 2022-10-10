import React, { FunctionComponent } from 'react';
import {
  Button,
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
} from 'native-base';
import { viaLacteaTheme } from '../../config/theme/ColorTheme';
import EnderecoFormComponent from '../../components/EnderecoFormComponent';
import UsuarioService from '../../service/UsuarioService/UsuarioService';
import { TabRouter } from '@react-navigation/native';

const validate = () => {
  //Utilizar API ViaCep
};

interface Props {
  navigation: any;
  route: any;
}


const FazendaForm: FunctionComponent<Props> = (props) => {
  const [fazenda, setFazenda] = React.useState({});
  const [endereco, setEndereco] = React.useState({});

  //TODO: passar essa função para tela de finalizar cadastro
  //TODO: Arrumar telefone duplicado de fazenda e propriedade, adicionar estado no endereco
  const cadastrarUsuario = (endereco) => {
    UsuarioService.salvar({
      propriedades: [
        {
          car: fazenda.car,
          telefone: fazenda.telefone,
          fazenda: {
            nomeDaFazenda: fazenda.nome,
            telefone: fazenda.telefone,
            endereco: {
              rua: endereco.rua,
              numero: endereco.numero,
              bairro: endereco.bairro,
              cidade: endereco.cidade,
              cep: endereco.cep,
            },
          },
        },
      ],
      telefone: props.route.params.telefone,
      nome: props.route.params.nome,
      sobrenome: props.route.params.sobrenome,
      cpf: props.route.params.cpf,
    });
  };
  
  

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Center px="8%" pt="8%" justifyContent={'space-between'}>
        <FormControl isRequired>
          <FormControl.Label>Nome da Fazenda</FormControl.Label>
          <Input
            placeholder="Fazenda São Jorge"
            onChangeText={(value: any) => {
              setFazenda({ ...fazenda, nome: value });
            }}
          ></Input>
        </FormControl>
        <FormControl isRequired>
          <FormControl.Label>Telefone da fazenda</FormControl.Label>
          <Input
            placeholder="(00)00000-0000"
            onChangeText={(value: any) => {
              setFazenda({ ...fazenda, telefone: value });
            }}
          ></Input>
        </FormControl>
        <FormControl>
          <FormControl.Label>Cadastro de Ambiente Rural (CAR)</FormControl.Label>
          <Input
            placeholder=""
            onChangeText={(value: any) => {
              setFazenda({ ...fazenda, car: value });
            }}
          ></Input>
        </FormControl>
      </Center>
      <EnderecoFormComponent
        onSubmit={(endereco: object) => {cadastrarUsuario(endereco)}}
      ></EnderecoFormComponent>
      
    
    </NativeBaseProvider>
  );
};

export default FazendaForm;
