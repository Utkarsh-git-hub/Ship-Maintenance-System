import React, { useState, useContext } from 'react';
import { JobsContext } from '../../contexts/JobsContext';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

export default function JobCalendar() {
  const { jobs } = useContext(JobsContext);
  const [date, setDate] = useState(new Date());

  const todays = jobs.filter(
    (j) => new Date(j.scheduledDate).toDateString() === date.toDateString()
  );

  return (
    <Box sx={{ px: 2, mb: 4 }}>
      <Paper sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            renderInput={(params) => <Box component="div" {...params} />}
            sx={{
              '& .MuiPickersDay-root': {
                borderRadius: 1,
              },
              '& .Mui-selected': {
                bgcolor: 'primary.main',
                '&:hover': { bgcolor: 'primary.dark' },
              },
            }}
          />
        </LocalizationProvider>

        <Typography variant="h6" color="text.secondary" mt={4}>
          Jobs on {date.toDateString()}
        </Typography>

        <List sx={{ mt: 1 }}>
          {todays.length > 0 ? (
            todays.map((j) => (
              <React.Fragment key={j.id}>
                <ListItem
                  sx={{
                    bgcolor: 'background.default',
                    borderRadius: 1,
                    mb: 1,
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                  }}
                >
                  <ListItemText
                    primary={j.type}
                    secondary={j.status}
                    primaryTypographyProps={{ fontWeight: 'medium' }}
                  />
                </ListItem>
              </React.Fragment>
            ))
          ) : (
            <ListItem>
              <ListItemText
                primary="No jobs scheduled."
                primaryTypographyProps={{ color: 'text.disabled' }}
              />
            </ListItem>
          )}
        </List>
      </Paper>
    </Box>
  );
}