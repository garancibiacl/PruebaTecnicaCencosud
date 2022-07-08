// import React from "react";
// import TextField from "@mui/material/TextField";


// const Search = () => {


//   return (

//       <div className="search">
//         <TextField style={{'borderRadius':'70%'}}
//           id="outlined-basic"
//           variant="outlined"
  
         
//           label="Buscar"
//         />
//       </div>

//   );
// }

// export default Search;



import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddindLeft:'3rem',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
   
      borderRadius: '12px',
      border:'1px solid #CFD8DC',
      '&:focus': {
        width: '20ch',

      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1, ml: -7 }}>

        <Toolbar  sx={{ mb: 4, p: 1, m: 1 }}>
       
     
          <Search className='style-btn-search' style={{'borderRadius':'40'}}>
            <SearchIconWrapper>
              <SearchIcon className='icon-bg-color' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>

    </Box>
  );
}
