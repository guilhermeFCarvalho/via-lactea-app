import React from 'react';
import { NativeBaseProvider } from 'native-base';
import renderer from 'react-test-renderer';
import PasswordInputComponent from '../PasswordInputComponent';

test('renders correctly', () => {
  const cardButtonComponent = renderer
    .create(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <PasswordInputComponent
          onChangeText={() => {}}
          label={'test'}
        ></PasswordInputComponent>
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(cardButtonComponent).toMatchSnapshot();
});
