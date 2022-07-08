import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import theme from './temaConfig';
import TableData from './Components/TableData.tsx';
import SideBar from './Components/SideBar';
import Button from './Components/Button.tsx';
import SplitButton from './Components/SplitButton.tsx';
// import Header from './Components/Header.tsx';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import VerDetalle from './Components/VerDatalle.tsx';




import './Scss/SideBar.scss';
function App() {
  return (
<ThemeProvider theme={theme}>

    <div className="App">



    <SideBar/>
<Box component="main" sx={{ flexGrow: 1, p: 20 }}>
<VerDetalle/>
<Grid className='space-bottom' container spacing={1}>

<Grid container item xs={1}>
  <Typography variant="h4" component="h2">
 Campañas
</Typography>


  </Grid>

  <Grid item xs={3}>
  <SplitButton/>


        </Grid>

  
  <Grid item xs={8}>
  <Button variant="contained">
  Send
</Button>

        </Grid>
        </Grid>




  <TableData container/>
      </Box>

    </div>

    </ThemeProvider>

  );
}



export default App;
