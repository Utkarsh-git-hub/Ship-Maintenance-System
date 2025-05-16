import React, { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppBar, Toolbar, Box, Typography, Button, Stack } from '@mui/material';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { ShipsProvider } from './contexts/ShipsContext';
import { ComponentsProvider } from './contexts/ComponentsContext';
import { JobsProvider } from './contexts/JobsContext';
import { NotificationsProvider } from './contexts/NotificationsContext';

import PrivateRoute from './components/Authentication/PrivateRoute';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ShipsPage from './pages/ShipsPage';
import ShipDetailPage from './pages/ShipDetailPage';
import ComponentsPage from './pages/ComponentsPage';
import JobsPage from './pages/JobsPage';
import NotificationCenter from './components/Notifications/NotificationCenter';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <ShipsProvider>
          <ComponentsProvider>
            <JobsProvider>
              <NotificationsProvider>
                <AppShell />
              </NotificationsProvider>
            </JobsProvider>
          </ComponentsProvider>
        </ShipsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function AppShell() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      {user && (
        <AppBar position="static" color="background" elevation={1} sx={{ bgcolor: 'background.paper' }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Stack direction="row" spacing={2}>
                <NavButton to="/">Dashboard</NavButton>
                <NavButton to="/ships">Ships</NavButton>
                <NavButton to="/components">Components</NavButton>
                <NavButton to="/jobs">Jobs</NavButton>
              </Stack>
            </Box>

            <Stack direction="row" spacing={2} alignItems="center">
              <NotificationCenter />
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
              <Button variant="contained" color="secondary" onClick={logout}>
                Logout
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      )}

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/ships" element={<ShipsPage />} />
          <Route path="/ships/:id" element={<ShipDetailPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
        </Route>
      </Routes>
    </>
  );
}

function NavButton({ to, children }) {
  return (
    <Button
      component={Link}
      to={to}
      variant="text"
      sx={{
        color: 'text.secondary',
        '&:hover': {
          color: 'primary.main',
          bgcolor: 'transparent',
        },
        textTransform: 'none',
        fontWeight: 'medium',
      }}
    >
      {children}
    </Button>
  );
}