import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Typography, Box, Stack } from '@mui/material';

export default function ComponentForm({ component, onSave, onCancel }) {
  const [data, setData] = useState({
    shipId: '',
    name: '',
    serialNumber: '',
    installDate: '',
    lastMaintenanceDate: ''
  });

  useEffect(() => {
    if (component) setData(component);
  }, [component]);

  const submit = (e) => {
    e.preventDefault();
    onSave(data);
  };

  const fields = [
    { k: 'shipId', label: 'Ship ID', type: 'text' },
    { k: 'name', label: 'Name', type: 'text' },
    { k: 'serialNumber', label: 'Serial Number', type: 'text' },
    { k: 'installDate', label: 'Install Date', type: 'date' },
    { k: 'lastMaintenanceDate', label: 'Last Maint. Date', type: 'date' }
  ];

  return (
    <Box component="form" onSubmit={submit} sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      <Grid container spacing={2}>
        {fields.map((f) => (
          <Grid item xs={12} md={6} key={f.k}>
            <TextField
              fullWidth
              label={f.label}
              type={f.type}
              value={data[f.k]}
              onChange={(e) => setData((d) => ({ ...d, [f.k]: e.target.value }))}
              required
              InputLabelProps={f.type === 'date' ? { shrink: true } : undefined}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button type="submit" variant="contained" color="success">
              Save
            </Button>
            {component && (
              <Button variant="outlined" color="inherit" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

