import React, { useContext, useState } from 'react';
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  ListItemText,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { NotificationsContext } from '../../contexts/NotificationsContext';

export default function NotificationCenter() {
  const { notes, dismiss } = useContext(NotificationsContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleToggle = (event) => {
    if (open) setAnchorEl(null);
    else setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <Box>
      <IconButton color="inherit" onClick={handleToggle}>
        <Badge badgeContent={notes.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {notes.length > 0 ? (
          notes.map((n) => (
            <Box key={n.id}>
              <MenuItem sx={{ alignItems: 'flex-start' }}>
                <ListItemText
                  primary={
                    <Typography variant="body2" fontWeight="medium">
                      {n.message}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary">
                      {new Date(n.time).toLocaleString()}
                    </Typography>
                  }
                />
                <IconButton
                  edge="end"
                  size="small"
                  color="inherit"
                  onClick={() => dismiss(n.id)}
                >
                  ×
                </IconButton>
              </MenuItem>
              <Divider />
            </Box>
          ))
        ) : (
          <MenuItem disabled>
            <Typography variant="body2" color="text.secondary">
              No notifications
            </Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
}

