import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { reducer } from './reducer/pageReducer/pageReducer';
import { Provider} from 'react-redux';
import { createStore } from 'redux';


const theme = createTheme({
  palette:{
    navbarColor:{
      main:'#e0e0e0',
      light:'yellow',
      dark:'purple'
    }
  },
})


const store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>
  </Provider>
  
   
  // </React.StrictMode>
);


