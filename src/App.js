import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Nav from './components/Nav';
import "@fontsource/inter/400.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/500.css"
import Main from './components/Main';
import myTheme from './theme'

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <Nav />
      <Box w='60rem' mx='auto'>
      <Main />
      </Box>
    </ChakraProvider>
  );
}

export default App;
