import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { theme } from './modules/theme';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
