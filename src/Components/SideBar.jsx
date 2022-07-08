import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import Grid from '@mui/material/Grid';
import image from "../assets/img/icono-prueba.jpg";



const drawerWidth = 240;



export default function ClippedDrawer() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='nav-bg-color' position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

      <Grid container spacing={2}>

<Grid container item xs={6}>
<Toolbar>

{/* <Avatar src="../assets/img/icono-prueba.png" /> */}
<img src={image} width="10%" alt='' />
{/* <img class="masthead-avatar mb-5" src="./app/Assets/img/icono-prueba.png" alt="..." /> */}


        <Typography className='txt-color-nav' variant="h6" noWrap component="div"  >
        &nbsp;&nbsp;&nbsp; Price & Promotions management
  </Typography>
        </Toolbar>

        </Grid>

 

        <Grid className='f-end-avatar' container item xs={6}>
<Toolbar>
          <IconButton
              size="small"
              sx={{ ml: 2 }}
              >
            <Avatar className= 'bg-icon-avatar-rigth' sx={{ width: 32, height: 32, flexGrow: 1 }}>M</Avatar>
            </IconButton>
         
        </Toolbar>

        </Grid>




        </Grid>
        
     
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`&`]: { width: drawerWidth, boxSizing: 'border-box' },
          justifyContent: 'center',
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>


          <List  > 

          <ListItemButton disablePadding 
             >
        <ListItemIcon   sx={{
                  minHeight: 12,
                  justifyContent: 'center',
                                  }}>
          <HomeOutlinedIcon />
        </ListItemIcon>
        <ListItemText  />
      </ListItemButton>
      <ListItemButton disablePadding 
             >
        <ListItemIcon   sx={{
                  minHeight: 12,
                  justifyContent: 'center',
                                  }}>
          <ShoppingBagOutlinedIcon />
        </ListItemIcon>
        <ListItemText  />
      </ListItemButton>

      <ListItemButton disablePadding 
             >
        <ListItemIcon   sx={{
                  minHeight: 12,
                  justifyContent: 'center',
                                  }}>
          <CampaignOutlinedIcon className='icon-bg-color'  />
        </ListItemIcon>
        <ListItemText  />
      </ListItemButton>
      <ListItemButton disablePadding 
             >
        <ListItemIcon   sx={{
                  minHeight: 12,
                  justifyContent: 'center',
                                  }}>
          <LocalOfferOutlinedIcon  />
        </ListItemIcon>
        <ListItemText  />
      </ListItemButton>
      <ListItemButton disablePadding 
             >
        <ListItemIcon   sx={{
                  minHeight: 12,
                  justifyContent: 'center',
                                  }}>
          <WidgetsOutlinedIcon  />
        </ListItemIcon>
        <ListItemText  />
      </ListItemButton>
      
          </List>

          <Divider />

          <ListItemButton disablePadding 
             >
        <ListItemIcon   sx={{
                  minHeight: 12,
                  justifyContent: 'center',
                                  }}>
          <ArrowCircleLeftOutlinedIcon   />
        </ListItemIcon>
        <ListItemText  />
      </ListItemButton>
      
      

             {/* <CampaignOutlinedIcon/>  */}
             

        </Box>
      </Drawer>

    </Box>
  );
}
