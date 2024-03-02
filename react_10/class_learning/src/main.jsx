import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider as ReduxProvider} from 'react-redux'
import { store } from './Redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <ReduxProvider store={store}>
    <App />
    </ReduxProvider>
  </ChakraProvider>
)
