import React, { useContext } from 'react';
import { ShipsContext } from '../contexts/ShipsContext';
import { ComponentsContext } from '../contexts/ComponentsContext';
import { JobsContext } from '../contexts/JobsContext';
import { Box, Typography } from '@mui/material';
import KPICards from '../components/Dashboard/KPICards';
import Charts from '../components/Dashboard/Charts';

export default function DashboardPage() {
  const { ships } = useContext(ShipsContext);
  const { components } = useContext(ComponentsContext);
  const { jobs } = useContext(JobsContext);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <KPICards ships={ships} components={components} jobs={jobs} />
      <Charts ships={ships} components={components} jobs={jobs} />
    </Box>
  );
}
