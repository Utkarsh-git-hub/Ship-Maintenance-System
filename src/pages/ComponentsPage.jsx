import React from 'react';
import { Box, Typography } from '@mui/material';
import ComponentList from '../components/Components/ComponentList';

export default function ComponentsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Components
      </Typography>
      <ComponentList />
    </Box>
  );
}
