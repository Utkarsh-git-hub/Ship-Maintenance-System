// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',      
      paper:   '#1E1E1E',      
    },
    primary: {
      main:  '#3B82F6',        
      light: '#60A5FA',        
      contrastText: '#000',    
    },
    text: {
      primary: '#E5E7EB',     
      secondary: '#9CA3AF',    
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',  
    body1: {
      lineHeight: 1.625,               
    },
  },
  shape: {
    borderRadius: 16,                  
  },
  components: {
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,0.2)',
                border: '1px solid #3D8C85', 
                backgroundColor: '#2A2E35',  
                color: '#E0F2F1',            
                transition: 'box-shadow 150ms, background-color 150ms',
                '&:hover': {
                    backgroundColor: '#3D8C85', 
                    color: '#000000',           
                    boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                },
            },
        },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',   
          color: '#E5E7EB',
          borderRadius: 16,
          border: '1px solid #1E1E1E',
          transition: 'box-shadow 150ms',
          '&.Mui-focused': {
            boxShadow: `0 0 0 2px rgba(96,165,250,0.5)`, 
          },
          '& .MuiInputBase-input::placeholder': {
            color: '#9CA3AF',            
          },
        },
      },
    },
  },
});

export default theme;
