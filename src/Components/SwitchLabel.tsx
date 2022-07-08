import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup className='p-switch'>
      <FormControlLabel control={<Switch defaultChecked />} label="Administrar todas las promociones con fecha de campaña." />
    </FormGroup>
  );
}
