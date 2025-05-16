import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
} from '@mui/material';

export default function ShipForm({ ship, onSave, onCancel }) {
  const [data, setData] = useState({ name: '', imo: '', flag: '', status: 'Active' });

  useEffect(() => {
    if (ship) setData(ship);
  }, [ship]);

  const submit = (e) => {
    e.preventDefault();
    onSave(data);
  };

  const fields = [
    { k: 'name', label: 'Name', type: 'text' },
    { k: 'imo', label: 'IMO Number', type: 'text' },
    { k: 'flag', label: 'Flag', type: 'text' },
    { k: 'status', label: 'Status', type: 'select', opts: ['Active', 'Under Maintenance', 'Decommissioned'] },
  ];

  return (
    <Box component="form" onSubmit={submit} sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
      <Grid container spacing={2}>
        {fields.map((f) => (
          <Grid item xs={12} md={3} key={f.k}>
            {f.type === 'select' ? (
              <FormControl fullWidth>
                <InputLabel>{f.label}</InputLabel>
                <Select
                  label={f.label}
                  value={data[f.k]}
                  onChange={(e) => setData((d) => ({ ...d, [f.k]: e.target.value }))}
                >
                  {f.opts.map((o) => (
                    <MenuItem key={o} value={o}>
                      {o}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                fullWidth
                label={f.label}
                type={f.type}
                value={data[f.k]}
                onChange={(e) => setData((d) => ({ ...d, [f.k]: e.target.value }))}
                required
              />
            )}
          </Grid>
        ))}
      </Grid>

      <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
        <Button type="submit" variant="contained" color="success">
          {ship ? 'Update' : 'Add'} Ship
        </Button>
        {ship && (
          <Button variant="outlined" color="inherit" onClick={onCancel}>
            Cancel
          </Button>
        )}
      </Stack>
    </Box>
  );
}
