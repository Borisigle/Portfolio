import React from 'react';
import { Text, Box, Flex, Spacer, Stack } from '@chakra-ui/react';

const Main = () => {
  return (
    <Flex mt="7rem" alignItems='center'>
      <Box>
        <Text w="30rem" variant='heading'>
          Passionate <br /> UI/UX Desingner & Frontend Developer from south
          Germany
        </Text>
        <Text w="30rem" mt='4rem' variant='subtitle'>
          Est exercitation cillum esse nisi anim est ut pariatur elit sit enim
          veniam est aute. Consequat laboris exercitation laborum est consequat
        </Text>
      </Box>
      <Spacer></Spacer>
      <Stack>
        <a>about</a>
        <a>work</a>
        <a>contact</a>
      </Stack>
    </Flex>
  );
};

export default Main;
