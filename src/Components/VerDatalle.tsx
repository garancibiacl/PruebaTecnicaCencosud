import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
import BasicTabs from './BasicTabs.tsx';
// import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ButtonFloat from './ButtonFloat.tsx';


const style = {
  position: 'absolute' as 'absolute',
  top: '62%',
  left: '60%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  borderRadius: 6,
  pt: 3,
  px: 4,
  pb: 1,
};



export default function FullScreenNestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{padding:'0px'}} >
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      {/* <IconButton onClick={handleOpen}>
        <RemoveRedEyeOutlinedIcon/>
        </IconButton> */}
 
        <MenuItem onClick={handleOpen} >
          <ListItemIcon  >
          <RemoveRedEyeOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Ver Detalle
        </MenuItem>

      <Modal 
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ ...style, width: 1600 }}>

        <ButtonFloat/>

  

        <BasicTabs/>
  
            {/* <CampaignOutlinedIcon className='icon-bg-color'  /> */}
  
        </Box>
      </Modal>
    </div>
  );
}
