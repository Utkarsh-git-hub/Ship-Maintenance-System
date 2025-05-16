import React, { useContext } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Box, Paper, Typography, List, ListItem, Link } from '@mui/material';
import { ShipsContext } from '../contexts/ShipsContext';
import { ComponentsContext } from '../contexts/ComponentsContext';
import { JobsContext } from '../contexts/JobsContext';

export default function ShipDetailPage() {
  const { id } = useParams();
  const { ships } = useContext(ShipsContext);
  const { components } = useContext(ComponentsContext);
  const { jobs } = useContext(JobsContext);
  const ship = ships.find((s) => s.id === id);

  if (!ship) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6" color="error">
          Ship not found
        </Typography>
      </Box>
    );
  }

  const shipComps = components.filter((c) => c.shipId === id);
  const shipJobs = jobs.filter((j) => j.shipId === id);

  return (
    <Box sx={{ px: 4, py: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>

      <Paper elevation={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          {ship.name}
        </Typography>
        <Typography>
          <strong>IMO:</strong> {ship.imo}
        </Typography>
        <Typography>
          <strong>Flag:</strong> {ship.flag}
        </Typography>
        <Typography>
          <strong>Status:</strong> {ship.status}
        </Typography>
      </Paper>

      <Paper elevation={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Components
        </Typography>
        <List sx={{ pl: 2 }}>
          {shipComps.map((c) => (
            <ListItem key={c.id} sx={{ display: 'list-item', pl: 0 }}>
              {c.name} ({c.serialNumber})
            </ListItem>
          ))}
        </List>
      </Paper>

      <Paper elevation={1} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.paper' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Maintenance History
        </Typography>
        <List sx={{ pl: 2 }}>
          {shipJobs.map((j) => (
            <ListItem key={j.id} sx={{ display: 'list-item', pl: 0 }}>
              {j.type} — <Box component="span" sx={{ fontWeight: 500 }}>{j.status}</Box> on {j.scheduledDate}
            </ListItem>
          ))}
        </List>
      </Paper>

      <Link component={RouterLink} to="/ships" sx={{ alignSelf: 'flex-start', mt: 2 }}>
        Back to Ships
      </Link>
    </Box>
  );
}

