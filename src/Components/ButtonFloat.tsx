import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab aria-label="add"  sx={{ position: 'fixed', left: '-2rem', top:'4rem', backgroundColor:'#FBF7F7' }}>
        <ArrowForwardOutlinedIcon className='icon-bg-color' />
      </Fab>
  

    </Box>
  );
}
