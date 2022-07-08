import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import SelectField from "./SelectField.tsx";
import SwitchLabel from "./SwitchLabel.tsx";
import ButtonSave from "./ButtonSave.tsx";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';

interface TabPanelProps {

  index: number;
  value: number;
}



function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CssBaseline>
    <Box sx={{p: 3 , width: "100%" }}>
              <h3 id="parent-modal-title">   <CampaignOutlinedIcon className='icon-bg-color'  /> &nbsp;Nombre de campaña</h3>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Információn" {...a11yProps(0)} />
          <Tab label="retroplanning" {...a11yProps(1)} />
          <Tab label="promociones vinculadas" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
 

          <Box sx={{ flexGrow: 1, height: "100vh", width: "100" }}>
            <Grid container spacing={1}>
              <Grid item xs>
                <Typography className="font-syles-h6" variant="h6" component="h2" style={{ color: '#455A64'}}>
                  Segmentación
                </Typography>
                <Divider />
              </Grid>

              <Grid
                container
                spacing={{ xs: 2, md: 1 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(5)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <SelectField />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid className="p-grid-datos" container spacing={1}>
              <Grid item xs={12}>
                <Typography variant="h6" component="h2">
                  Datos Generales
                </Typography>
                <Divider />
              </Grid>

              <Grid
                container
                spacing={{ xs: 2, md: 1 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {Array.from(Array(5)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <SelectField />
                  </Grid>
                ))}
              </Grid>

              <Grid item xs>
                <SwitchLabel />
                <ButtonSave />
              </Grid>
            </Grid>
          </Box>
 
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </CssBaseline>
  );
}
