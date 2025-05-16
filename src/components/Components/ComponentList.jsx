import React, { useContext, useState } from 'react';
import { ComponentsContext } from '../../contexts/ComponentsContext';
import ComponentForm from './ComponentForm';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Stack,
  Typography
} from '@mui/material';

export default function ComponentList() {
  const { components, add, update, remove } = useContext(ComponentsContext);
  const [edit, setEdit] = useState(null);

  const handleSave = (data) => {
    if (edit) {
      update(data);
    } else {
      add({ ...data, id: uuidv4() });
    }
    setEdit(null);
  };

  return (
    <Box sx={{ px: 3, py: 2 }}>
      <ComponentForm
        key={edit?.id || 'new'}
        component={edit}
        onSave={handleSave}
        onCancel={() => setEdit(null)}
      />

      <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 2, boxShadow: 1 }}>
        <Table>
          <TableHead sx={{ bgcolor: 'background.default' }}>
            <TableRow>
              {['Name', 'Serial #', 'Installed', 'Last Maint.', 'Actions'].map((header) => (
                <TableCell key={header} sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {components.map((c) => (
              <TableRow key={c.id} hover>
                <TableCell>{c.name}</TableCell>
                <TableCell>{c.serialNumber}</TableCell>
                <TableCell>{c.installDate}</TableCell>
                <TableCell>{c.lastMaintenanceDate}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => setEdit(c)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      color="error"
                      onClick={() => remove(c.id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
            {components.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography color="text.secondary">No components found.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

