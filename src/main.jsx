import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import theme from './theme';
import '@fontsource/mulish';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
