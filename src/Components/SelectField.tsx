import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: 'Sillicon Valley',
  },
  {
    value: 'EUR',
    label: 'Argentina',
  },
  {
    value: 'BTC',
    label: 'Brasil',
  },
  {
    value: 'JPY',
    label: 'CHile',
  },
];

export default function SelectTextFields() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <Box  className='container-p'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div  className='container-p'>
        <TextField
          id="outlined-select-currency"
          select
          label="País"
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      
      </div>

    </Box>
  );
}
