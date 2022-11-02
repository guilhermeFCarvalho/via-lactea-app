import React from 'react';
import { Text } from 'react-native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import UsuarioForm from '../UsuarioForm';
import { NativeBaseProvider } from 'native-base';

const inset = {
  frame: { x: 0, y: 0, width: 0, height: 0 },
  insets: { top: 0, left: 0, right: 0, bottom: 0 },
};

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
    useRoute: jest.fn().mockReturnValue({ params: { id: 'Novo' } }),
  };
});
it('passando informações corretas, usuário passa para tela de cadastro de fazenda', () => {
  render(
    <NativeBaseProvider initialWindowMetrics={inset}>
      <UsuarioForm />
    </NativeBaseProvider>,
  );
  const input = screen.getByTestId('input_nome', { exact: false });

  const setStateMock = jest.fn();
  jest.mock('React', () => {
    return {
      useEffect: jest.fn()
    }
  })
  const useStateMock: any = (useState: any) => [useState, setStateMock];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  fireEvent.changeText(input, 'Guilherme');

  expect(setStateMock).toHaveBeenCalledWith('Guilherme');

  // const nomeElements = screen.getByText('Guilherme', {exact:false});
  // expect(nomeElements).toHaveLength(1);
});

// const ComponentTest = () => {
//   return <Text>test</Text>;
// };
// it('adds 1 + 2 to equal 3', () => {
//   render(<ComponentTest />);
//   const result = screen.getByText('test')
//   expect(result).toBeTruthy()
// });
