import React from 'react';
import { NativeBaseProvider } from 'native-base';
import renderer from 'react-test-renderer';
import InputMask from '../InputMask';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

test('renders correctly', () => {
  const inputMask = renderer
    .create(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <InputMask 
          mask="number"
          inputMaskChange={() => {}}>
        </InputMask>
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(inputMask).toMatchSnapshot();
});