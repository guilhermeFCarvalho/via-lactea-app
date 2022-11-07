import { useNavigation } from '@react-navigation/native';
import { AddIcon, Center, getColor, HStack, Pressable, Text, VStack } from 'native-base';
import React from 'react';
import { FunctionComponent } from 'react';

interface Props {
  title: string;
  subtitle: string;
  screen?: any;
}

const CardButtonComponent: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();

  
  return (
    <Pressable
      onPress={
        () => {navigation.navigate(props.screen, {id: 'Editar'})}
      }
    >
      {({ isHovered, isPressed }) => {
        return (
          <HStack
            borderColor={'primary.400'}
            borderWidth={'2'}
            rounded="lg"
            justifyContent={'space-between'}
            p={'6%'}
            h={'132'}
            bg={
              isPressed
                ? 'coolGray.200'
                : isHovered
                ? 'coolGray.200'
                : 'coolGray.100'
            }
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            <VStack maxWidth={'70%'}>
              <Text fontWeight={'medium'} fontSize={'xl'}>
                {props.title}
              </Text>
              <Text
                color={'coolGray.400'}
                fontWeight={'regular'}
                fontSize={'sm'}
              >
                {props.subtitle}
              </Text>
            </VStack>
            <Center>
              <AddIcon color={'primary.400'} size="8" />
            </Center>
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default CardButtonComponent;
