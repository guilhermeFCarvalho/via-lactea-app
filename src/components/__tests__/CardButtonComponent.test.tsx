import React from 'react';
import { NativeBaseProvider } from 'native-base';
import renderer from 'react-test-renderer';
import CardButtonComponent from '../CardButtonComponent';


jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

test('renders correctly', () => {
  const cardButtonComponent = renderer
    .create(
      <NativeBaseProvider
        initialWindowMetrics={{
          frame: { x: 0, y: 0, width: 0, height: 0 },
          insets: { top: 0, left: 0, right: 0, bottom: 0 },
        }}
      >
        <CardButtonComponent
          title={'test'}
          subtitle={'test'}
        ></CardButtonComponent>
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(cardButtonComponent).toMatchSnapshot();
});
