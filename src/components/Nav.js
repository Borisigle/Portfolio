import React from 'react';
import { Flex, Spacer, Text } from '@chakra-ui/react';

function Nav() {
  return (
    <nav>
      <Flex w='60rem' mx='auto' py={6} >
        <Text fontWeight="500">boris iglesias</Text>
      </Flex>
    </nav>
  );
}

export default Nav;
