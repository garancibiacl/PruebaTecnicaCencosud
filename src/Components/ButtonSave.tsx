import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button size="large" variant="contained" startIcon={<SaveOutlinedIcon />}>
        Guardar
      </Button>
    </Stack>
  );
}
