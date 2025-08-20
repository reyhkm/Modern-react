import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

// You can extend the theme to add your custom colors, fonts, etc.
const theme = extendTheme({
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
    global: {
      body: {
        bg: 'gray.50'
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)