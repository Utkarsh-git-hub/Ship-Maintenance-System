import React from 'react';
import { Grid, Paper, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function KPICards({ ships, components, jobs }) {
  const theme = useTheme();

  const overdue = components.filter(
    (c) => new Date(c.lastMaintenanceDate) < new Date()
  ).length;
  const inProgress = jobs.filter((j) => j.status === 'In Progress').length;
  const completed = jobs.filter((j) => j.status === 'Completed').length;

  const data = [
    { label: 'Total Ships', value: ships.length, icon: '🚢' },
    { label: 'Overdue Maint.', value: overdue, icon: '⚠️' },
    { label: 'Jobs In Progress', value: inProgress, icon: '🛠️' },
    { label: 'Jobs Completed', value: completed, icon: '✅' },
  ];

  return (
    <Grid container spacing={3} sx={{ px: 2, mb: 4 }}>
      {data.map((d) => (
        <Grid item xs={12} sm={6} lg={3} key={d.label}>
          <Paper
            elevation={1}
            sx={{
              p: 3,
              bgcolor: 'background.paper',
              borderRadius: 2,
              transition: 'box-shadow 150ms',
              '&:hover': { boxShadow: theme.shadows[4] },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <Typography variant="h4" component="span">
                {d.icon}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ textTransform: 'uppercase' }}
              >
                {d.label}
              </Typography>
            </Stack>
            <Typography variant="h3" color="primary">
              {d.value}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

