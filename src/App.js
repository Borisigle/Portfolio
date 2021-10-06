import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Image,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Nav from './components/Nav';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/500.css';
import Main from './components/Main';
import myTheme from './theme';
import myPhoto from './img.jpeg';

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <Image
        height="70%"
        src={myPhoto}
        alt="Segun Adebayo"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%) scaleX(1)"
        zIndex="-1"
        maxW="260px"
        objectFit="cover"
        filter=" brightness(50%) constrat(0)"
        objectPosition="40% 50%"
      />
      <Nav />

      <Box w="60rem" mx="auto">
        <Main />
      </Box>
    </ChakraProvider>
  );
}

export default App;
