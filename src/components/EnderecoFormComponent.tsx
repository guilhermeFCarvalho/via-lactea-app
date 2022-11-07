import React, { FunctionComponent } from 'react';
import {
  Center,
  FormControl,
  Input,
  NativeBaseProvider,
  Stack,
  Button,
  Select,
} from 'native-base';
import { estados } from '../utils/Estados';
import { viaLacteaTheme } from '../config/theme/ColorTheme';

interface Props {
  onSubmit: any;
}

const EnderecoFormComponent: FunctionComponent<Props> = (props) => {
  const [endereco, setEndereco] = React.useState({});
  const [erros, setErros] = React.useState({});

  const validate = () => {
    if (endereco.rua === undefined || endereco.rua === '') {
      setErros({ ...erros, rua: 'Informe uma rua' });
      return false;
    }
    if (endereco.bairro === undefined || endereco.bairro === '') {
      setErros({ ...erros, bairro: 'Informe um bairro' });
      return false;
    }
    if (
      endereco.cep === undefined ||
      endereco.cep === '' ||
      endereco.cep.length != 8
    ) {
      setErros({ ...erros, cep: 'Informe um CEP válido (somente números)' });
      return false;
    }
    if (
      endereco.numero === undefined ||
      endereco.numero === '' ||
      endereco.numero.length > 8
    ) {
      setErros({ ...erros, numero: 'Informe um numero válido' });
      return false;
    }
    if (endereco.estado === undefined || endereco.estado === '') {
      setErros({...erros, estado: 'Informe um estado'})
      return false;
    }
    if (endereco.cidade === undefined || endereco.cidade === '') {
      setErros({ ...erros, cidade: 'Informe uma cidade' });
      return false;
    }
    return true;
  };

  React.useEffect(() => {
    setErros({});
  }, [endereco]);

  const handleSubmit = () => {
    if (validate()) {
      props.onSubmit(endereco);
    }
    props.onSubmit('erro');
  };

  return (
    <NativeBaseProvider theme={viaLacteaTheme}>
      <Center px="8%" justifyContent={'space-between'}>
        <FormControl isRequired isInvalid={'rua' in erros}>
          <FormControl.Label>{'Rua/Estrada'}</FormControl.Label>
          <Input
            p={2}
            placeholder={'Rodovia do Café'}
            onChangeText={(value: any) => {
              setEndereco({ ...endereco, rua: value });
            }}
          ></Input>
          <FormControl.ErrorMessage>{erros.rua}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={'bairro' in erros}>
          <FormControl.Label>{'Bairro'}</FormControl.Label>
          <Input
            p={2}
            placeholder={'Capivari'}
            onChangeText={(value: any) => {
              setEndereco({ ...endereco, bairro: value });
            }}
          ></Input>
          <FormControl.ErrorMessage>{erros.bairro}</FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={'cep' in erros}>
          <FormControl.Label>{'CEP'}</FormControl.Label>
          <Input
            p={2}
            placeholder={'00000-000'}
            onChangeText={(value: any) => {
              setEndereco({ ...endereco, cep: value });
            }}
          ></Input>
          <FormControl.ErrorMessage>{erros.cep}</FormControl.ErrorMessage>
        </FormControl>

        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack width={'40%'}>
            <FormControl isRequired isInvalid={'numero' in erros}>
              <FormControl.Label>{'Número'}</FormControl.Label>
              <Input
                p={2}
                placeholder={'0000'}
                onChangeText={(value: any) => {
                  setEndereco({ ...endereco, numero: value });
                }}
              ></Input>
              <FormControl.ErrorMessage>
                {erros.numero}
              </FormControl.ErrorMessage>
            </FormControl>
          </Stack>

          <Stack width={'40%'}>
            <FormControl isRequired isInvalid={'estado' in erros}>
              <FormControl.Label>{'Estado'}</FormControl.Label>
              <Select
                placeholder="AL"
                onValueChange={(value: any) => {
                  setEndereco({ ...endereco, estado: value });
                }}
              >
                {estados.map((element) => {
                  return (
                    <Select.Item label={element.sigla} value={element.sigla} />
                  );
                })}
              </Select>
              <FormControl.ErrorMessage>
                {erros.estado}
              </FormControl.ErrorMessage>
            </FormControl>
          </Stack>
        </Stack>
        <FormControl isRequired isInvalid={'cidade' in erros}>
          <FormControl.Label>{'Cidade'}</FormControl.Label>
          <Input
            p={2}
            placeholder={'Maringá'}
            onChangeText={(value: any) => {
              setEndereco({ ...endereco, cidade: value });
            }}
          ></Input>
          <FormControl.ErrorMessage>{erros.cidade}</FormControl.ErrorMessage>
        </FormControl>
      </Center>
      <Button m={'8%'} onPress={handleSubmit}>
        Salvar
      </Button>
    </NativeBaseProvider>
  );
};
export default EnderecoFormComponent;
