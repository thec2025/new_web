import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#004080',
    },
    secondary: {
      main: '#FFA500',
    },
    button: {
      main : "#313B54"
    },
  },
  typography: {
    fontFamily: '"Barlow", "Roboto", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
