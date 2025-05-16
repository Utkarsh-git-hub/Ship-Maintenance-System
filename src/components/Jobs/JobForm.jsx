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
  useTheme,
} from '@mui/material';

export default function JobForm({ job, onSave, onCancel }) {
  const theme = useTheme();
  const [data, setData] = useState({
    shipId: '',
    componentId: '',
    type: '',
    priority: 'Low',
    status: 'Open',
    assignedEngineerId: '',
    scheduledDate: '',
  });

  useEffect(() => {
    if (job) setData(job);
  }, [job]);

  const submit = (e) => {
    e.preventDefault();
    onSave(data);
  };

  const fields = [
    { k: 'shipId', label: 'Ship ID', type: 'text' },
    { k: 'componentId', label: 'Component ID', type: 'text' },
    { k: 'type', label: 'Job Type', type: 'text' },
    { k: 'priority', label: 'Priority', type: 'select', opts: ['Low', 'Medium', 'High'] },
    { k: 'status', label: 'Status', type: 'select', opts: ['Open', 'In Progress', 'Completed'] },
    { k: 'assignedEngineerId', label: 'Engineer ID', type: 'text' },
    { k: 'scheduledDate', label: 'Scheduled Date', type: 'date' },
  ];

  return (
    <Box
      component="form"
      onSubmit={submit}
      sx={{
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Grid container spacing={2}>
        {fields.map((f) => (
          <Grid item xs={12} md={4} key={f.k}>
            {f.type === 'select' ? (
              <FormControl fullWidth>
                <InputLabel>{f.label}</InputLabel>
                <Select
                  label={f.label}
                  value={data[f.k]}
                  onChange={(e) => setData((d) => ({ ...d, [f.k]: e.target.value }))}
                  required
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
                InputLabelProps={f.type === 'date' ? { shrink: true } : undefined}
              />
            )}
          </Grid>
        ))}

        <Grid item xs={12}>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button type="submit" variant="contained" color="success">
              Save
            </Button>
            {job && (
              <Button
                variant="outlined"
                color="inherit"
                onClick={onCancel}
              >
                Cancel
              </Button>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

