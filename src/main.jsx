import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import App from './App';
import theme from './theme';

const globalStyles = (
  <GlobalStyles
    styles={{
      html: {
        scrollBehavior: 'smooth',
      },
      a: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        transition: 'color 150ms',
        '&:hover': {
          color: theme.palette.primary.light,
        },
      },
    }}
  />
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);


