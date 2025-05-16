import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  Box,
  Paper,
  Typography,
  Grid,
  useTheme,
} from '@mui/material';

export default function Charts({ ships, components, jobs }) {
  const theme = useTheme();

  const statusData = ['Open', 'In Progress', 'Completed'].map((s) => ({
    name: s,
    value: jobs.filter((j) => j.status === s).length,
  }));

  const barData = ships.map((s) => ({
    ship: s.name,
    overdue: components.filter(
      (c) => c.shipId === s.id && new Date(c.lastMaintenanceDate) < new Date()
    ).length,
  }));

  const COLORS = [
    theme.palette.success.main,
    theme.palette.warning.main,
    theme.palette.error.main,
  ];

  return (
    <Grid container spacing={4} sx={{ px: 2, mb: 4 }}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Jobs by Status
          </Typography>
          <PieChart width={300} height={250}>
            <Pie
              data={statusData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {statusData.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" />
          </PieChart>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Overdue Components by Ship
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <BarChart width={300} height={250} data={barData}>
              <XAxis dataKey="ship" stroke={theme.palette.text.secondary} />
              <YAxis stroke={theme.palette.text.secondary} />
              <Tooltip
                contentStyle={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: '8px',
                  color: theme.palette.text.primary,
                }}
              />
              <Bar dataKey="overdue" fill={theme.palette.warning.main} />
            </BarChart>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

