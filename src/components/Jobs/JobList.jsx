import React, { useContext, useState } from 'react';
import { JobsContext } from '../../contexts/JobsContext';
import JobForm from './JobForm';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Stack,
} from '@mui/material';

export default function JobList() {
  const { jobs, add, update, remove } = useContext(JobsContext);
  const [edit, setEdit] = useState(null);
  const [filter, setFilter] = useState({ status: '', priority: '' });

  const handleSave = (data) => {
    if (edit) {
      update(data);
    } else {
      add({ ...data, id: uuidv4() });
    }
    setEdit(null);
  };

  const filtered = jobs.filter((j) =>
    (!filter.status || j.status === filter.status) &&
    (!filter.priority || j.priority === filter.priority)
  );

  return (
    <Box sx={{ px: 2, py: 2, spaceY: 2 }}>
      <JobForm
        key={edit?.id || 'new'}
        job={edit}
        onSave={handleSave}
        onCancel={() => setEdit(null)}
      />

      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              value={filter.status}
              onChange={(e) => setFilter((f) => ({ ...f, status: e.target.value }))}
            >
              <MenuItem value="">All Statuses</MenuItem>
              {['Open', 'In Progress', 'Completed'].map((s) => (
                <MenuItem key={s} value={s}>{s}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              label="Priority"
              value={filter.priority}
              onChange={(e) => setFilter((f) => ({ ...f, priority: e.target.value }))}
            >
              <MenuItem value="">All Priorities</MenuItem>
              {['Low', 'Medium', 'High'].map((p) => (
                <MenuItem key={p} value={p}>{p}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ borderRadius: 2, boxShadow: 1 }}>
        <Table>
          <TableHead sx={{ bgcolor: 'background.default' }}>
            <TableRow>
              {['Type', 'Priority', 'Status', 'Date', 'Engineer', 'Actions'].map((h) => (
                <TableCell key={h} sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((j) => (
              <TableRow key={j.id} hover>
                <TableCell>{j.type}</TableCell>
                <TableCell>{j.priority}</TableCell>
                <TableCell>{j.status}</TableCell>
                <TableCell>{j.scheduledDate}</TableCell>
                <TableCell>{j.assignedEngineerId}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button variant="text" size="small" onClick={() => setEdit(j)}>
                      Edit
                    </Button>
                    <Button variant="text" size="small" color="error" onClick={() => remove(j.id)}>
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No jobs found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

