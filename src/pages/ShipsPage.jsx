import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShipList from '../components/Ships/ShipList';

export default function ShipsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Ships
      </Typography>
      <ShipList />
    </Box>
  );
}
