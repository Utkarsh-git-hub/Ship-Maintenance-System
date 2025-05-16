import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Stack, TextField, Button, Typography } from '@mui/material';

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [err, setErr] = useState('');
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (login(email, pw)) {
      nav('/');
    } else {
      setErr('Invalid email or password');
    }
  };

  return (
    <form onSubmit={submit}>
      <Stack spacing={2}>
        {err && (
          <Typography color="error" align="center">
            {err}
          </Typography>
        )}

        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          required
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="large"
        >
          Sign In
        </Button>
      </Stack>
    </form>
  );
}
