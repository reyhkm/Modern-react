import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

// You can extend the theme to add your custom colors, fonts, etc.
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#e6f0ff',
      100: '#bfd8ff',
      200: '#99c0ff',
      300: '#73a8ff',
      400: '#4d90ff',
      500: '#2678ff',
      600: '#1f60cc',
      700: '#174899',
      800: '#0f3066',
      900: '#081833'
    }
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'
      }
    })
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
