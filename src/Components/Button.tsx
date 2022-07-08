import * as React from 'react';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack className='button' direction="row" spacing={2}>
      <Button size="large"  variant="contained" startIcon={<AddOutlinedIcon />}>
        CREAR CAMPAÑA
      </Button>
    </Stack>
  );
}
