import React, { useContext, useState } from 'react';
import { ShipsContext } from '../../contexts/ShipsContext';
import ShipForm from './ShipForm';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
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
  Typography,
  Grid
} from '@mui/material';

export default function ShipList() {
  const { ships, add, update, remove } = useContext(ShipsContext);
  const [edit, setEdit] = useState(null);

  const handleSave = (data) => {
    if (edit) update(data);
    else add({ ...data, id: uuidv4() });
    setEdit(null);
  };

  return (
    <Box sx={{ px: 2, py: 2 }}>

      <ShipForm
        key={edit?.id || 'new'}
        ship={edit}
        onSave={handleSave}
        onCancel={() => setEdit(null)}
      />

      <TableContainer component={Paper} sx={{ mt: 4, borderRadius: 2, boxShadow: 1 }}>
        <Table>
          <TableHead sx={{ bgcolor: 'background.default' }}>
            <TableRow>
              {['Name', 'IMO', 'Flag', 'Status', 'Actions'].map((h) => (
                <TableCell key={h} sx={{ color: 'text.secondary', fontWeight: 'medium' }}>
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ships.map((s) => (
              <TableRow key={s.id} hover>
                <TableCell>
                  <Typography
                    component={Link}
                    to={`/ships/${s.id}`}
                    sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {s.name}
                  </Typography>
                </TableCell>
                <TableCell>{s.imo}</TableCell>
                <TableCell>{s.flag}</TableCell>
                <TableCell>{s.status}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button variant="text" size="small" onClick={() => setEdit(s)}>
                      Edit
                    </Button>
                    <Button variant="text" size="small" color="error" onClick={() => remove(s.id)}>
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
            {ships.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography color="text.secondary">No ships available.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
