import { extendTheme } from '@chakra-ui/react';
import { theme } from './styles';
import { Text } from './components/text';

console.log(theme);

const myTheme = {
  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        bg: '#000000',
        position: 'relative',
      },
    },
  },
  components: {
    Text,
  },
};

export default extendTheme(myTheme);
