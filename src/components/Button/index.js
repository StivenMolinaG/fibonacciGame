import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({nameButton, onClick}) {
  return (
    <Stack spacing={2} direction="column">
      <Button variant="contained" onClick={onClick}>{nameButton}</Button>
    </Stack>
  );
}
