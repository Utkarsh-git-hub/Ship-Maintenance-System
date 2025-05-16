import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import JobList from '../components/Jobs/JobList';
import JobCalendar from '../components/Jobs/JobCalendar';

export default function JobsPage() {
  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Maintenance Jobs
          </Typography>
          <JobList />
        </Box>

        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Calendar View
          </Typography>
          <JobCalendar />
        </Box>
      </Stack>
    </Box>
  );
}
